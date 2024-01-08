import { Test, TestingModule } from '@nestjs/testing';
import { IncController } from './inc.controller';

describe('IncController', () => {
  let controller: IncController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IncController],
    }).compile();

    controller = module.get<IncController>(IncController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
