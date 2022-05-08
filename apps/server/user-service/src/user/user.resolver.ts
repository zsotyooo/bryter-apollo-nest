/* eslint-disable @typescript-eslint/no-unused-vars */
import { Query, Resolver, ResolveReference } from '@nestjs/graphql';
import { User } from './model/user.model';
import { UserService } from './user.service';

@Resolver((of) => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query((returns) => User, { nullable: true })
  me(): Promise<User | null> {
    return this.userService.me();
  }

  @ResolveReference()
  resolveReference(reference: {
    __typename: string;
    id: string;
  }): Promise<User | null> {
    console.log('resolve user ref');
    return this.userService.findById(reference.id);
  }
}
