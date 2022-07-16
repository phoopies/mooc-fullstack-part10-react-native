import { gql } from '@apollo/client';
import { REPOSITORY_INFO } from './fragments';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
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
      ...RepositoryInfo
      url
    }
  }
  ${REPOSITORY_INFO}
`;

export const GET_AUTHORIZED_USER = gql`
  query {
    me {
      username
      id
    }
  }
`;
