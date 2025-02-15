import React from "react";
import { ErrorWrapper, ErrorTitle, ErrorDescription } from "./styles";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  
  return (
    <ErrorWrapper>
      <ErrorTitle>API Error</ErrorTitle>
      <ErrorDescription>{message || "An unknown error occurred"}</ErrorDescription>
    </ErrorWrapper>
  );
};

export default ErrorMessage;
