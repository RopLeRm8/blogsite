import { createContext, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useLoadFonts } from "src/lib/hooks/useApplyFonts";
import useSetRoutes from "src/lib/hooks/useSetRoutes";
import { CustomThemeProvider } from "src/lib/hooks/useCreateTheme";
import { ThemeBackground } from "./ThemeBackgroundProvider";
import useUserPreference from "src/lib/hooks/useUserPreference";
import { useAuth } from "src/lib/hooks/api/useAuth";

export const MainContext = createContext<{
  colors?: string[] | [];
  fonts?: string[] | [];
}>({});

export default function RouteProvider() {
  useLoadFonts();
  useUserPreference();
  const routesList = useSetRoutes();
  const { request, data } = useAuth();

  useEffect(() => {
    const handleLogin = async () => {
      await request({
        method: "GET",
        url: "/api/user/authenticate",
        withCredentials: true,
      });
    };
    handleLogin();
  }, []);
  useEffect(() => {
    console.log(data);
  }, [data]);

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
