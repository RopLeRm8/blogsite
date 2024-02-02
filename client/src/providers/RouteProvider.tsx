import { createContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useLoadFonts } from "src/lib/hooks/useApplyFonts";
import useSetRoutes from "src/lib/hooks/useSetRoutes";
import { CustomThemeProvider } from "src/lib/hooks/useCreateTheme";
import { ThemeBackground } from "./ThemeBackgroundProvider";
import useUserPreference from "src/lib/hooks/useUserPreference";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthProvider from "./AuthProvider";

export const MainContext = createContext<{
  colors?: string[] | [];
  fonts?: string[] | [];
}>({});

export default function RouteProvider() {
  const queryClient = new QueryClient();
  useLoadFonts();
  useUserPreference();
  const routesList = useSetRoutes();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MainContext.Provider
          value={{ colors: ["#6B52E6", "#FFFFFF"], fonts: ["Montserrat"] }}
        >
          <CustomThemeProvider>
            <ThemeBackground>
              <AuthProvider>
                <Routes>
                  {routesList.map((route) => (
                    <Route
                      key={route.path}
                      path={route.path}
                      element={
                        route.element ?? (
                          <Navigate to={route.navigate ?? "/404"} />
                        )
                      }
                    />
                  ))}
                  <Route path="*" element={<Navigate to="/404" />} />
                </Routes>
              </AuthProvider>
            </ThemeBackground>
          </CustomThemeProvider>
        </MainContext.Provider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
