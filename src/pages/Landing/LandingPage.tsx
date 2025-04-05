import React from "react";
import { setRedirectCookie } from "@/utils/cookies";

const LandingPage: React.FC = () => {
  const kakaoUrl = import.meta.env.VITE_KAKAO_URL;
  const googleUrl = import.meta.env.VITE_GOOGLE_URL;

  const redirectToLogin = (baseUrl: string) => {
    const currentUrl = window.location.href;
    setRedirectCookie("redirect_uri", currentUrl, 0.02); // 쿠키에 현재 URL 저장
    window.location.href = `${baseUrl}`;
  };

  return (
    <div>
      <h1>Landing Page</h1>
      <button onClick={() => redirectToLogin(googleUrl)}>Google Login</button>
      <button onClick={() => redirectToLogin(kakaoUrl)}>Kakao Login</button>
    </div>
  );
};

export default LandingPage;
