import { Test, TestingModule } from '@nestjs/testing';
import { CharteapisController } from './charteapis.controller';
import { CharteapisService } from './charteapis.service';

describe('CharteapisController', () => {
  let controller: CharteapisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharteapisController],
      providers: [CharteapisService],
    }).compile();

    controller = module.get<CharteapisController>(CharteapisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
