import Box from "@mui/material/Box";
import {PasswordValidationReturnType} from "src/app/shared/utils/password-validitor";
import {Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import GreenTick from "src/assets/icons/green-tick.svg?react";
import GrayCross from "src/assets/icons/gray-cross.svg?react";

export interface PasswordValidatorPropTypes {
  list: PasswordValidationReturnType[];
}
const ValidPasswordMessageWrapper = styled("div")`
    display: flex;
    flex-direction: column;
    gap: 18px;
  
`
const PasswordMessageWrapper = styled("div")`
    display: flex;
    gap: 8px;
    align-items: center;
  
`
const PasswordValidator = (props: PasswordValidatorPropTypes) => {
  return (
    <Box sx={{marginBottom:"15px"}}>
        <Box
            sx={{ marginBottom: "15px" }}
        >
            <Typography variant="textsm">
                In order to protect your account,make sure your password is:
            </Typography>
        </Box>
        <ValidPasswordMessageWrapper>
      {props.list?.map((item: PasswordValidationReturnType, index) => {
        return (
            <PasswordMessageWrapper key={index}>
                {
                    item.error ? <GrayCross /> : <GreenTick />
                }
                <Typography
                    variant={"textsm"}
                >
                    {item.message}
                </Typography>
            </PasswordMessageWrapper>
        );
      })}
        </ValidPasswordMessageWrapper>

    </Box>
  );
};

export default PasswordValidator;
