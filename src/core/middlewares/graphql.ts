import { MiddlewareFn } from "type-graphql";
import { Context } from '../../types/resolvers';

export const ErrorInterceptor: MiddlewareFn<any> = async ({ context, info }, next) => {
  try {
    return await next();
  } catch (err) {
    console.error(err);

    // // hide errors from db like printing sql query
    // if (someCondition(err)) {
    //   throw new Error("Unknown error occurred!");
    // }

    // rethrow the error
    throw err;
  }
};

export const ResolveTime: MiddlewareFn<Context> = async ({ root, args, context, info }, next) => {
  const { user } = context;
  const start = Date.now();
  await next();
  const resolveTime = Date.now() - start;
  console.log(`${info.parentType.name}.${info.fieldName} [${resolveTime} ms]`);
};