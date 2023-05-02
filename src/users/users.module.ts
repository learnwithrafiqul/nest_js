import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { PostsController } from './controllers/posts/posts.controller';
import { TodosController } from './controllers/todos/todos.controller';
import { TodosService } from './services/todos/todos.service';
import { ExampleMiddleware } from './middlewares/example/example.middleware';
import { AnotherMiddleware } from './middlewares/another/another.middleware';

@Module({
  controllers: [UsersController, PostsController, TodosController],
  providers: [TodosService]
})
export class UsersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(ExampleMiddleware).forRoutes("users");
    // consumer.apply(ExampleMiddleware).forRoutes(UsersController);
    consumer.apply(ExampleMiddleware).forRoutes(
      {
        path: "/users/users",
        method: RequestMethod.ALL
      },
      {
        path: "/users/posts",
        method: RequestMethod.ALL
      }
    ).apply(AnotherMiddleware).forRoutes(
      {
        path: "/users/users",
        method: RequestMethod.ALL
      },
      {
        path: "/users/posts",
        method: RequestMethod.ALL
      }
    );
  }
}
