import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "@/pages/Landing/LandingPage";
import RedirectPage from "@/pages/Login/RedirectPage";
import RoutePath from "@/router/RouterPath";

function Router() {
  const router = createBrowserRouter([
    {
      path: RoutePath.HOME,
      element: <LandingPage />,
    },
    { path: RoutePath.OAUTH2_LOGIN, element: <RedirectPage /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
