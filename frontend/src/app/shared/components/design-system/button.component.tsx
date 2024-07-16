import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import {ButtonProps as MuiButtonProps} from "@mui/material/Button";
import {HasIconPropTypes} from "../../types/form.types";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

export interface ButtonPropTypes
    extends
        HasIconPropTypes,
        MuiButtonProps {
    // basic
    value?: string;
    type?: "button" | "submit" | "reset";
    width?: string;
    height?: string;
    // Is button upload type
    isUploadBtn?: boolean;
    uploadType?: HTMLInputElement;

    // Is button has loader icon after clicking
    loader?: boolean;

    // If form submit button is outside the form
    form?: string;
    buttonSx?: SxProps<Theme>;
}

const FormButton = (props: ButtonPropTypes) => {
    const {
        name,
        value,
        type = "submit",
        href,
        isUploadBtn = false,
        uploadType,
        hasIcon = false,
        iconPos = "end",
        icon,
        loader = false,
        onClick,
        size = "medium",
        ...rest
    } = props;
    return (
        <div>
            {
                !rest.hidden && <Button
                    value={value}
                    id={value || rest.id}
                    type={type}
                    variant={rest.variant || "contained"}
                    disabled={rest.disabled || false}
                    href={href!}
                    color={rest.color || "primary"}
                    size={size}
                    fullWidth={rest.fullWidth}
                    onClick={onClick}
                    startIcon={icon && iconPos === "start" && icon}
                    endIcon={icon && iconPos === "end" && icon}
                    component={isUploadBtn ? "label" : "button"}
                    form={rest.form || undefined}
                    sx={rest.buttonSx}
                >
                    <>
                        {isUploadBtn && uploadType}
                        {loader && (
                            <span
                                style={{
                                    fontSize: "1rem",
                                    marginRight: "1rem",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    zIndex: "99",
                                }}
                            >
                                <CircularProgress size="1rem" color="inherit"/>
                            </span>
                        )}

                        {name}
                    </>
                </Button>
            }
        </div>
    );
};

export default React.memo(FormButton);
