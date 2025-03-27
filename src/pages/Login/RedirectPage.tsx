import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCookies } from "@/utils/cookies";
import { userAuthApi } from "@/api/userApi";
import useAuthStore from "@/stores/authStore";

const RedirectPage = () => {
  const navigate = useNavigate();
  const { setAuthState, setNewUser, authState, newUser } = useAuthStore();
  const checkAuthentication = useCallback(async () => {
    const isAuthenticated = await userAuthApi(); // 비동기 처리
    setAuthState(isAuthenticated); // 인증 상태 설정
  }, [setAuthState]);

  useEffect(() => {
    // 쿠키를 통째로 가져오는 함수
    const cookies = getCookies();

    // 쿠키에서 새로운 사용자 여부를 가져오고 저장한다.
    const newUserCookie = cookies["new_user"];
    setNewUser(newUserCookie === "true");

    // 인증 상태를 서버를 통해 확인하고 저장한다.
    checkAuthentication();

    // newUser 값에 따라 페이지를 이동한다.
    if (authState) {
      navigate(newUser ? "/profile" : "/main");
    }
  }, [
    navigate,
    setAuthState,
    setNewUser,
    authState,
    newUser,
    checkAuthentication,
  ]);

  return <div>Redirecting...</div>;
};

export default RedirectPage;
