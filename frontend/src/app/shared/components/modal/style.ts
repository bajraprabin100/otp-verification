import { Box, Modal, Paper, styled } from "@mui/material";

export const ModalWrapper = styled(Modal)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
export const ModalContainer = styled(Box)(({theme}) => ({
  padding: "10px",
  "&:focus-visible": {
    outline: "-webkit-focus-ring-color auto 0px"
  }
}));

export const ModalContentContainer = styled(Paper)(({ theme }) => ({
  opacity: 1,
  background: theme.palette.background.default,
  padding: "24px",
  borderRadius: "12px"
}));
