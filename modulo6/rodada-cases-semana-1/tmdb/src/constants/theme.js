import { createTheme } from '@mui/material/styles';
import { primaryColor, secudaryColor } from './colors';

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secudaryColor,
    },
  },
});

export default theme;