import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ThemeProvider } from 'styled-components';
import { AuthProvider } from './context/auth';

import Theme from './styles/Theme'


ReactDOM.render(
  <React.StrictMode>
  <ThemeProvider theme={Theme}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
