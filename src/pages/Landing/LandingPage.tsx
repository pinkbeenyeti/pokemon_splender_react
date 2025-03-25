import React from "react";

const LandingPage: React.FC = () => {
  const kakaoUrl = import.meta.env.VITE_KAKAO_URL;
  const googleUrl = import.meta.env.VITE_GOOGLE_URL;

  return (
    <div>
      <h1>Landing Page</h1>
      <button onClick={() => (window.location.href = googleUrl)}>
        Google Login
      </button>
      <button onClick={() => (window.location.href = kakaoUrl)}>
        Kakao Login
      </button>
    </div>
  );
};

export default LandingPage;
