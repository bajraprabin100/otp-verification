import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { Link } from "@tanstack/react-router";
import { SidebarData } from "@/app/shared/resources/sidebar.data";
import { LinkTypo, LinkWrapper } from "@/app/shared/components/sidebar/style";

function Sidebar() {
  return (
    <Box>
      <Paper
        elevation={0}
        sx={{
          padding: "20px",
          borderRadius: "12px"
        }}
      >
        <Stack spacing={2}>
          {
            SidebarData.map((d, index) => {
              return (
                <Stack key={index} spacing={1}>
                  <Typography variant={"textsm"} fontWeight={"bold"}>
                    {d.title}
                  </Typography>
                  <Stack spacing={1}>
                    {
                      d.menuList.map((m, i) => {
                        const Icon = m.icon;
                        return (
                          <Box key={i}>
                            <Link
                              to={m.url}
                              style={{ textDecoration: "none" }}
                            >
                              {({ isActive }) => {
                                return (
                                  <LinkWrapper active={isActive} key={i}>
                                    <Box
                                      sx={{
                                        display: "flex",
                                        gap: 2,
                                        alignItems: "center"
                                      }}
                                    >
                                      <Icon/>
                                      <LinkTypo variant={"textBase"} active={isActive}>
                                        {m.label}
                                      </LinkTypo>
                                    </Box>
                                  </LinkWrapper>
                                );
                              }
                              }
                            </Link>
                          </Box>

                        );
                      })
                    }
                  </Stack>
                </Stack>

              );
            })
          }
        </Stack>

      </Paper>
    </Box>

  );
}

export default Sidebar;
