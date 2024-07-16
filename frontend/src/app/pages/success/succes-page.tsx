import {Box, Typography} from "@mui/material";
import FormButton from "@/app/shared/components/design-system/button.component";
import {useNavigate} from "@tanstack/react-router";

const SuccessFound = () => {
  const navigate = useNavigate();
  return (
    <SectionErrorContainer>
      <>
        <Typography variant="h2" style={{ fontSize: "100px" }}>
          404
        </Typography>
        <Typography variant="h2" style={{ fontSize: "20px", marginBottom: "8px" }}>
          Page Not Found
        </Typography>
        <Typography>The page you are trying to access does not exist.</Typography>
      </>
      <Box mt={2}>
            <FormButton
                name={"Back to Dashboard"}
                onClick={() => {
                  navigate({
                    to: "/"
                  })
                }}
                variant="contained"
                fullWidth={false}
                sx={{ marginRight: "12px", display: "inline", alignItems: "flex-start" }}
            />
      </Box>
    </SectionErrorContainer>
  );
};

export default SuccessFound;
