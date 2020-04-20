import passport from "passport";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";
import config from "../lib/config";
import { CreateUserType } from "./../types/users";

export const create = async function (user: CreateUserType) {

  const username = user.username;
  const password = user.password;
  const email = user.email;

  const hashedPassword = await bcrypt.hash(password, 16);

  return User.create({
    email,
    username,
    password: hashedPassword,
  });
};

export const signin = async function (username: string, password: string) {
  
  const user = await User.findOne({
    where: {
      username: username.toLowerCase()
    }
  });

  if (!user) {
    throw new Error('Invalid username or password');
  }

  const same = bcrypt.compare(password, user.password);
  
  if (!same) {
    throw new Error('Invalid username or password');
  }

  // Remove sensitive data before login
  // user.password = undefined;

  var token = jwt.sign({ id: user.id }, config.tokenSecret, { expiresIn: config.tokenExpiresIn });

  return {
    'token': 'JWT ' + token,
    user,
  };
};
