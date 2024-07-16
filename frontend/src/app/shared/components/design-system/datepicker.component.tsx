import TextField, {BaseTextFieldProps as MuiBaseTextFieldProps} from "@mui/material/TextField";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker} from "@mui/x-date-pickers";
import {DesktopDatePicker} from "@mui/x-date-pickers/DesktopDatePicker";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {Controller, FieldValues, Path} from "react-hook-form";
import FormWrapper, {FormWrapperPropTypes} from "./wrapper.component";
import {HookFormPropTypes} from "@/app/shared/types/form.types";
import {Typography, useTheme} from "@mui/material";
import dayjs from "dayjs";

type DateVariant = "standard" | "disabled";

export interface DatePickerPropTypes<TFieldValues extends FieldValues>
    extends FormWrapperPropTypes,
        Omit<MuiBaseTextFieldProps, "onError" | "defaultValue">,
        HookFormPropTypes<TFieldValues> {
    name: Path<TFieldValues>;
    label: string;
    helperText?: string;
    infotext?: string;
    onDateSelect?: (d: Date) => void;
    onClose?: () => void;
    availableDates?: string[];
    minDate?: Date;
    maxDate?: Date;
    variant?: DateVariant;
}

const FormDatePicker = <TFieldValues extends FieldValues>(
    props: DatePickerPropTypes<TFieldValues>
) => {
    const {
        name,
        control,
        label,
        onDateSelect,
        availableDates,
        onClose,
        variant = "standard",
        ...rest
    } = props;
    return (
        <FormWrapper
            disableBottom={rest.disableBottom || false}
            disableTop={rest.disableTop || false}
            sx={{
                width: "100%"
            }}
        >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Controller
                    name={name}
                    control={control}
                    defaultValue={rest.defaultValue}
                    render={({
                                 field,
                                 fieldState
                             }) => {
                        return (
                            <><label style={{width: "100%"}}>
                                <Typography variant={"textsm"} sx={{
                                    fontWeight: "medium",
                                    color: theme => theme.palette.textShades[0]
                                }}>{label}</Typography>
                            </label>
                                <DesktopDatePicker
                                    shouldDisableDate={(date) => {
                                        if(variant === "standard"){
                                            return false
                                        }
                                        if(availableDates?.length > 0 && availableDates?.findIndex(d => {
                                            return dayjs(d).format("YYYY-MM-DD") === dayjs(date).format("YYYY-MM-DD")
                                        }) !== -1){
                                            return false
                                        }
                                        return true
                                    }}
                                    inputFormat="tt.mm.jjjj"
                                    sx={{
                                        width: "100%",
                                    }}
                                    slotProps={{
                                        day: {
                                            sx: {
                                                fontWeight: variant=== "disabled" ? "bold !important": "",
                                                textDecoration: variant=== "disabled" ? "underline !important": "",
                                                "&.Mui-disabled": {
                                                    color: "#2027318c !important",
                                                    textDecoration: "none !important",
                                                    fontWeight: "normal !important",
                                                },
                                            }
                                        },
                                        textField:
                                            {
                                                helperText: fieldState.error
                                                    ? `${fieldState?.error?.message + " "}`
                                                    : (rest.helperText = " "),
                                                error: !!fieldState.error,
                                            }
                                    }}

                                    {...field}
                                    name={name}
                                    value={field.value}
                                    onClose={() => {
                                        onClose?.();
                                    }}
                                    onChange={(d) => {
                                        field?.onChange(d)
                                        onDateSelect?.(d)
                                    }}
                                    fullWidth={rest.fullWidth || true}
                                    renderInput={(params) => {
                                        return (
                                            <TextField
                                                {...params}
                                                InputLabelProps={{
                                                    shrink: true,
                                                    style: {
                                                        color: 'black',
                                                        display: 'flex',
                                                    }
                                                }}
                                            />
                                        );
                                    }}
                                />
                            </>
                        );
                    }}
                />
            </LocalizationProvider>

        </FormWrapper>
    );
};

export default FormDatePicker;
