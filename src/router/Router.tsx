import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "@/pages/Landing/LandingPage";
import MainPage from "@/pages/Main/MainPage";
import ProfilePage from "@/pages/Profile/ProfilePage";
import Layout from "@/components/Layout/Layout";
//import ProtectedNewUserRoute from "./Protect/ProtectedNewUserRoute";
import LoadingPage from "@/pages/Loading/LoadingPage";
import SocialRoomPage from "@/pages/SocialRoom/SocialRoomPage";
import RandomRoomPage from "@/pages/RandomRoom/RandomRoomPage";
import GameRoomPage from "@/pages/Game/GamePage";
import RouterPath from "@/router/RouterPath";
//import LoginModal from "@/pages/Login/LoginModal";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/layout",
      element: <Layout />,
    },
    {
      path: RouterPath.HOME,
      element: <LandingPage />,
    },
    {
      path: RouterPath.LOADING,
      element: <LoadingPage />,
    },
    {
      path: RouterPath.PROFILE,
      element: <ProfilePage />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: RouterPath.MAIN,
          element: <MainPage />,
        },
        {
          path: RouterPath.SOCIAL_ROOM,
          element: <SocialRoomPage />,
        },
        {
          path: RouterPath.RANDOM_ROOM,
          element: <RandomRoomPage />,
        },
      ],
    },
    {
      path: "/gameRoom",
      element: <GameRoomPage />,
    },
    // {
    //   path: "/",
    //   element: <ProtectedNewUserRoute />,
    //   children: [{ path: RouterPath.PROFILE, element: <ProfilePage /> }],
    // },
    // {
    //   path: "/",
    //   element: <Layout />,
    //   children: [
    //     {
    //       element: <ProtectedRoute />,
    //       children: [{ path: RouterPath.MAIN, element: <MainPage /> }],
    //     },
    //   ],
    // },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;
