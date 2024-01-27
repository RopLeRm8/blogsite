import { createContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useLoadFonts } from "src/lib/hooks/useApplyFonts";
import useSetRoutes from "src/lib/hooks/useSetRoutes";
import { CustomThemeProvider } from "src/lib/hooks/useCreateTheme";
import { ThemeBackground } from "./ThemeBackgroundProvider";
import useUserPreference from "src/lib/hooks/useUserPreference";

export const MainContext = createContext({
  colors: ["#6B52E6", "#FFFFFF"],
  fonts: ["Montserrat"],
});

export default function RouteProvider() {
  useLoadFonts();
  useUserPreference();
  const routesList = useSetRoutes();

  return (
    <BrowserRouter>
      <MainContext.Provider
        value={{ colors: ["#6B52E6", "#FFFFFF"], fonts: ["Montserrat"] }}
      >
        <CustomThemeProvider>
          <ThemeBackground>
            <Routes>
              {routesList.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    route.element ?? <Navigate to={route.navigate ?? "/404"} />
                  }
                />
              ))}
            </Routes>
          </ThemeBackground>
        </CustomThemeProvider>
      </MainContext.Provider>
    </BrowserRouter>
  );
}
