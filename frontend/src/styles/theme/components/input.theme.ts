import { THEME_PALETTE } from "src/styles/theme/palette";


export const theme_MuiInputOutlined = {
  styleOverrides: {
    root: ({ ownerState }: any) => ({
      " .MuiOutlinedInput-notchedOutline": {
        padding: "13px 15px",
        verticalAlign: "middle",
        textAlign: "center",
        border: `1px solid  ${THEME_PALETTE.textTints[80]}`,
        top: "0px",
      },
      "&.Mui-hovered .MuiOutlinedInput-notchedOutline": {
        outline: "none",
      },
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: THEME_PALETTE.primaryTints[50],
      },
      "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
        borderColor: THEME_PALETTE.primaryTints[50],
        cursor: "not-allowed",
        pointerEvents: "all",
      },
      "&.Mui-error .MuiOutlinedInput-notchedOutline": {
        borderColor: THEME_PALETTE.error.main,
      },

      "& .MuiOutlinedInput-notchedOutline legend": {
        display: "none ",
      },
      // Color === secondary
      ...(ownerState.color === "secondary" && {
        backgroundColor: THEME_PALETTE.secondaryTints[100],
        border: "none",
        " .MuiOutlinedInput-notchedOutline": {
          border: `none`,
        },
      }),
      textarea: {
        padding: "unset",
        outline: "none"
      },
    }),

    input: ({ ownerState }: any) => ({
      padding: "1.6rem 1rem",
      height: "0px",
      borderRadius: "8px",
      outline: "none",
      ...(ownerState.size === "small" && {
        padding: "1.4rem 1rem",
      }),
    }),
  },
};
