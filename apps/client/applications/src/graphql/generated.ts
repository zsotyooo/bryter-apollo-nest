import gql from "graphql-tag";
import * as Urql from "@urql/vue";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Application = {
  __typename?: "Application";
  collaborators: Array<Maybe<ApplicationCollaborator>>;
  id: Scalars["ID"];
  name: Scalars["String"];
  updatedAt: Scalars["String"];
};

export type ApplicationCollaborator = ApplicationCollaboratorGroup | User;

export type ApplicationCollaboratorGroup = {
  __typename?: "ApplicationCollaboratorGroup";
  id: Scalars["ID"];
  members: Array<Maybe<User>>;
  name: Scalars["String"];
};

export type ApplicationQueryResult = {
  __typename?: "ApplicationQueryResult";
  entries: Array<Application>;
  pageInfo: PageInfo;
};

export type PageInfo = {
  __typename?: "PageInfo";
  page: Scalars["Int"];
  totalElements: Scalars["Int"];
  totalPages: Scalars["Int"];
};

export type Query = {
  __typename?: "Query";
  application: Application;
  applications: ApplicationQueryResult;
  me?: Maybe<User>;
};

export type QueryApplicationArgs = {
  id: Scalars["ID"];
};

export type User = {
  __typename?: "User";
  email: Scalars["String"];
  firstName: Scalars["String"];
  id: Scalars["ID"];
  lastName: Scalars["String"];
  role: UserRole;
};

export enum UserRole {
  Admin = "ADMIN",
  Author = "AUTHOR",
  RealmAdmin = "REALM_ADMIN",
  User = "USER",
}

export type GetApplicationsQueryVariables = Exact<{ [key: string]: never }>;

export type GetApplicationsQuery = {
  __typename?: "Query";
  applications: {
    __typename?: "ApplicationQueryResult";
    entries: Array<{
      __typename?: "Application";
      id: string;
      name: string;
      updatedAt: string;
      collaborators: Array<
        | {
            __typename?: "ApplicationCollaboratorGroup";
            id: string;
            name: string;
            members: Array<{
              __typename?: "User";
              id: string;
              firstName: string;
              lastName: string;
              email: string;
              role: UserRole;
            } | null>;
          }
        | {
            __typename?: "User";
            id: string;
            firstName: string;
            lastName: string;
            email: string;
            role: UserRole;
          }
        | null
      >;
    }>;
  };
};

export type ApplicationListFragmentFragment = {
  __typename?: "Application";
  id: string;
  name: string;
  updatedAt: string;
  collaborators: Array<
    | {
        __typename?: "ApplicationCollaboratorGroup";
        id: string;
        name: string;
        members: Array<{
          __typename?: "User";
          id: string;
          firstName: string;
          lastName: string;
          email: string;
          role: UserRole;
        } | null>;
      }
    | {
        __typename?: "User";
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        role: UserRole;
      }
    | null
  >;
};

export type UserFragmentFragment = {
  __typename?: "User";
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
};

export const UserFragmentFragmentDoc = gql`
  fragment UserFragment on User {
    id
    firstName
    lastName
    email
    role
  }
`;
export const ApplicationListFragmentFragmentDoc = gql`
  fragment ApplicationListFragment on Application {
    id
    name
    updatedAt
    collaborators {
      ...UserFragment
      ... on ApplicationCollaboratorGroup {
        id
        name
        members {
          ...UserFragment
        }
      }
    }
  }
  ${UserFragmentFragmentDoc}
`;
export const GetApplicationsDocument = gql`
  query GetApplications {
    applications {
      entries {
        ...ApplicationListFragment
      }
    }
  }
  ${ApplicationListFragmentFragmentDoc}
`;

export function useGetApplicationsQuery(
  options: Omit<
    Urql.UseQueryArgs<never, GetApplicationsQueryVariables>,
    "query"
  > = {}
) {
  return Urql.useQuery<GetApplicationsQuery>({
    query: GetApplicationsDocument,
    ...options,
  });
}
