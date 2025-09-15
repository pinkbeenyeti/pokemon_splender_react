import axiosInstance from "@/api/Interceptor/axiosResponseInterceptors";

export const updateUserName = async (name: string): Promise<true> => {
  const response = await axiosInstance.post(
    `${import.meta.env.VITE_NAME_EDIT_API_URL}`,
    { newName: name }
  );

  if (response.status === 200) {
    return true;
  }

  // 이건 거의 도달하지 않지만, 안전망으로 넣은 Error 처리
  throw new Error("이름 변경에 실패했습니다.");
};

export const logout = async (): Promise<true> => {
  const response = await axiosInstance.post(
    `${import.meta.env.VITE_AUTH_LOGOUT_API_URL}`
  );

  if (response.status === 204) {
    return true;
  }

  // 이건 거의 도달하지 않지만, 안전망으로 넣은 Error 처리
  throw new Error("로그아웃에 실패했습니다.");
};

export const deleteAccount = async (): Promise<true> => {
  const response = await axiosInstance.delete(
    `${import.meta.env.VITE_DELETE_ACCOUNT_API_URL}`
  );

  if (response.status === 204) {
    return true;
  }

  // 이건 거의 도달하지 않지만, 안전망으로 넣은 Error 처리
  throw new Error("계정 삭제에 실패했습니다.");
};
