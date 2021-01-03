import User, { UserDto } from "../models/User";
import { CreateUserType } from "../types/users";
import * as Transform from "../core/utils/transform";

interface IUserRepository {
  create(user: CreateUserType): Promise<UserDto>;
  findOne(params?: object): Promise<UserDto>;
}

class UserRepository implements IUserRepository {

  create(user: CreateUserType): Promise<UserDto> {
    return Transform.toClass(UserDto, 
      User.create(user)
    );
  }

  findOne(params?: object): Promise<UserDto> {
    return Transform.toClass(UserDto, 
      User.findOne({
        where: {
          ...params
        }
      })
    );
  }

}

export default new UserRepository();
