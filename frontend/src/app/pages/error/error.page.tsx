
import styles from "styles/scss/pages/error.module.scss";

import { statusCodeMapper } from "./constants";
import PageNotFound from "./page-not-found.page";
import {createRoute, useNavigate} from "@tanstack/react-router";
import {useAuth} from "@/app/core";
import {Box, styled, Typography} from "@mui/material";
import FormButton from "@/app/shared/components/design-system/button.component";
import {rootRoute} from "@/app/pages/root.lazy";

export const SectionErrorContainer = styled("section")(() => ({
  minHeight: "70vh",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center"
}))

const ErrorPage = () => {
  const { statusCode } = errorRoutes.useParams();
  const auth = useAuth();
  const navigate = useNavigate()
  return (
    <SectionErrorContainer>
      {statusCode && statusCodeMapper[statusCode] ? (
        <>
          <Typography variant="h2" style={{ fontSize: "100px" }}>
            {statusCodeMapper[statusCode].title}
          </Typography>
          <Typography variant="h2" style={{ fontSize: "20px", marginBottom: "8px" }}>
            {statusCodeMapper[statusCode].content}
          </Typography>
          <Typography>{statusCodeMapper[statusCode].body}</Typography>
          <Box mt={2}>
            {" "}
            {statusCodeMapper[statusCode]?.backButton && (
              <FormButton
                name={statusCodeMapper[statusCode].backButton?.title}
                onClick={() => {
                  if (statusCodeMapper[statusCode].backButton?.action === "back") {
                    navigate({to: statusCodeMapper[statusCode].backButton?.navigate })
                  }
                }}
                variant="contained"
                fullWidth={false}
                sx={{ marginRight: "12px", display: "inline", alignItems: "flex-start" }}
              />
            )}
          </Box>
        </>
      ) : (
        <>
          <PageNotFound />
        </>
      )}
    </SectionErrorContainer>
  );
};
export const errorRoutes = createRoute({
  getParentRoute: () => rootRoute,
  path: "/error/$statusCode",
  component: ErrorPage
})
export default ErrorPage;
