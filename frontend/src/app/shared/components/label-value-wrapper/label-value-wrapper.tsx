import { Stack, Typography } from "@mui/material";
import theme from "@styles/theme";
import { ReactNode } from "react";

type LabelValueWrapperType  = {
  label: string;
  value?: string | React.ReactNode;
}
function LabelValueWrapper({label, value}: LabelValueWrapperType) {
  return (
    <Stack
      spacing={1}
    >
      <Typography variant={"textsm"} fontWeight={"regular"} color={theme => theme.palette.textTints[40]}>{label}</Typography>
      {
        typeof value === "string" || value === undefined || value === null ? (
          <Typography variant={"textsm"} fontWeight={"bold"} sx={{ wordWrap: "break-word"}}>{value ? value : "N/A"}</Typography>
        ) : value

      }
    </Stack>
  )
}
export default LabelValueWrapper;
