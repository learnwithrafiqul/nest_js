import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Profile } from './users/entities/profile.entity';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { Post } from './users/entities/post.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      // password: 'root',
      database: 'nestjs',
      entities: [User, Profile,Post],
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
