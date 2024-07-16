import { styled } from "@mui/material";

export const AuthenticatedWrap = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "50px"
}))
export const AuthenticatedContainer = styled("div")(() => ({
  width: "100%",
  display: "flex",
  gap: "5%"
}))

export const AuthenticatedLeftContainer = styled("div")(({theme}) => ({
  width: "30%",
  backgroundColor: theme.palette.text.secondary,
  borderRadius: "12px",
}))

export const AuthenticatedRightContainer = styled("div")(({theme}) => ({
  width: "65%",
  backgroundColor: theme.palette.text.secondary,
  borderRadius: "12px",
}))
