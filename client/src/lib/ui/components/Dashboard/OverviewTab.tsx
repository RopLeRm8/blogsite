import OverviewActivity from "./Overview/OverviewActivity";
import OverviewDevices from "./Overview/OverviewDevices";
import OverviewStats from "./Overview/OverviewStats";
import OverviewUpper from "./Overview/OverviewUpper";
import { Box, Grid } from "@mui/material";

export default function OverViewTab() {
  return (
    <Box>
      <OverviewUpper />
      <Box sx={{ mt: { xs: "3rem", md: "6rem" }, mb: "3rem" }}>
        <OverviewStats />
      </Box>
      <Grid
        container
        direction={{ xs: "column", lg: "row" }}
        alignItems="center"
        justifyContent="center"
        gap={{ xs: 3, xl: 8 }}
      >
        <OverviewActivity />
        <OverviewDevices />
      </Grid>
    </Box>
  );
}
