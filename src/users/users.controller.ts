import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UsersService } from './users.service';
import { Public } from './utils/constants';
import { UsersGuard } from './users.guard';
import { ApiOperation } from '@nestjs/swagger';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  // @Public() // Make this route public
  @Post('register')
  @ApiOperation({ summary: 'Register user', description: 'Register user', operationId: 'register', tags: ['Users'], })
  registerUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.registerUser(createUserDto);
  }


  // @Public() // Make this route public
  @Post('login')
  @ApiOperation({ summary: 'Login user', description: 'Login user', operationId: 'login', tags: ['Users'], })
  loginUser(@Body() loginUserDto: LoginUserDto) {
    return this.usersService.signIn(loginUserDto);
  }


  @Get('all-users')
  @UseGuards(UsersGuard) // Apply UsersGuard for single route
  @ApiOperation({ summary: 'Get all users', description: 'Get all users', operationId: 'getAllUsers', tags: ['Users'], })
  allUsers() {
    return this.usersService.allUsers();
  }

}
