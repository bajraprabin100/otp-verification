import { ReactNode, useState } from "react";
import {Box, Modal, Paper, Stack, styled, Typography, useMediaQuery} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CrossIcon from "@/assets/icons/cross.svg?react";
import { ModalContainer, ModalContentContainer, ModalWrapper } from "@/app/shared/components/modal/style";
import {CSSProperties} from "@mui/styles";
import {useTheme} from "@mui/material/styles";
import theme from "@styles/theme";

type PopModalProps = {
  show: boolean;
  children: ReactNode;
  title?: string;
  subTitle?: string;
  hideCloseButton?: boolean;
  handleClose?: (show: boolean) => void,
  sx?: CSSProperties
}

function PopModal({
  show,
  children,
  subTitle,
  title,
  handleClose,
  hideCloseButton,
  sx
}: PopModalProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme?.breakpoints?.down("sm"))
  return (
    <>
      <ModalWrapper
        open={show}
        onClose={() => handleClose(false)}
      >
        <ModalContainer
        >
          <ModalContentContainer
            sx={sx}
          >
            <Stack spacing={3}>
              <Stack>
                <Grid container justifyContent={"space-between"}>
                  <Grid>
                    {
                      title && (
                        < Typography variant={isSmallScreen ? "textsm" : "text2xl"} fontWeight={"bold"} color={theme => theme.palette.text.primary}>
                          {title}
                        </Typography>
                      )
                    }

                  </Grid>

                  <Grid>
                    {
                      !hideCloseButton && (
                        <CrossIcon
                          style={{
                            stroke: theme.palette.text.primary,
                            cursor: "pointer"
                          }}
                          onClick={() => handleClose(false)}/>
                      )
                    }

                  </Grid>
                </Grid>
                {
                  subTitle && (
                    <Typography variant={isSmallScreen ? "textxs" : "textsm"}>
                      {subTitle}
                    </Typography>
                  )
                }
              </Stack>
              {children}
            </Stack>
          </ModalContentContainer>
        </ModalContainer>

      </ModalWrapper>
    </>
  );
}

export default PopModal;
