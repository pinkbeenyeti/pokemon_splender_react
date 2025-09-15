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

// 메인 컨테이너
export const MainContainer = styled.div`
  position: absolute;
  top: 250px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px; /* 박스들 사이의 간격 */
`;

// 소셜 박스
export const SocialBox = styled.div`
  width: 600px;
  height: 580px;
  background-color: #eef6f8;
  border-radius: 50px 20px 50px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease;

  /* 뿅하고 나타나는 애니메이션 적용 */
  animation: ${popIn} 0.6s ease-out;
  animation-fill-mode: backwards;

  /* 각 박스별로 다른 딜레이 적용 */
  &:nth-child(1) {
    animation-delay: 0.5s;
  }

  &:nth-child(2) {
    animation-delay: 0.6s;
  }

  &:hover {
    transform: scale(1.03);
  }

  &:hover {
    transform: scale(1.02);
  }
`;

// 검색 입력 필드
export const SearchContainer = styled.div`
  position: relative;
  width: 481px;
  height: 66px;
  background-color: #e2eaf7;
  border-radius: 50px;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-family: "Geist", sans-serif;
  font-size: 18px;
  color: #57616a;
  padding-right: 50px;

  &::placeholder {
    color: #8697b1;
  }
`;

// 액션 버튼들
export const ActionButton = styled.button`
  width: 376px;
  height: 76px;
  background-color: #47fff0;
  border: none;
  border-radius: 112px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: "Geist", sans-serif;
  font-weight: 600;
  font-size: 30px;
  color: #57616a;
  letter-spacing: 2%;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.05);
    background-color: #3de6d9;
  }

  &:active {
    transform: scale(0.98);
  }
`;
