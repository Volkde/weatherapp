import React from "react";
import { ButtonWrapper } from "./styles";

interface ButtonProps {
  
  onClick: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>;
};

export default Button;