import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Throttle } from '@nestjs/throttler';

// @SkipThrottle()
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @SkipThrottle()
  @Get('/test')
  getTest(): string {
    return 'test';
  }
  
  @Throttle(5, 15) // 5 requests per 15 seconds
  @Get('/test2')
  getTest2(): string {
    return 'test2';
  }
}
