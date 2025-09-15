import styled, { keyframes } from "styled-components";

// 뿅하고 나타나는 애니메이션
const popIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const LobbyContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

// 튜토리얼 박스
export const TutorialBox = styled.div`
  position: absolute;
  top: 260px;
  left: 255px;
  width: 760px;
  height: 540px;
  background-color: #ebf3f9;
  border-radius: 50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 3rem;
  cursor: pointer;
  z-index: 10;
  transition: transform 0.2s ease;

  /* 뿅하고 나타나는 애니메이션 */
  animation: ${popIn} 0.6s ease-out;
  animation-delay: 0.2s;
  animation-fill-mode: backwards;

  &:hover {
    transform: scale(1.03);
  }
`;

export const TutorialText = styled.div`
  font-family: "Geist", sans-serif;
  font-weight: 600;
  font-size: 65px;
  color: #57616a;
  letter-spacing: 2%;
`;

// 매칭 박스들
export const RandomMatchBox = styled.div`
  position: absolute;
  top: 180px;
  left: 1220px;
  width: 440px;
  height: 320px;
  background-color: #ebf3f9;
  border-radius: 50px 20px 50px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  z-index: 10;
  transition: transform 0.2s ease;

  /* 뿅하고 나타나는 애니메이션 */
  animation: ${popIn} 0.6s ease-out;
  animation-delay: 0.4s;
  animation-fill-mode: backwards;

  &:hover {
    transform: scale(1.03);
  }
`;

export const SocialMatchBox = styled.div`
  position: absolute;
  top: 572px;
  left: 1220px;
  width: 440px;
  height: 320px;
  background-color: #ebf3f9;
  border-radius: 50px 20px 50px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  z-index: 10;
  transition: transform 0.2s ease;

  /* 뿅하고 나타나는 애니메이션 */
  animation: ${popIn} 0.6s ease-out;
  animation-delay: 0.6s;
  animation-fill-mode: backwards;

  &:hover {
    transform: scale(1.03);
  }
`;

export const MatchText = styled.div`
  font-family: "Geist", sans-serif;
  font-weight: 600;
  font-size: 40px;
  color: #57616a;
  letter-spacing: 2%;
  text-align: center;
`;
