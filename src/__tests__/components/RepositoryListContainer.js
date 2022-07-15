import { render, within } from '@testing-library/react-native';
import RepositoryListContainer from '../../components/RepositoryList/RepositoryListContainer';

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      const { getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );

      const repositoryItemDetails = getAllByTestId('repositoryItemDetails');
      const [firstRepositoryDetails, secondRepositoryDetails] =
        repositoryItemDetails;

      const repositoryItemExtraDetails = getAllByTestId(
        'repositoryItemExtraDetails'
      );
      const [firstRepositoryExtraDetails, secondRepositoryExtraDetails] =
        repositoryItemExtraDetails;

      const testRepositoryItemDetails = (details, repository) => {
        expect(details).toHaveTextContent(repository.fullName);
        expect(details).toHaveTextContent(repository.description);
        expect(details).toHaveTextContent(repository.language);
      };

      const testRepositoryItemExtraDetails = (
        extraDetails,
        { forks, stars, rating, reviews }
      ) => {
        const forksEl = within(extraDetails).getByTestId('forks');
        expect(forksEl).toHaveTextContent(forks + 'forks');

        const starsEl = within(extraDetails).getByTestId('stars');
        expect(starsEl).toHaveTextContent(stars+"stars");

        const ratingEl = within(extraDetails).getByTestId('rating');
        expect(ratingEl).toHaveTextContent(rating+"rating");

        const reviewsEl = within(extraDetails).getByTestId('reviews');
        expect(reviewsEl).toHaveTextContent(reviews+"reviews");
      };

      testRepositoryItemDetails(
        firstRepositoryDetails,
        repositories.edges[0].node
      );
      testRepositoryItemExtraDetails(firstRepositoryExtraDetails, {
        forks: '1.6k',
        stars: '21.9k',
        rating: 88,
        reviews: 3,
      });

      testRepositoryItemDetails(
        secondRepositoryDetails,
        repositories.edges[1].node
      );
      testRepositoryItemExtraDetails(secondRepositoryExtraDetails, {
        forks: 69,
        stars: '1.8k',
        rating: 72,
        reviews: 3,
      });
    });
  });
});
