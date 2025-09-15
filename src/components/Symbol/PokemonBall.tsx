import styled from "styled-components";

const OuterRing = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(to bottom, #fe8e69 50%, #3ccefd 50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Pokeball = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: white;
  position: relative;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.05);
  border: 10px solid white;
`;

const TopHalf = styled.div`
  width: 100%;
  height: 50%;
  background: #d8defe;
  border-top-left-radius: 120px;
  border-top-right-radius: 120px;
  position: absolute;
  top: 0;
`;

const BottomHalf = styled.div`
  width: 100%;
  height: 50%;
  background: #78aeec;
  border-bottom-left-radius: 120px;
  border-bottom-right-radius: 120px;
  position: absolute;
  bottom: 0;
`;

const CenterLine = styled.div`
  width: 100%;
  height: 12px;
  background: white;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const CenterCircle = styled.div`
  width: 100px;
  height: 100px;
  background: #cbe0fb;
  border: 10px solid white;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const PokemonBall = () => {
  return (
    <OuterRing>
      <Pokeball>
        <TopHalf />
        <BottomHalf />
        <CenterLine />
        <CenterCircle />
      </Pokeball>
    </OuterRing>
  );
};

export default PokemonBall;
