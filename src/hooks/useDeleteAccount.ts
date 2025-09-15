import { useMutation } from "@tanstack/react-query";
import { deleteAccount } from "@/api/Apis/userApi";

export const useDeleteAccount = () => {
  return useMutation({
    mutationFn: deleteAccount,
  });
};
