import {Box, Breadcrumbs, Stack, Typography} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import FormButton from "@/app/shared/components/design-system/button.component";
import React, {useCallback, useMemo} from "react";
import LeftAngle from "src/assets/icons/left-angle.svg?react";
import {Link, useParams, useRouter} from "@tanstack/react-router";
import {getBreadCrumbTitle} from "@/app/shared/utils/breadcrumbs-title";
import {styled} from "@mui/material/styles";

type BreadcrumbsType = {
    title: string;
    ignoreList?: string[]
}
const BreadcrumbsStyle = styled(Breadcrumbs)(({theme}) => ({
    "& .MuiBreadcrumbs-separator": {
        color: theme => theme.palette.textTints[40],
    },
}));
const LinKStyled = styled(Link)(() => ({
    textDecoration: "none",
    "& :hover": {
        textDecoration: "underline"
    }
}))

function Breadcrumb({title, ignoreList}: BreadcrumbsType) {
    const router = useRouter();
    const params = useParams({strict: false});
    const ignoreListData = useMemo(() => {
      return ignoreList?.map(d => params[d] !== undefined ? params[d] : undefined).filter(c => c)
    }, [ignoreList, params])
    const pathList = useMemo(() => {
        return router.state.location.pathname?.split("/")
            .filter((d) => d !== "") ?? [];
    }, [router.state.location.pathname]);
    const getPath = useCallback((i) => {
        return `/${pathList.slice(0, i + 1)
            .join("/")}`;
    }, [pathList]);
    return (
        <Stack
            sx={{
                marginBottom: "20px"
            }}
        >
            <Grid
                sx={{
                    display: "flex",
                    gap: "10px"
                }}
            >
                <FormButton
                    sx={{
                        minWidth: "36px"
                    }}
                    variant="icon"
                    fullWidth={false}
                    iconPos={"start"}
                    icon={<LeftAngle/>}
                    size={"small"}
                    onClick={() => {
                        router?.history?.back();
                    }}
                />
                <Box>
                    <Typography variant="text2xl" fontWeight={"bold"}>
                        {title}
                    </Typography>
                </Box>


            </Grid>
            <BreadcrumbsStyle sx={{}} aria-label={"breadcrumb"}
            >
                {
                    pathList.map((d, i) => {
                        return !ignoreListData?.includes(d) && (
                            <LinKStyled
                                key={i}
                                to={getPath(i)}
                            >
                                <Typography
                                    variant={"textsm"}
                                    fontWeight={"regular"}
                                    color={theme => i < pathList.length - 1 ? theme.palette.textTints[40] : theme.palette.textShades[0]}
                                >

                                    {getBreadCrumbTitle(d, d === "british_council" ? "_" : "-")}
                                </Typography>
                            </LinKStyled>
                        );
                    })
                }
            </BreadcrumbsStyle>
        </Stack>
    );
}

export default Breadcrumb;
