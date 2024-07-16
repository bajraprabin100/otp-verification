import { statusCodeMapper } from "./constants";
import PageNotFound from "./succes-page";
import {createRoute, useNavigate} from "@tanstack/react-router";
import {useAuth} from "@/app/core";
import {Box, styled, Typography} from "@mui/material";
import FormButton from "@/app/shared/components/design-system/button.component";
import {rootRoute} from "@/app/pages/root.lazy";

export const SectionContainer = styled("section")(() => ({
  minHeight: "70vh",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}))

const SuccessPage = () => {
  const auth = useAuth();
  const navigate = useNavigate()
  return (
    <SectionContainer>
          <Typography variant="h2" style={{ fontSize: "100px" }}>
            Success
          </Typography>  
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
    </SectionContainer>
  );
};
export const successRoutes = createRoute({
  getParentRoute: () => rootRoute,
  path: "/success",
  component: SuccessPage
})
export default SuccessPage;
