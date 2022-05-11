import { Injectable, Scope } from '@nestjs/common';
import * as DataLoader from 'dataloader';
import { UserRole } from './model/user-role.model';
import { User } from './model/user.model';

@Injectable({ scope: Scope.REQUEST })
export class UserService {
  private users: User[] = [
    {
      id: 'user-1',
      email: 'john.doe@example.com',
      firstName: 'John',
      lastName: 'Doe',
      role: UserRole.REALM_ADMIN,
    },
    {
      id: 'user-2',
      email: 'alice.cooper@example.com',
      firstName: 'Alice',
      lastName: 'Cooper',
      role: UserRole.ADMIN,
    },
    {
      id: 'user-3',
      email: 'bob.dylan@example.com',
      firstName: 'Bob',
      lastName: 'Dylan',
      role: UserRole.ADMIN,
    },
  ];

  private dataLoader = new DataLoader<string, User>(async (ids) => {
    const result = await this.getBatch([...ids]);
    return ids.map((id) => result.find((user) => user.id === id) ?? null);
  });

  async getBatch(ids: string[]) {
    return this.users.filter(({ id }) => ids.includes(id));
  }

  async findById(id: string) {
    return this.dataLoader.load(id);
  }

  async me() {
    return this.dataLoader.load('user-1');
  }
}
