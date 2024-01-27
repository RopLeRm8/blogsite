import { lazy, Suspense } from "react";

const SignIn = lazy(() => import("src/pages/SignIn"));
const SignUp = lazy(() => import("src/pages/SignUp"));
const Statistics = lazy(() => import("src/pages/Statistics"));
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
      path: "/statistics",
      element: withSuspense(Statistics),
    },
  ];

  return routesList;
}
