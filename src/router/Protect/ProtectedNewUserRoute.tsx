import { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuthSync } from "@/hooks/authSync";
import { getCookies, deleteCookie } from "@/utils/cookies";
import LoadingPage from "@/pages/Loading/LoadingPage";
import RouterPath from "@/router/RouterPath";

const ProtectedNewUserRoute = () => {
  const { isAuthenticated, isLoading, error } = useAuthSync();
  const [isNewUser, setIsNewUser] = useState(false);
  const [hasCheckedCookie, setHasCheckedCookie] = useState(false);

  // 쿠키 확인
  useEffect(() => {
    const cookies = getCookies();
    const cookieNewUser = cookies["new_user"]?.toLowerCase() === "true";
    if (cookieNewUser) {
      setIsNewUser(true);
      deleteCookie("new_user");
    }
    setHasCheckedCookie(true);
  }, []);

  // 로딩 중이거나 아직 쿠키 확인이 안 되었으면
  if (isLoading || !hasCheckedCookie) {
    return <LoadingPage />;
  }

  // 인증 에러(실패) 처리
  if (isAuthenticated && error instanceof Error) {
    alert(error.message);
    return <Navigate to={RouterPath.HOME} replace />;
  }

  // 새 유저가 아니라면 메인 페이지로 이동
  if (!isNewUser) {
    return <Navigate to={RouterPath.MAIN} replace />;
  }

  // 인증 완료 + 새 유저면 정상 라우팅
  return <Outlet />;
};

export default ProtectedNewUserRoute;
