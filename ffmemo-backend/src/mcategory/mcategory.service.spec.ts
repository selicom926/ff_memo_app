import { Test, TestingModule } from '@nestjs/testing';
import { McategoryService } from './mcategory.service';

describe('McategoryService', () => {
  let service: McategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [McategoryService],
    }).compile();

    service = module.get<McategoryService>(McategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
