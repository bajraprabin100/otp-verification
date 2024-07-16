import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

interface SideMenuLinkStyleType{
  active: boolean;
}
export const LinkWrapper = styled(Box,{
  shouldForwardProp: (prop) => {
  return prop !== "active";
}})<SideMenuLinkStyleType>(({theme,active}) => ({
  textDecoration: "none",
  height: "48px",
  display: "flex",
  alignItems: "center",
  backgroundColor: `${active ? theme.palette.primaryTints[80]: ""}`,
  padding: "12px",
  borderRadius: "6px",
  "& svg": {
    stroke: `${active ? theme.palette.primary.main: theme.palette.text.primary}`,
  },

  "&:hover": {
    color: `${theme.palette.primary.main}`,
    opacity: 1,
    "& svg": {
      stroke: theme.palette.primary.main,
    }
  }
}))

export const LinkTypo = styled(Typography,{
  shouldForwardProp: (prop) => {
    return prop !== "active";
  },
})<SideMenuLinkStyleType>(({theme, active}) => ({
  color: `${active ? theme.palette.primary.main: theme.palette.text.primary}`,
  fontWeight: "medium",
  "&:hover": {
    color: `${theme.palette.primary.main}`,
    opacity: 1
  }
}))
