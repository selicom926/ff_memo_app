import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MemoModule } from './memo/memo.module';
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: 'schema.graphql'
    }),
    MemoModule,
  ],
})
export class AppModule {}
