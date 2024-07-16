import React, { ReactNode } from "react";
import {Box, styled, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/material/styles";

export type ImageChipVariant = 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
export interface ChipWithImageType {
  image: string | ReactNode;
  variant: ImageChipVariant
}

const ChipWithImage = styled(Box, {
  shouldForwardProp: (prop) => {
    return prop !== "variant";
  }})<{variant: ImageChipVariant}>(({theme, variant}) => ({
  height: "70px",
  width: "70px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  [theme.breakpoints.down("xs")]: {
    height: "50px",
    width: "50px",
  },

  ...(variant === "default" && {
    border: `1px solid ${theme.palette.textTints[90]}`,
  }),

  ...(variant === "success" && {
    background: theme.palette.success.light
  }),

  ...(variant === "info" && {
    background: theme.palette.info.light
  }),

  ...(variant === "secondary" && {
    background: theme.palette.secondary.light
  }),

  ...(variant === "error" && {
    background: theme.palette.error.light
  }),

  ...(variant === "warning" && {
    background: theme.palette.warning.light
  })
}))

const ImageChip = (props: ChipWithImageType) => {
  const {
    variant,
    image,
  } = props;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme?.breakpoints?.down("xs"))

  return (
    <ChipWithImage
      variant={variant}
    >
      {
        typeof image === "string" ? <img width={isSmallScreen && "30px"} src={image} /> : image
      }
    </ChipWithImage>
  );
};
ImageChip.defaultProps = {
  variant: 'default'
}
export default React.memo(ImageChip);
