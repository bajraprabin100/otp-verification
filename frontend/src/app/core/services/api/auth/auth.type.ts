import { JwtPayload } from "jwt-decode";

export type OtpSourceType = "customer_registration" | "customer_forgot_password" | "customer_change_password";
export type OtpTokenSourceType = "forgot_password" | "set_password";

export type LoginType = {
  username: string;
  password: string;
  rememberMe: boolean
}
export type LoginResponse  ={
    accessToken: string,
    refreshToken: string,
    expireIn: string,
    refreshTokenExpireIn: string
}

export interface ChangePasswordType{
  newPassword: string;
  currentPassword: string;
  confirmPassword?: string;
}

export interface ChangePasswordRequest{
  oldPassword: string;
  newPassword: string;
}

export interface ChangePasswordResponse{

}

export interface ForgotPasswordRequest{
  mobileNo: string;
}

export interface SignUpStep1Request{
    fullName: string,
    mobileNo: string
}

export interface ValidateOtpRequest{
    otp: string,
}

export interface JwtAppPayload extends JwtPayload {
  userId?: string;
}