import { Resolver, Mutation, Field, ArgsType, Args } from "type-graphql";
import User from "../models/User";
import * as UserController from "../controllers/users";
import { SignInPayload } from './../types/users';

@ArgsType()
class CreateUserArgs implements Partial<User> {
  @Field()
  username!: string;

  @Field()
  password!: string;

  @Field()
  email!: string;
}

@ArgsType()
class SignInArgs implements Partial<User> {
  @Field()
  username!: string;

  @Field()
  password!: string;
}

@Resolver()
export class UserResolver {

  @Mutation(() => User)
  async createUser(@Args() user: CreateUserArgs) {
    return await UserController.create(user);
  }

  @Mutation(() => SignInPayload)
  async signin(@Args() { username, password }: SignInArgs) {
    return await UserController.signin(username, password);
  }
}