import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "@/pages/Landing/LandingPage";
import RedirectPage from "@/pages/Login/RedirectPage";
import MainPage from "@/pages/Main/MainPage";
import ProfilePage from "@/pages/Profile/ProfilePage";
import Layout from "@/components/Layout/Layout";
import ProtectedRoute from "@/router/Protect/ProtectedRoute";
import ProtectedNewUserRoute from "./Protect/ProtectedNewUserRoute";
import RoutePath from "@/router/RouterPath";

function Router() {
  const router = createBrowserRouter([
    {
      path: RoutePath.HOME,
      element: <LandingPage />,
    },
    { path: RoutePath.OAUTH2_LOGIN, element: <RedirectPage /> },
    {
      path: "/",
      element: <ProtectedNewUserRoute />,
      children: [{ path: RoutePath.PROFILE, element: <ProfilePage /> }],
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          element: <ProtectedRoute />,
          children: [{ path: RoutePath.MAIN, element: <MainPage /> }],
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
