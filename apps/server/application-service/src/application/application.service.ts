import { Injectable, Scope } from '@nestjs/common';
import { Application } from './model/application.model';
@Injectable({ scope: Scope.REQUEST })
export class ApplicationService {
  rand = Math.random();

  private applications: Application[] = [
    {
      id: 'app-1',
      name: 'My first application',
      updatedAt: '2022-04-29T06:01:36.547749Z',
      collaborators: [{ id: 'user-1' }, { id: 'user-2' }],
    },
    {
      id: 'app-2',
      name: 'Some amazing application',
      updatedAt: '2022-05-29T06:01:36.547749Z',
      collaborators: [
        { id: 'user-1' },
        {
          id: 'user-group-1',
          name: 'My users',
          members: [{ id: 'user-3' }, { id: 'user-2' }],
        },
      ],
    },
    {
      id: 'app-3',
      name: 'Yet another application',
      updatedAt: '2022-05-29T06:01:36.547749Z',
      collaborators: [{ id: 'user-1' }, { id: 'user-2' }, { id: 'no-user' }],
    },
  ];

  getAll() {
    console.log(this.rand);
    return this.applications;
  }

  findById(id: string) {
    return this.applications.find((app) => app.id === id) ?? null;
  }
}
