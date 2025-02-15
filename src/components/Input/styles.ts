import styled from "@emotion/styled";

export const InputWrapper = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid white;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  
  &:focus {
    outline: none;
    border-color: #3678b4;
  }
`;
