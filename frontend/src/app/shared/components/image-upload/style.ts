import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const ImageWrapperContainer = styled("div")`
  position: relative;
`;
export const UploadImageWrapper = styled(Box)(({theme}) => ({
  height: "159px",
  border: `1px dashed ${theme.palette.textTints[70]}`,
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "4px",
  background: ""
}))

export const ImageContainer = styled("div")(() => ({

}))
