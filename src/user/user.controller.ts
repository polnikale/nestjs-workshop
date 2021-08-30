import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Redirect,
  Render,
} from '@nestjs/common';
import { ICreateUser } from './user.interface';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  getUsers() {
    return this.userService.getUsers();
  }

  @Get('/create')
  @Render('create')
  createUserUI() {
    return;
  }

  @Post('/create')
  @Redirect('/user', 301)
  createUser(@Body() user: ICreateUser) {
    return this.userService.createUser(user);
  }

  @Get('/update/:id')
  updaetUserUI() {
    return 'updating';
  }

  @Post('/update/:id')
  updateUser() {
    return 'updated';
  }

  @Get('/:id')
  getUser(@Param('id') id: string) {
    return this.userService.getUser(id);
  }
}
