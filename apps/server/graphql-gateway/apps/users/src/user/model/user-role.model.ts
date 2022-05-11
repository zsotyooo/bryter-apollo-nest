import { registerEnumType } from '@nestjs/graphql';

export enum UserRole {
  REALM_ADMIN = 'REALM_ADMIN',
  ADMIN = 'ADMIN',
  AUTHOR = 'AUTHOR',
  USER = 'USER',
}

registerEnumType(UserRole, { name: 'UserRole' });
