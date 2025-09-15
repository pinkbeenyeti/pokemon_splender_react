import axios from "axios";
import { ApiErrorPayload } from "@/api/Error/ApiError";
import { connectErrorMessage } from "@/utils/connectMessage";

function extractApiErrorMessage(error: unknown): Error {
  if (axios.isAxiosError(error)) {
    const data = error.response?.data as ApiErrorPayload | undefined; // 서버에서 반환된 에러 데이터 없는 경우 undefined 처리
    const message = connectErrorMessage(
      data?.code || 500,
      data?.message || "서버 내부 오류가 발생했습니다.",
      data?.detail || "없음."
    );

    return new Error(message);
  }

  return new Error("예기치 못한 오류가 발생했습니다.");
}

const axiosInstance = axios.create({
  withCredentials: true, // 쿠키를 포함한 요청 허용
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(extractApiErrorMessage(error))
);

export default axiosInstance;
