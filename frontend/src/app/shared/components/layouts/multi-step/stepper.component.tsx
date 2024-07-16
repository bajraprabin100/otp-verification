import {Typography, useTheme, styled} from "@mui/material";
import React from "react";

type StepperProps = {
    activeStep: number,
    totalStep: number,
    goTo: (i: number) => void
}
const StepperWrapper = styled("div")(() => ({
  width: "100%",
  display: "flex",
  gap: "12px"
}))

const StepperContainer = styled("div")(() => ({
  display: "flex",
  width: "100%",
  alignItems: "center",
  gap: "10px"
}))
const StepsDataContainer =styled("div")(() => ({
  display: "flex"
}))
const Steps = styled("a")(() => ({
  height: "8px",
  border: "none",
  borderRadius: "4px",
  width: "100%"
}))

function Stepper({activeStep, totalStep, goTo}: StepperProps) {
    const theme = useTheme();
    return (
        <StepperWrapper>
            <StepperContainer>
                {
                    Array.from(Array(totalStep), (v, i) => {
                        return (
                            i <= activeStep ? <Steps onClick={() => goTo(i)} key={i} style={{
                                    background: theme.palette.primary.main,
                                    cursor: "pointer"
                                }}/> :
                                <Steps key={i} style={{
                                    background: theme.palette.primaryTints[90]
                                }}/>
                        )
                    })

                }
            </StepperContainer>
            <StepsDataContainer>
                <Typography
                    variant={"textxl"}
                    color={theme.palette.primary.main}
                >{activeStep + 1}</Typography>
                <Typography
                    variant={"textxl"}
                    color={theme.palette.primaryTints[80]}
                >{`/${totalStep}`}</Typography>
            </StepsDataContainer>
        </StepperWrapper>
    )
}

export default Stepper;
