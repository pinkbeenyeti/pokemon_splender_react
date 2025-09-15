import styled from "styled-components";

// 공통 색상
const TEXT_COLOR = "#57616A";

interface AvatarProps {
  $avatarImage?: string;
}

export const StyledProfileSection = styled.div`
  position: absolute;
  top: 120px;
  left: 65px;
  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 10;
`;

export const StyledAvatar = styled.div<AvatarProps>`
  width: 85px;
  height: 85px;
  border-radius: 42.5px;
  background-image: ${(props) =>
    props.$avatarImage ? `url(${props.$avatarImage})` : "none"};
  background-size: cover;
  background-position: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #000000; /* fallback */
`;

export const StyledNickname = styled.div`
  font-family: "Geist", sans-serif;
  font-weight: 600;
  font-size: 34px;
  color: ${TEXT_COLOR};
  letter-spacing: 2%;
`;
