import FormControl, {
  FormControlProps as MuiFormControlProps,
} from "@mui/material/FormControl";
import FormControlLabel, {
  FormControlLabelProps as MuiFormControlLabelProps,
} from "@mui/material/FormControlLabel";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Radio, { RadioProps as MuiRadioProps } from "@mui/material/Radio";
import RadioGroup, {
  RadioGroupProps as MuiRadioGroupProps,
} from "@mui/material/RadioGroup";
import { Controller, FieldValues, Path } from "react-hook-form";
import FormWrapper, { FormWrapperPropTypes } from "./wrapper.component";
import { HookFormPropTypes } from "@/app/shared/types/form.types";
import { genericMemo } from "@/app/shared/utils";
import Typography from "@mui/material/Typography";

export interface RadioPropTypes<TFieldValues extends FieldValues>
  extends FormWrapperPropTypes,
    HookFormPropTypes<TFieldValues>,
    Pick<MuiFormControlProps, "disabled" | "error" | "fullWidth" | "required">,
    Omit<MuiRadioGroupProps, "defaultValue"> {
  radioButtonLabel: string;
  radioList: RadioButtonProps[];
  name: Path<TFieldValues>;
  helperText?: string;
}

export interface RadioButtonProps
  extends MuiRadioProps,
    Pick<MuiFormControlLabelProps, "label" | "labelPlacement"> {
  value: string;
}

const FormRadio = <TFieldValues extends FieldValues>(
  props: RadioPropTypes<TFieldValues>
) => {
  const { radioButtonLabel, radioList, name, defaultValue, control, ...rest } =
    props;
  return (
    <FormWrapper
      disableBottom={rest.disableBottom || false}
      disableTop={rest.disableTop || false}
    >
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field, fieldState }) => {
          return (
            <FormControl
              component="fieldset"
              variant="standard"
              required={rest.required || false}
              error={!!fieldState.error}
              fullWidth={rest.fullWidth || true}
            >
              <FormLabel>{radioButtonLabel}</FormLabel>
              <RadioGroup
                name={field.name}
                value={field.value || ""}
                onChange={(d) => {
                  field.onChange(d);
                  rest?.onChange(d, d.target.value);
                }}
                defaultValue={defaultValue}
                row
              >
                {radioList?.map((item: RadioButtonProps) => {
                  return (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      label={<Typography variant={"textBase"} fontWeight={"regular"}>{item.label}</Typography>}
                      labelPlacement={item.labelPlacement || "end"}
                      disabled={item.disabled || false}
                      control={<Radio />}
                    />
                  );
                })}
              </RadioGroup>
              <FormHelperText error={!!fieldState.error}>
                {fieldState.error
                  ? `${fieldState?.error?.message + " "}`
                  : (rest.helperText = " ")}
              </FormHelperText>
            </FormControl>
          );
        }}
      />
    </FormWrapper>
  );
};

export default FormRadio;
