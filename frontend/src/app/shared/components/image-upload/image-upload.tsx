import React, {useRef, useState} from "react";
import {
    ImageContainer,
    ImageWrapperContainer, UploadImageWrapper
} from "@/app/shared/components/image-upload/style";
import {checkType} from "@/app/shared/utils/file-utils";
import {Box, CardActionArea, Stack, useTheme} from "@mui/material";
import UPLOAD from "src/assets/icons/upload.svg?react";
import FormLink from "@/app/shared/components/design-system/link.component";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import {useMutation} from "@tanstack/react-query";
import {uploadFile} from "@/app/core/services/api/upload-file/upload-file.service";
import {UploadFileResponse, UploadFileType} from "@/app/core/services/api/upload-file/upload-file";
import CrossIcon from "@/assets/icons/cross.svg?react";
import {FieldValues, Path, useFormState, useWatch} from "react-hook-form";
import {HookFormPropTypes} from "@/app/shared/types/form.types";
import PopModal from "@/app/shared/components/modal/pop-modal";
import ImageCropper from "@/app/shared/components/image-cropper/image-cropper";

interface UploadFileProps<TFieldValues extends FieldValues> extends HookFormPropTypes<TFieldValues> {
    title?: string;
    onUploadSuccess: (fileData: UploadFileResponse) => void;
    onCancel: () => void;
    fileData?: UploadFileResponse;
    name: Path<TFieldValues>;
    fileType?: UploadFileType,
}

const ImageUpload = <TFieldValues extends FieldValues>(props: UploadFileProps<TFieldValues>) => {
    const {
        onCancel,
        fileData,
        title,
        fileType,
        onUploadSuccess,
        control,
        name,
    } = props;
    const [highlight, setHighlight] = useState<boolean>(false);
    const [showCross, setShowCross] = useState<boolean>(false);
    const {errors} = useFormState({control});
    const inputRef = useRef<HTMLInputElement>(null);
    const theme = useTheme();
    const [file, setFile] = useState<File>();
    const [showCrop, setShowCrop] = useState<boolean>(false);

    const {
        mutate: mutateFileUpload,
        isPending
    } = useMutation({
        mutationFn: uploadFile,
        onSuccess: (res) => {
            onUploadSuccess(res?.data);
        },
        onError: () => {
        }
    });
    const handleEnter = (e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setHighlight(true);
    };
    const handleOver = (e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setHighlight(true);
    };
    const handleLeave = (e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setHighlight(false);
    };

    function handleUpload(e: any) {
        e.preventDefault();
        e.stopPropagation();
        setHighlight(false);
        const file = e?.target?.files?.[0] || e?.dataTransfer?.files?.[0];

        if (!checkType(file?.name, ["jpg", "png", "jpeg"])) {
            control.setError(name, {message: "File should be in jpg, png jpeg"})
        } else if ((file?.size ?? 0) > 10000000) {
            control.setError(name, {message: "File should not be more than 10Mb"})
        } else {
            setShowCrop(true)
            setFile(file)
        }
    }



    return (
        <ImageWrapperContainer>
            <Box
                display={isPending ? "block" : "none"}
            >
                <Box
                    hidden={true}
                    sx={{
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        background: "#80808052",
                        opacity: 0.5
                    }}
                >
                    <CircularProgress color="inherit"/>
                </Box>
            </Box>


            <UploadImageWrapper
            >
                {
                    !fileData?.imageUrl ? (
                        <Box
                            sx={{background: highlight ? theme.palette.primaryTints[80] : ""}}
                            onDrop={(e) => {
                                handleUpload(e as never);
                            }}
                            onDragEnter={(e) => {
                                handleEnter(e as never);
                            }}
                            onDragOver={(e) => handleOver(e as never)}
                            onDragLeave={(e) => handleLeave(e as never)}
                        >

                            <Stack>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center"
                                    }}
                                >
                                    <UPLOAD/>
                                </Box>
                                <FormLink
                                    name={title}
                                    textVariant="textsm"
                                    sx={{
                                        alignSelf: "center",
                                        fontWeight: "bold"
                                    }}
                                    onClick={() => inputRef?.current?.click()}
                                />
                                <input
                                    style={{display: "none"}}
                                    type="file"
                                    ref={inputRef}
                                    onChange={(e) => {
                                        handleUpload(e);
                                    }}
                                />
                                <Typography variant="textsm" sx={{alignSelf: "center"}}>
                                    Max file size: 10MB
                                </Typography>
                                <Typography variant="textsm" sx={{alignSelf: "center"}}>
                                    Dimension: 200 X 200 PX
                                </Typography>
                            </Stack>
                        </Box>
                    ) : (
                        <Box
                            onMouseOver={() => {
                                setShowCross(true);
                            }}
                            onMouseLeave={() => {
                                setShowCross(false);
                            }}
                            sx={{
                                backgroundImage: `url(${fileData?.imageUrl})`,
                                height: "158px",
                                width: "100%",
                                backgroundSize: "cover",
                                display: "flex",
                                justifyContent: "flex-end"
                            }}
                        >
                            {
                                showCross && (
                                    <Box
                                        sx={{
                                            padding: "5px",
                                            cursor: "pointer"
                                        }}
                                    >
                                        <CrossIcon
                                            style={{
                                                stroke: theme.palette.text.primary,
                                            }}
                                            onClick={() => {
                                                onCancel();
                                            }}
                                            fontSize={"14px"}>
                                        </CrossIcon>
                                    </Box>
                                )
                            }
                        </Box>
                    )
                }
            </UploadImageWrapper>
            <Box
                sx={{
                    height: "24px"
                }}
            >
                {
                    errors?.[name] && (
                        <Typography variant="textxs"
                                    color={theme => theme.palette.error.main}>{errors?.[name]?.message}</Typography>
                    )
                }

            </Box>
            {
                file && (
                    <PopModal
                        sx={{
                            minWidth: "300px",
                            maxWidth: "700px",
                        }}
                        show={showCrop}
                        title={"Crop Image"}
                        handleClose={() => setShowCrop(false)}
                    >
                        <ImageCropper file={file} cropComplete={(d) => {
                            setShowCrop(false)
                            mutateFileUpload({
                                file: d,
                                fileType: fileType
                            });
                        }}/>
                    </PopModal>
                )
            }
        </ImageWrapperContainer>
    );
};
ImageUpload.defaultProps = {
    title: "Upload Passport",
    fileType: "passport"
};
export default ImageUpload;

