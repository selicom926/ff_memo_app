import { Module } from '@nestjs/common';
import { McategoryResolver } from './mcategory.resolver';
import { McategoryService } from './mcategory.service';
import { Mcategory } from './mcategory.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Mcategory])],
  providers: [McategoryService, McategoryResolver]
})
export class McategoryModule {}
