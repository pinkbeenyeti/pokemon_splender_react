import styled from "styled-components";

const BORDER_RADIUS = "40px";
const BORDER_RADIUS_MOBILE = "25px";
const MODAL_BACKGROUND_COLOR = "#f1f6fa";
const FOOTER_BACKGROUND_COLOR = "#eef6f8";
const FOOTER_BORDER_COLOR = "rgba(0, 0, 0, 0.1)";
const BOX_SHADOW = "0px 6px 4px #00000040";

const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfilePageContainer = styled(FlexCenter)`
  flex-direction: column;
  background-color: #e2eaf7;

  min-height: 100vh;
  max-width: 100vw;

  overflow-y: auto;
  overflow-x: hidden;

  gap: 30px;

  @media (max-width: 800px) {
    gap: 20px;
  }
`;

export const ModalContainer = styled(FlexCenter)<{ step: number }>`
  flex-direction: column;
  text-align: left;

  background-color: ${MODAL_BACKGROUND_COLOR};
  box-shadow: ${BOX_SHADOW};

  width: 800px;
  height: ${({ step }) => (step === 3 ? "570px" : "680px")};

  border-radius: ${BORDER_RADIUS};

  @media (max-width: 800px) {
    width: 460px;
    height: ${({ step }) => (step === 3 ? "330px" : "390px")};
    border-radius: ${BORDER_RADIUS_MOBILE};
  }
`;

export const ModalHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #d1f1e4, #d1daf9, #f2d9df);

  width: 100%;
  height: 47%;

  border-top-left-radius: ${BORDER_RADIUS};
  border-top-right-radius: ${BORDER_RADIUS};

  @media (max-width: 800px) {
    height: 47%;
    gap: 5px;

    border-top-left-radius: ${BORDER_RADIUS_MOBILE};
    border-top-right-radius: ${BORDER_RADIUS_MOBILE};
  }
`;

export const ModalBody = styled(FlexCenter)<{ step: number }>`
  width: 100%;
  height: ${({ step }) => (step === 3 ? "79%" : "32%")};

  white-space: pre-line;
  color: ${({ step }) => (step === 3 ? "#5f6a70" : "#849198")};

  font-size: 1.7rem;
  font-weight: bold;
  line-height: 1.7;

  @media (max-width: 800px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

export const ModalFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${FOOTER_BACKGROUND_COLOR};

  width: 100%;
  height: 21%;

  border-bottom-left-radius: ${BORDER_RADIUS};
  border-bottom-right-radius: ${BORDER_RADIUS};
  border-top: 1px solid ${FOOTER_BORDER_COLOR};

  gap: 60px;

  @media (max-width: 800px) {
    border-bottom-left-radius: ${BORDER_RADIUS_MOBILE};
    border-bottom-right-radius: ${BORDER_RADIUS_MOBILE};

    gap: 30px;
  }
`;
