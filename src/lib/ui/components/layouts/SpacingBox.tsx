import { Box } from "@mui/material";
import { ReactNode } from "react";

interface SpacingBoxProps {
  children: ReactNode;
}
export default function SpacingBox({ children }: SpacingBoxProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
      }}
    >
      <Box sx={{ width: { xs: "80%", sm: "25rem" } }}>{children}</Box>
    </Box>
  );
}
