import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { GRAPHQL_URI } from '../constants';

const httpLink = createHttpLink({
  uri: GRAPHQL_URI,
});

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
