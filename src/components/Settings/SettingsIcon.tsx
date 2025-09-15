import React from "react";
import styled, { keyframes } from "styled-components";
import { FaCog } from "react-icons/fa";

// 설정 아이콘용 회전 + 페이드 애니메이션
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

export const StyledSettingsIcon = styled.button`
  position: absolute;
  top: 880px;
  left: 1785px;
  width: 80px;
  height: 80px;
  background-color: #ebf3f9;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: transform 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  /* 뿅하고 나타나는 애니메이션 */
  animation: ${popIn} 0.8s ease-out;
  animation-delay: 0.8s;
  animation-fill-mode: backwards;

  &:hover {
    transform: scale(1.1);
  }
`;

interface SettingsIconProps {
  onClick: () => void;
  className?: string;
}

const SettingsIcon: React.FC<SettingsIconProps> = ({ onClick, className }) => {
  return (
    <StyledSettingsIcon onClick={onClick} className={className}>
      <FaCog size={60} color="#57616A" />
    </StyledSettingsIcon>
  );
};

export default SettingsIcon;
