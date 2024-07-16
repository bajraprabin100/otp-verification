import { Box, Typography, useTheme } from "@mui/material";
import FormButton from "@/app/shared/components/design-system/button.component";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { OtpInput } from "@/app/shared/components/design-system/otp.component";
import { useMutation } from "@tanstack/react-query";
import { validateOtp } from "@/app/core/services/api/auth/auth.service";
import toastFunctions from "@/app/shared/components/toast/toast";
import { TOAST_CONTENT } from "@/app/shared/content/toast.content";
import { ErrorResponse } from "@/app/core/services/type/request-response.type";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { otpValidation } from "@/app/pages/home/sign-up/components/validation";
import { useNavigate } from "@tanstack/react-router";

export const RetryTextWrapper = styled("div")`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RetryTextContainer = styled("div")`
  display: flex;
  gap: 3px;
`;

function OtpComponent() {
  const { successMsg, errorMsg } = toastFunctions();
  const navigate = useNavigate();
  const [otp, setOtp] = React.useState("");
  const [disableNext, setDisableNext] = useState(true);

  const { mutate: mutateOtp, isPending } = useMutation({
    mutationFn: validateOtp,
    onSuccess: (res) => {
      successMsg(TOAST_CONTENT.auth.signUp.otp.verification.success.desc);
      navigate({
        to: "/success",
      });
    },
    onError: (error: ErrorResponse) => {
      errorMsg(
        error?.response?.data?.message,
        TOAST_CONTENT.auth.signUp.otp.verification.success.title
      );
    },
  });
  const handleChange = (newValue: string) => {
    setOtp(newValue);
    if (newValue.length < 6) {
      setDisableNext(true);
    }
  };
  const completeOtp = () => {
    setDisableNext(false);
  };
  const onSubmit: SubmitHandler<any> = (data: any) => {
    mutateOtp({
      otp: otp,
    });
  };
  const { handleSubmit, control } = useForm({
    mode: "all",
    resolver: yupResolver(otpValidation),
  });

  return (
    <Box>
      <Box>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex justify-center items-center mt-3 flex-col gap-5"
        >
          <Controller
            name="otp"
            control={control}
            render={({ field, fieldState: { error } }) => (
              <div>
                <OtpInput
                  {...field}
                  length={6}
                  value={otp}
                  onChange={(value) => {
                    handleChange(value);
                    field.onChange(value);
                  }}
                  onComplete={completeOtp}
                  TextFieldsProps={(index) => ({
                    sx: {
                      border:
                        otp[index] !== undefined && isNaN(parseInt(otp[index]))
                          ? "1px solid red"
                          : "1px solid #ccc",
                      color: index == 0 ? "red" : "inherit",
                      ...(index % 2 === 0 && { backgroundColor: "#f0f0f0" }),
                    },
                  })}
                />
                {error && (
                  <Typography color="error" variant="body2">
                    {error.message}
                  </Typography>
                )}
              </div>
            )}
          />
          <Box
            style={{
              marginTop: "34px",
            }}
          >
            <FormButton
              name="Submit"
              value="next"
              fullWidth
              loader={isPending}
              disabled={disableNext || isPending}
            />
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default OtpComponent;
