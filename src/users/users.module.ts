import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { User } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Post } from './entities/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Profile,Post])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
