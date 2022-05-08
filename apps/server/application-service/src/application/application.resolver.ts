/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, ID, Query, Resolver, ResolveReference } from '@nestjs/graphql';
import { ApplicationService } from './application.service';
import { ApplicationQueryResult } from './model/application-query-result.model';
import { Application } from './model/application.model';

@Resolver((of) => Application)
export class ApplicationResolver {
  constructor(private applicationService: ApplicationService) {}

  @Query((returns) => ApplicationQueryResult)
  applications(): ApplicationQueryResult {
    return {
      entries: this.applicationService.getAll(),
      pageInfo: { page: 1, totalPages: 1, totalElements: 3 },
    };
  }

  @Query((returns) => Application)
  application(@Args({ name: 'id', type: () => ID }) id: string): Application {
    return this.applicationService.findById(id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: number; id: string }) {
    return this.applicationService.findById(reference.id);
  }
}
