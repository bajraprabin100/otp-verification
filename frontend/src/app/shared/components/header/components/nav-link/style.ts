import { styled, Typography } from "@mui/material";
import { Link } from "@tanstack/react-router";

interface NavLinkStyleType{
  active: boolean;
}
export const NavLinkWrapper = styled("div", {
  shouldForwardProp: (prop) => {
    return prop !== "active";
  },
})<NavLinkStyleType>(({theme, active}) => ({
  height: "62px",
  display: "flex",
  alignItems: "center",
  paddingLeft: "10px",
  paddingRight: "10px",
  borderBottom: `2px solid ${active ? theme.palette.primary.main: "transparent"}`,
  "&:hover": {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  }
}))

export const NavLinkTypo = styled(Typography,{
  shouldForwardProp: (prop) => {
    return prop !== "active";
  },
})<NavLinkStyleType>(({theme, active}) => ({
  color: `${active ? theme.palette.primary.main: ""}`,
  fontWeight: `${active ? "bold" : "regular"}`,
  "&:hover": {
    color: `${theme.palette.primary.main}`,
    fontWeight: "bold",
    opacity: 1
  }
}))

export const TanStackLink = styled(Link)(() => ({
  textDecoration: "none"
}))
