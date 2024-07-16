import {Box, styled} from "@mui/material";
import Typography from "@mui/material/Typography";
import {useTheme} from "@mui/material/styles";
import CircleDot from "src/assets/images/login/circle-dot.svg";
import LoginStepper from "src/app/shared/components/layouts/login-sign-up-slider/login-stepper";
import * as React from "react";
import {SliderDataType} from "src/app/shared/components/layouts/login-sign-up-slider/login-sign-up-slider";
import getOnAppStore from "src/assets/images/login/get-app-store.svg";
import getOnPlayStore from "src/assets/images/login/get-google-play.svg";


type LoginSignUpLeftProps = {
    activeStep: number,
    totalSteps: number,
    step: SliderDataType;
}
const LoginSignUpLeftWrapper = styled("div")(({theme}) => ({
    height: "100vh",
    width: "100%",
    background: theme.palette.primaryTints[90]
}))
const LoginSignUpCircleWrapper = styled("div")(() => ({
    backgroundImage: `url(${CircleDot})`,
    width: "18vh",
    height: "15px",
    backgroundPosition: "left",
    backgroundPositionX: "right",
    backgroundPositionY: "bottom"
}))
const LoginSignUpContentWrapper = styled("div")(() => ({
    display: "flex",
    justifyContent: "center"
}))
const LoginSignUpContentContainer = styled("div")(() => ({
    display: "flex",
    flexDirection: "column",
    width: "80%"
}))
const LoginSignUpImageWrapper = styled("div")(() => ({
    display: "flex",
    justifyContent: "center",
    marginTop: "42px",
}))
const Image = styled("img")(({theme}) => ({
    height: "270px",
    [theme.breakpoints.up("xl")]: {
        height: "500px"
    },
}))
const TitleContentContainer = styled("div")(() => ({
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px"
}))

const StoreImage = styled("img")(() => ({
    width: "150px",
    marginTop: "12px"
}));

const Row = styled("div")(({theme}) => ({
   display: "flex",
   alignItems: "center",
   justifyContent: "center",
   color: theme.palette.text.primary,
   padding: "0px 12px",
   margin: "0 auto",
   maxWidth: "90%"
}));

const ExternalLink = styled("a")(({theme}) => ({
    padding: 0,
    margin: 0
 }));

function LoginSignUpLeft({activeStep, totalSteps, step}: LoginSignUpLeftProps) {
    return(
        <LoginSignUpLeftWrapper>
            <Box
                sx={{
                    width: "100%",
                    height: "85vh",
                }}
            >
            <Box>
                <LoginSignUpCircleWrapper />
                <LoginSignUpContentWrapper>
                    <LoginSignUpContentContainer>
                        <LoginSignUpImageWrapper>
                            <Image src={step.image} />
                        </LoginSignUpImageWrapper>
                        <TitleContentContainer>
                            <Typography variant={"text4xl"} sx={{fontWeight: "bold"}}
                            >
                                {step.title}
                            </Typography>
                            <Typography variant={"textxl"} sx={{fontWeight: "regular"}}
                            >
                                {step.description}
                            </Typography>
                            <LoginStepper activeStep={activeStep} totalSteps={totalSteps}/>
                        </TitleContentContainer>
                    </LoginSignUpContentContainer>
                </LoginSignUpContentWrapper>
            </Box>
            </Box>
            
        </LoginSignUpLeftWrapper>
    )
}
export default LoginSignUpLeft;
