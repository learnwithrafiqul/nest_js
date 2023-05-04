import { Test, TestingModule } from '@nestjs/testing';
import { CharteapisService } from './charteapis.service';

describe('CharteapisService', () => {
  let service: CharteapisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharteapisService],
    }).compile();

    service = module.get<CharteapisService>(CharteapisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
