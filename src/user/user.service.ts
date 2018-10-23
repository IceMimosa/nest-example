import { Injectable } from '@nestjs/common';
import { User } from './model/user.model';

@Injectable()
export class UserService {

  findById(id: number): User {
    return new User(id, 'hello', 23);
  }

}
