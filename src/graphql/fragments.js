import { gql } from '@apollo/client';

export const REPOSITORY_INFO = gql`
  fragment RepositoryInfo on Repository {
    id
    fullName
    ratingAverage
    reviewCount
    stargazersCount
    forksCount
    ownerAvatarUrl
    description
    language
  }
`;

export const REPOSITORY_INFO_FULL = gql`
fragment RepositoryInfoFull on Repository {
  ...RepositoryInfo,
  url
  reviews {
    edges {
      node {
        id
        text
        rating
        createdAt
        user {
          id
          username
        }
      }
    }
  }
}
${REPOSITORY_INFO}
`;
