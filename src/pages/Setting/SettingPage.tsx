// SettingsPage.tsx
import React, { useState, useCallback, useMemo } from "react";
import { useLogout } from "@/hooks/useLogout";
import { useDeleteAccount } from "@/hooks/useDeleteAccount";
import { FaVolumeUp, FaVolumeMute, FaTimes } from "react-icons/fa";
import {
  Container,
  Section,
  SectionHeader,
  SectionContent,
  PlayerBox,
  PlayerContainer,
  Avatar,
  NicknameContainer,
  NicknameText,
  EditIcon,
  SoundBox,
  SoundRow,
  SoundLabel,
  Toggle,
  Slider,
  VolumeIcon,
  ResetButton,
  AccountBox,
  AccountContainer,
  ButtonGroup,
  LogoutButton,
  DeleteButton,
  CancelIcon,
} from "./SettingPage.styles";
import NameModal from "@/pages/Name/NamePage";
import Loading from "@/components/Loading/Loading";

interface SettingPageProps {
  onClose: () => void;
}

const SettingPage: React.FC<SettingPageProps> = ({ onClose }) => {
  const [isNameModalOpen, setNameModalOpen] = useState(false);

  // 사운드 설정 상태
  const [bgmEnabled, setBgmEnabled] = useState(true);
  const [sfxEnabled, setSfxEnabled] = useState(true);
  const [bgmVolume, setBgmVolume] = useState(50);
  const [sfxVolume, setSfxVolume] = useState(50);

  // 볼륨이 0이 되면 자동으로 토글 비활성화, 0이 아니면 토글 활성화
  const handleBgmVolumeChange = useCallback((value: number) => {
    setBgmVolume(value);
    if (value === 0) {
      setBgmEnabled(false);
    } else {
      setBgmEnabled(true);
    }
  }, []);

  const handleSfxVolumeChange = useCallback((value: number) => {
    setSfxVolume(value);
    if (value === 0) {
      setSfxEnabled(false);
    } else {
      setSfxEnabled(true);
    }
  }, []);

  // 토글이 활성화될 때 볼륨이 0이면 기본값으로 설정
  const handleBgmToggle = useCallback(
    (enabled: boolean) => {
      setBgmEnabled(enabled);
      if (enabled && bgmVolume === 0) {
        setBgmVolume(10);
      }
    },
    [bgmVolume]
  );

  const handleSfxToggle = useCallback(
    (enabled: boolean) => {
      setSfxEnabled(enabled);
      if (enabled && sfxVolume === 0) {
        setSfxVolume(10);
      }
    },
    [sfxVolume]
  );

  const handleClose = () => {
    onClose();
  };

  const logoutMutation = useLogout();
  const logoutIsLoading = logoutMutation.isPending;

  const deleteAccountMutation = useDeleteAccount();
  const deleteAccountIsLoading = deleteAccountMutation.isPending;

  const handleLogout = useCallback(async () => {
    try {
      await logoutMutation.mutateAsync();
      alert("로그아웃되었습니다.");
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("알 수 없는 오류가 발생했습니다.");
      }
    }
  }, [logoutMutation]);

  const handleDeleteAccount = useCallback(async () => {
    if (window.confirm("정말로 계정을 삭제하시겠습니까?")) {
      try {
        await deleteAccountMutation.mutateAsync();
        alert("계정이 삭제되었습니다.");
      } catch (error: unknown) {
        if (error instanceof Error) {
          alert(error.message);
        } else {
          alert("알 수 없는 오류가 발생했습니다.");
        }
      }
    }
  }, [deleteAccountMutation]);

  // 계산된 값들을 메모이제이션
  const isLoading = useMemo(
    () => logoutIsLoading || deleteAccountIsLoading,
    [logoutIsLoading, deleteAccountIsLoading]
  );

  const handleNameModalClose = useCallback(() => setNameModalOpen(false), []);

  return (
    <>
      <Container>
        {/* 플레이어 섹션 */}
        <Section sectionType="player">
          <SectionHeader>플레이어</SectionHeader>
          <SectionContent>
            <PlayerBox>
              <PlayerContainer>
                <Avatar />
                <NicknameContainer>
                  <NicknameText>삥크핀</NicknameText>
                  <EditIcon onClick={() => setNameModalOpen(true)} />
                </NicknameContainer>
              </PlayerContainer>
            </PlayerBox>
          </SectionContent>
        </Section>

        {/* 사운드 섹션 */}
        <Section sectionType="sound">
          <SectionHeader>사운드</SectionHeader>
          <SectionContent>
            {/* BGM 섹션 */}
            <SoundBox>
              <SoundRow>
                <SoundLabel>BGM</SoundLabel>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <VolumeIcon muted={!bgmEnabled || bgmVolume === 0}>
                    {bgmEnabled && bgmVolume > 0 ? (
                      <FaVolumeUp />
                    ) : (
                      <FaVolumeMute />
                    )}
                  </VolumeIcon>
                  <Toggle
                    checked={bgmEnabled}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleBgmToggle(e.target.checked)
                    }
                    bgm={true}
                  />
                </div>
              </SoundRow>
              <Slider
                value={bgmVolume}
                onChange={(e) => handleBgmVolumeChange(Number(e.target.value))}
                muted={!bgmEnabled || bgmVolume === 0}
                bgm={true}
              />
            </SoundBox>

            {/* 효과음 섹션 */}
            <SoundBox>
              <SoundRow>
                <SoundLabel>효과음</SoundLabel>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <VolumeIcon muted={!sfxEnabled || sfxVolume === 0}>
                    {sfxEnabled && sfxVolume > 0 ? (
                      <FaVolumeUp />
                    ) : (
                      <FaVolumeMute />
                    )}
                  </VolumeIcon>
                  <Toggle
                    checked={sfxEnabled}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleSfxToggle(e.target.checked)
                    }
                    bgm={false}
                  />
                </div>
              </SoundRow>
              <Slider
                value={sfxVolume}
                onChange={(e) => handleSfxVolumeChange(Number(e.target.value))}
                muted={!sfxEnabled || sfxVolume === 0}
                bgm={false}
              />
            </SoundBox>

            <ResetButton
              onClick={useCallback(() => {
                setBgmVolume(50);
                setSfxVolume(50);
                setBgmEnabled(true);
                setSfxEnabled(true);
              }, [])}
            >
              초기화
            </ResetButton>
          </SectionContent>
        </Section>

        {/* 계정 섹션 */}
        <Section sectionType="account">
          <SectionHeader>계정</SectionHeader>
          <SectionContent>
            <AccountBox>
              <AccountContainer>
                <ButtonGroup>
                  <LogoutButton onClick={handleLogout}>로그아웃</LogoutButton>
                  <DeleteButton onClick={handleDeleteAccount}>
                    계정 삭제
                  </DeleteButton>
                </ButtonGroup>
              </AccountContainer>
            </AccountBox>
          </SectionContent>
        </Section>

        {/* 닫기 아이콘 */}
        <CancelIcon onClick={handleClose}>
          <FaTimes size={50} color="#57616A" />
        </CancelIcon>
      </Container>
      {isNameModalOpen && <NameModal onClose={handleNameModalClose} />}
      {isLoading && <Loading />}
    </>
  );
};

export default SettingPage;
