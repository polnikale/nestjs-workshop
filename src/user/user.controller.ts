import { Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  getUsers() {
    return this.userService.getUsers();
  }

  @Get('/:id')
  getUser(@Param('id') id: string) {
    return this.userService.getUser(id);
  }

  @Get('/create')
  createUserUI() {
    return 'create';
  }

  @Post('/create')
  createUser() {
    return 'xd';
  }

  @Get('/update/:id')
  updaetUserUI() {
    return 'updating';
  }

  @Post('/update/:id')
  updateUser() {
    return 'updated';
  }
}
