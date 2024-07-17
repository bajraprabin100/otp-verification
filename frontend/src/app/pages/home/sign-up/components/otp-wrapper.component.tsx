import { styled } from "@mui/material/styles";
import OtpComponent from "@/app/pages/home/sign-up/components/otp-form";

export const OtpWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  width: "100%",
}));

export const OtpContainer = styled("div")(() => ({
  maxWidth: "421px",
  width: "421px",
  padding: "20px",
}));
function OtpWrapperComponent() {
  return (
    <OtpWrapper>
      <OtpContainer>
        <OtpComponent />
      </OtpContainer>
    </OtpWrapper>
  );
}
export default OtpWrapperComponent;
