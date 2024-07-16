import Link from "@mui/material/Link";
import { FieldValues } from "react-hook-form";
import { genericMemo } from "src/app/shared/utils";
import { LinkProps as MuiLinkProps } from "@mui/material";
import { ReactNode } from "react";
import { TypographyPropsVariantOverrides } from "@mui/material/Typography/Typography";
import { OverridableStringUnion } from "@mui/types";
import { Variant } from "@mui/material/styles/createTypography";

import { HasIconPropTypes, HookFormPropTypes } from "../../types/form.types";

import { FormWrapperPropTypes } from "./wrapper.component";

export interface LinkPropTypes<TFieldValues extends FieldValues>
  extends FormWrapperPropTypes,
    HookFormPropTypes<TFieldValues>,
    Omit<MuiLinkProps, "alignItems" | "justifyContent" | "defaultValue">,
    HasIconPropTypes {
  name: string | ReactNode;
  textVariant: OverridableStringUnion<Variant | "inherit", TypographyPropsVariantOverrides>;
}

function FormLink(props: LinkPropTypes<FieldValues>) {
  const {
    name,
    onClick,
    color = "primary",
    underline = "hover",
    textVariant = "textsm",
    ...rest
  } = props;

  return (
    <Link
      variant={textVariant}
      fontWeight={"regular"}
      onClick={onClick}
      color={color}
      underline={underline}
      sx={rest.sx}
    >
      {name}
    </Link>

  );
}

export default genericMemo(FormLink);
