import { ThemeProvider } from '@mui/material';
import theme from 'constants/theme';
import React from 'react';
import Router from 'routes/Router';
import GlobalStyles from 'styles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router/>
      <GlobalStyles/>
    </ThemeProvider>
  );
}

export default App;
