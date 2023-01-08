import React from 'react';
import Routes from './src/config/routes';
import { ThemeProvider } from 'styled-components';
import theme from './src/config/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;