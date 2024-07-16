import {Typography} from "@mui/material";
import ProfileImageView from "src/app/shared/components/layouts/profile-image-view/profile-image-view";
import {
    RightImageWrapper, RightNameEmailWrapper,
    RightNavProfileWrapper,
    RightNavWrapper
} from "@/app/shared/components/header/components/nav-right/style";
import NavRightDropDown from "@/app/shared/components/header/components/nav-right-drop-down/nav-right-drop-down";
import {useSuspenseQuery} from "@tanstack/react-query";
import {profileQueryOptions} from "@/app/pages/menu/profile/profile-detail/profile-detail.lazy";
import Notification from "@/app/shared/components/header/components/notification/notification";
import Avatar from "@mui/material/Avatar";
import {useNavigate} from "@tanstack/react-router";

function NavRight() {
    const navigate = useNavigate();
    const profileData = useSuspenseQuery(profileQueryOptions)?.data?.data;
    return (
        <RightNavWrapper>
            <Notification/>
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
            <NavRightDropDown/>

        </RightNavWrapper>
    );
}

export default NavRight;
