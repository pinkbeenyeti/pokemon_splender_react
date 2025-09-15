import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  MatchingBoxContainer,
  MatchingBox,
  MatchingText,
} from "./RandomRoomPage.styles";
import Profile from "@/components/Profile/Profile";
import BackButton from "@/components/Button/BackButton/BackButton";
import SettingsIcon from "@/components/Settings/SettingsIcon";
import SettingsOverlay from "@/pages/Setting/SettingPage";
import avatarImage from "@/assets/figma/randomroom/avatar-image-1c5cfc.png";

const RandomRoomPage: React.FC = () => {
  const [isSettingOverlayOpen, setSettingOverlayOpen] = useState(false);
  const navigate = useNavigate();

  // 설정 오버레이가 열릴 때 body 스크롤 방지
  useEffect(() => {
    if (isSettingOverlayOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // 컴포넌트 언마운트 시 정리
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSettingOverlayOpen]);

  return (
    <>
      <Container>
        {/* 프로필 섹션 */}
        <Profile nickname="삥크핀" avatarImage={avatarImage} />

        {/* 뒤로 가기 버튼 */}
        <BackButton onClick={() => navigate(-1)} />

        {/* 매칭 박스들 */}
        <MatchingBoxContainer>
          <MatchingBox onClick={() => console.log("1 vs 1 모드 선택")}>
            <MatchingText>1 vs 1</MatchingText>
          </MatchingBox>
          <MatchingBox onClick={() => console.log("1 vs 1 vs 1 모드 선택")}>
            <MatchingText>1 vs 1 vs 1</MatchingText>
          </MatchingBox>
          <MatchingBox
            onClick={() => console.log("1 vs 1 vs 1 vs 1 모드 선택")}
          >
            <MatchingText>1 vs 1 vs 1 vs 1</MatchingText>
          </MatchingBox>
        </MatchingBoxContainer>

        {/* 설정 아이콘 */}
        <SettingsIcon onClick={() => setSettingOverlayOpen(true)} />
      </Container>
      {isSettingOverlayOpen && (
        <SettingsOverlay onClose={() => setSettingOverlayOpen(false)} />
      )}
    </>
  );
};

export default RandomRoomPage;
