import DateRangePicker, {DateRangePickerProps} from "@wojtekmaj/react-daterange-picker";

import { InputLabelProps as MuiInputLabelProps } from "@mui/material/InputLabel";
import {
  BaseTextFieldProps as MuiBaseTextFieldProps,
} from "@mui/material/TextField";
import "@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css";
import { ReactNode } from "react";
import "react-calendar/dist/Calendar.css";
import { Controller, FieldPathValue, FieldValues, Path } from "react-hook-form";
import FormWrapper, { FormWrapperPropTypes } from "./wrapper.component";

import { Typography } from "@mui/material";
import { HasIconPropTypes, HookFormPropTypes } from "@/app/shared/types/form.types";
import { useTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import { CalendarIcon } from "@mui/x-date-pickers";
import dayjs from "dayjs";

export interface DateRangePropTypes<TFieldValues extends FieldValues>
  extends MuiBaseTextFieldProps,
    Pick<MuiInputLabelProps, "shrink">,
    HasIconPropTypes,
    FormWrapperPropTypes,
    HookFormPropTypes<TFieldValues>, DateRangePickerProps {
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
  minDate?: Date;
  maxDate?: Date;
  availableDates?: string[];
}
interface DateRangeType extends DateRangePickerProps{
  error: boolean;
}
const DateRangeContainer = styled(DateRangePicker,{
  shouldForwardProp: (prop) => {
    return prop !== "error";
  },
})<DateRangeType>(({ theme,error }) => ({
  height: "51px",
  "& .react-daterange-picker__wrapper":{
    borderRadius: "5px",
    border: error ? `1px solid  ${theme.palette.error.main}` : `1px solid  ${theme.palette.textTints[80]}`,
    padding: "10px",
    width: "100%",
    "& .react-daterange-picker__inputGroup": {
      minWidth: "72px",
      flexGrow: 0
    },
    "& .react-daterange-picker__button":{
      marginLeft: "auto"
    }
  }
}));



const FormDateRangePicker = <TFieldValues extends FieldValues>(
  props: DateRangePropTypes<TFieldValues>
) => {
  const theme = useTheme();
  const {
    minDate,
      maxDate,
    label,
    name,
    control,
      availableDates,
    ...rest
  } = props;

  return <FormWrapper
    disableBottom={rest.disableBottom || false}
    disableTop={rest.disableTop || false}
    wrapperFullWidth={rest.wrapperFullWidth ?? true}
    sx={{
      ...rest.sx,
      padding: 0
    }}
  >
    <Controller
      name={name}
      control={control}
      defaultValue={rest.defaultValue}
      render={({
        field,
        fieldState
      }) => {
        //
        const dateArr = field?.value?.split(" - ");

        return (
          <FormControl
            sx={{paddingTop: "0.2rem"}}
            component="fieldset"
            variant="standard"
            required={rest.required || false}
            error={!!fieldState.error}
            fullWidth={rest.fullWidth || true}
          >
            <Typography variant={"textsm"} sx={{fontWeight: "medium", marginBottom:"5px", color: theme => theme.palette.textShades[0]}}>{label}</Typography>
            <DateRangeContainer
              sx={{width: "100%", height: "51px"}}
              calendarIcon={<CalendarIcon style={{fill: "rgba(117, 117, 117, 1)" }}/>}
              value={[dateArr?.[0], dateArr?.[1]]}
              minDate={minDate}
              maxDate={maxDate}
              format={"d/MM/yyyy"}
              clearIcon={null}
              error={!!fieldState.error}
              tileDisabled={({activeStartDate, date, view}) =>{
                if(view !== "month" || (view === "month" && availableDates?.length > 0 && availableDates?.findIndex(d => {
                  return dayjs(d).format("YYYY-MM-DD") === dayjs(date).format("YYYY-MM-DD")
                      && dayjs(d).isAfter(dayjs(activeStartDate))
                }) !== -1)) {
                  return false
                }
                return true
              }}
              tileClassName={({activeStartDate, date, view}) => {
                let className = "";
                if(availableDates?.length > 0 && availableDates?.findIndex(d => {
                  return dayjs(d).format("YYYY-MM-DD") === dayjs(date).format("YYYY-MM-DD")
                      && dayjs(d).isAfter(dayjs(activeStartDate))
                }) !== -1) {
                  className = className.concat(" ","available-date")
                }
                if(dayjs(date).day() === 0 || dayjs(date).day() === 6) {
                  className = className.concat(" ","normal-date")
                }
                if((dayjs(date).isAfter(dayjs(dateArr?.[0])) && dayjs(date).isBefore(dayjs(dateArr?.[1])))) {
                  className = className.concat(" ","selected-date")
                }
                return className
              }}
              onChange={(value: any) => {
                const dateArr = value.map((el: Date, index: number) => {
                  if (index === 0) {

                    const currentDate = el;

                    // Create a new date object for the next day due to error in the daterange library
                    const nextDay = new Date(currentDate);
                    nextDay.setDate(currentDate.getDate() + 1);

                    return nextDay.toISOString()
                      .split("T")[0];
                  }
                  return el.toISOString()
                    .split("T")[0];

                });
                field.onChange(dateArr.join(" - "));
              }}
            />
            <FormHelperText error={!!fieldState.error}>
              {fieldState.error
                ? `${fieldState?.error?.message + " "}`
                : (rest.helperText = " ")}
            </FormHelperText>
          </FormControl>
        );
      }}
    />
  </FormWrapper>;
};

export default FormDateRangePicker;
