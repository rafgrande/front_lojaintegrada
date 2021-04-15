import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './context/auth';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client/react';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

import { defaultTheme } from './styles/Theme';

const client = new ApolloClient({
  uri: 'https://apili.herokuapp.com/graphql',
  cache: new InMemoryCache(),
  defaultOptions: {
    mutate: { errorPolicy: 'ignore' },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <AuthProvider>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
