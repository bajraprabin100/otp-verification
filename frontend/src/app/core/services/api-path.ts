export const API_PATH = {
  config: {
    apiUrl: import.meta.env.VITE_APP_BASE_URL,
   },
  customer: {
    auth: {
      validateOtp: "otp/validate",
      refreshToken:''
    },
  }
  }
