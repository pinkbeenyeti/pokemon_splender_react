import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuthSync } from "@/api/userApi";
import { getCookies, deleteCookie } from "@/utils/cookies";
import LoadingPage from "@/pages/Loading/LoadingPage";
import RouterPath from "@/router/RouterPath";

const ProtectedNewUserRoute = () => {
  const isAuthenticated = useAuthSync();
  const [isNewUser, setIsNewUser] = useState(false);

  useEffect(() => {
    const cookies = getCookies();
    const cookieNewUser = cookies["new_user"]?.toLowerCase() === "true";
    if (cookieNewUser) {
      setIsNewUser(true);
      deleteCookie("new_user");
    }
  }, []);

  if (isAuthenticated === null) {
    return <LoadingPage />;
  }

  if (!isAuthenticated) {
    alert("로그인에 실패했습니다. 다시 시도해주세요.");
    return <Navigate to={RouterPath.HOME} replace />;
  }

  return isNewUser ? <Outlet /> : <Navigate to={RouterPath.MAIN} replace />;
};

export default ProtectedNewUserRoute;
