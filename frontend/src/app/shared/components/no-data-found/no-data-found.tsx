import {Box, Card, Typography} from "@mui/material";
import CloudOffIcon from '@mui/icons-material/CloudOff';
import CircularProgress from "@mui/material/CircularProgress";

export type NodataFoundProps = {
    message?: string;
    isLoading?: boolean;
    isEmpty?: boolean;
}

function NoDataFound({message, isLoading, isEmpty}: NodataFoundProps) {
    return (
        <>
            {
                isEmpty && (
                    <Card>
                        <Box display={"flex"} alignItems={"center"} justifyContent={"center"} height={"200px"}>
                            {
                                isLoading && (
                                    <CircularProgress />
                                )
                            }
                            {
                                isEmpty && !isLoading && (
                                    <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
                                        <CloudOffIcon color={"primary"} fontSize={"large"}/>
                                        <Typography variant={"h6"}>{message ?? `No data found`}</Typography>
                                    </Box>
                                )
                            }
                        </Box>
                    </Card>
                )
            }

        </>
    )
}

export default NoDataFound
