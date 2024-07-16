import { Menu, styled, Popover, Typography } from "@mui/material";
import { Link } from "@tanstack/react-router";
export const SmallScreenMenu = styled(Popover)(({theme}) => ({
  background: "transparent",
  "& .MuiPopover-paper": {
    background: "white",
    top: "0 !important",
    left: "0 !important",
    width: "80%",
    height: "100vh",
    padding: "20px",
    maxHeight: "100vh !important",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }
}))

export const SmallNavLink = styled(Link)(({theme}) => ({
  textDecoration: "none"
}))
export const SmallNavLinkTypo = styled(Typography)(({theme}) => ({
  "&:hover": {
    color: `${theme.palette.primary.main}`,
    fontWeight: "bold",
    opacity: 1
  }
}))
