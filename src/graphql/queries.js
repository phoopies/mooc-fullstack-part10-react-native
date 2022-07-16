import { gql } from '@apollo/client';
import { REPOSITORY_INFO, REPOSITORY_INFO_FULL } from './fragments';

export const GET_REPOSITORIES = gql`
  query ($orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy) {
    repositories(orderDirection: $orderDirection, orderBy: $orderBy) {
      edges {
        node {
          ...RepositoryInfo
        }
      }
    }
  }
  ${REPOSITORY_INFO}
`;

export const GET_REPOSITORY = gql`
  query ($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...RepositoryInfoFull
    }
  }
  ${REPOSITORY_INFO_FULL}
`;

export const GET_AUTHORIZED_USER = gql`
  query {
    me {
      username
      id
    }
  }
`;
