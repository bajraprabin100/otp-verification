import FormButton from "src/app/shared/components/design-system/button.component";
import BellIcon from "src/assets/icons/bell.svg?react";
import Badge from "@mui/material/Badge";
import {Box, Fade, Menu, Typography} from "@mui/material";
import NotificationItem from "@/app/shared/components/header/components/notification-item/notification-item";
import {useCallback, useEffect, useRef, useState} from "react";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {
    getNotificationList,
    markAllReadNotification,
} from "@/app/core/services/api/notification/notification.service";
import FormLink from "@/app/shared/components/design-system/link.component";
import {useTheme} from "@mui/material/styles";


function Notification() {
    const [page, setPage] = useState(1);
    const theme = useTheme()
    const queryClient = useQueryClient();
    const [pageSize, setPageSize] = useState(10);
    const notificationBoxRef = useRef<HTMLDivElement>(null);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const {data: notificationList, isFetching, refetch} = useQuery({
        queryKey: ["notificationList"],
        queryFn: () => getNotificationList({page, pageSize})
    })

    const unreadNotificationCount = useQuery({
        queryKey: ["notificationCount"],
        queryFn: () => getNotificationList({IsRead: false})
    })
    const {mutate} = useMutation({
        mutationFn: markAllReadNotification,
        onSuccess:(res) => {
            queryClient.invalidateQueries({queryKey: ["notificationCount"]})
            queryClient.invalidateQueries({queryKey: ["notificationList"]})
        },
    })
    useEffect(() => {refetch()},[pageSize])
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        if(notificationList.paginator.total > 0){
            setAnchorEl(event.currentTarget);
        }
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleScroll = useCallback(() => {
        if (notificationBoxRef.current && Math.abs(notificationBoxRef.current.scrollHeight - (notificationBoxRef.current.clientHeight + notificationBoxRef.current.scrollTop)) <= 1) {
            if(pageSize < notificationList?.paginator?.total){
                setPageSize(pageSize+10);
            }
        }
    },[notificationList?.paginator?.total])

    const registerScroll = useCallback(() => {
        setTimeout(() => {
            if (notificationBoxRef.current) {
                notificationBoxRef.current.addEventListener("scroll", handleScroll);
                return () => {
                    notificationBoxRef.current?.removeEventListener("scroll", handleScroll);
                };
            }
        }, 1000)
    }, [notificationBoxRef.current]);
    return (
        <>
            <Badge
                badgeContent={unreadNotificationCount?.data?.paginator?.total}
                overlap={"circular"}
                color={"secondary"}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right"
                }}
            >
                <FormButton
                    id="fade-button"
                    aria-controls={open ? 'fade-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={(e) => {
                        handleClick(e);
                        registerScroll()
                    }}
                    variant={"icon"}
                    iconPos={"start"}
                    icon={<BellIcon/>}
                />
            </Badge>
            <Menu
                sx={{
                    padding: "10px",
                    "& .MuiList-root": {
                        paddingTop: "0px",
                        paddingBottom: "0px",
                    }
                }}
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <Box

                    sx={{
                        paddingLeft: "16px",
                        paddingTop: "5px",
                        paddingBottom: "5px",
                    }}
                >
                    <Typography variant={"textBase"} fontWeight={"bold"}>Notification</Typography>
                </Box>
                <Box
                    sx={{
                        maxHeight: 400,
                        overflowY: "scroll",
                        scrollbarWidth: "none"
                    }}
                    ref={notificationBoxRef}
                >
                {
                    notificationList?.data?.map((d, i) => {
                        return (
                            <NotificationItem key={i} notificationItem={d} onClose={handleClose}/>
                        )
                    })
                }
                </Box>
                <Box
                    sx={{
                        background: theme.palette.primaryTints[90],
                        display: "flex",
                        justifyContent: "center",
                        padding: "7px"
                    }}
                >
                    <FormLink
                        textVariant={"textsm"}
                        name={"Mark all as read"}
                        onClick={() => {
                            mutate()
                        }}
                    />
                </Box>
            </Menu>
        </>
    )
}

export default Notification;
