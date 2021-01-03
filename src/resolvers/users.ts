import { UserDto } from './../models/User';
import { CreateUserArgs, SignInArgs, SignInPayload } from './../types/resolvers/users';
import { Resolver, Mutation, Field, ArgsType, Args, ObjectType } from "type-graphql";
import * as UserController from "../controllers/users";

@Resolver()
export class UserResolver {

  @Mutation(() => UserDto)
  async createUser(@Args() user: CreateUserArgs) {
    return await UserController.create(user);
  }

  @Mutation(() => SignInPayload)
  async signin(@Args() { username, password }: SignInArgs) {
    return await UserController.signin(username, password);
  }
}