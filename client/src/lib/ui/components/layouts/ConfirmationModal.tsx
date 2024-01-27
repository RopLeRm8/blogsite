import { Modal, Box, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import IconsHandler from "src/lib/hooks/IconsHandler";
interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  text: string | undefined;
  action: () => void;
  setActiveTab?: React.Dispatch<React.SetStateAction<string>>;
  lastTab: string;
}
export default function ConfirmationModal({
  isOpen,
  setIsOpen,
  text,
  action,
  setActiveTab,
  lastTab,
}: ModalProps) {
  const theme = useTheme();
  const { confirmIcon: ConfirmIcon, closeIcon: CloseIcon } = IconsHandler();
  return (
    <>
      <Modal
        open={isOpen}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            alignItems: "center",
            background: theme.palette.primary.main,
            p: 3,
            borderRadius: ".5rem",
          }}
        >
          <Typography
            sx={{
              color: "white",
              textAlign: "center",
              fontSize: "130%",
            }}
          >
            Confirm Action
          </Typography>
          <Typography sx={{ color: "white", fontSize: "110%", my: 2 }}>
            {text}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <Button
              onClick={action}
              sx={{
                textTransform: "none",
                color: "white",
                background: theme.CustomColors.sideNavbar,
                "& .MuiButton-startIcon": {
                  pointerEvents: "none",
                },
              }}
              variant="contained"
              disableElevation
              startIcon={<ConfirmIcon />}
            >
              Confirm
            </Button>
            <Button
              onClick={() => {
                setIsOpen(false);
                if (!setActiveTab) return;
                setActiveTab(lastTab ?? "Overview");
              }}
              sx={{
                textTransform: "none",
                color: "white",
                background: theme.CustomColors.sideNavbar,
                "& .MuiButton-startIcon": {
                  pointerEvents: "none",
                },
              }}
              variant="contained"
              disableElevation
              startIcon={<CloseIcon />}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
