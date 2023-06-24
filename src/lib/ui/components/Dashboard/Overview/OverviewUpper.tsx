import IconsHandler from "../../../../hooks/IconsHandler";
import { Box, Avatar, IconButton } from "@mui/material";
import SearchButton from "./SearchButton";
import Notifications from "./Notifications";

export default function OverviewUpper() {
  const { peopleIcon: PeopleIcon } = IconsHandler();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 1,
      }}
    >
      <SearchButton />
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
