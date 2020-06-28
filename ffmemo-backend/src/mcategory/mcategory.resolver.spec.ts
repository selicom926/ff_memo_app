import { Test, TestingModule } from '@nestjs/testing';
import { McategoryResolver } from './mcategory.resolver';

describe('McategoryResolver', () => {
  let resolver: McategoryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [McategoryResolver],
    }).compile();

    resolver = module.get<McategoryResolver>(McategoryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
