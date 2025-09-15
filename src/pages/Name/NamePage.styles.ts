import styled, { keyframes } from "styled-components";

const BORDER_RADIUS = "40px";
const BORDER_RADIUS_MOBILE = "25px";
const MODAL_BACKGROUND_COLOR = "#F1F6FA";
const FOOTER_BACKGROUND_COLOR = "#eef6f8";
const FOOTER_BORDER_COLOR = "rgba(0, 0, 0, 0.1)";
const BOX_SHADOW = "0px 6px 4px #00000040";

const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const NamePageContainer = styled(FlexCenter)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  z-index: 2000;

  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);

  overflow-y: auto;
  overflow-x: hidden;

  animation: ${fadeIn} 0.3s ease-out;
`;

export const ModalContainer = styled(FlexCenter)`
  flex-direction: column;
  position: relative;
  z-index: 2010;

  background-color: ${MODAL_BACKGROUND_COLOR};
  box-shadow: ${BOX_SHADOW};

  width: 800px;
  height: 570px;

  border-radius: ${BORDER_RADIUS};

  @media (max-width: 800px) {
    width: 460px;
    height: 330px;
    border-radius: ${BORDER_RADIUS_MOBILE};
  }
`;

export const ModalBody = styled(FlexCenter)`
  flex-direction: column;
  width: 100%;
  height: 79%;

  gap: 43px;

  @media (max-width: 800px) {
    gap: 30px;
  }
`;

export const Text = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #5f6a70;

  &.warning {
    color: #ff0004;
  }

  @media (max-width: 800px) {
    font-size: 1rem;
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
