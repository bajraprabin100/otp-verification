import { styled } from "@mui/material";

export const MenuNavWrapper = styled("div")(({theme}) => ({
  paddingLeft: "4%",
  paddingRight: "4%",
  height: "64px",
  backgroundColor: theme.palette.textTints[100]
}))
export const MenuNavContainer = styled("div")(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "space-between"
}))
export const MenuLogoContainer = styled("div")(() => ({
  width: "100%",
  display: "flex",
  gap: "40px"
}))
export const LogoWrapper = styled("div")(() => ({
  height: "64px",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
}))

