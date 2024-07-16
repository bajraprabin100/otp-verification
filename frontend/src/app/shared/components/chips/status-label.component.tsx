import { ChipProps } from "@mui/material/Chip";
import { OverridableStringUnion } from "@mui/types";
import { Variant } from "@mui/material/styles/createTypography";
import { TypographyPropsVariantOverrides } from "@mui/material/Typography/Typography";
import { ChipPropsColorOverrides } from "@mui/material/Chip/Chip";
import { Typography, useTheme } from "@mui/material";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

export interface StatusLabelPropTypes {
  label: string;
  color?: OverridableStringUnion<
    'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning',
    ChipPropsColorOverrides
  >;
  textVariant?: OverridableStringUnion<Variant | "inherit", TypographyPropsVariantOverrides>;
  sx?: SxProps<Theme>;
}
function StatusLabel({label, color, textVariant, sx}: StatusLabelPropTypes){
  const theme = useTheme()
  const getColors = (color: ChipPropsColorOverrides): string => {
    switch (color) {
      case "success":
        return theme.palette.success.dark;
      case "primary":
        return theme.palette.primaryShades[0]
      case "secondary":
        return theme.palette.secondaryShades[0];
      case "warning":
        return theme.palette.warning.dark
      case "info":
        return theme.palette.info.dark
      default:
        return theme.palette.primary.dark
    }
  };
  return <Typography variant={textVariant} sx={sx} color={getColors(color)}>{label}</Typography>
}
StatusLabel.defaultProps = {
  textVariant: "textsm",
  color: "success",
}
export default StatusLabel;
