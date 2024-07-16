import { styled } from "@mui/material/styles";
import SignUpStepTwoComponent from "@/app/pages/home/sign-up/components/otp-component";

export const SignUpWrapper = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  width: "100%",
}));

export const SignUpContainer = styled("div")(() => ({
  maxWidth: "421px",
  width: "421px",
  padding: "20px",
}));
function SignUpWrapperComponent() { 
  return (
    <SignUpWrapper>
      <SignUpContainer>
        <SignUpStepTwoComponent />
      </SignUpContainer>
    </SignUpWrapper>
  );
}
export default SignUpWrapperComponent;
