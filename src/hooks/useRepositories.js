import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = ({orderDirection, orderBy}) => {
  const { data, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: {orderDirection, orderBy}
  })

  return { repositories: data ? data.repositories : undefined, loading, refetch: undefined };
};

export default useRepositories;
