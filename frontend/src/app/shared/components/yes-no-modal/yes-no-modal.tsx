import Grid from "@mui/material/Unstable_Grid2";
import {Box, Stack, Typography} from "@mui/material";
import FormButton from "@/app/shared/components/design-system/button.component";
import PopModal from "@/app/shared/components/modal/pop-modal";
import UpdateIcon from '@mui/icons-material/Update';
import React from "react";

type YesNoModalType = {
    title: string,
    subtitle: string,
    show: boolean;
    onClose: () => void;
    onFillFormSelect: () => void;
}

function YesNoModal(
    {
        title,
        subtitle,
        show,
        onClose,
        onFillFormSelect
    }: YesNoModalType) {
    return (
        <PopModal
            sx={{
                width: "400px",
                maxWidth: "100%",
            }}
            show={show}
            hideCloseButton={true}
            handleClose={onClose}
        >
            <Grid container spacing={4}>
                <Stack spacing={2}>
                    <Stack columnGap={2}>
                        <Box
                            style={{
                                display: "flex",
                                justifyContent: "center"
                            }}
                        >
                            <UpdateIcon sx={{ fontSize: "30px" }} color="primary" />
                        </Box>
                        <Box
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                marginTop: "20px"
                            }}>
                            <Typography variant={"text2xl"}
                                        fontWeight={"bold"}>{title}</Typography>
                        </Box>
                        <Box
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                lineHeight: "24px"
                            }}>
                            <Typography textAlign={"center"} variant={"textlg"}
                                        fontWeight={"regular"}>{subtitle}</Typography>
                        </Box>
                    </Stack>
                    <Grid container
                          columns={12}
                          spacing={2}
                          sx={{
                              gap: "10px",
                              paddingTop: "20px",
                              display: "flex",
                              justifyContent: "center"
                          }}
                    >
                        <FormButton
                            name={"Yes"}
                            variant={"contained"}
                            color={"primary"}
                            size={"large"}
                            hasIcon={true}
                            fullWidth={false}
                            onClick={onFillFormSelect}
                        />
                        <FormButton
                            name={"No"}
                            variant={"outlined"}
                            color={"inherit"}
                            size={"large"}
                            onClick={() => {
                                onClose()
                            }}
                        />
                    </Grid>

                </Stack>

            </Grid>
        </PopModal>
    );
}

export default YesNoModal;
