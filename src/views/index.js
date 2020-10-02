import * as React from 'react';
import AppRouter from './AppRouter';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import config from '../config';

const client = new ApolloClient({
  uri: config.graphQLUri,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <AppRouter />
    </ApolloProvider>
  );
}

export default App;
