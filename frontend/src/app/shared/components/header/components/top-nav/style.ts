import { styled } from "@mui/material";

export const TopNavWrapper = styled("div")(({theme}) => ({
  height: "46px",
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  paddingLeft: "4%",
  paddingRight: "4%",
}));

export const TopNavContainer = styled("div")(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
}))
