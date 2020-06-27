import { Int, Field, ObjectType } from '@nestjs/graphql';


@ObjectType()
export class MTag {
    @Field(type => Int)
    id: number;

    @Field()
    title: string;
}

@ObjectType()
export class MCategory {
    @Field(type => Int)
    id: number;

    @Field()
    title: string;
}

@ObjectType()
export class Memo {
    @Field(type => Int)
    id: number;

    @Field(type => [MTag])
    tag: MTag[];

    @Field(type => MCategory)
    category: MCategory;

    @Field()
    title: string;

    @Field()
    content: string;
}