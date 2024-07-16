import { AppBar, Box, CardActionArea, Divider, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Logo from "src/assets/images/app/logo.svg?react";
import BellIcon from "src/assets/icons/bell.svg?react";
import HamBurger from "src/assets/icons/hamburger.svg?react";
import FormButton from "@/app/shared/components/design-system/button.component";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { Logout } from "@mui/icons-material";
import { NavigationData } from "@/app/shared/resources/navigation.data";
import MenuDropdown from "@/app/shared/components/header/components/menu-dropdown/menu-dropdown";
import { NavListTypes } from "@/app/shared/components/header/components/nav-list/nav-list";
import {
  SmallNavLink,
  SmallNavLinkTypo,
  SmallScreenMenu
} from "@/app/shared/components/header/components/small-screen-header/style";
import {
  RightImageWrapper,
  RightNameEmailWrapper,
  RightNavProfileWrapper
} from "@/app/shared/components/header/components/nav-right/style";
import { CONTACT_US_CONTENT } from "@/app/shared/content/contact-us.content";
import {useSuspenseQuery} from "@tanstack/react-query";
import {profileQueryOptions} from "@/app/pages/menu/profile/profile-detail/profile-detail.lazy";
import {useQuery} from "@tanstack/react-query";
import {getContactData} from "@/app/core/services/api/contact/contact.service";
import {useAuth} from "@/app/core";
import {useNavigate} from "@tanstack/react-router";
import Avatar from "@mui/material/Avatar";
import Notification from "@/app/shared/components/header/components/notification/notification";

function SmallScreenHeader() {
  const theme = useTheme();
  const auth = useAuth();
  const navigate = useNavigate();
  const navigationItems = NavigationData;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const profileData = useSuspenseQuery(profileQueryOptions)?.data?.data
  const {data} = useQuery({
    queryKey: ["contact-us"],
    queryFn: getContactData
  })
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (

    <>
      <AppBar sx={{
        background: theme.palette.background.default,
        paddingLeft: "4%",
        paddingRight: "4%",
        paddingTop: "2%",
        paddingBottom: "2%"

      }} position={"sticky"}>
        <Grid container justifyContent={"space-between"}>
          <Grid sx={{
            display: "flex",
            alignItems: "center"
          }}>
            <FormButton
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              variant="icon"
              iconPos={"start"}
              icon={<HamBurger/>}
            />
          </Grid>
          <Grid>
              <Box
                  sx={{
                      cursor: "pointer",
                  }}
                  onClick={() => navigate({to: "/"})}
              >
                  <Logo width={"138px"} height={"46px"}/>
              </Box>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              alignItems: "center"
            }}
          >
            <Notification />
          </Grid>
        </Grid>


      </AppBar>
      <SmallScreenMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{}}
      >

        <Stack spacing={2}>
          <Box
              sx={{
                  cursor: "pointer",
              }}
              onClick={() => navigate({to: "/"})}
          >
            <Logo height={"44px"} width={"133px"}/>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between"
            }}
          >
            <RightNavProfileWrapper
                onClick={() => {
                    navigate({to: "/menu/profile"})
                }}
            >
              <RightImageWrapper>
                <Avatar
                    sx={{
                      width: "35px",
                      height: "35px"
                    }}
                    src={profileData?.profileImage?.url}
                />
              </RightImageWrapper>
              <RightNameEmailWrapper>
                <Typography
                  variant={"textxs"}
                  sx={{
                    textWrap: "nowrap",
                    fontWeight: "bold"
                  }}
                >
                  {profileData?.fullName}
                </Typography>
                <Typography
                  variant={"textxs"}
                  sx={{
                    textWrap: "nowrap",
                    fontWeight: "regular"
                  }}
                >
                  {profileData?.email}
                </Typography>
              </RightNameEmailWrapper>
            </RightNavProfileWrapper>
            <Box>
              <FormButton
                variant="icon"
                iconPos={"start"}
                onClick={() => {
                  auth.logout();
                  setTimeout(() => {
                    navigate({
                      to: "/"
                    });
                  },200)
                }}
                icon={<Logout sx={{ color: theme.palette.primary.main }}/>}
              />
            </Box>
          </Box>
          <Divider/>
          <Stack spacing={2}>
            <Typography variant="textBase" fontWeight={"bold"}>Menu</Typography>
            {navigationItems?.map((item: NavListTypes) => {
              return item?.name === "Menu" ?
                (<MenuDropdown key={item.name} title={item?.name} handleClose={handleClose}/>)
                : (
                  <SmallNavLink
                    key={item.name}
                    to={item.url}
                    onClick={handleClose}
                  >
                    <SmallNavLinkTypo variant="textsm" fontWeight={"regular"}>{item.name}</SmallNavLinkTypo>
                  </SmallNavLink>
                );
            })}
          </Stack>
        </Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Grid container gap={1}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center"
              }}
            >
              <Typography variant="textsm" fontWeight={"medium"} color={theme => theme.palette.textShades[0]}>Follow us:</Typography>
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
        </Box>

      </SmallScreenMenu>
    </>
  );
}

export default SmallScreenHeader;
