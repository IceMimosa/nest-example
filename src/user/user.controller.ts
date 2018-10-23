import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/api/user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('/:id')
  findById(@Param('id') id: number) {
    return this.userService.findById(id);
  }
}