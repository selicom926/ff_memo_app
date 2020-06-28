import { Resolver, Query } from '@nestjs/graphql';
import { McategoryService } from './mcategory.service';
import { Mcategory } from './mcategory.entity';

@Resolver('Mcategory')
export class McategoryResolver {
    constructor(
        private mcategoryService: McategoryService
    ) {}

    @Query(returns => [Mcategory])
    async mcategories(): Promise<Mcategory[]> {
        return this.mcategoryService.findAll();
    }
}
