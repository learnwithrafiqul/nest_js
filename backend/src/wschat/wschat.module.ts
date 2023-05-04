import { Module } from '@nestjs/common';
import { WschatService } from './wschat.service';
import { WschatGateway } from './wschat.gateway';

@Module({
  providers: [WschatGateway, WschatService],
  exports: [WschatService],
})
export class WschatModule {}
