import {
  AuthenticatedWrap
} from "src/app/shared/components/wrappers/authenticated-wrapper/style";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";

type AuthenticatedWrapperProps = {
  leftElement: React.ReactNode;
  rightElement: React.ReactNode;
}
function AuthenticatedWrapper({leftElement, rightElement}:AuthenticatedWrapperProps) {
  return (
    <AuthenticatedWrap>
      <Grid container spacing={3}>
        <Grid xs={12} xl={3} md={8} lg={3}>
            {leftElement}
        </Grid>
        <Grid xs={12} xl={9} md={12} lg={9}>
          {rightElement}
        </Grid>
      </Grid>
    </AuthenticatedWrap>
  );
}

export default AuthenticatedWrapper;
