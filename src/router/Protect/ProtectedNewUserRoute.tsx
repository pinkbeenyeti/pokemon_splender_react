import { Outlet, Navigate } from "react-router-dom";
import useAuthStore from "@/stores/authStore";

const ProtectedNewUserRoute = () => {
  const authState = useAuthStore((state) => state.authState);
  const newUser = useAuthStore((state) => state.newUser);

  if (!authState) {
    return null; // 인증되지 않은 사용자는 아무것도 보이지 않음
  }

  if (newUser) {
    return <Outlet />; // 새로운 사용자면 내부 페이지 렌더링
  }

  return <Navigate to="/main" replace />; // 기존 사용자면 메인 페이지로 이동
};

export default ProtectedNewUserRoute;
