import { Outlet } from "react-router-dom";
import { useAuthSync } from "@/hooks/authSync";
import LoadingPage from "@/pages/Loading/LoadingPage";
import LoginModal from "@/pages/Login/LoginModal";

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading, error } = useAuthSync();

  if (isLoading) {
    return <LoadingPage />; // 인증 여부 확인 전이면 로딩 페이지 표시
  }

  if (!isAuthenticated && error instanceof Error) {
    alert(error.message); // 인증 실패 시 에러 메시지 표시
    return <LoginModal />; // 인증 실패 시 LoginModal 표시
  }

  return <Outlet />; // 인증된 경우 Outlet을 렌더링
};

export default ProtectedRoute;
