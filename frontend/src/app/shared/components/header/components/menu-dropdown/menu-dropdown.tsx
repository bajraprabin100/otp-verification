import {Box, Fade, Stack} from "@mui/material";
import React, {useState} from "react";
import {FaAngleDown, FaAngleUp} from "react-icons/fa";
import {SmallNavLink, SmallNavLinkTypo} from "@/app/shared/components/header/components/small-screen-header/style";
import {SidebarData} from "@/app/shared/resources/sidebar.data";
import {Link} from "@tanstack/react-router";
import {LinkTypo, LinkWrapper} from "@/app/shared/components/sidebar/style";

type MenuDropdownProps = {
    title: string;
    handleClose: () => void
}

function MenuDropdown({title, handleClose}: MenuDropdownProps) {
    const [showContent, setShowContent] = useState(false);
    return (
        <>
            <Box
                sx={{
                    cursor: "pointer",
                }}
                key={title}
                onClick={() => {
                    setShowContent(!showContent)
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        gap: "20px",
                    }}
                >
                    <SmallNavLinkTypo variant="textsm" fontWeight={"regular"}>{title}</SmallNavLinkTypo>
                    {
                        !showContent ? <FaAngleDown/> : <FaAngleUp />
                    }
                </Box>
            </Box>
            <Fade in={showContent}>
                <Box
                    style={{
                        paddingTop: "0px"
                    }}
                >
                    {
                        SidebarData.map((d, index) => {
                            return (
                                <Stack key={index} spacing={0}>
                                    {
                                        d.menuList.map((m, i) => {
                                            const Icon = m.icon;
                                            return (
                                                <Box key={i} sx={{paddingTop: "0px"}}>
                                                    <Link
                                                        to={m.url}
                                                        style={{textDecoration: "none"}}
                                                        onClick={handleClose}
                                                    >
                                                        {({isActive}) => {
                                                            return (
                                                                <LinkWrapper sx={{
                                                                    paddingTop: "0px",
                                                                    paddingBottom: "0px",
                                                                    height: "38px"
                                                                }} active={isActive} key={i}>
                                                                    <Box
                                                                        sx={{
                                                                            display: "flex",
                                                                            gap: 2,
                                                                            alignItems: "center",

                                                                        }}
                                                                    >
                                                                        <Icon/>
                                                                        <LinkTypo variant={"textsm"} active={isActive}>
                                                                            {m.label}
                                                                        </LinkTypo>
                                                                    </Box>
                                                                </LinkWrapper>
                                                            );
                                                        }
                                                        }
                                                    </Link>
                                                </Box>

                                            );
                                        })
                                    }
                                </Stack>

                            );
                        })
                    }
                </Box>
            </Fade>
        </>
    )
}

export default MenuDropdown;
