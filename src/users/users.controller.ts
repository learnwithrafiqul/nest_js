import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UsersService } from './users.service';
import { Public } from './utils/constants';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Post('register')
  registerUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.registerUser(createUserDto);
  }
  @Post('login')
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.usersService.signIn(loginUserDto);
  }

  @Public()
  @Get('all-users')
  allUsers() {
    return this.usersService.allUsers();
  }

}
