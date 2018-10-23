import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entity/user.entity';

@Controller('/api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/:id')
  async findById(@Param('id') id: number): Promise<User> {
    return this.userService.findById(id);
  }
}
