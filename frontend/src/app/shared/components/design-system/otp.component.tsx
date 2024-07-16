import { MuiOtpInput } from 'mui-one-time-password-input'
import {styled} from "@mui/material/styles";
import {THEME_PALETTE} from "src/styles/theme/palette"
export const OtpInput= styled(MuiOtpInput)`
      .MuiOtpInput-TextField {
        input{
          font-size: 26px;
          line-height: 26px;
          color: ${THEME_PALETTE.primary.main};
          padding: 0px !important;
          height: 60px;
        }
      }
`
