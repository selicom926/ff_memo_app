export interface Memo {
    id: number;
    categoryId?: number;
    title?: string;
    content?: string;
}

export interface Mcategory {
    id: number;
    name?: string;
}

export interface Mtag {
    id: number;
    name?: string;
}