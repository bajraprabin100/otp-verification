import FormControl from "@mui/material/FormControl";
import React, { ReactNode } from "react";
import { SxProps, Theme } from "@mui/material/styles";

export interface FormWrapperPropTypes {
  disableTop?: boolean;
  disableBottom?: boolean;
  sx?: SxProps<Theme>;
  children?: ReactNode;
  row?: boolean;
  alignItems?: "flex-start" | "center" | "flex-end";
  justifyContent?: "flex-start" | "center" | "flex-end";
  wrapperFullWidth?: boolean;
}

function FormWrapper(props: FormWrapperPropTypes) {
  const {
    disableTop,
    disableBottom,
    alignItems = "center",
    justifyContent = "center",
    wrapperFullWidth,
    sx,
    children,
  } = props;
  return (
    <FormControl
      sx={{
        paddingTop: !disableTop ? "0.2rem" : "0rem",
        paddingBottom: !disableBottom ? "0.2rem" : "0rem",
        alignItems,
        justifyContent,
        ...sx,
      }}
      fullWidth={wrapperFullWidth ?? true}
    >
      {children}
    </FormControl>
  );
}

export default React.memo(FormWrapper);
