import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useGetGlobalValues } from "./useGlobalValues";
import { ReactNode, useState, useMemo, createContext, useEffect } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

interface DevicesColors {
  Desktop: string;
  Tablet: string;
  Phone: string;
}

interface CustomColors {
  backgroundColor: string;
  mainColor: string;
  hoverColor: string;
  sideNavbar: string;
  dangerColor: string;
  devicesColors: DevicesColors;
}

declare module "@mui/material/styles" {
  interface Theme {
    CustomColors: CustomColors;
  }
  interface ThemeOptions {
    CustomColors?: CustomColors;
  }
}

export const ThemeModeContext = createContext<
  | {
      themeMode: string;
      setThemeMode: React.Dispatch<React.SetStateAction<string>>;
    }
  | undefined
>(undefined);

export function CustomThemeProvider({ children }: ThemeProviderProps) {
  const { font, firstColor, secondColor } = useGetGlobalValues();
  const [themeMode, setThemeMode] = useState<string>(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ?? "light";
  });
  const backgroundColor = themeMode === "dark" ? "#1E1D25" : "#FFFFFF";
  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: font,
        },
        palette: {
          background: {
            default: backgroundColor,
          },
          mode: themeMode === "dark" ? "dark" : "light",
          primary: {
            main: firstColor,
          },
          secondary: {
            main: secondColor,
          },
          text: {
            primary: themeMode === "dark" ? "#ffffff" : "#000000",
            secondary: themeMode === "dark" ? "#000000" : "#ffffff",
          },
        },
        CustomColors: {
          backgroundColor: backgroundColor,
          mainColor: "#1c2536",
          hoverColor: firstColor,
          dangerColor: "#ed9291",
          sideNavbar: "#533AC9",
          devicesColors: {
            Desktop: "orange",
            Tablet: "#655eed",
            Phone: "#00ba83",
          },
        },
      }),
    [themeMode, font, firstColor, secondColor, backgroundColor]
  );

  useEffect(() => {
    localStorage.setItem("theme", themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider theme={theme}>
      <ThemeModeContext.Provider
        value={{ themeMode: themeMode, setThemeMode: setThemeMode }}
      >
        {children}
      </ThemeModeContext.Provider>
    </ThemeProvider>
  );
}
