import { createUnionType } from '@nestjs/graphql';
import { ApplicationCollaboratorGroup } from './application-collaborator-group.model';
import { User } from './user.model';

export const ApplicationCollaborator = createUnionType({
  name: 'ApplicationCollaborator',
  types: () => [ApplicationCollaboratorGroup, User],
  resolveType(value) {
    if (value.members) {
      return ApplicationCollaboratorGroup;
    }
    if (value.id) {
      return User;
    }
    return null;
  },
}) as User | ApplicationCollaboratorGroup;
