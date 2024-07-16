import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { InputLabelProps as MuiInputLabelProps } from "@mui/material/InputLabel";
import TextField, {
  BaseTextFieldProps as MuiBaseTextFieldProps,
} from "@mui/material/TextField";
import {Typography} from "@mui/material";
import { ReactNode, useState } from "react";
import { Controller, FieldPathValue, FieldValues, Path } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { genericMemo, lStrim } from "./../../utils";
import {
  FormEventPropTypes,
  HasIconPropTypes,
  HookFormPropTypes,
} from "./../../types/form.types";
import FormWrapper, { FormWrapperPropTypes } from "./wrapper.component";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export interface InputPropTypes<TFieldValues extends FieldValues>
  extends MuiBaseTextFieldProps,
    Pick<MuiInputLabelProps, "shrink">,
    HasIconPropTypes,
    FormWrapperPropTypes,
    HookFormPropTypes<TFieldValues>,
    FormEventPropTypes {
  name: Path<TFieldValues>;
  label: string | ReactNode;
  defaultValue?: FieldPathValue<TFieldValues, Path<TFieldValues>>;

  // variant
  variant?: "outlined" | "filled" | "standard";
  helperText?: string;
  optional?: boolean;
  optionalText?: string;
  optionLabelStyle?: string;
  isShowError?: boolean;
  isAmount?: boolean;
  min?: number;
  max?: number;
  pattern?: RegExp;
  infotext?: string;
  maxLength?: number
}

const FormInput = <TFieldValues extends FieldValues>(
  props: InputPropTypes<TFieldValues>
) => {
  const {
    label,
    value,
    type = "text",
    name,
    color,
    hasIcon = false,
    iconPos = "end",
    icon,
    optional = false,
    optionalText,
    optionLabelStyle = "italic",
    min,
    max,
    maxLength,
    pattern,
    onChange,
    ...rest
  } = props;

  //   For password
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showTooltip, setshowTooltip] = useState<boolean>(false);

  return (
    <FormWrapper
      disableBottom={rest.disableBottom || false}
      disableTop={rest.disableTop || false}
      wrapperFullWidth={rest.wrapperFullWidth ?? true}
      sx={{ ...rest.sx }}
    >
      <Controller
        name={name}
        control={rest.control}
        defaultValue={rest.defaultValue}
        render={({
          field,
          fieldState
        }) => {
          return (
            <TextField
              {...field}
              value={field.value || ""}
              onChange={(e) => {

                if (pattern) {

                  if (pattern?.test(e.target.value)) {
                    field.onChange(lStrim(e.target.value));
                    onChange?.(e);
                  } else {
                    return;
                  }

                } else {
                  field.onChange(lStrim(e.target.value));
                  onChange?.(e);

                }
              }}
              onKeyDown={(e) => rest.onKeyDown && rest.onKeyDown(e)}
              onKeyUp={(e) => rest.onKeyUp && rest.onKeyUp(e)}
              label={
                <>
                  <Typography variant="textsm" sx={{
                    fontWeight: "medium",
                    color: theme => theme.palette.textShades[0]
                  }}>{label}</Typography>
                  {optionalText && (
                    <Typography variant="subtitle1" ml={0.5} sx={{ fontStyle: optionLabelStyle }}>
                      {optionalText}
                    </Typography>
                  )}{" "}
                  {optional && (
                    <Typography variant="textBase" ml={0.5} sx={{ fontStyle: optionLabelStyle }}>
                      (optional)
                    </Typography>
                  )}
                  {rest.infotext && <span className="tooltip" onMouseEnter={() => setshowTooltip(true)}
                                          onMouseLeave={() => setshowTooltip(false)}>
                    <InfoOutlinedIcon sx={{
                      color: "#BEBEBE",
                      fontSize: "20px",
                      margin: "0px 0px 0px 4px"
                    }}/>
                  </span>}
                </>
              }
              placeholder={rest.placeholder || "Enter"}
              type={
                type !== "password" ? type : showPassword ? "text" : "password"
              }
              error={!rest?.isShowError && !!fieldState.error}
              helperText={
                !rest?.isShowError &&
                (!!fieldState.error && !rest.disabled
                  ? `${fieldState?.error?.message + " "}`
                  : (rest.helperText = " "))
              }
              multiline={rest.multiline || false}
              rows={rest.rows || "4"}
              inputProps={{
                autoComplete: "new-password",
                form: {
                  autoComplete: "off",
                },
                min: min,
                max: max,
                maxLength: maxLength,
                pattern: pattern,
                inputMode: type === "number" ? "numeric" : "text",
                // patternMismatch: "Only numbers are allowed"
              }}
              InputProps={{
                // min:0,
                startAdornment:
                  hasIcon && iconPos === "start" ? (
                    <InputAdornment position={iconPos}>{icon}</InputAdornment>
                  ) : null,

                endAdornment:
                  type === "password" ? (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {!showPassword ? <AiFillEyeInvisible/> : <AiFillEye/>}
                      </IconButton>
                    </InputAdornment>
                  ) : hasIcon && iconPos === "end" ? (
                    <InputAdornment position={iconPos}>{icon}</InputAdornment>
                  ) : null,

              }}
              InputLabelProps={{
                shrink: rest.shrink || true,
                sx: label === "" ? { display: "none" } : { display: "flex" },
                style: {
                  color: "black",
                  display: "flex",
                  flexDirection: "row",
                  overflow: "visible",
                  paddingBottom: "2px"
                },
              }}
              variant={rest.variant || "outlined"}
              fullWidth={rest.fullWidth || true}
              color={color}
              required={rest.required || false}
              disabled={rest.disabled || false}
              autoFocus={rest.autoFocus || false}
              autoComplete={rest.autoComplete || "off"}
              sx={rest.sx}
              size={rest.size || "medium"}
              id="standard-helperText"
            ></TextField>
          );
        }}
      ></Controller>
      {showTooltip && <div className="tooltiptext" onMouseEnter={() => setshowTooltip(true)}
                           onMouseLeave={() => setshowTooltip(false)}>
        <Typography variant="h4">Information</Typography>
        <p style={{
          wordBreak: "break-all",
          margin: "8px 0px 0px 0px"
        }}>{rest.infotext}</p>
      </div>}
    </FormWrapper>
  );
};

export default FormInput;
