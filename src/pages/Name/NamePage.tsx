import React, { useState, useCallback } from "react";
import { useUpdateUserName } from "@/hooks/useUpdateUserName";
import {
  NamePageContainer,
  ModalContainer,
  ModalBody,
  Text,
  ModalFooter,
} from "@/pages/Name/NamePage.styles";
import StepButton from "@/components/Button/StepButton/StepButton";
import Name from "@/components/Name/Name";
import Loading from "@/components/Loading/Loading";

interface NamePageProps {
  onClose: () => void;
}

const NamePage: React.FC<NamePageProps> = ({ onClose }) => {
  const [name, setName] = useState("");
  const isNameEntered = name.trim().length > 0;
  const mutation = useUpdateUserName();
  const isLoading = mutation.isPending;

  const handleOk = useCallback(async () => {
    try {
      await mutation.mutateAsync(name.trim());
      alert("닉네임이 성공적으로 변경되었습니다!");
      onClose();
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("알 수 없는 오류가 발생했습니다.");
      }
    }
  }, [mutation, name, onClose]);

  const handleCancel = useCallback(() => {
    setName("");
    onClose();
  }, [onClose]);

  const renderText = useCallback(
    () =>
      isNameEntered ? (
        <>
          <Text>이 이름으로 설정하시겠습니까?</Text>
          <Text className="warning">
            🚫 플레이어 이름은 30일 동안
            <br />
            다시 변경할 수 없습니다.
          </Text>
        </>
      ) : (
        <>
          <Text>8글자까지 입력할 수 있습니다.</Text>
          <Text className="warning">
            🚫 자신의 이름 등 개인정보를 사용하지 마십시오.
          </Text>
        </>
      ),
    [isNameEntered]
  );

  return (
    <>
      {isLoading && <Loading />}
      <NamePageContainer>
        <ModalContainer>
          <ModalBody>
            <Name value={name} onChange={setName} variety={isNameEntered} />
            {renderText()}
          </ModalBody>
          <ModalFooter>
            <StepButton type="cancel" onClick={handleCancel} label="취소" />
            <StepButton
              type={isNameEntered ? "ok" : "confirm"}
              onClick={isNameEntered ? handleOk : () => {}}
              label={isNameEntered ? "OK!" : "확인"}
            />
          </ModalFooter>
        </ModalContainer>
      </NamePageContainer>
    </>
  );
};

export default NamePage;
