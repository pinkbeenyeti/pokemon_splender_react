import { Outlet } from "react-router-dom";
import useAuthStore from "@/stores/authStore";

const ProtectedRoute = () => {
  const authState = useAuthStore((state) => state.authState);

  return authState ? <Outlet /> : null;
};

export default ProtectedRoute;
