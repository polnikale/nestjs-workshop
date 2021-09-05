import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Redirect,
  Render,
} from '@nestjs/common';
import { CreateUserDTO } from './user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
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
  @Redirect('/user', 301)
  createUser(@Body() user: CreateUserDTO) {
    return this.userService.createUser(user);
  }

  @Get('/update/:id')
  @Render('user/update')
  async updaetUserUI(@Param('id') id: string) {
    const user = await this.userService.getUser(id);

    return { user };
  }

  @Post('/update/:id')
  @Redirect('/user', 301)
  updateUser(@Param('id') id: string, @Body() user: CreateUserDTO) {
    console.log('user', user);
    return this.userService.updateUser(id, user);
  }

  @Get('/:id')
  @Render('user/user')
  async getUser(@Param('id') id: string) {
    const user = await this.userService.getUser(id);

    return { user };
  }
}
