import {styled} from "@mui/material/styles";
import FormButton from "src/app/shared/components/design-system/button.component";
import LeftAngle from "src/assets/icons/left-angle.svg?react";
import {Box, Typography, useTheme} from "@mui/material";
import React from "react";
import Stepper from "src/app/shared/components/layouts/multi-step/stepper.component";

export type MultistepComponentType = {
    title?: string;
    subTitle?: string;
    component: React.ReactNode,

}
type MultiStepComponentProps = {
    multiStepComponents?: MultistepComponentType[];
    activeStep:number;
    totalStep: number;
    setActiveStep: (n: number) => void;

}
const MultiStepWrapper = styled("div")``
const MultiStepContainer= styled("div")``

const BackButtonWrapper= styled("div")(() => ({
    display: "flex",
    justifyContent: "start",
    marginBottom: "32px"
}))
const TitleWrapper = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginBottom: "36px"
}))
function MultistepComponent({multiStepComponents, activeStep, totalStep, setActiveStep}: MultiStepComponentProps) {
    const theme = useTheme();
    return (
        <MultiStepWrapper>
            <MultiStepContainer>
                <BackButtonWrapper>
                    <FormButton
                                hidden={activeStep === 0}
                                variant={"icon"}
                                fullWidth={false}
                                iconPos={"start"}
                                icon={<LeftAngle />}
                                size={"small"}
                                onClick={() => {setActiveStep(activeStep-1)}}
                    />
                </BackButtonWrapper>
                <TitleWrapper>
                    {
                        multiStepComponents?.[activeStep]?.title && (
                            <Typography
                                variant="text4xl"
                                sx={{
                                    fontWeight: "bold",
                                    color: theme.palette.textShades[0],
                                }}
                            >
                                {multiStepComponents[activeStep].title}
                            </Typography>
                        )
                    }
                    {
                        multiStepComponents?.[activeStep]?.subTitle && (
                            <Typography
                                variant="textlg"
                                sx={{
                                    fontWeight: "regular",
                                    color: theme.palette.textShades[0],
                                }}
                            >
                                {multiStepComponents[activeStep].subTitle}
                            </Typography>
                        )
                    }
                </TitleWrapper>
                <Box
                    sx={{marginBottom: "34px"}}
                >
                    <Stepper activeStep={activeStep} totalStep={totalStep} goTo={setActiveStep}/>
                </Box>

                {
                    multiStepComponents?.[activeStep]?.component
                }
            </MultiStepContainer>
        </MultiStepWrapper>
    )
}
export default MultistepComponent;
