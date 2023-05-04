import { Test, TestingModule } from '@nestjs/testing';
import { WschatGateway } from './wschat.gateway';
import { WschatService } from './wschat.service';

describe('WschatGateway', () => {
  let gateway: WschatGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WschatGateway, WschatService],
    }).compile();

    gateway = module.get<WschatGateway>(WschatGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
