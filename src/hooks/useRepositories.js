import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = ({orderDirection, orderBy, searchKeyword}) => {
  const { data, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: {orderDirection, orderBy, searchKeyword}
  })

  return { repositories: data ? data.repositories : undefined, loading, refetch: undefined };
};

export default useRepositories;
