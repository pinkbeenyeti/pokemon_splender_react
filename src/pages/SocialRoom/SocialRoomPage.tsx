import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import {
  Container,
  MainContainer,
  SocialBox,
  SearchContainer,
  SearchInput,
  ActionButton,
} from "./SocialRoomPage.styles";
import Profile from "@/components/Profile/Profile";
import BackButton from "@/components/Button/BackButton/BackButton";
import SettingsIcon from "@/components/Settings/SettingsIcon";
import SettingsOverlay from "@/pages/Setting/SettingPage";

const SocialRoomPage: React.FC = () => {
  const [isSettingOverlayOpen, setSettingOverlayOpen] = useState(false);
  const [inviteCode, setInviteCode] = useState("");
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
        <Profile nickname="삥크핀" />

        {/* 뒤로 가기 버튼 */}
        <BackButton onClick={() => navigate(-1)} />

        {/* 메인 컨테이너 */}
        <MainContainer>
          {/* 왼쪽 박스 - 방 생성 */}
          <SocialBox>
            <ActionButton>방 생성하기</ActionButton>
          </SocialBox>

          {/* 오른쪽 박스 - 초대 코드 입장 */}
          <SocialBox>
            <SearchContainer>
              <SearchInput
                type="text"
                placeholder="초대 코드를 입력하세요"
                value={inviteCode}
              />

              <FaSearch size={20} color="#57616A" />
            </SearchContainer>
            <ActionButton>초대 코드로 들어가기</ActionButton>
          </SocialBox>
        </MainContainer>

        {/* 설정 아이콘 */}
        <SettingsIcon onClick={() => setSettingOverlayOpen(true)} />
      </Container>
      {isSettingOverlayOpen && (
        <SettingsOverlay onClose={() => setSettingOverlayOpen(false)} />
      )}
    </>
  );
};

export default SocialRoomPage;
