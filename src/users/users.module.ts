import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { PostsController } from './controllers/posts/posts.controller';
import { UsersService } from './services/users/users.service';
import { TodosController } from './controllers/todos/todos.controller';
import { TodosService } from './services/todos/todos.service';

@Module({
  controllers: [UsersController, PostsController, TodosController],
  providers: [UsersService, TodosService]
})
export class UsersModule {}
