/* eslint-disable @typescript-eslint/no-unused-vars */
import { Resolver, ResolveReference } from '@nestjs/graphql';
import { CollaboratorService } from './collaborator.service';
import { ApplicationCollaboratorGroup } from './model/application-collaborator-group.model';

@Resolver((of) => ApplicationCollaboratorGroup)
export class CollaboratorResolver {
  constructor(private collaboratorService: CollaboratorService) {}

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: string;
  }): Promise<ApplicationCollaboratorGroup | null> {
    return this.collaboratorService.findById(reference.id) as any;
  }
}
