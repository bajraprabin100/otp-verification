import {useMediaQuery} from "@mui/material";
import TopNav from "@/app/shared/components/header/components/top-nav/top-nav";
import MenuNav from "@/app/shared/components/header/components/menu-nav/menu-nav";
import {useTheme} from "@mui/material/styles";
import {NotificationProvider} from "@/app/core/services/notification";

function Header() {
    const theme = useTheme()
    const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"))
    return (
        <>
            <NotificationProvider>
                {
                    !isMediumScreen && (<TopNav/>)
                }
                <MenuNav/>
            </NotificationProvider>
        </>
    )
}

export default Header;
