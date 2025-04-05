import { Outlet } from "react-router-dom";
import { useAuthSync } from "@/api/userApi";
import LoadingPage from "@/pages/Loading/LoadingPage";
import LoginModal from "@/pages/Login/LoginModal";

const ProtectedRoute = () => {
  const isAuthenticated = useAuthSync();

  if (isAuthenticated === null) {
    return <LoadingPage />; // 인증 여부 확인 전이면 로딩 페이지 표시
  }

  return isAuthenticated ? <Outlet /> : <LoginModal />; // 인증된 경우 Outlet을 렌더링하고, 인증되지 않은 경우 LoginModal을 렌더링
};

export default ProtectedRoute;
