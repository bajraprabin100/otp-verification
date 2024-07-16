import { CheckboxProps as MuiCheckboxProps, Typography } from "@mui/material";
import {useTheme} from "@mui/material/styles"
import Checkbox from "@mui/material/Checkbox";
import FormControl, {
    FormControlProps as MuiFormControlProps,
} from "@mui/material/FormControl";
import FormControlLabel, {
    FormControlLabelProps as MuiFormControlLabelProps,
} from "@mui/material/FormControlLabel";
import {ChangeEvent} from "react";
import {Controller, FieldValues, Path} from "react-hook-form";
import {genericMemo} from "src/app/shared/utils";
import {HookFormPropTypes} from "./../../types/form.types";
import FormWrapper, {FormWrapperPropTypes} from "./wrapper.component";

export interface CheckboxPropTypes<TFieldValues extends FieldValues>
    extends FormWrapperPropTypes,
        HookFormPropTypes<TFieldValues>,
        Omit<MuiCheckboxProps, "defaultValue">,
        Pick<MuiFormControlProps, "disabled" | "error" | "fullWidth" | "required">,
        Pick<MuiFormControlLabelProps, "label" | "labelPlacement"> {
    name: Path<TFieldValues>;
    helperText?: string;
    onChange?: (args: ChangeEvent<HTMLInputElement>) => void;
}

const FormCheckbox = <TFieldValues extends FieldValues>(
    props: CheckboxPropTypes<TFieldValues>
) => {
    const {
        label,
        labelPlacement = "end",
        value,
        name,
        size = "small",
        color = "default",
        icon,
        checkedIcon,
        sx,
        control,
        ...rest
    } = props;
    const theme = useTheme();
    return (
        <FormWrapper
            disableBottom={rest.disableBottom || false}
            disableTop={rest.disableTop || false}
            sx={{width: "max-content"}}
        >
            <Controller
                name={name}
                control={control}
                defaultValue={rest.defaultValue}
                render={({field, fieldState}) => {
                    return (
                        <FormControl
                            component="fieldset"
                            variant="standard"
                            required={rest.required || true}
                            error={!!fieldState.error}
                            fullWidth={rest.fullWidth || true}
                        >
                            <FormControlLabel
                                label={<Typography variant={"textsm"} sx={{
                                    color: theme.palette.textShades[0],
                                    fontWeight: "regular"
                                }}>{label}</Typography>}
                                labelPlacement={labelPlacement}
                                disabled={rest.disabled || false}
                                control={
                                    <Checkbox
                                        {...field}
                                        checked={!!field.value}
                                        value={field.value || false}
                                        onChange={(e) => {
                                            field.onChange(!field.value);
                                            rest?.onChange && rest.onChange(e);
                                        }}
                                        size={size}
                                    />
                                }
                            ></FormControlLabel>
                        </FormControl>
                    );
                }}
            />
        </FormWrapper>
    );
};

export default genericMemo(FormCheckbox);
