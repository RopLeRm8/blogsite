import { useTheme } from "@mui/material/styles";
import { useEffect } from "react";

interface ThemeBackgroundProps {
  children: JSX.Element;
}

export function ThemeBackground({ children }: ThemeBackgroundProps) {
  const theme = useTheme();

  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default;
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [theme]);

  return children;
}
