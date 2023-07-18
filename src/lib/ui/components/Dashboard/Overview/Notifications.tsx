import React, { useState } from "react";
import {
  Badge,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Typography,
  Divider,
  useTheme,
} from "@mui/material";
import IconsHandler from "../../../../hooks/IconsHandler";
import useGetNotifications from "../../../../hooks/useGetNotifications";
import useGetAnimations from "../../../../hooks/useGetAnimations";
export default function Notifications() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const {
    notificationsIcon: NotificationsIcon,
    blogsIcon: BlogsIcon,
    friendRequestIcon: FriendRequest,
  } = IconsHandler();
  const notificationsList = useGetNotifications();
  const { pulse } = useGetAnimations();
  const theme = useTheme();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Badge color="success" variant="dot" sx={{ mx: 2 }}>
        <IconButton onClick={handleClick} sx={{ p: 0 }}>
          <NotificationsIcon />
        </IconButton>
      </Badge>
      <Menu
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        onClick={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{
          mt: 2,
          ".MuiPaper-root": {
            backgroundColor: theme.palette.background.default,
            maxHeight: "300px",
            overflow: "auto",
            "&::-webkit-scrollbar": {
              width: "3px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: theme.palette.text.primary,
              borderRadius: "3px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "rgba(0,0,0,.2)",
            },
          },
        }}
      >
        {notificationsList.map((notif, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <MenuItem
              sx={{
                my: 1,
                mx: 2,
                borderRadius: ".5rem",
                justifyContent: "space-between",
                display: "flex",
                minWidth: "92%",
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Badge
                    variant="dot"
                    color="success"
                    sx={{ animation: `${pulse} 2s infinite`, ml: 0.5 }}
                  />
                  <Typography
                    sx={{
                      fontSize: "100%",
                      ml: 2,
                    }}
                  >
                    {notif.title}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "80%",
                  }}
                >
                  {notif.content}
                </Typography>
              </Box>
              <Box sx={{ alignSelf: "center" }}>
                {notif.type === "friend" ? <FriendRequest /> : null}
                {notif.type === "newblog" ? <BlogsIcon /> : null}
              </Box>
            </MenuItem>
            <Divider sx={{ mx: 2 }} />
          </Box>
        ))}
      </Menu>
    </Box>
  );
}
