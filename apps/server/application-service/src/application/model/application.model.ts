/* eslint-disable @typescript-eslint/no-unused-vars */
import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { ApplicationCollaborator } from '../../collaborator/model/application-collaborator.model';

@ObjectType()
@Directive('@key(fields: "id")')
export class Application {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  updatedAt: string;

  @Field((type) => [ApplicationCollaborator], { nullable: 'items' })
  collaborators: (typeof ApplicationCollaborator | null)[];
}
