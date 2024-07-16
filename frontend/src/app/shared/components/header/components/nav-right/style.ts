import { styled } from "@mui/material";

export const RightNavWrapper = styled("div")(() => ({
  display: "flex",
  gap: "10px",
  alignItems: "center"
}))

export const RightNavProfileWrapper = styled("div")(() => ({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  cursor: "pointer",
}))

export const RightImageWrapper = styled("div")(() => ({
  width: "32px",
  height: "32px",

}))
export const RightNameEmailWrapper = styled("div")(() => ({
  display: "flex",
  gap: "1px",
  flexDirection: "column"
}))
