import {useEffect, useRef, useState} from "react";
import ReactCrop, {
    centerCrop,
    makeAspectCrop,
    Crop,
    PixelCrop,
    convertToPixelCrop,
} from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import {Box, useMediaQuery} from "@mui/material";
import FormButton from "@/app/shared/components/design-system/button.component";
import {imgPreview} from "@/app/shared/components/image-cropper/image-preview";
import {useTheme} from "@mui/material/styles";

type ImageCropperType = {
    file: File;
    cropComplete: (d: File) => void
}

function centerAspectCrop(
    mediaWidth: number,
    mediaHeight: number,
    aspect: number,
) {
    return centerCrop(
        makeAspectCrop(
            {
                unit: '%',
                width: 100,
            },
            aspect,
            mediaWidth,
            mediaHeight,
        ),
        mediaWidth,
        mediaHeight,
    )
}
function ImageCropper({file, cropComplete}: ImageCropperType) {
    const theme = useTheme();
    const [aspect, setAspect] = useState<number | undefined>(1)
    const imgRef = useRef<HTMLImageElement>(null)
    const [crop, setCrop] = useState<Crop>()
    const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
    const [imgSrc, setImgSrc] = useState('')
    const [scale, setScale] = useState(1)
    const [rotate, setRotate] = useState(0)
    const isSmallScreen = useMediaQuery(theme?.breakpoints?.down("xs"))
    useEffect(() => {
        if (file) {
            setCrop(undefined) // Makes crop preview update between images.
            const reader = new FileReader()
            reader.addEventListener('load', () =>
                setImgSrc(reader.result?.toString() || ''),
            )
            reader.readAsDataURL(file)
        }
    }, [file]);


    function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
        if (aspect) {
            const { width, height } = e.currentTarget
            setCrop(centerAspectCrop(width, height, width / height))
            setAspect(undefined)
        }
    }

    function cropImageSet(){
        imgPreview(imgRef.current, completedCrop,scale,rotate).then(d => {
            const fileData = new File([d], file.name, {type: file.type})
            cropComplete(fileData)
        })
    }


    return (
        <>
            <Box
                sx={{
                    width: "100%"
                }}
            >
                <ReactCrop
                    crop={crop}
                    onChange={(_, percentCrop) => setCrop(percentCrop)}
                    onComplete={(c) => setCompletedCrop(c)}
                    aspect={aspect}
                    minHeight={100}
                >
                    <img
                        ref={imgRef}
                        alt="Crop me"
                        src={imgSrc}
                        style={{
                            transform: `scale(${scale}) rotate(${rotate}deg)`,
                            maxWidth: "600px",
                            minWidth: "300px",
                            width: isSmallScreen ? "300px" : "100%",
                            maxHeight: "500px"
                        }}
                        onLoad={onImageLoad}
                    />
                </ReactCrop>
                <FormButton name={"Save"} onClick={() => cropImageSet()} />
            </Box>
        </>
    )
}
export default ImageCropper
