import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "@tanstack/react-router";

import { TOAST_CONTENT } from "@/app/shared/content/toast.content";
import { ErrorResponse } from "@/app/core/services/type/request-response.type";
import { OtpSubmit } from "@/app/shared/types";
import { validateOtp } from "@/app/core/services/api/auth/auth.service";
import { otpValidation } from "@/app/pages/home/components/validation";
import { OtpInput } from "@/app/shared/components/design-system/otp.component";
import FormButton from "@/app/shared/components/design-system/button.component";
import toastFunctions from "@/app/shared/components/toast/toast";
import "@/app/pages/home/components/otp-form.scss";
import { ROUTE_PATHS } from "@/app/shared/constants";

function OtpForm() {
  const { successMsg, errorMsg } = toastFunctions();
  const navigate = useNavigate();
  const [otp, setOtp] = useState<string>("");
  const [disableNext, setDisableNext] = useState<boolean>(true);

  const { mutate: mutateOtp, isPending } = useMutation({
    mutationFn: validateOtp,
    onSuccess: (res) => {
      successMsg(TOAST_CONTENT.auth.signUp.otp.verification.success.desc);
      navigate({
        to: ROUTE_PATHS.success,
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
  const onSubmit: SubmitHandler<OtpSubmit> = (data: OtpSubmit) => {
    mutateOtp({
      otp: data.otp,
    });
  };
  const { handleSubmit, control } = useForm({
    mode: "all",
    resolver: yupResolver(otpValidation),
  });

  return (
    <Box>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center items-center mt-3 flex-col gap-5"
      >
        <Controller
          name="otp"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <div className="otp_form">
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
                  className:
                    otp[index] !== undefined && isNaN(parseInt(otp[index]))
                      ? "error"
                      : "success",
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
  );
}

export default OtpForm;
