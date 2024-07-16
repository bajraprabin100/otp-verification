import {MainTheme} from "./theme-list/main-theme";


// For overriding the default mui theme object
declare module "@mui/material/styles" {
  // If you want to edit-profile extra key name to the palette
  interface Palette {
    primaryShades: Palette["primary"];
    primaryTints: Palette["primary"]
    secondaryShades: Palette["primary"];
    secondaryTints: Palette["primary"];
    textShades: Palette["primary"];
    textTints: Palette["primary"];
  }
  interface PaletteOptions {
    primaryShades?: PaletteOptions["primary"];
    primaryTints?: PaletteOptions["primary"]
    secondaryShades?: PaletteOptions["primary"];
    secondaryTints?: PaletteOptions["primary"];
    textShades?: PaletteOptions["primary"];
    textTints?: PaletteOptions["primary"];
  }

  // If you want to edit-profile extra properties for color code in the object
  interface PaletteColor {
    0?: string;
    10?: string;
    20?: string;
    30?: string;
    40?: string;
    50?: string;
    60?: string;
    70?: string;
    80?: string;
    90?: string;
    100?: string;
  }
  interface SimplePaletteColorOptions {
    0?: string;
    10?: string;
    20?: string;
    30?: string;
    40?: string;
    50?: string;
    60?: string;
    70?: string;
    80?: string;
    90?: string;
    100?: string;
  }
}
export const THEME_PALETTE = {
  primary: {
    light: MainTheme?.color.primary.tint[50],
    main: MainTheme?.color.primary.shades[0],
    dark: MainTheme?.color.primary.shades[50],
  },
  secondary: {
    light: MainTheme?.color.secondary.tint[50],
    main: MainTheme?.color.secondary.shades[0],
    dark: MainTheme?.color.secondary.shades[50]},
  text: {
    primary: MainTheme?.color.text.tint[0],
    secondary: MainTheme?.color.text.tint[100],
    disabled: MainTheme?.color.text.shades[50]
  },
  error: {
    main: MainTheme?.color.state.error.main,
    light: MainTheme?.color.state.error.light,
  },
  warning: {
    main: MainTheme?.color.state.warning.main,
    light: MainTheme?.color.state.warning.light,
  },
  info: {
    main: MainTheme?.color.state.info.main,
    light: MainTheme?.color.state.info.light,
  },
  success: {
    main: MainTheme?.color.state.success.main,
    light: MainTheme.color.state.success.light,
  },
  primaryShades: {...MainTheme.color.primary.shades},
  primaryTints: {...MainTheme.color.primary.tint},
  secondaryShades: {...MainTheme.color.secondary.shades},
  secondaryTints: {...MainTheme.color.secondary.tint},
  textShades: {...MainTheme.color.text.shades},
  textTints: {...MainTheme.color.text.tint}
};
