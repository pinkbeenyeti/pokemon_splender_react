import React from "react";
import {
  StyledProfileSection,
  StyledAvatar,
  StyledNickname,
} from "@/components/Profile/Profile.styles";

interface ProfileProps {
  nickname: string;
  avatarImage?: string;
  className?: string;
}

const Profile: React.FC<ProfileProps> = ({
  nickname,
  avatarImage,
  className,
}) => {
  return (
    <StyledProfileSection className={className}>
      <StyledAvatar $avatarImage={avatarImage} />
      <StyledNickname>{nickname}</StyledNickname>
    </StyledProfileSection>
  );
};

export default Profile;
