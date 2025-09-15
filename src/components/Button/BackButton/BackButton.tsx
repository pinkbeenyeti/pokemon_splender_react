import React from "react";
import styled, { keyframes } from "styled-components";
import { FaArrowLeft } from "react-icons/fa";

// 뿅하고 나타나는 애니메이션
const popIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.5);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const StyledBackButton = styled.button`
  position: absolute;
  top: 120px;
  left: 1785px;
  width: 80px;
  height: 80px;
  background-color: #ebf3f9;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  z-index: 10;
  transition: transform 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  /* 뿅하고 나타나는 애니메이션 */
  animation: ${popIn} 0.6s ease-out;
  animation-delay: 0.6s;
  animation-fill-mode: backwards;

  &:hover {
    transform: scale(1.1);
  }
`;

interface BackButtonProps {
  onClick: () => void;
}

const BackButton: React.FC<BackButtonProps> = ({ onClick }) => {
  return (
    <StyledBackButton onClick={onClick}>
      <FaArrowLeft size={50} color="#57616A" />
    </StyledBackButton>
  );
};

export default BackButton;
