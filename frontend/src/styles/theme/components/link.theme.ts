
export const theme_MuiLink = {
  styleOverrides: {
    root: ({ theme }: any) => ({
      color: theme.palette.primary.main,
      cursor: "pointer",
      textTransform: "capitalize",
      display: "inline",
      "&:hover": {
        textDecoration: "underline",
      },
    }),
  },
};
