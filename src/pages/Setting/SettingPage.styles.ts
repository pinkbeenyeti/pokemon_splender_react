import styled, { keyframes } from "styled-components";
import { FaPencilAlt } from "react-icons/fa";

// 애니메이션 키프레임
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideInSections = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const buttonBounce = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(0.95); }
  100% { transform: scale(1); }
`;

// 피그마 정확한 색상값들
const BACKGROUND_COLOR = "rgba(0, 0, 0, 0.25)"; // 전체 배경
const PLAYER_SECTION_BACKGROUND = "#EFF7FA"; // 플레이어 섹션 배경
const SOUND_SECTION_BACKGROUND = "#F1F6FA"; // 사운드 섹션 배경
const ACCOUNT_SECTION_BACKGROUND = "#EFF7FA"; // 계정 섹션 배경1
const HEADER_BACKGROUND = "#EEF6F8"; // 헤더 배경
const SOUND_BOX_BACKGROUND = "#EEF6F9"; // 사운드 박스 배경
const NICKNAME_BOX_BACKGROUND = "#E2EAF7"; // 닉네임 박스 배경
const RESET_BUTTON_BACKGROUND = "#F6F6F6"; // 초기화 버튼 배경

// 토글 및 슬라이더 색상
const BGM_TOGGLE_ACTIVE_COLOR = "#01C8B3";
const SFX_TOGGLE_ACTIVE_COLOR = "#4EB5FF";
const BGM_SLIDER_COLOR = "#21B1A5";
const SFX_SLIDER_COLOR = "#4EB5FF";

// 버튼 색상
const LOGOUT_BUTTON_COLOR = "#2B3CFF";
const DELETE_BUTTON_COLOR = "#D12323";

// 그림자
const BOX_SHADOW = "0px 4px 4px 0px rgba(0, 0, 0, 0.25)";
const HEADER_SHADOW = "0px 4px 4px 0px rgba(0, 0, 0, 0.07)";
const INSET_SHADOW = "inset 4px 4px 0px 0px rgba(0, 0, 0, 0.25)";
const NICKNAME_INSET_SHADOW = "inset 0px 4px 4px 0px rgba(0, 0, 0, 0.25)";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${BACKGROUND_COLOR};
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  gap: 4rem;
  animation: ${fadeIn} 0.3s ease-out;

  @media (max-width: 1600px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Section = styled.div<{
  sectionType?: "player" | "sound" | "account";
}>`
  display: flex;
  flex-direction: column;
  width: 540px;
  height: 620px;
  background: ${(props) => {
    if (props.sectionType === "player") return PLAYER_SECTION_BACKGROUND;
    if (props.sectionType === "sound") return SOUND_SECTION_BACKGROUND;
    if (props.sectionType === "account") return ACCOUNT_SECTION_BACKGROUND;
    return SOUND_SECTION_BACKGROUND;
  }};
  border-radius: 40px 40px 20px 20px;
  box-shadow: ${BOX_SHADOW};
  overflow: hidden;
  animation: ${slideInSections} 0.5s ease-out;
  animation-delay: ${(props) => {
    if (props.sectionType === "player") return "0.1s";
    if (props.sectionType === "sound") return "0.2s";
    if (props.sectionType === "account") return "0.3s";
    return "0s";
  }};
  animation-fill-mode: both;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 94px;
  background: ${HEADER_BACKGROUND};
  box-shadow: ${HEADER_SHADOW};
  border-radius: 40px 40px 0px 0px;

  font-family: "Geist", sans-serif;
  font-size: 40px;
  font-weight: 600;
  color: #6b6b6b;
  letter-spacing: 0.02em;
`;

export const SectionContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 2rem;
  height: calc(626px - 94px); // 전체 높이에서 헤더 높이 제외
`;

// 플레이어 섹션 컴포넌트들
export const PlayerBox = styled.div`
  width: 410px;
  height: 330px;
  background: ${SOUND_BOX_BACKGROUND};
  border: 0.5px solid rgba(0, 0, 0, 0.24);
  border-radius: 15px;
  box-shadow: ${INSET_SHADOW};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Avatar = styled.div`
  width: 210px;
  height: 210px;
  border-radius: 112.5px;
  background: #000000;
  box-shadow: ${BOX_SHADOW};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  /* 포켓몬 이미지가 있다면 */
  background-image: url("/pokemon-avatar.png");
  background-size: cover;
  background-position: center;
`;

export const NicknameContainer = styled.div`
  width: 350px;
  height: 60px;
  background: ${NICKNAME_BOX_BACKGROUND};
  border-radius: 50px;
  box-shadow: ${NICKNAME_INSET_SHADOW};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const NicknameText = styled.span`
  font-family: "Geist", sans-serif;
  font-size: 30px;
  font-weight: 600;
  color: #57616a;
  letter-spacing: 0.02em;
`;

export const EditIcon = styled(FaPencilAlt)`
  width: 21.61px;
  height: 21.61px;
  color: #000000;
  cursor: pointer;

  &:hover {
    color: ${BGM_TOGGLE_ACTIVE_COLOR};
  }
`;

// 사운드 섹션 컴포넌트들
export const SoundBox = styled.div`
  width: 440px;
  height: 130px;
  background: ${SOUND_BOX_BACKGROUND};
  border: 0.5px solid rgba(0, 0, 0, 0.24);
  border-radius: 15px;
  box-shadow: ${INSET_SHADOW};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SoundRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SoundLabel = styled.span`
  font-family: "Geist", sans-serif;
  font-size: 27px;
  font-weight: 500;
  color: #7f8690;
  letter-spacing: 0.02em;
`;

export const VolumeIcon = styled.div<{ muted?: boolean }>`
  display: flex;
  align-items: center;
  font-size: 30px;
  color: ${(props) => (props.muted ? "#9ca3af" : "#000000")};
  transition: color 0.3s ease;
`;

export const Toggle = styled.input.attrs({ type: "checkbox" })<{
  bgm?: boolean;
}>`
  appearance: none;
  width: 70px;
  height: 32px;
  background: #e5e7eb;
  border-radius: 116px;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &:checked {
    background: ${(props) =>
      props.bgm ? BGM_TOGGLE_ACTIVE_COLOR : SFX_TOGGLE_ACTIVE_COLOR};
  }

  &::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    background: #fffdfd;
    border-radius: 50%;
    top: 1px;
    left: 1px;
    transition: all 0.3s ease;
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.15);
  }

  &:checked::before {
    left: 39px;
  }
`;

export const Slider = styled.input.attrs({ type: "range", min: 0, max: 100 })<{
  muted?: boolean;
  bgm?: boolean;
  value?: number;
}>`
  width: 430px;
  height: 10px;
  background: ${(props) => {
    if (props.muted) return "#e5e7eb";
    const activeColor = props.bgm ? BGM_SLIDER_COLOR : SFX_SLIDER_COLOR;
    const percentage = props.value || 0;
    return `linear-gradient(to right, ${activeColor} 0%, ${activeColor} ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`;
  }};
  border-radius: 130px;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;
  appearance: none;
  align-self: center;

  &::-webkit-slider-thumb {
    appearance: none;
    width: 32px;
    height: 32px;
    background: #fffdfd;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
  }

  &::-webkit-slider-thumb:hover {
    transform: scale(1.05);
  }

  &::-moz-range-thumb {
    width: 32px;
    height: 32px;
    background: #fffdfd;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.15);
  }

  /* Firefox에서 트랙 스타일링 */
  &::-moz-range-track {
    height: 10px;
    background: ${(props) => {
      if (props.muted) return "#e5e7eb";
      const activeColor = props.bgm ? BGM_SLIDER_COLOR : SFX_SLIDER_COLOR;
      const percentage = props.value || 0;
      return `linear-gradient(to right, ${activeColor} 0%, ${activeColor} ${percentage}%, #e5e7eb ${percentage}%, #e5e7eb 100%)`;
    }};
    border-radius: 130px;
    border: none;
  }

  &::-moz-range-progress {
    background: ${(props) => {
      if (props.muted) return "#e5e7eb";
      return props.bgm ? BGM_SLIDER_COLOR : SFX_SLIDER_COLOR;
    }};
    height: 10px;
    border-radius: 130px;
  }
`;

export const ResetButton = styled.button`
  width: 150px;
  height: 50px;
  background: ${RESET_BUTTON_BACKGROUND};
  border: none;
  border-radius: 64px;
  box-shadow: ${BOX_SHADOW};
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: center;

  font-family: "Geist", sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #000000;
  letter-spacing: 0.02em;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }

  &:active {
    animation: ${buttonBounce} 0.2s ease;
  }
`;

// 계정 섹션 컴포넌트들
export const AccountBox = styled.div`
  width: 410px;
  height: 330px;
  background: ${SOUND_BOX_BACKGROUND};
  border: 0.5px solid rgba(0, 0, 0, 0.24);
  border-radius: 15px;
  box-shadow: ${INSET_SHADOW};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const LogoutButton = styled.button`
  width: 245px;
  height: 87px;
  background: ${LOGOUT_BUTTON_COLOR};
  border: none;
  border-radius: 10px;
  box-shadow: ${BOX_SHADOW};
  cursor: pointer;
  transition: all 0.3s ease;

  font-family: "Geist", sans-serif;
  font-size: 35px;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.02em;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(43, 60, 255, 0.4);
    background: #1e2ecc;
  }

  &:active {
    animation: ${buttonBounce} 0.2s ease;
  }
`;

export const DeleteButton = styled.button`
  width: 245px;
  height: 87px;
  background: ${DELETE_BUTTON_COLOR};
  border: none;
  border-radius: 10px;
  box-shadow: ${BOX_SHADOW};
  cursor: pointer;
  transition: all 0.3s ease;

  font-family: "Geist", sans-serif;
  font-size: 35px;
  font-weight: 600;
  color: #ffffff;
  letter-spacing: 0.02em;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(209, 35, 35, 0.4);
    background: #b01d1d;
  }

  &:active {
    animation: ${buttonBounce} 0.2s ease;
  }
`;

// 닫기 아이콘
export const CancelIcon = styled.button`
  position: absolute;
  top: 50px;
  right: 50px;
  width: 80px;
  height: 80px;

  background-color: #ebf3f9;
  border: none;
  border-radius: 20px;
  box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;
