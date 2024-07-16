import * as yup from "yup";
import {
    newValidatePassword,
    validateFullName,
    validateMobileNumber
} from "@/app/shared/constants/validations-schema";
import {VALIDATION_MESSAGE} from "@/app/shared/constants/validation-messages";

export type SetPasswordType = {
    newPassword: string,
    confirmPassword: string;
}
export const signUpStep1nFormValidation = yup.object().shape({
    mobileNo: validateMobileNumber,
    fullName: validateFullName,
})

export const setPasswordValidation = yup.object({
    newPassword: newValidatePassword,
    confirmPassword: yup.string()
        .oneOf([yup.ref('newPassword'), null], VALIDATION_MESSAGE.basics.password.confirm.mismatch)
        .required(VALIDATION_MESSAGE.basics.password.confirm.required),
})
export const  otpValidation = yup.object({
    otp: yup.string().length(6, 'Each digit must be 6 digit number').matches(/^[0-9]{6}$/, 'OTP must be a number').required('Otp Validation is Required')
  });
