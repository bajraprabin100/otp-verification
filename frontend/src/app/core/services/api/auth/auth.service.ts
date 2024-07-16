import { Response } from "@/app/core/services/type/request-response.type";
import { API_PATH } from "@/app/core/services/api-path";
import {
  LoginResponse,
 ValidateOtpRequest
} from "@/app/core/services/api/auth/auth.type";
import axiosInstance from "@/app/core/services/api";
export const getTokenUsingRefreshToken = async (refreshToken: string): Promise<Response<LoginResponse>> => {
  const response = await axiosInstance.post(`${API_PATH.customer.auth.refreshToken}`, {refreshToken});
  return response.data;
}
export const validateOtp = async (data: ValidateOtpRequest): Promise<Response<null>> => {
  const response = await axiosInstance.post(`${API_PATH.customer.auth.validateOtp}`, {...data});
  return response.data;
}

