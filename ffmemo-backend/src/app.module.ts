import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MemoModule } from './memo/memo.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { McategoryService } from './mcategory/mcategory.service';
import { McategoryModule } from './mcategory/mcategory.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: 'schema.graphql'
    }),
    MemoModule,
    McategoryModule,
  ]
})
export class AppModule {}
