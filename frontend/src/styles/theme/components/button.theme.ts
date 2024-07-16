import { THEME_PALETTE } from "src/styles/theme/palette";
import theme from "@styles/theme";

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    icon: true;
  }
}
export const theme_MuiButtonBase = {
  defaultProps: { disableRipple: true },
};
export const theme_MuiButton = {
  styleOverrides: {
    root: ({ ownerState }: any) => ({
      height: "36px",
      width: "100%",
      minWidth: "36px !important",
      borderRadius: "4px",
      textTransform: "none" as const,
      fontSize: "16px",
      fontWeight: "700",
      lineHeight: 1.4,
      cursor: "pointer",
      boxShadow: "none",
      color: "black",

      "& .MuiButton-startIcon": {
        margin: "0 !important",
        padding: "10px",
        img: {
          width: "18px",
          height: "18px",
        },
      },

      ...(ownerState.variant === "outlined" &&
        ownerState.color === "inherit" && {
          border: `1px solid ${THEME_PALETTE.textTints[90]}}`,
          color: THEME_PALETTE.text.primary,
          "&:hover": {
            boxShadow: "none",
          },
        }),
      // FullWidth : true
      ...(ownerState.fullWidth === true && {}),

      // Variant === contained , color === primary
      ...(ownerState.variant === "contained" &&
        ownerState.color === "primary" && {
          backgroundColor: THEME_PALETTE.primaryTints[0],
          color: THEME_PALETTE.textTints[100],
          border: `1px solid transparent`,
          "&:hover": {
            border: `1px solid ${THEME_PALETTE.primaryTints[80]}`,
            boxShadow: "none",
          },
          "&:disabled": {
            backgroundColor: THEME_PALETTE.textTints[60],
            color: THEME_PALETTE.textTints[0],
            cursor: "not-allowed ",
            pointerEvents: "all",
          },
        }),

      ...(ownerState.variant === "contained" &&
        ownerState.color === "error" && {
        backgroundColor: THEME_PALETTE.error.main,
        color: THEME_PALETTE.textTints[900],
        border: `1px solid transparent`,
        "&:hover": {
          border: `1px solid ${THEME_PALETTE.primaryTints[80]}`,
          boxShadow: "none",
        },
        "&:disabled": {
          backgroundColor: THEME_PALETTE.textTints[60],
          color: THEME_PALETTE.textTints[0],
          cursor: "not-allowed ",
          pointerEvents: "all",
        },
      }),

      ...(ownerState.size === "large" && {
        height: "42px"
      }),
      ...(ownerState.size === "small" && {
        minWidth: "50px",
        width: "50px",
        display: "block",

        ".MuiButton-startIcon": {
          margin: 0,
          padding: "8px"
        },
      }),
      ...(ownerState.variant === "icon" && {
        borderRadius: "8px",
        width: "36px",
        height: "36px",
        backgroundColor: THEME_PALETTE.secondaryTints[100],
        border: `1px solid ${THEME_PALETTE.primaryTints[80]}`,
        color: THEME_PALETTE.textTints[100],
        ...(ownerState.size === "large") && {
          borderRadius: "8px",
          width: "40px",
          height: "40px",
        },
        "&:hover": {
          border: `1px solid ${THEME_PALETTE.primaryTints[80]}`,
          boxShadow: "none",
        },
        "&:disabled": {
          backgroundColor: THEME_PALETTE.textTints[60],
          color: THEME_PALETTE.textTints[0],
          cursor: "not-allowed ",
          pointerEvents: "all",
        },
        ".MuiButton-startIcon": {
          margin: 0,
          padding: 0
        },
      }),
    }),
  },
};
