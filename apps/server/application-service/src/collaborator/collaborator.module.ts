import { Module } from '@nestjs/common';
import { CollaboratorResolver } from './collaborator.resolver';
import { CollaboratorService } from './collaborator.service';

@Module({
  providers: [CollaboratorResolver, CollaboratorService],
})
export class CollaboratorModule {}
