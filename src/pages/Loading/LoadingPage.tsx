import styled, { keyframes } from "styled-components";
import card from "@/assets/pokemon_card.svg";
import loading from "@/assets/loading.svg";

const Background = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
  background-color: #eff4fa;
`;

const TriangleTopLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-top: 30vh solid #30dde8;
  border-right: 80vw solid #eff4fa;
`;

const TriangleBottomRight = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 0;
  border-bottom: 30vh solid #e2eaf7;
  border-left: 80vw solid #eff4fa;
`;

const CardBottomRight = styled.img`
  position: absolute;
  bottom: 17vh; /* Adjusted to ensure visibility */
  right: 0; /* Adjusted to ensure visibility */
  width: 25vw;
  height: 25vw;
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
  top: 25%;
  left: 37%;
  width: 25vw;
  height: 25vw;

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
