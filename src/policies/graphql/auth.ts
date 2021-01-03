import { AuthenticationError } from '../../core/errors';
import { Context } from '../../types/resolvers';
import { MiddlewareFn } from 'type-graphql';

export const LoginAccess: MiddlewareFn<Context> = async ({ root, args, context, info }, next) => {
  const { user } = context;
  
  if (!user) {
    throw new AuthenticationError("Authentication failed");
  }
  
  return next();
};