import axios from "axios";

export const userAuthApi = async (): Promise<boolean> => {
  try {
    const response = await axios.get("/api/user/authenticated", {
      withCredentials: true, // 쿠키를 포함한 요청
    });

    return response.status === 200; // 200 상태 코드가 반환되면 인증된 것으로 판단
  } catch (error) {
    console.error(error); // 오류가 발생하면 인증되지 않은 것으로 간주
    return false;
  }
};
