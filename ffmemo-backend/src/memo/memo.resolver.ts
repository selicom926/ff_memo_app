import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { Memo } from './memo.entity';
import { MemoService } from './memo.service';
import { MemoInput } from 'src/memo.input';

@Resolver('Memo')
export class MemoResolver {
    constructor(
        private memoService: MemoService
    ) {}

    @Query(returns => [Memo])
    async memos(): Promise<Memo[]> {
        return this.memoService.findAll();
    }

    @Query(returns => [Memo])
    async memosByCategoryId(@Args('categoryId', {type: () => Int}) categoryId: number): Promise<Memo[]> {
        return this.memoService.findByCategory(categoryId);
    }

    @Query(returns => Memo)
    async memo(@Args('id', {type: () => Int}) id: number): Promise<Memo> {
        return this.memoService.findOne(id);
    }

    @Mutation(returns => Memo)
    async insertMemos(@Args('memo', {type: () => MemoInput}) memo: MemoInput): Promise<Memo> {
        return this.memoService.insert(memo);
    }
}
