import { THEME_PALETTE } from "src/styles/theme/palette";

export const theme_MuiInputLabel = {
  styleOverrides: {
    root: () => ({
      color: THEME_PALETTE.textShades[40],
      position: "unset",
      transform: "none",
      zIndex: "unset",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: 1.4,
      paddingBottom: "5px",
      "&.Mui-focused": {
        color: THEME_PALETTE.textShades[40],
        fontWeight: 500,
      },
      "&.Mui-error": {
        color: THEME_PALETTE.textShades[40],
      },
      "&.Mui-disabled": {
        color: THEME_PALETTE.textShades[0],
      },
    }),
  },
};
