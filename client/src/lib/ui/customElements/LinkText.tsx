import { Typography, useTheme } from "@mui/material";
import { useCallback } from "react";
import { useRedirect } from "../../hooks/useRedirect";
import { Theme } from "@mui/material";
import { SxProps } from "@mui/system";

interface LinkTextProps {
  sx?: SxProps<Theme>;
  children: string;
  link?: string;
  action?: () => void;
}
export default function LinkText({
  sx,
  children,
  link,
  action,
}: LinkTextProps) {
  const redirect = useRedirect();
  const theme = useTheme();
  const handleRedirect = useCallback(() => {
    if (action) {
      action();
    }
    if (!link) return;
    redirect(link);
  }, [redirect, link, action]);
  return (
    <Typography
      onClick={handleRedirect}
      sx={{
        ...sx,
        color: theme.palette.primary.main,
        cursor: "pointer",
        textDecoration: "underline",
        "&:hover": {
          color: theme.palette.text.primary,
        },
      }}
    >
      {children}
    </Typography>
  );
}
