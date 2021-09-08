import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { CreateUserDTO } from './user.interface';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  @Render('user/list')
  async getUsers() {
    const users = await this.userService.getUsers();
    return { users };
  }

  @Get('/create')
  @Render('user/create')
  createUserUI() {
    return;
  }

  @Post('/create')
  createUser(@Body() user: CreateUserDTO) {
    return this.userService.createUser(user);
  }
}
