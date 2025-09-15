import { useMutation } from "@tanstack/react-query";
import { logout } from "@/api/Apis/userApi";

export const useLogout = () => {
  return useMutation({
    mutationFn: logout,
  });
};
