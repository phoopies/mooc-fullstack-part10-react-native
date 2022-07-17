import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = ({ orderDirection, orderBy, searchKeyword, first, after }) => {
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables: { orderDirection, orderBy, searchKeyword, first, after },
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        orderBy, orderDirection, searchKeyword, first,
      },
    })
  };

  return {
    repositories: data ? data.repositories : undefined,
    loading,
    fetchMore: handleFetchMore,
    ...result,
  };
};

export default useRepositories;
