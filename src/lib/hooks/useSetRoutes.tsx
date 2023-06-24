import { lazy, Suspense } from "react";

const SignIn = lazy(() => import("../../pages/SignIn"));
const SignUp = lazy(() => import("../../pages/SignUp"));
const Dashboard = lazy(() => import("../../pages/Dashboard"));
interface Route {
  path: string;
  element: JSX.Element;
  navigate?: string;
}

export default function useSetRoutes() {
  const fallbackElement = <div> Loading... </div>;

  const withSuspense = (Component: React.ComponentType) => (
    <Suspense fallback={fallbackElement}>
      <Component />
    </Suspense>
  );

  const routesList: Route[] = [
    {
      path: "/login",
      element: withSuspense(SignIn),
    },
    {
      path: "/register",
      element: withSuspense(SignUp),
    },
    {
      path: "/dashboard",
      element: withSuspense(Dashboard),
    },
  ];

  return routesList;
}
