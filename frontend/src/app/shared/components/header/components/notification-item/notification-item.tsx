import {Box, ListItemIcon, MenuItem, Typography} from "@mui/material";
import React from "react";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import {useTheme} from "@mui/material/styles";
import {NotificationType} from "@/app/core/services/api/notification/notification";
import Avatar from "@mui/material/Avatar";
import {useNavigate} from "@tanstack/react-router";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {markReadNotification} from "@/app/core/services/api/notification/notification.service";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(duration);
dayjs.extend(relativeTime);

type NotificationItemProps= {
    notificationItem: NotificationType,
    onClose: () => void
}
function NotificationItem({notificationItem, onClose}: NotificationItemProps) {
    const navigate = useNavigate();
    const theme = useTheme()
    const queryClient = useQueryClient();
    const {mutate} = useMutation({
        mutationFn: markReadNotification,
        onSuccess:(res) => {
            queryClient.invalidateQueries({queryKey: ["notificationCount"]})
            queryClient.invalidateQueries({queryKey: ["notificationList"]})
        },
    })
    const handleNavigate = () => {
        const metaData = JSON.parse(notificationItem?.metaData);
        mutate(notificationItem.id)
        switch (notificationItem?.type){
            case "exam_booking":
                navigate({
                    to: `/bookings`,
                    search: () => {
                        return {
                            bookingId: +metaData.id,
                        }
                    }
                })
                onClose()
                break
            case "package_booking":
                navigate({
                    to: "/menu/mock-test/history",
                    search: () => {
                        return {
                            packageBookingId: +metaData.id,
                        }
                    }
                })
                onClose()
                break
            case "user":
                break
            default:

        }
    }
    return(
        <MenuItem
            style={{
                borderTop: `1px solid ${theme.palette.textTints[80]}`,
            }}
            selected={!notificationItem?.isRead}
            sx={{
                maxWidth: 300,
                gap: 2
            }}
            onClick={handleNavigate}
        >
            <ListItemIcon>
                <Avatar sx={{
                    width: 30,
                    height: 30,
                    bgcolor: theme.palette.error.light
                }}>
                    <NotificationsActiveIcon fontSize="small" sx={{
                        color: theme.palette.secondary.main
                    }}/>
                </Avatar>
            </ListItemIcon>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "5px",
                    lineHeight: "12px"
                }}
            >
                <Typography variant="textxs" fontWeight={"bold"} whiteSpace={"break-spaces"} color={theme.palette.textShades[0]}>
                    {notificationItem?.title}
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Typography lineHeight={"16px"} variant="textxs" fontWeight={"regular"} whiteSpace={"break-spaces"} color={theme.palette.textShades[0]}>
                        {notificationItem?.body}
                    </Typography>
                    <Typography lineHeight={"16px"} variant="textxs" fontWeight={"regular"} whiteSpace={"break-spaces"} color={theme.palette.textShades[0]}>
                        {dayjs.duration(dayjs(notificationItem?.createdAt).diff(dayjs(), "minutes"), "minutes").humanize(true)}
                    </Typography>
                </Box>
            </Box>
        </MenuItem>
    )
}
export default NotificationItem;
