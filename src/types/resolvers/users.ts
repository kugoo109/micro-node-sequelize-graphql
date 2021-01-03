import { UserDto } from './../../models/User';
import { Field, ObjectType, ArgsType } from "type-graphql";

@ArgsType()
export class CreateUserArgs implements Partial<UserDto> {
  @Field()
  username!: string;

  @Field()
  password!: string;

  @Field()
  email!: string;
}

@ArgsType()
export class SignInArgs implements Partial<UserDto> {
  @Field()
  username!: string;

  @Field()
  password!: string;
}

@ObjectType()
export class SignInPayload {
  @Field()
  token!: string;

  @Field(() => UserDto)
  user!: UserDto;
}
