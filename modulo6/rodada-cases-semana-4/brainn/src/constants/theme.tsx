import { createTheme } from "@mui/material/styles";
import { primaryColor } from "./colors";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor
    }
  },
});

export default theme;
