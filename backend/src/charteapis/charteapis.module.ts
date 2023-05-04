import { Module } from '@nestjs/common';
import { WschatModule } from 'src/wschat/wschat.module';
import { CharteapisController } from './charteapis.controller';
import { CharteapisService } from './charteapis.service';

@Module({
  imports: [WschatModule],
  controllers: [CharteapisController],
  providers: [CharteapisService],
})
export class CharteapisModule {}
