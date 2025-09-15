import { useMutation } from "@tanstack/react-query";
import { updateUserName } from "@/api/Apis/userApi";

export const useUpdateUserName = () => {
  return useMutation({
    mutationFn: updateUserName,
  });
};
