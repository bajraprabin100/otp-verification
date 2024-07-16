import {Box, CardActionArea, Typography, useTheme} from "@mui/material";
import { TopNavContainer, TopNavWrapper } from "@/app/shared/components/header/components/top-nav/style";
import {CONTACT_US_CONTENT} from "@/app/shared/content/contact-us.content";
import Grid from "@mui/material/Unstable_Grid2";
import React from "react";
import {useQuery} from "@tanstack/react-query";
import {getContactData} from "@/app/core/services/api/contact/contact.service";

function TopNav() {
  const theme = useTheme();
    const {data} = useQuery({
        queryKey: ["contact-us"],
        queryFn: getContactData
    })
  return(
      <TopNavWrapper>
        <TopNavContainer>
            <Grid container gap={1}>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    <Typography variant="textsm" fontWeight={"medium"} color={theme => theme.palette.textTints[100]}>Follow us:</Typography>
                </Box>
                {
                    CONTACT_US_CONTENT.socialMedia.mediaLinks.map((d,i) => {
                        return(<Grid key={i}>
                                <CardActionArea
                                    sx={{
                                        display: "flex",
                                        alignItems: "center"
                                    }}
                                    onClick={() => {
                                        window.open(data?.data?.[d.key], '_blank')
                                    }}
                                >
                                    <img src={d.icon} height={"24px"} width={"24px"}/>
                                </CardActionArea>
                            </Grid>
                        )
                    })
                }
            </Grid>
          <Typography variant={"textBase"} color={theme.palette.text.secondary}>
              {data?.data?.mobileNumber}, {data?.data?.phoneNumber}
          </Typography>
        </TopNavContainer>
      </TopNavWrapper>
  )
}
export default TopNav;
