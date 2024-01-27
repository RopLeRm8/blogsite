import {
  Drawer,
  List,
  ListItem,
  Button,
  Divider,
  Typography,
} from "@mui/material";
import useGetNavbarOptions from "src/lib/hooks/useGetNavbarOptions";
import { useGetGlobalValues } from "src/lib/hooks/useGlobalValues";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
interface NavBarProps {
  activeTab: string;
  handleButtonChange: (tab: string) => void;
}
export default function SideNavBar({
  activeTab,
  handleButtonChange,
}: NavBarProps) {
  const optionsList = useGetNavbarOptions();
  const { font, secondColor } = useGetGlobalValues();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        position: "sticky",
        top: 0,
        width: { xs: "100vw", md: "100%" },
      }}
    >
      <Drawer
        variant="permanent"
        anchor={matches ? "top" : "left"}
        sx={{ flexShrink: 0 }}
        PaperProps={{
          sx: {
            background: theme.CustomColors.sideNavbar,
            color: "white",
            position: "relative",
            height: { md: "100dvh" },
          },
        }}
      >
        <Box
          sx={{
            my: 2,
            mx: 4,
            justifyContent: "flex-start",
            textTransform: "none",
            borderRadius: "0.5rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              px: 0.5,
              py: 1,
            }}
          >
            <Typography
              fontFamily={font}
              sx={{ color: secondColor, fontSize: "120%", fontWeight: 700 }}
            >
              RopLeR
            </Typography>
            <Typography
              fontFamily={font}
              sx={{ color: secondColor, opacity: 0.4, fontSize: "80%" }}
            >
              Writer
            </Typography>
          </Box>
        </Box>
        <Divider
          orientation="horizontal"
          sx={{ py: 0.1, background: theme.CustomColors.hoverColor }}
        />
        <List>
          {optionsList.map((option) => (
            <ListItem key={option.label}>
              <Button
                fullWidth
                size="large"
                sx={{
                  fontFamily: font,
                  textTransform: "none",
                  "&:hover": {
                    background: theme.CustomColors.hoverColor,
                    opacity: 1,
                  },
                  justifyContent: "flex-start",
                  px: 3,
                  borderRadius: ".5rem",
                  opacity: activeTab === option.label ? 1 : 0.8,
                  background:
                    activeTab === option.label
                      ? theme.CustomColors.hoverColor
                      : "transparent",
                  color: secondColor,
                  letterSpacing: "0.05rem",
                  "& .MuiButton-startIcon": {
                    mr: "1rem",
                  },
                }}
                startIcon={option.icon}
                onClick={() => handleButtonChange(option.label)}
              >
                {option.label}
              </Button>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
