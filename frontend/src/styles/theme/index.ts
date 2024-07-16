import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { THEME_BREAKPOINTS } from "./breakpoints";
import { THEME_COMPONENTS } from "./components";
import { THEME_PALETTE } from "./palette";
import { THEME_TYPOGRAPHY } from "./typography";

const theme = createTheme ({
  palette: THEME_PALETTE,
  typography: THEME_TYPOGRAPHY,
  components: THEME_COMPONENTS as never,
  breakpoints: THEME_BREAKPOINTS,
});

export default responsiveFontSizes(theme);
