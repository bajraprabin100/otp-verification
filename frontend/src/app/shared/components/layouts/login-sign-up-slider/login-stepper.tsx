import React from "react";
import {Box, useTheme} from "@mui/material";
import {styled} from "@mui/material/styles";

type LoginStepperProps = {
    totalSteps: number;
    activeStep: number;
}

const Stepper = styled("div")`
    width: 6px;
    height: 6px;
    border-radius: 12px;
`
const ActiveStepper = styled("div")`
    width: 33px;
    height: 6px;
    border-radius: 12px;
`


function LoginStepper({totalSteps, activeStep}: LoginStepperProps) {
    const theme = useTheme();
    return(
        <>
            <Box
                sx={{
                    display: "flex",
                    gap: "2px"
                }}
            >
            {
                Array.from(Array(totalSteps), (v,i) => {
                    return (
                        i === activeStep ? <ActiveStepper key={i}
                                style={{background: theme.palette.primary.main}}
                            />
                            : <Stepper key={i}
                                style={{background: theme.palette.primaryTints[70]}}
                            />
                    )
                })
            }
            </Box>
        </>
    )
}

export default React.memo(LoginStepper);
