import { Outlet } from "react-router-dom";
import styled from "styled-components";
import PokemonCard from "@/components/Layout/PokemonCard";

const BACKGROUND_COLOR = "#EFF4FA"; // fill_5YIR66
const DECORATION_COLOR = "#E2EAF7"; // fill_YGX243

const LayoutWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: ${BACKGROUND_COLOR};
  overflow: hidden;

  /* 중앙 정렬을 위한 flexbox */
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* 실제 1920x1080 컨테이너 */
const MainContainer = styled.div`
  position: relative;
  width: 1920px;
  height: 1080px;
  background: ${BACKGROUND_COLOR};
`;

// 벡터 장식 요소들 - CSS로 정확히 구현
// Vector 12: M0 0V320L1540 0H0Z (왼쪽 상단 삼각형)
const Vector12 = styled.div`
  position: absolute;
  left: 0px;
  top: 80px;
  width: 1500px;
  height: 300px;
  background: ${DECORATION_COLOR};
  clip-path: polygon(0 0, 0 100%, 100% 0);
  z-index: 1;
`;

// Vector 13: M1648 0L0 320H1648V0Z (하단 오른쪽 삼각형)
const Vector13 = styled.div`
  position: absolute;
  left: 420px;
  top: 695px;
  width: 1500px;
  height: 300px;
  background: ${DECORATION_COLOR};
  clip-path: polygon(100% 0, 0 100%, 100% 100%);
  z-index: 1;
`;
const Content = styled.div`
  position: relative;
  z-index: 3;
  width: 100%;
  height: 100%;
`;

const Layout: React.FC = () => {
  return (
    <LayoutWrapper>
      <MainContainer>
        {/* 배경 벡터 장식 요소들 */}
        <Vector12 />
        <Vector13 />

        {/* Component 580 - 포켓볼 메인 컨테이너 */}
        <PokemonCard x={1530} y={330} rotation={-14} scale={1} zIndex={2} />

        {/* 메인 콘텐츠 */}
        <Content>
          <Outlet />
        </Content>
      </MainContainer>
    </LayoutWrapper>
  );
};

export default Layout;
