import {
    ProfileDetailsWrapper, ProfileImageContainer
} from "src/app/shared/components/profile-details/style";
import {Box, Divider, Paper, Stack, Typography, useTheme} from "@mui/material";
import Status from "src/app/shared/components/chips/status.component";
import dayjs from "dayjs";
import {ProfileType} from "@/app/core/services/api/profile/profile.type";
import Avatar from "@mui/material/Avatar";
import PhoneIcon from "src/assets/icons/phone.svg?react";
import EmailIcon from "src/assets/icons/email.svg?react";
import CalenderIcon from "src/assets/icons/calander.svg?react";

type ProfileDetailsProps = {
    profileData: ProfileType
}

function ProfileDetails({profileData}: ProfileDetailsProps) {
    const theme = useTheme();
    return (
        <ProfileDetailsWrapper>
            <Paper
                elevation={0}
                sx={{
                    padding: "20px",
                    borderRadius: "12px"
                }}
            >
                <Stack spacing={2}>
                    <Stack spacing={1} alignItems={"center"}>

                        <ProfileImageContainer>
                            <Avatar
                                sx={{
                                    width: "163px",
                                    height: "163px"
                                }}
                                src={profileData?.profileImage?.url}
                            />
                        </ProfileImageContainer>

                        <Box>
                            <Stack spacing={0} justifyContent={"center"} alignItems={"center"}>
                                <Typography variant={"textxl"} fontWeight={"bold"}>
                                    {profileData?.fullName}
                                </Typography>
                            </Stack>
                        </Box>

                    </Stack>
                    <Paper elevation={0} sx={{
                        padding: "8px, 24px",
                        border: `1px solid ${theme.palette.textTints[90]}`

                    }}>
                        <Stack spacing={1} alignItems={"center"} padding={"5px"}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                }}
                            >
                                <Typography
                                    variant={"textxs"}
                                    sx={{
                                        color: theme.palette.text.primary,
                                        fontWeight: "bold"
                                    }}
                                >
                                    Status:
                                </Typography>
                                <Status label={profileData?.isActive ? "Active" : "Inactive"}
                                        color={profileData?.isActive ? "success" : "warning"}/>
                            </Box>
                            <Box>
                                <Typography
                                    variant={"textxs"}
                                    sx={{
                                        color: theme.palette.textTints[30]
                                    }}
                                >
                                    Member since: {dayjs(profileData?.createdOn).format("YYYY/MM/DD")}
                                </Typography>
                            </Box>
                        </Stack>
                    </Paper>
                    <Divider orientation={"horizontal"}/>
                    <Stack spacing={2}>
                        <Stack spacing={"3px"}>
                            <Typography
                                variant={"textxs"}
                                fontWeight={"regular"}
                            >
                                Mobile Number
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: "10px"
                                }}
                            >
                                <Box sx={{
                                    width: "14px",
                                    height: "14px",
                                    display: "flex",
                                    alignItems: "flex-start"
                                }}>
                                    <PhoneIcon width={14} height={14}/>
                                </Box>
                                <Typography
                                    variant={"textsm"}
                                    fontWeight={"medium"}
                                >
                                    {profileData?.mobileNo}
                                </Typography>
                            </Box>
                        </Stack>
                        <Stack spacing={"3px"}>
                            <Typography
                                variant={"textxs"}
                                fontWeight={"regular"}
                            >
                                Email Address
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: "10px"
                                }}
                            >
                                <Box sx={{
                                    width: "14px",
                                    height: "14px",
                                    display: "flex",
                                    alignItems: "flex-start"
                                }}>
                                    <EmailIcon width={14} height={14}/>
                                </Box>
                                <Typography
                                    sx={{
                                        wordBreak: "break-word"
                                    }}
                                    variant={"textsm"}
                                    fontWeight={"medium"}
                                >
                                    {profileData?.email}
                                </Typography>
                            </Box>
                        </Stack>

                        <Stack spacing={"3px"}>
                            <Typography
                                variant={"textxs"}
                                fontWeight={"regular"}
                            >
                                DOB
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: "10px"
                                }}
                            >
                                <Box sx={{
                                    width: "14px",
                                    height: "14px",
                                    display: "flex",
                                    alignItems: "flex-start"
                                }}>
                                    <CalenderIcon width={14} height={14}/>
                                </Box>
                                <Typography
                                    variant={"textsm"}
                                    fontWeight={"medium"}
                                >
                                    {profileData?.dateOfBirth ? dayjs(profileData?.dateOfBirth).format("DD MMM YYYY") : "N/A"}
                                </Typography>
                            </Box>
                        </Stack>
                    </Stack>
                </Stack>

            </Paper>
        </ProfileDetailsWrapper>
    );
}

export default ProfileDetails;
