import styled from "styled-components";
import { setRedirectCookie } from "@/utils/cookies";
import kakao_symbol from "@/assets/kakao_symbol.svg";
import google_symbol from "@/assets/google_symbol.svg";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 400px;
  text-align: center;

  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 2rem;
`;

const SymbolImage = styled.img`
  width: 200px;
  height: 40px;

  &:hover {
    filter: brightness(80%);
  }
`;

const LoginModal: React.FC = () => {
  const kakaoUrl = import.meta.env.VITE_KAKAO_URL;
  const googleUrl = import.meta.env.VITE_GOOGLE_URL;

  const redirectToLogin = (baseUrl: string) => {
    const currentUrl = window.location.href;
    setRedirectCookie("redirect_uri", currentUrl, 0.02); // 쿠키에 현재 URL 저장
    window.location.href = `${baseUrl}`;
  };

  return (
    <ModalOverlay>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <Title>로그인이 만료되었습니다.</Title>
        <Description>다시 로그인해주세요.</Description>
        <SymbolImage
          src={kakao_symbol}
          alt="Login"
          onClick={() => redirectToLogin(kakaoUrl)}
        />
        <SymbolImage
          src={google_symbol}
          alt="Login"
          onClick={() => redirectToLogin(googleUrl)}
        />
      </ModalContent>
    </ModalOverlay>
  );
};

export default LoginModal;
