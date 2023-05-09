import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { JwtModule } from '@nestjs/jwt';
import { UsersController } from './users.controller';
import { jwtConstants } from './utils/constants';
import { APP_GUARD } from '@nestjs/core';
import { UsersGuard } from './users.guard';

@Module({
  imports: [JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  }),
  TypeOrmModule.forFeature([User])
  ],
  providers: [UsersService,
    // // Apply UsersGuard for all routes inside this module (UserModule)
    // {
    //   provide: APP_GUARD,
    //   useClass: UsersGuard,
    // }
  ],
  exports: [UsersService],
  controllers: [UsersController],

})
export class UsersModule { }


