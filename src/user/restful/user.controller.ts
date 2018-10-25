import { Controller, Get, Param, Body, Post, Put, Delete } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from '../entity/user.entity';

@Controller('/api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // all 接口需要放置在 /:id 之前, 否则路由不到
  @Get('/all')
  async findAll(): Promise<User[]> {
    return await this.userService.getAll();
  }

  @Get('/:id')
  async findById(@Param('id') id: number): Promise<User> {
    return await this.userService.getOne(id);
  }

  @Post()
  async create(@Body() entity: User): Promise<User> {
    return await this.userService.create(entity);
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() entity: User): Promise<boolean> {
    await this.userService.update(id, entity);
    return Promise.resolve(true);
  }

  @Delete('/:id')
  async delete(@Param('id') id: number): Promise<boolean> {
    await this.userService.delete(id);
    return Promise.resolve(true);
  }
}
