create table memo
(
  id int8,
  tagRelationId int8,
  categoryId int8,
  title varchar,
  content varchar
);

create table mtag
(
  id int8,
  name varchar
);

create table mcategory
(
  id int8,
  name varchar
);

create table tagRelation
(
    id int8,
    mtagId int8
);