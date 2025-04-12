import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "@/pages/Landing/LandingPage";
import MainPage from "@/pages/Main/MainPage";
import ProfilePage from "@/pages/Profile/ProfilePage";
import Layout from "@/components/Layout/Layout";
import ProtectedRoute from "@/router/Protect/ProtectedRoute";
import ProtectedNewUserRoute from "./Protect/ProtectedNewUserRoute";
//import LoadingPage from "@/pages/Loading/LoadingPage";
import RouterPath from "@/router/RouterPath";
//import LoginModal from "@/pages/Login/LoginModal";

function Router() {
  const router = createBrowserRouter([
    {
      path: RouterPath.HOME,
      element: <LandingPage />,
    },
    {
      path: "/",
      element: <ProtectedNewUserRoute />,
      children: [{ path: RouterPath.PROFILE, element: <ProfilePage /> }],
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          element: <ProtectedRoute />,
          children: [{ path: RouterPath.MAIN, element: <MainPage /> }],
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
