import styled from "@emotion/styled";

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 200px;
`;

export const Input = styled.input`
  width: 550px;
  height: 48px;
  padding: 12px 20px;
  border: 2px solid white;
  border-radius: 40px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(16px);
  color: white;
  font-size: 16px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const Button = styled.button`
  width: 120px;
  height: 48px;
  border-radius: 25px;
  background: linear-gradient(270.38deg, #362A84 0.23%, #5936B4 94.2%);
  color: white;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  outline: none;
  &:hover {
    background: linear-gradient(270.38deg, #2a5e93 0.23%, #3678B4 94.2%);
  }
`;
