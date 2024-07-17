import * as yup from "yup";
import { VALIDATION_MESSAGE } from "@/app/shared/constants/validation-messages";

export const otpValidation = yup.object({
  otp: yup
    .string()
    .length(6, VALIDATION_MESSAGE.basics.otp.length)
    .matches(/^[0-9]{6}$/, VALIDATION_MESSAGE.basics.otp.number)
    .required(VALIDATION_MESSAGE.basics.otp.required),
});
