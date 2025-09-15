import styled from "styled-components";

// 색상 상수들
const POKEBALL_CONTAINER_COLOR = "#E2EAF7"; // fill_YGX243
const POKEBALL_INNER_COLOR = "#EFF4FA"; // fill_5YIR66
const POKEBALL_RING1_COLOR = "#E3EBF8"; // fill_Q5S9GZ
const POKEBALL_RING2_COLOR = "#E2E9F8"; // fill_G2KI55

// Props 인터페이스
interface PokemonCardProps {
  x?: number;
  y?: number;
  rotation?: number;
  scale?: number;
  zIndex?: number;
}

// 메인 카드 컨테이너
const CardContainer = styled.div<PokemonCardProps>`
  position: absolute;
  left: ${(props) => props.x || 1570}px;
  top: ${(props) => props.y || 420}px;
  width: 368.74px;
  height: 460px;
  z-index: ${(props) => props.zIndex || 2};
  transform: rotate(${(props) => props.rotation || -14}deg)
    scale(${(props) => props.scale || 1});
  transform-origin: center center;
`;

// 외부 카드 배경
const CardBackground = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background: ${POKEBALL_CONTAINER_COLOR};
  border-radius: 50px;
`;

// 내부 카드 영역
const CardInner = styled.div`
  position: absolute;
  left: 33.96px;
  top: 34.14px;
  width: 300.13px;
  height: 390px;
  background: ${POKEBALL_INNER_COLOR};
  border-radius: 20px;
`;

// 포켓볼 디자인 컨테이너
const PokeBallDesign = styled.div`
  position: absolute;
  left: 67.27px;
  top: 110px;
  width: 233.52px;
  height: 233.52px;
`;

// 포켓볼 링들
const OuterRing = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 233.52px;
  height: 233.52px;
  background: ${POKEBALL_RING1_COLOR};
  border-radius: 50%;
`;

const MiddleRing = styled.div`
  position: absolute;
  left: 26.33px;
  top: 26.15px;
  width: 181.72px;
  height: 181.72px;
  background: ${POKEBALL_INNER_COLOR};
  border-radius: 50%;
`;

const InnerRing = styled.div`
  position: absolute;
  left: 68.78px;
  top: 68.78px;
  width: 95.96px;
  height: 95.96px;
  background: ${POKEBALL_RING1_COLOR};
  border-radius: 50%;
`;

const CenterCircle = styled.div`
  position: absolute;
  left: 94.26px;
  top: 94.26px;
  width: 45px;
  height: 45px;
  background: ${POKEBALL_INNER_COLOR};
  border-radius: 50%;
`;

// 포켓볼 버튼들
const LeftButton = styled.div`
  position: absolute;
  left: 15px;
  top: 100px;
  width: 65px;
  height: 34.66px;
  background: ${POKEBALL_RING2_COLOR};
  border-radius: 8px;
`;

const RightButton = styled.div`
  position: absolute;
  left: 148.25px;
  top: 95px;
  width: 65px;
  height: 34.66px;
  background: ${POKEBALL_RING2_COLOR};
  border-radius: 8px;
`;

// 포켓몬 카드 컴포넌트
const PokemonCard: React.FC<PokemonCardProps> = ({
  x = 1570,
  y = 420,
  rotation = -14,
  scale = 1,
  zIndex = 2,
}) => {
  return (
    <CardContainer
      x={x}
      y={y}
      rotation={rotation}
      scale={scale}
      zIndex={zIndex}
    >
      {/* 카드 배경 */}
      <CardBackground />

      {/* 내부 영역 */}
      <CardInner />

      {/* 포켓볼 디자인 */}
      <PokeBallDesign>
        <OuterRing />
        <MiddleRing />
        <InnerRing />
        <CenterCircle />
        <LeftButton />
        <RightButton />
      </PokeBallDesign>
    </CardContainer>
  );
};

export default PokemonCard;
