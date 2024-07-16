import {Card, CardActionArea, CardContent, Stack, Typography, useMediaQuery} from "@mui/material";
import ImageChip, { ChipWithImageType, ImageChipVariant } from "src/app/shared/components/chips/image-chip.component";
import {useTheme} from "@mui/material/styles";

interface ClickableCardProps extends ChipWithImageType{
  title: string
  fontWeight: string;
  onCardClick: () => void
}
function ClickableCard({image, variant,fontWeight, title, onCardClick}: ClickableCardProps) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme?.breakpoints?.down("sm"))
  return(
    <Card elevation={4} sx={{
      height: isSmallScreen ? "120px" : "134px",
      border: "0px",
      borderRadius: "12px",
      maxWidth: "189px",
    }}>
      <CardActionArea onClick={onCardClick}>
        <CardContent>
          <Stack gap={2}>
            <ImageChip variant={variant} image={image}/>
            <Typography
              variant={isSmallScreen ? "textsm" : "textBase"}
              fontWeight={fontWeight}
            >
              {title}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
ClickableCard.defaultProps = {
  fontWeight: "medium"
}
export default ClickableCard;
