import styled, { keyframes } from "styled-components";

// 애니메이션
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

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

// 매칭 박스들
export const MatchingBoxContainer = styled.div`
  position: absolute;
  top: 350px;
  width: 100%;
  display: flex;
  gap: 110px;
  justify-content: center;
`;

export const MatchingBox = styled.div`
  width: 480px;
  height: 420px;
  background-color: #ebf3f9;
  border-radius: 50px 20px 50px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: transform 0.2s ease;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 40px;

  /* 뿅하고 나타나는 애니메이션 적용 */
  animation: ${popIn} 0.6s ease-out;
  animation-fill-mode: backwards;

  /* 각 박스별로 다른 딜레이 적용 */
  &:nth-child(1) {
    animation-delay: 0.4s;
  }

  &:nth-child(2) {
    animation-delay: 0.5s;
  }

  &:nth-child(3) {
    animation-delay: 0.6s;
  }

  &:hover {
    transform: scale(1.03);
  }
`;

export const MatchingText = styled.div`
  font-family: "Geist", sans-serif;
  font-weight: 600;
  font-size: 50px;
  color: #57616a;
  letter-spacing: 2%;
  text-align: center;
  z-index: 1;
  position: relative;
`;
