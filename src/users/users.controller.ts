import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserProfileDto } from './dto/create-user-profile.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { CreatePostDto } from './dto/post.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create({
      ...createUserDto,
      createdAt: new Date(),
    });
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Put(':id')
  updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: CreateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  deleteUses(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }

  @Post(':id/profile')
  createUserProfile(
    @Param('id', ParseIntPipe) id: number,
    @Body() createUserProfileDto: CreateUserProfileDto,
  ) {
    return this.usersService.createUserProfile(id, createUserProfileDto);
  }

  @Post(':id/posts')
  createPost(
    @Param('id', ParseIntPipe) id: number,
    @Body() createPostDto: CreatePostDto,
  ) {
    return this.usersService.createUserPost(id, createPostDto);
  }
}
