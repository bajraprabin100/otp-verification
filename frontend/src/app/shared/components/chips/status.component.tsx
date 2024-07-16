import React from "react";
import Chip, { ChipProps } from "@mui/material/Chip";
import { useTheme } from "@mui/material";
import { ChipPropsColorOverrides } from "@mui/material/Chip/Chip";

export interface TableStatusPropTypes extends ChipProps {
  label?: string;
}

const Status = (props: TableStatusPropTypes) => {
  const theme = useTheme()
  const { label, variant, color, ...rest } = props;

  const getColors = (color: ChipPropsColorOverrides): string[] => {
    switch (color) {
      case "success":
        return [
          theme.palette.success.light,
          theme.palette.success.main,
        ];
      case "primary":
        return [
          theme.palette.primaryTints[90],
          theme.palette.primaryShades[0],
        ];
      case "secondary":
        return [
          theme.palette.secondaryTints[90],
          theme.palette.secondaryShades[0],
        ];
      case "warning":
        return [
          theme.palette.warning.light,
          theme.palette.warning.dark,
        ];
      case "error":
        return [
          theme.palette.error.light,
          theme.palette.error.dark,
        ];
      case "default":
        return [
          theme.palette.textTints[90],
          theme.palette.textTints[40],
        ];
      default:
        return [
          theme.palette.primary.light,
          theme.palette.primary.dark,
        ];
    }
  };
  return (

    <Chip
      label={label}
      variant={variant}
      sx={{
        backgroundColor: getColors(color!)[0],
        borderRadius: "18px",
        padding: "4px 12px",
        height: "24px",
        display: "flex",
        border: "none",
        "& .MuiChip-label": {
          fontSize: "12px",
          padding: "0px",
          color: getColors(color!)[1],
          fontWeight: "bold",
        },
        ...rest.sx,
      }}
    />
  );
};
Status.defaultProps = {
  size: 'small',
  variant: "filled",
  color: "success"
}
export default React.memo(Status);
