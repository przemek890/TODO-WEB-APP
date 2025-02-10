import { Test, TestingModule } from '@nestjs/testing';
import { IncService } from './inc.service';

describe('Service', () => {
  let service: IncService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IncService],
    }).compile();

    service = module.get<IncService>(IncService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
