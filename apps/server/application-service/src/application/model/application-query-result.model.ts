/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, ObjectType } from '@nestjs/graphql';
import { Application } from './application.model';
import { PageInfo } from './page-info.model';

@ObjectType()
export class ApplicationQueryResult {
  @Field((type) => [Application])
  entries: Application[];

  @Field((type) => PageInfo)
  pageInfo: PageInfo;
}
