import React from "react";
import styled from "styled-components";

const StepperContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90px;
  height: 30px;
  border-radius: 60px;

  background-color: #8697b1;
  gap: 7px;

  @media (max-width: 800px) {
    width: 70px;
    height: 27px;
    border-radius: 15px;

    gap: 5px;
  }
`;

const Circle = styled.div<{ $active: boolean }>`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: ${({ $active }) => ($active ? "#C7D7F1" : "#6E7E97")};

  @media (max-width: 800px) {
    width: 14px;
    height: 14px;
  }
`;

interface StepperProps {
  step: number;
}

const Stepper: React.FC<StepperProps> = ({ step }) => {
  return (
    <StepperContainer>
      <Circle $active={step === 1} />
      <Circle $active={step === 2} />
      <Circle $active={step === 3} />
    </StepperContainer>
  );
};

export default Stepper;
