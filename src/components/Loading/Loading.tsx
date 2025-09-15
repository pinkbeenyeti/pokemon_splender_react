// src/components/common/Loading.tsx
import styled, { keyframes } from "styled-components";
import loadingSvg from "@/assets/loading.svg";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: -32%;
  left: 0;
  width: 100vw;
  height: 100vh;

  @media (max-width: 800px) {
    top: -29%;
  }

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 9999;
`;

const Spinner = styled.img`
  width: 160px;
  height: 160px;

  @media (max-width: 800px) {
    width: 90px;
    height: 90px;
  }

  animation: ${spin} 8s linear infinite;
`;

const Loading = () => {
  return (
    <LoadingOverlay>
      <Spinner src={loadingSvg} alt="Loading..." />
    </LoadingOverlay>
  );
};

export default Loading;
