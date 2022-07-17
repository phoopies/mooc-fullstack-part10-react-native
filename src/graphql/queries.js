import { gql } from '@apollo/client';
import {
  PAGE_INFO,
  REPOSITORY_INFO,
  REPOSITORY_REVIEW_INFO,
} from './fragments';

export const GET_REPOSITORIES = gql`
  query (
    $orderDirection: OrderDirection
    $orderBy: AllRepositoriesOrderBy
    $searchKeyword: String
    $after: String
    $first: Int
  ) {
    repositories(
      orderDirection: $orderDirection
      orderBy: $orderBy
      searchKeyword: $searchKeyword
      after: $after
      first: $first
    ) {
      edges {
        node {
          ...RepositoryInfo
        }
        cursor
      }
      pageInfo {
        ...PageInfo
      }
    }
  }
  ${REPOSITORY_INFO}
  ${PAGE_INFO}
`;

export const GET_REPOSITORY = gql`
  query ($repositoryId: ID!, $reviewsFirst: Int, $reviewsAfter: String) {
    repository(id: $repositoryId) {
      url
      ...RepositoryInfo
      reviews(first: $reviewsFirst, after: $reviewsAfter) {
        edges {
          cursor
          node {
            ...RepositoryReviewInfo
          }
        }
        pageInfo {
          ...PageInfo
        }
      }
    }
  }
  ${REPOSITORY_INFO}
  ${REPOSITORY_REVIEW_INFO}
  ${PAGE_INFO}
`;

export const GET_AUTHORIZED_USER = gql`
  query {
    me {
      username
      id
    }
  }
`;
