import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharteapisModule } from './charteapis/charteapis.module';
import { WschatModule } from './wschat/wschat.module';


@Module({
  imports: [CharteapisModule, WschatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
