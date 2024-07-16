import { THEME_PALETTE } from "src/styles/theme/palette";

export const theme_MuiRadio = {
  defaultProps: {
    disableRipple: true,
    disableTouchRipple: true,
    disableFocusRipple: true,
  },
  styleOverrides: {
    root: ({ theme, ownerState }: any) => ({
      color: theme.palette.textTints[70],
      "&:hover": {
      },
      "&.Mui-checked": {
        color: theme.palette.primary.main,
      },
    }),

    input: ({ ownerState }: any) => ({}),
  },
};
