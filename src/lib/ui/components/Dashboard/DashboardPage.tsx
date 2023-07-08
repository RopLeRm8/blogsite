import { useState } from "react";
import SideNavBar from "./SideNavbar";
import { Grid } from "@mui/material";
import useNavbarContent from "../../../hooks/useNavbarContent";
import ConfirmationModal from "../layouts/ConfirmationModal";
import OverViewTab from "./OverviewTab";
import useDashboardHandler from "../../../hooks/useDashboardHandler";

export default function DashBoardPage() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [lastTab, setLastTab] = useState<string>("");
  const { navbarData, openModal, setOpenModal, modalContent, confirmAction } =
    useNavbarContent();
  const {
    ActiveComponent,
    LastActiveComponent,
    handleButtonChange,
    handleConfirm,
  } = useDashboardHandler({
    navbarData,
    activeTab,
    setActiveTab,
    confirmAction,
    lastTab,
    setLastTab,
  });

  return (
    <>
      <ConfirmationModal
        isOpen={openModal}
        setIsOpen={setOpenModal}
        text={modalContent}
        action={handleConfirm}
        setActiveTab={setActiveTab}
        lastTab={lastTab}
      />
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
            py: 1,
          }}
        >
          {ActiveComponent ? (
            <ActiveComponent />
          ) : LastActiveComponent ? (
            <LastActiveComponent />
          ) : (
            <OverViewTab />
          )}
        </Grid>
      </Grid>
    </>
  );
}
