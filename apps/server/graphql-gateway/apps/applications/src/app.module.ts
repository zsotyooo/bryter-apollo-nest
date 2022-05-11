import { join } from 'path';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApplicationModule } from './application/application.module';
import { CollaboratorModule } from './collaborator/collaborator.module';

@Module({
  imports: [
    ApplicationModule,
    CollaboratorModule,
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      playground: true,
      autoSchemaFile: join(process.cwd(), 'apps/applications/schema.gql'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
