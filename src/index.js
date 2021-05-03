import React from 'react';
import ReactDOM from 'react-dom';

import App from './Components/App';

import theme from './theme';
import { ThemeProvider } from '@material-ui/core/styles';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
