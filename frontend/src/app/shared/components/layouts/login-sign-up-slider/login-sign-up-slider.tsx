import * as React from 'react';
import Box from '@mui/material/Box';
import {useCallback, useEffect} from "react";
import LoginSignUpLeft from "src/app/shared/components/layouts/login-sign-up-slider/login-sign-up-left";
import OnBoardingOneImage from "src/assets/images/login/onboarding-one.svg";
import {genericMemo} from "src/app/shared/utils";

export type SliderDataType = {
    image: string,
    description: string,
    title: string,
}
const steps: SliderDataType[] = [
    {
        image: OnBoardingOneImage,
        title: "Welcome to Test!",
        description: "Test!"
    }

];

function LoginSignUpSlider() {
    const [activeStep, setActiveStep] = React.useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000)
        //Clearing the interval
        return () => clearInterval(interval);
    }, [activeStep])
    const totalSteps = () => {
        return steps.length;
    };
    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const handleNext = useCallback(() => {
        const newActiveStep =
            isLastStep()
                ? // It's the last step, but not all steps have been completed,
                  // find the first step that has been completed
                0
                : activeStep + 1;
        setActiveStep(newActiveStep);
    }, [activeStep])
    return (
        <Box sx={{width: '100%'}}>
            <LoginSignUpLeft activeStep={activeStep} totalSteps={steps.length} step={steps[activeStep]}/>
        </Box>
    );
}

export default genericMemo(LoginSignUpSlider)
