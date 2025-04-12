import {
  CommonStepButton,
  ConfirmButton,
  OkButton,
} from "@/components/Button/StepButton/StepButton.styles";

interface ButtonProps {
  onClick?: () => void;
  type?: "previous" | "next" | "confirm" | "ok";
  label: string;
}

const StepButton: React.FC<ButtonProps> = ({
  onClick,
  label,
  type = "confirm",
}) => {
  let ButtonComponent;

  switch (type) {
    case "confirm":
      ButtonComponent = ConfirmButton;
      break;
    case "ok":
      ButtonComponent = OkButton;
      break;
    case "next":
      ButtonComponent = CommonStepButton;
      break;
    case "previous":
      ButtonComponent = CommonStepButton;
      break;
  }

  return <ButtonComponent onClick={onClick}>{label}</ButtonComponent>;
};

export default StepButton;
