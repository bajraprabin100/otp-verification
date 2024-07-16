

export const theme_MuiCheckbox = {
  defaultProps: {
    disableRipple: true
  },
  styleOverrides: {
    root: ({ theme }: any) => ({
      borderRadius: "4px",
      width: "18px",
      height: "18px",
      marginLeft: "12px",
      marginRight: "12px",
      // For now check box design are same as mui checkbox
        color: theme.palette.textTints[50],
    }),
  },
};
