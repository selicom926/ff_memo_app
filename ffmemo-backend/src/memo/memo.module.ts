import { Module } from '@nestjs/common';
import { MemoService } from './memo.service';
import { MemoResolver } from './memo.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Memo, Mcategory } from './memo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Memo, Mcategory])],
  providers: [MemoService, MemoResolver]
})
export class MemoModule {}
