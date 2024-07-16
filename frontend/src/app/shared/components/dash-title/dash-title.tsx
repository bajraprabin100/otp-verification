import { Box, Divider, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DashLine = styled("hr")(({ theme }) => ({
  borderColor: theme.palette.textTints[80],
  borderStyle: "dashed"
}));
type DashTitleProps = {
  title: string;
  component?: React.ReactNode
}

function DashTitle({
  title,
  component
}: DashTitleProps) {
  return (
    <Box
      display={"flex"}
      gap={2}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
      >
        <Box>
          <Typography
            whiteSpace={"nowrap"}
            width={"fit-content"}
            variant={"textBase"}
            fontWeight={"bold"}
            textAlign={"center"}
          >
            {title}
          </Typography>
        </Box>
      </Box>
      <Box width={"100%"}>
        <Box
          sx={{
            marginTop: "20px"
          }}
          width={"100%"}
        >
          <DashLine/>
        </Box>
      </Box>

      {
        component && (
          <Box>
            {component}
          </Box>
        )
      }

    </Box>
  );
}

export default DashTitle;
