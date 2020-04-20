import { Field, ObjectType } from "type-graphql";
import User from "../models/User";

export interface Context {
  user: User;
}

export type CreateUserType = {
  username: string;
  password: string;
  email: string;
}

@ObjectType()
export class SignInPayload {
  @Field()
  token!: string;

  @Field(() => User)
  user!: User;
}
