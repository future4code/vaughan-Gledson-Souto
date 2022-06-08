import { ThemeProvider } from '@mui/material';
import React from 'react'
import theme from './constants/theme';
import GlobalState from './global/GlobalState';
import Router from './routes/Router';
import GlobalStyles from './styles/global';

const App = () => {
  return (
    <GlobalState>
    <ThemeProvider theme={theme}> 
      <Router/>
    </ThemeProvider>
    <GlobalStyles/>
    </GlobalState>
  );
  
}

export default App;
