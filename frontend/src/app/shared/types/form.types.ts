import { SxProps, Theme } from "@mui/material/styles";
import { FormEventHandler, ReactNode } from "react";
import { Control, FieldPathValue, FieldValues, Path } from "react-hook-form";

export interface FormCommonPropTypes {
  // children?: ReactNode;
  className?: string;
  sx?: SxProps<Theme>;
}

export interface FormEventPropTypes {
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLButtonElement | any>,
    ...args: any
  ) => void;
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  onKeyUp?: FormEventHandler<any>;
  onFocus?: (event: any, ...args: any) => void;
  onBlur?: (event: any, ...args: any) => void;
}

export interface HookFormPropTypes<T extends FieldValues = FieldValues> {
  control?: Control<T>;
  defaultValue?: FieldPathValue<T, Path<T>>;
}

export interface HasIconPropTypes {
  hasIcon?: boolean;
  iconPos?: "start" | "end";
  icon?: ReactNode;
}
