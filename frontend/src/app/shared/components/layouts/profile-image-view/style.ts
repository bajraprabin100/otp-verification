import { styled } from "@mui/material";

export const ProfileImageWrapper = styled("div")({
  height: "inherit",
})
export const ProfileImage = styled("div",{
  shouldForwardProp: (prop) => {
  return prop !== "image";
}})<{image: string}>(({image}) => ({
  backgroundImage: `url(${image})`,
  height: "-webkit-fill-available",
  backgroundSize: "cover",
  borderRadius: "50%"
}))
