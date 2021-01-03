import { UserDto } from './../../models/User';
import { Field } from "type-graphql";

export interface Context {
  req: Request;
  user?: UserDto;
}

export interface AuthenticatedContext {
  req: Request;
  user: UserDto;
}
