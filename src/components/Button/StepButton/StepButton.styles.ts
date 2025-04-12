import styled from "styled-components";

export const CommonStepButton = styled.button`
  background-color: #ffffff;
  box-shadow: 0px 4px 4px #00000040;
  border-radius: 112px;
  border: none;

  width: 240px;
  height: 70px;

  font-size: 25px;
  font-weight: bold;
  text-align: center;

  @media (max-width: 800px) {
    width: 150px;
    height: 50px;
    font-size: 18px;
  }

  &:hover {
    background-color: #e0e0e0;
    border: none;
  }
`;

export const ConfirmButton = styled(CommonStepButton)`
  background-color: #adc2dd;
  color: #ffffff;

  &:hover {
    background-color: #d3dce6;
  }
`;

export const OkButton = styled(CommonStepButton)`
  background-color: #3be0d4;
  color: #ffffff;

  &:hover {
    background-color: #adc2dd;
  }
`;
