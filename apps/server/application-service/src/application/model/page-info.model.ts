/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PageInfo {
  @Field((type) => Int)
  page: number;

  @Field((type) => Int)
  totalPages: number;

  @Field((type) => Int)
  totalElements: number;
}
