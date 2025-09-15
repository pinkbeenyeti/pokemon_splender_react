import styled, { keyframes } from "styled-components";
import card from "@/assets/pokemon_card.svg";
import loading from "@/assets/loading.svg";

const Background = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: #eff4fa;
`;

const TriangleTopLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-top: 300px solid #30dde8;
  border-right: 1500px solid #eff4fa;
`;

const TriangleBottomRight = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 0;
  border-bottom: 300px solid #e2eaf7;
  border-left: 1500px solid #eff4fa;
`;

const CardBottomRight = styled.img`
  position: absolute;
  bottom: 120px;
  right: -50px;
  width: 450px;
  height: 450px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const RotatingImage = styled.img`
  position: absolute;
  top: 200px;
  left: 730px;
  width: 480px;
  height: 480px;

  animation: ${rotate} 8s linear infinite;
`;

const LoadingPage: React.FC = () => {
  return (
    <Background>
      <TriangleTopLeft />
      <TriangleBottomRight />
      <CardBottomRight src={card} alt="pokemon card" />
      <RotatingImage src={loading} alt="loading" />
    </Background>
  );
};

export default LoadingPage;
