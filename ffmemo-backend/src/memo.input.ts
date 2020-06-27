import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MemoInput {
    @Field()
    id: number;

    @Field()
    categoryId: number;

    @Field()
    title: string;

    @Field()
    content: string;
}
