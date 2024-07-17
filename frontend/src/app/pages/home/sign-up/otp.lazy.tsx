import { createRoute, redirect } from "@tanstack/react-router";
import LoginSignUpLayout from "src/app/shared/components/wrappers/login-sign-up-layout";
import LoginSignUpSlider from "src/app/shared/components/layouts/login-sign-up-slider/login-sign-up-slider";
import SignUpWrapperComponent from "@/app/pages/home/sign-up/components/otp-wrapper.component";
import { rootRoute } from "@/app/pages/root.lazy";
import { ROUTE_PATHS } from "@/app/shared/constants";
import OtpWrapperComponent from "@/app/pages/home/sign-up/components/otp-wrapper.component";

function Otp() {
  return (
    <>
      <LoginSignUpLayout
        leftElement={<LoginSignUpSlider />}
        rightElement={<OtpWrapperComponent />}
      />
    </>
  );
}

type OtpLazyParams = {
  step?: number;
  fullName?: string;
  mobileNo?: string;
  otpToken?: string;
};
export const signUpRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: ROUTE_PATHS.landing,
  component: Otp,
  validateSearch: (search: Record<string, string>): OtpLazyParams => {
    return {};
  },
  beforeLoad: ({ context, location }) => {
    if (context.auth.isAuthenticated()) {
      throw redirect({
        to: "/home",
      });
    }
  },
});
