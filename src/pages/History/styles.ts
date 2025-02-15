import styled from "@emotion/styled";

export const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px; 
  width: 100%;
  max-width: 710px;
  margin: auto;
  padding: 8px 0;
  margin-top: 50px; 
  overflow: hidden; 
`;


export const HistoryItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 709px;
  min-height: 180px;
  border-radius: 20px;
  position: relative;
  background: rgba(255, 255, 255, 0.1); 
  backdrop-filter: none; 
  box-shadow: none; 
`;


export const WeatherContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px; 
`;


export const DeleteButton = styled.button`
  background: #3678B4;
  border: none;
  border-radius: 10px;
  color: white;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  &:hover {
    background: #2a5e93;
  }
`;


export const ClearHistoryButton = styled.button`
  background: linear-gradient(0deg, #4A319F, #4A319F),
              linear-gradient(270.38deg, #362A84 0.23%, #5936B4 94.2%),
              linear-gradient(0deg, #3678B4, #3678B4);

  color: white;
  border: none;
  padding: 12px 40px;
  border-radius: 50px;
  cursor: pointer;
  font-size: 20px;
  width: 709px;
  height: 48px;
  margin-top: 10px; 
  &:hover {
    background: #362A84;
  }
`;
