import { useQuery } from '@apollo/client';
import { GET_AUTHORIZED_USER } from '../graphql/queries';

const useAuthorizedUser = (variables) => {
  const { data, loading, fetchMore, refetch } = useQuery(GET_AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network',
    variables,
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.me.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        ...variables,
        reviewsAfter: data.me.reviews.pageInfo.endCursor,
      },
    });
  };

  return {
    user: data ? data.me : undefined,
    loading,
    fetchMoreReviews: handleFetchMore,
    refetch
  };
};

export default useAuthorizedUser;
