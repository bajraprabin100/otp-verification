import React from "react";
import Grid from "@mui/material/Grid";
import { AppBar } from "@mui/material";

type LoginSignUpLayoutProps = {
    leftElement: React.ReactNode;
    rightElement: React.ReactNode;
}
function LoginSignUpLayout({leftElement, rightElement}:LoginSignUpLayoutProps){
    return (
      <Grid container>
          <Grid item xl={6} lg={6} display={{ xs: "none", sm: "none",lg: "block", xl: "block"}}>
            <AppBar position={"fixed"} sx={{width: "50%", left: 0}}>
              {leftElement}
            </AppBar>
          </Grid>
          <Grid item xl={6} lg={6} sm={12} xs={12}>
              {rightElement}
          </Grid>
      </Grid>

    )
}
export default LoginSignUpLayout;
