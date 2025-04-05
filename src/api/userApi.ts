import { useEffect, useState } from "react";
import axios from "axios";

export const useAuthSync = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const syncAuthState = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_AUTH_API_URL}`,
          {
            withCredentials: true, // 쿠키 포함
          }
        );

        setIsAuthenticated(response.status === 200);
      } catch (error) {
        console.error("인증 상태 확인 실패:", error);
        setIsAuthenticated(false);
      }
    };

    syncAuthState();
  }, []);

  return isAuthenticated;
};
