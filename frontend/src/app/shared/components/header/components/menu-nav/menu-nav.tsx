
import { useMediaQuery } from "@mui/material";
import {
  LogoWrapper,
  MenuLogoContainer,
  MenuNavContainer,
  MenuNavWrapper
} from "@/app/shared/components/header/components/menu-nav/style";
import Logo from "src/assets/images/app/logo.svg?react"
import NavRight from "@/app/shared/components/header/components/nav-right/nav-right";
import NavList from "@/app/shared/components/header/components/nav-list/nav-list";
import SmallScreenHeader from "@/app/shared/components/header/components/small-screen-header/small-screen-header";
import {useTheme} from "@mui/material/styles";
import {useNavigate} from "@tanstack/react-router";
function MenuNav(){
  const navigate = useNavigate();
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme?.breakpoints?.down("lg"))
  return (
    <>
      {
        !isMediumScreen ? (
          <MenuNavWrapper>
            <MenuNavContainer>
              <MenuLogoContainer>
                <LogoWrapper onClick={() => {
                  navigate({to: "/"})
                }}>
                  <Logo width={"138px"} />
                </LogoWrapper>
                <NavList />
              </MenuLogoContainer>
              <NavRight />
            </MenuNavContainer>
          </MenuNavWrapper>
        ) : (<SmallScreenHeader />)
      }
    </>
  )
}
export default MenuNav;
