import React from "react";
import styled from "styled-components";

interface NameProps {
  value: string;
  onChange: (value: string) => void;
  variety: boolean;
}

const Input = styled.input<{ variety: boolean }>`
  width: 60%;
  height: 13%;

  border: 3px solid #ccc;
  border-radius: 50px;

  text-align: center;
  font-size: 2.2rem;
  font-weight: bold;
  color: #919191;

  background-color: ${({ variety }) => (variety ? "#ffffff" : "#E2EAF7")};
  border-color: ${({ variety }) => (variety ? "#ffffff" : "#E2EAF7")};
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:focus {
    border-color: ${({ variety }) => (variety ? "#b3b3b3" : "#adc2dd")};
    color: #000000;
    outline: none;
  }

  @media (max-width: 800px) {
    font-size: 1.5rem;
  }
`;

const Name: React.FC<NameProps> = ({ value, onChange, variety }) => {
  return (
    <Input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      variety={variety} // 상태 전달
      maxLength={8} // 최대 8글자 입력 가능
    />
  );
};

export default Name;
