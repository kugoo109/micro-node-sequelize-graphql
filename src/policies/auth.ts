import { AuthenticationError } from './../core/errors';
import { UserDto } from '../models/User';
import { Request, Response, NextFunction, RequestHandler } from "express";

type AccountCBFunc = (account: UserDto) => void

function getAccount (req: Request, res: Response, callback: AccountCBFunc) {
  const account = req.user as UserDto;

  if (!account) {
    throw new AuthenticationError("Authentication failed");
  }

  callback(account);
}

export const LoginAccess: RequestHandler = function (req, res, next) {

  getAccount(req, res, function (account) {
      next();
  });
};