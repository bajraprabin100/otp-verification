import Autocomplete, {
  AutocompleteProps as MuiAutocompleteProps,
} from "@mui/material/Autocomplete";
import CircularProgress from "@mui/material/CircularProgress";
import TextField, {
  BaseTextFieldProps as MuiBaseTextFieldProps,
} from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import {ReactNode, useEffect, useState} from "react";
import {Controller, FieldValues, Path, useFormState} from "react-hook-form";
import FormWrapper, { FormWrapperPropTypes } from "./wrapper.component";
import InputAdornment from "@mui/material/InputAdornment";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { HasIconPropTypes, HookFormPropTypes } from "@/app/shared/types/form.types";
import { lStrim } from "@/app/shared/utils";
export interface AutocompletePropTypes<T,TFieldValues extends FieldValues, R>
  extends FormWrapperPropTypes,
    Pick<MuiBaseTextFieldProps, "color">,
    HasIconPropTypes,
    HookFormPropTypes<TFieldValues>,
    MuiAutocompleteProps {
  options: T[]
  name: Path<TFieldValues>;
  label?: string | ReactNode;
  loading?: boolean;
  helperText?: string;
  onChange?: (...args: any) => void;
  shrink?: boolean;
  clearOnSelect?: boolean;
  optional?: boolean;
  optionalText?: string;
  infotext?: string;
  placeholder?: string;
  valueExtractor?: (item: T) => R;
}

export interface AutocompleteListType {
  text: string;
  value: string;
  inputValue?: string;
}

const FormAutocomplete = <T,TFieldValues extends FieldValues, R = number>(
  props: AutocompletePropTypes<T,TFieldValues, R>
) => {
  const {
    name,
    control,
    loading,
    label,
    color,
    options,
    getOptionLabel,
    getOptionKey,
    clearOnSelect = false,
    optional = false,
    optionalText,
    labelExtractor,
    keyExtractor,
    valueExtractor,
    onChange,
    ...rest
  } = props;
  const [inputValue, setInputValue] = useState<string>("");
  const [showTooltip, setshowTooltip] = useState<boolean>(false);

  useEffect(() => {
    if(!control._getWatch(name)){
      setInputValue("")
    }
  }, [control._getWatch(name)]);

  const handleInputChange = (
    event: any,
    newInputValue: string,
    reason: string
  ): void => {
    setInputValue(lStrim(newInputValue));
    if (reason === "reset" && clearOnSelect) {
      setInputValue("");
    }
  };

  return (
    <FormWrapper
      disableBottom={rest.disableBottom || false}
      disableTop={rest.disableTop || false}
    >
      <Controller
        name={name}
        control={control}
        defaultValue={rest.defaultValue}
        render={({
          field,
          fieldState
        }) => {
          return (
            <Autocomplete<T>
                sx={{
                  "&& .MuiAutocomplete-input": {
                    padding: "10px 4px"
                  }
                }}
              {...rest}
              value={field.value || null}
              disabled={!options}
              options={options || []}
              loading={loading || false}
              onChange={(_, data) => {
                field.onChange(data);
                clearOnSelect && setInputValue("");
                onChange?.(data);
              }}
              onBlur={field.onBlur}
              // For unique key
              renderOption={(props, option) => {
                return (
                  <li {...props} key={getOptionKey(option)}>
                    {getOptionLabel(option)}
                  </li>
                );
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  name={name}
                  disabled={rest.disabled}
                  placeholder={rest.placeholder || "Select"}
                  label={
                    <>
                      <Typography variant={"textsm"} sx={{
                        fontWeight: "medium",
                        color: theme => theme.palette.textShades[0]
                      }}>{label}</Typography>
                      {optional && (
                        <Typography variant="caption2" ml={0.5}>
                          (optional)
                        </Typography>
                      )}
                      {optionalText && (
                        <Typography variant="subtitle2" ml={0.5}>
                          {optionalText}
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
                  error={!!fieldState.error}
                  helperText={
                    !!fieldState.error && !rest.disabled
                      ? `${fieldState?.error?.message + " "}`
                      : rest.helperText || " "
                  }
                  InputLabelProps={{
                    shrink: rest.shrink || true,
                    style: {
                      display: "flex",
                      flexWrap: "wrap",
                      color: "black",
                    }
                  }}
                  color={color ?? "primary"}
                  InputProps={{
                    ...params.InputProps,
                    sx: {
                      height: "51px",
                    },
                    startAdornment:
                      rest.hasIcon && rest.iconPos === "start" ? (
                        <InputAdornment position={rest.iconPos} sx={{ padding: "0 10px" }}>{rest.icon}</InputAdornment>
                      ) : null,

                    endAdornment: (
                      <>
                        {loading ? (
                          <CircularProgress
                            color="primary"
                            sx={{
                              width: "20px !important",
                              height: "20px !important",
                              animation: "unset",
                              marginRight: "10px",
                            }}
                          />
                        ) : params.InputProps.endAdornment}
                        {}
                      </>
                    ),
                  }}
                />
              )}
              getOptionLabel={(option) => getOptionLabel(option)}
              isOptionEqualToValue={(option, value) => {
                if(!control._getWatch(name)) {
                  setInputValue("")
                  field.onChange(null)
                  return false
                }
                return value ? valueExtractor(option) === (valueExtractor(value) || value) : false;
              }}
              fullWidth={rest.fullWidth || true}
              inputValue={inputValue}
              onInputChange={handleInputChange}
            />
          );
        }}
      />
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

export default FormAutocomplete;
