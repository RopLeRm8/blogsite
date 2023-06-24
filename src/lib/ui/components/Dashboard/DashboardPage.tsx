import { useState, useEffect } from "react";
import SideNavBar from "./SideNavbar";
import { Grid } from "@mui/material";
import useNavbarContent from "../../../hooks/useNavbarContent";

export default function DashBoardPage() {
  const [activeTab, setActiveTab] = useState("Overview");
  const { navbarData } = useNavbarContent();
  const activeTabData = navbarData.find((tab) => tab.name === activeTab);

  const ActiveComponent = activeTabData?.component || null;
  const ActiveAction = activeTabData?.action || null;

  useEffect(() => {
    if (ActiveAction) {
      ActiveAction();
    }
  }, [ActiveAction]);

  return (
    <Grid container sx={{ display: "flex", flexDirection: "row" }}>
      <Grid item xs={12} md={3} lg={2}>
        <SideNavBar activeTab={activeTab} setActiveTab={setActiveTab} />
      </Grid>
      <Grid
        item
        xs={12}
        md={9}
        lg={10}
        sx={{
          px: 3,
          py: 1,
        }}
      >
        {ActiveComponent ? <ActiveComponent /> : null}
      </Grid>
    </Grid>
  );
}
