import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Memo } from './memo.entity';
import { MemoInput } from 'src/memo.input';

@Injectable()
export class MemoService {
    constructor(
        @InjectRepository(Memo)
        private memoRepository: Repository<Memo>
    ) {}

    findAll(): Promise<Memo[]> {
        return this.memoRepository.find();
    }
  
    findOne(id: number): Promise<Memo> {
        return this.memoRepository.findOne(id);
    }
  
    async remove(id: number): Promise<void> {
        await this.memoRepository.delete(id);
    }
  
    async insert(memo: MemoInput): Promise<Memo> {
        const input: Memo = {
            id: memo.id,
            categoryId: memo.categoryId,
            title: memo.title,
            content: memo.content
        }

        await this.memoRepository.insert(input);

        return input;
    }    
}
