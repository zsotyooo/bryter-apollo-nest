/* eslint-disable @typescript-eslint/no-unused-vars */
import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from './user.model';

@ObjectType()
@Directive('@key(fields: "id")')
export class ApplicationCollaboratorGroup {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field((type) => [User], { nullable: 'items' })
  members: (User | null)[];
}
