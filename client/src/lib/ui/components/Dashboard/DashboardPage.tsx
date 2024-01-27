import { useState, Suspense } from "react";
import SideNavBar from "./SideNavbar";
import { Grid } from "@mui/material";
import useNavbarContent from "src/lib/hooks/useNavbarContent";
import OverViewTab from "./OverviewTab";
import useDashboardHandler from "src/lib/hooks/useDashboardHandler";

export default function DashBoardPage() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [lastTab, setLastTab] = useState<string>("");
  const { navbarData, confirmAction } = useNavbarContent();
  const { ActiveComponent, LastActiveComponent, handleButtonChange } =
    useDashboardHandler({
      navbarData,
      activeTab,
      setActiveTab,
      confirmAction,
      lastTab,
      setLastTab,
    });

  return (
    <>
      <Grid container sx={{ display: "flex", flexDirection: "row" }}>
        <Grid item xs={12} md={3} lg={2}>
          <SideNavBar
            activeTab={activeTab}
            handleButtonChange={handleButtonChange}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={9}
          lg={10}
          sx={{
            px: 3,
            pt: 1,
          }}
        >
          <Suspense fallback={<div>Loading...</div>}>
            {ActiveComponent ? (
              <ActiveComponent />
            ) : LastActiveComponent ? (
              <LastActiveComponent />
            ) : (
              <OverViewTab />
            )}
          </Suspense>
        </Grid>
      </Grid>
    </>
  );
}
