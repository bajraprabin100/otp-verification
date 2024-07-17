import { styled } from "@mui/material/styles";
import OtpForm from "@/app/pages/home/components/otp-form";

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
        <OtpForm />
      </OtpContainer>
    </OtpWrapper>
  );
}
export default OtpWrapperComponent;
