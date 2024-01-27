import useAccountSidebar from "src/lib/hooks/useAccountSidebar";
import Grid from "@mui/material/Grid";
import { Button, Divider, useMediaQuery, useTheme, Box } from "@mui/material";
import { useState, useCallback } from "react";

export default function MiniSideBar() {
  const { options } = useAccountSidebar();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const [activeTab, setActiveTab] = useState("My Profile");
  const handleChangeTab = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);
  return (
    <Grid
      container
      direction="row"
      alignItems="stretch"
      justifyContent={{ xs: "center", md: "flex-start" }}
    >
      <Grid
        item
        container
        direction="column"
        spacing={3}
        alignItems={{ xs: "center", lg: "flex-start" }}
        sx={{
          maxWidth: { xs: "55vw", sm: "80vw", md: "15rem" },
          ml: { xs: 0, lg: 5 },
          mt: 2,
        }}
      >
        {options.map((opt) => (
          <Box key={options.indexOf(opt)}>
            <Button
              sx={{
                textTransform: "none",
                borderRadius: "2rem",
                px: 2,
                py: 1.5,
                my: 0.5,
                color:
                  opt.name === "Delete Account"
                    ? theme.CustomColors.dangerColor
                    : activeTab === opt.name
                    ? "white"
                    : "",
                background:
                  activeTab === opt.name && activeTab !== "Delete Account"
                    ? theme.palette.primary.main
                    : "",
                "&:hover": {
                  background:
                    opt.name === "Delete Account"
                      ? "transparent"
                      : activeTab === opt.name
                      ? theme.palette.primary.main
                      : "",
                  color:
                    opt.name === "Delete Account"
                      ? theme.palette.text.primary
                      : "",
                },
              }}
              disableElevation
              onClick={() => handleChangeTab(opt.name)}
            >
              {opt.name}
            </Button>
            {opt.name === "Notifications" ? (
              <Divider sx={{ width: "0px", py: 2 }} />
            ) : null}
          </Box>
        ))}
        <Divider
          flexItem
          orientation={matches ? "horizontal" : "vertical"}
          sx={{
            background: theme.palette.text.primary,
            opacity: 0.2,
            my: 2.5,
            display: { xs: "flex", md: "none" },
          }}
        />
      </Grid>
      <Divider
        flexItem
        orientation={matches ? "horizontal" : "vertical"}
        sx={{
          background: theme.palette.text.primary,
          opacity: 0.2,
          height: "82dvh",
          display: { xs: "none", md: "flex" },
          my: 2.5,
        }}
      />
    </Grid>
  );
}
