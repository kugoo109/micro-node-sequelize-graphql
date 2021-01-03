import { UserInputError } from './../core/errors';
import { UserDto } from './../models/User';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserRepository from "../repositories/UserRepository";
import config from "../core/config";
import { CreateUserType } from "./../types/users";

export async function create (user: CreateUserType) {

  const username = user.username;
  const password = user.password;
  const email = user.email;

  const hashedPassword = await bcrypt.hash(password, 16);

  return UserRepository.create({
    email,
    username,
    password: hashedPassword,
  });
};

export async function signin (username: string, password: string) {
  
  const user = await UserRepository.findOne({
    username: username.toLowerCase()
  })

  if (!user) {
    throw new UserInputError('Invalid username or password');
  }

  const same = await bcrypt.compare(password, user.password);
  
  if (!same) {
    throw new UserInputError('Invalid username or password');
  }

  // Remove sensitive data before login
  user.password = "";

  var token = jwt.sign({ id: user.id }, config.tokenSecret, { expiresIn: config.tokenExpiresIn });

  return {
    'token': 'JWT ' + token,
    user,
  };
};
