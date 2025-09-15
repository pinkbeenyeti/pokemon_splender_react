import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useAuthSync = () => {
  const {
    data: isAuthenticated,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["authStatus"],
    queryFn: async () => {
      const response = await axios.get(`${import.meta.env.VITE_AUTH_API_URL}`, {
        withCredentials: true,
      });
      return response.status === 200;
    },
    staleTime: 1000 * 60 * 5, // // 5분 동안 캐시된 데이터 사용, 컴포넌트가 다시 마운트 되어도 5분이 지나지 않았다면 api 호출 안함
    retry: false,
  });

  return {
    isAuthenticated,
    isLoading,
    error,
    refetch,
  };
};
