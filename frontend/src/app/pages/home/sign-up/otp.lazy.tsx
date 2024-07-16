import {createRoute, redirect} from "@tanstack/react-router";
import LoginSignUpLayout from "src/app/shared/components/wrappers/login-sign-up-layout";
import LoginSignUpSlider from "src/app/shared/components/layouts/login-sign-up-slider/login-sign-up-slider";
import SignUpWrapperComponent from "@/app/pages/home/sign-up/components/otp-wrapper.component";
import {rootRoute} from "@/app/pages/root.lazy";


function SignUp() {
    return (
        <>
            <LoginSignUpLayout leftElement={<LoginSignUpSlider/>} rightElement={<SignUpWrapperComponent/>}/>
        </>
    )
}

type SignUpLazyParams = {
    step?: number,
    fullName?: string,
    mobileNo?: string,
    otpToken?: string,

}
export const signUpRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: SignUp,
    validateSearch: (search: Record<string, string>): SignUpLazyParams => {
        return {}
    },
    beforeLoad: ({context, location}) => {
        if(context.auth.isAuthenticated()){
            throw redirect({
                to:"/home"
            })
        }
    }


})
