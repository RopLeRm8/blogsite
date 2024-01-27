import { Typography, useTheme, Box } from "@mui/material";

interface MainBoxProps {
  children: JSX.Element;
}
export default function MainBox({ children }: MainBoxProps) {
  const theme = useTheme();
  return (
    <>
      <Typography
        sx={{
          color: theme.palette.text.primary,
          p: 2,
          pl: 0,
          fontSize: "120%",
        }}
      >
        Account Settings
      </Typography>
      <Box
        sx={{
          p: 1,
          borderRadius: "2rem",
          maxWidth: { xs: "99%", sm: "100%" },
          minHeight: "89dvh",
          boxShadow: `0px 0px 2px ${theme.palette.text.primary}`,
          mb: { xs: 5, xl: 0 },
        }}
      >
        {children}
      </Box>
    </>
  );
}
