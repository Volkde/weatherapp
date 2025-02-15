import React from "react";
import { InputWrapper } from "./styles";

interface InputProps {

  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder }) => {
  
  return <InputWrapper type="text" value={value} onChange={onChange} placeholder={placeholder} />;
};

export default Input;