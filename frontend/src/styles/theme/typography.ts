import {MainTheme} from "./theme-list/main-theme";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    body?: React.CSSProperties;
    text9xl: React.CSSProperties;
    text8xl: React.CSSProperties;
    text7xl: React.CSSProperties;
    text6xl: React.CSSProperties;
    text5xl: React.CSSProperties;
    text4xl: React.CSSProperties;
    text3xl: React.CSSProperties;
    text2xl: React.CSSProperties;
    textxl: React.CSSProperties;
    textlg: React.CSSProperties;
    textBase: React.CSSProperties;
    textsm: React.CSSProperties;
    textxs: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    text9xl: React.CSSProperties;
    text8xl: React.CSSProperties;
    text7xl: React.CSSProperties;
    text6xl: React.CSSProperties;
    text5xl: React.CSSProperties;
    text4xl: React.CSSProperties;
    text3xl: React.CSSProperties;
    text2xl: React.CSSProperties;
    textxl: React.CSSProperties;
    textlg: React.CSSProperties;
    textBase: React.CSSProperties;
    textsm: React.CSSProperties;
    textxs: React.CSSProperties;
  }
}
// toggle to use variant value in typogrpahy
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    text9xl: true;
    text8xl: true;
    text7xl: true;
    text6xl: true;
    text5xl: true;
    text4xl: true;
    text3xl: true;
    text2xl: true;
    textxl: true;
    textlg: true;
    textBase: true;
    textsm: true;
    textxs: true;
  }
}
export const THEME_TYPOGRAPHY = {
  fontFamily: ['Public Sans', 'sans-serif'].join(","),
  text9xl: {
    fontSize: MainTheme.font.size.xl9,
    fontWeightRegular: MainTheme.font.weight.regular,
    fontWeightBold: MainTheme.font.weight.bold,
    fontWeightMedium: MainTheme.font.weight.medium,
    fontStyle: MainTheme.font.style.normal,
    color: MainTheme.color.text.shades[0]
  },
  text8xl: {
    fontSize: MainTheme.font.size.xl8,
    fontWeightRegular: MainTheme.font.weight.regular,
    fontWeightBold: MainTheme.font.weight.bold,
    fontWeightMedium: MainTheme.font.weight.medium,
    fontStyle: MainTheme.font.style.normal,
    color: MainTheme.color.text.shades[0]
  },
  text7xl: {
    fontSize: MainTheme.font.size.xl7,
    fontWeightRegular: MainTheme.font.weight.regular,
    fontWeightBold: MainTheme.font.weight.bold,
    fontWeightMedium: MainTheme.font.weight.medium,
    fontStyle: MainTheme.font.style.normal,
    color: MainTheme.color.text.shades[0]
  },
  text6xl: {
    fontSize: MainTheme.font.size.xl6,
    fontWeightRegular: MainTheme.font.weight.regular,
    fontWeightBold: MainTheme.font.weight.bold,
    fontWeightMedium: MainTheme.font.weight.medium,
    fontStyle: MainTheme.font.style.normal,
    color: MainTheme.color.text.shades[0]
  },
  text5xl: {
    fontSize: MainTheme.font.size.xl5,
    fontWeightRegular: MainTheme.font.weight.regular,
    fontWeightBold: MainTheme.font.weight.bold,
    fontWeightMedium: MainTheme.font.weight.medium,
    fontStyle: MainTheme.font.style.normal,
    color: MainTheme.color.text.shades[0]
  },
  text4xl: {
    fontSize: MainTheme.font.size.xl4,
    fontWeightRegular: MainTheme.font.weight.regular,
    fontWeightBold: MainTheme.font.weight.bold,
    fontWeightMedium: MainTheme.font.weight.medium,
    fontStyle: MainTheme.font.style.normal,
    color: MainTheme.color.text.shades[0]
  },
  text3xl: {
    fontSize: MainTheme.font.size.xl3,
    fontWeight: MainTheme.font.weight.regular,
    fontStyle: MainTheme.font.style.normal,
    fontWeightRegular: MainTheme.font.weight.regular,
    fontWeightBold: MainTheme.font.weight.bold,
    fontWeightMedium: MainTheme.font.weight.medium,
    color: MainTheme.color.text.shades[0]
  },
  text2xl: {
    fontSize: MainTheme.font.size.xl2,
    fontWeight: MainTheme.font.weight.regular,
    fontStyle: MainTheme.font.style.normal,
    fontWeightRegular: MainTheme.font.weight.regular,
    fontWeightBold: MainTheme.font.weight.bold,
    fontWeightMedium: MainTheme.font.weight.medium,
    color: MainTheme.color.text.shades[0]
  },
  textxl: {
    fontSize: MainTheme.font.size.xl,
    fontWeight: MainTheme.font.weight.regular,
    fontStyle: MainTheme.font.style.normal,
    fontWeightRegular: MainTheme.font.weight.regular,
    fontWeightBold: MainTheme.font.weight.bold,
    fontWeightMedium: MainTheme.font.weight.medium,
    color: MainTheme.color.text.shades[0],
  },
  textlg: {
    fontSize: MainTheme.font.size.lg,
    fontWeight: MainTheme.font.weight.regular,
    fontStyle: MainTheme.font.style.normal,
    fontWeightRegular: MainTheme.font.weight.regular,
    fontWeightBold: MainTheme.font.weight.bold,
    fontWeightMedium: MainTheme.font.weight.medium,
    color: MainTheme.color.text.shades[0]
  },
  textBase: {
    fontSize: MainTheme.font.size.base,
    fontWeight: MainTheme.font.weight.regular,
    fontStyle: MainTheme.font.style.normal,
    fontWeightRegular: MainTheme.font.weight.regular,
    fontWeightBold: MainTheme.font.weight.bold,
    fontWeightMedium: MainTheme.font.weight.medium,
    color: MainTheme.color.text.shades[0]
  },
  textsm: {
    fontSize: MainTheme.font.size.sm,
    fontWeight: MainTheme.font.weight.regular,
    fontStyle: MainTheme.font.style.normal,
    fontWeightRegular: MainTheme.font.weight.regular,
    fontWeightBold: MainTheme.font.weight.bold,
    fontWeightMedium: MainTheme.font.weight.medium,
    color: MainTheme.color.text.shades[0],
    lineHeight: MainTheme.font.size.sm
  },
  textxs: {
    fontSize: MainTheme.font.size.xs,
    fontWeight: MainTheme.font.weight.regular,
    fontStyle: MainTheme.font.style.normal,
    fontWeightRegular: MainTheme.font.weight.regular,
    fontWeightBold: MainTheme.font.weight.bold,
    fontWeightMedium: MainTheme.font.weight.medium,
    color: MainTheme.color.text.shades[0]
  },
};
