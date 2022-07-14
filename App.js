import { NativeRouter } from "react-router-native";
import { StatusBar } from "expo-status-bar";
import Constants from 'expo-constants';

import { ApolloProvider } from "@apollo/client";
import createApolloClient from "./src/utils/apolloClient";

import Main from "./src/components/Main";

const apolloClient = createApolloClient();

const App = () => {
  console.log(Constants.manifest);
  return (
    <>
      <NativeRouter>
        <ApolloProvider client={apolloClient}>
          <Main />
        </ApolloProvider>
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
};

export default App;
