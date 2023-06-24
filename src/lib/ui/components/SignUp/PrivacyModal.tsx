import { Box, Modal } from "@mui/material";
import { useCallback } from "react";
import PolicyContent from "./PolicyContent.tsx";
interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function PrivacyModal({
  isOpen = false,
  setIsOpen,
}: ModalProps) {
  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  return (
    <Modal
      open={isOpen}
      onClose={handleCloseModal}
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box
        sx={(theme) => ({
          width: { xs: "70%", md: "45rem" },
          background: theme.palette.secondary.main,
          px: { xs: 5, md: 10 },
          py: { xs: 2, md: 5 },
          height: "65%",
          overflowY: "auto",
          "&:focus": {
            outline: "none",
          },
          "&::-webkit-scrollbar": {
            width: "0.4em",
          },
          "&::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
          },
          "&::-webkit-scrollbar-thumb": {
            background: theme.palette.primary.main,
            width: "1rem",
          },
          scrollBehavior: "smooth",
        })}
      >
        <PolicyContent />
      </Box>
    </Modal>
  );
}
