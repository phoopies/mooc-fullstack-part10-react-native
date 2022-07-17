import { useQuery } from "@apollo/client";
import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = ({repositoryId, reviewsFirst}) => {
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORY, {
    fetchPolicy: "cache-and-network",
    variables: {repositoryId, reviewsFirst},
  })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        repositoryId,
        reviewsFirst,
        reviewsAfter: data.repository.reviews.pageInfo.endCursor,
      },
    })
  };

  return { repository: data ? data.repository : undefined, loading, fetchMore: handleFetchMore, ...result };
};

export default useRepository;
