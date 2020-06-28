import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Int, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Memo {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    categoryId: number;

    @Field()
    @Column()
    title: string;

    @Field()
    @Column()
    content: string;
}

@ObjectType()
@Entity()
export class Mtag {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    name: string;
}

@ObjectType()
@Entity()
export class MtagRelation {
    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column()
    tagId: string;
}