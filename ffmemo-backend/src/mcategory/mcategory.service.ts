import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mcategory } from './mcategory.entity';

@Injectable()
export class McategoryService {
    constructor(
        @InjectRepository(Mcategory)
        private mcategoryRepository: Repository<Mcategory>
    ) {}

    findAll(): Promise<Mcategory[]> {
        return this.mcategoryRepository.find();
    }
}
