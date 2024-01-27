import IconsHandler from "src/lib/hooks/IconsHandler";
import { Box, Avatar, IconButton } from "@mui/material";
import Notifications from "./Notifications";

export default function OverviewUpper() {
  const { peopleIcon: PeopleIcon } = IconsHandler();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "end",
        alignItems: "center",
        mt: 1,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton>
          <PeopleIcon />
        </IconButton>
        <Notifications />
        <Avatar sx={{ ml: 0.5 }} />
      </Box>
    </Box>
  );
}
