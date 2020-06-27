import { Test, TestingModule } from '@nestjs/testing';
import { MemoResolver } from './memo.resolver';

describe('MemoResolver', () => {
  let resolver: MemoResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MemoResolver],
    }).compile();

    resolver = module.get<MemoResolver>(MemoResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
