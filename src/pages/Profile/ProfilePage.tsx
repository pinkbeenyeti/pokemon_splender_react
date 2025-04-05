import { useState } from "react";
import StepButton from "@/components/Button/StepButton/StepButton";
import Stepper from "@/components/Stepper/Stepper";
import {
  ProfilePageContainer,
  ModalContainer,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@/pages/Profile/ProfilePage.styles";

const ProfilePage: React.FC = () => {
  const [step, setStep] = useState(1);

  const description = [
    "「포켓몬 보드 게임 Splender」에 어서 오세요!",
    "이 게임에서는 \n 포켓몬 보드 게임 Splender를 \n 다른 사람들과 온라인으로 즐길 수 있습니다.",
    "아이콘과 플레이어 이름을 \n 설정해 주십시오.",
  ];

  const totalSteps = description.length;

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleConfirm = () => {
    alert("설정이 완료되었습니다!");
  };

  const renderFooterButtons = () => {
    return (
      <>
        {step > 1 && (
          <StepButton
            type="previous"
            onClick={handlePrevious}
            label="이전으로"
          />
        )}
        {step < totalSteps && (
          <StepButton type="next" onClick={handleNext} label="다음으로" />
        )}
        {step === totalSteps && (
          <StepButton type="confirm" onClick={handleConfirm} label="확인" />
        )}
      </>
    );
  };

  const renderBodyContent = () => {
    if (step < totalSteps) {
      return (
        <>
          <ModalHeader />
          <ModalBody step={step}>{description[step - 1]}</ModalBody>
        </>
      );
    }
    return <ModalBody step={step}>{description[step - 1]}</ModalBody>;
  };

  return (
    <ProfilePageContainer>
      <ModalContainer step={step}>
        {renderBodyContent()}
        <ModalFooter>{renderFooterButtons()}</ModalFooter>
      </ModalContainer>
      <Stepper step={step} />
    </ProfilePageContainer>
  );
};

export default ProfilePage;
