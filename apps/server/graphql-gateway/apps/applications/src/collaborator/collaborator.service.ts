import { Injectable, Scope } from '@nestjs/common';
import * as DataLoader from 'dataloader';
import { ApplicationCollaboratorGroup } from './model/application-collaborator-group.model';

@Injectable({ scope: Scope.REQUEST })
export class CollaboratorService {
  private dataLoader = new DataLoader<string, ApplicationCollaboratorGroup>(
    async (ids) => {
      const result = await this.getBatch([...ids]);
      return ids.map((id) => result.find((user) => user.id === id) ?? null);
    },
  );

  async getBatch(ids: string[]) {
    return this.userGroups.filter(({ id }) => ids.includes(id));
  }

  async findById(id: string) {
    return this.dataLoader.load(id);
  }

  private userGroups: ApplicationCollaboratorGroup[] = [
    {
      id: 'user-group-1',
      name: 'My group',
      members: [{ id: 'user-1' }, { id: 'user-2' }],
    },
    {
      id: 'user-group-2',
      name: 'My group',
      members: [{ id: 'user-2' }, { id: 'user-3' }],
    },
  ];
}
