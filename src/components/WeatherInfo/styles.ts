import styled from "@emotion/styled";

export const WeatherWrapper = styled.div`
  width: 710px;
  height: 180px;
  background: linear-gradient(133.66deg, rgba(47, 72, 111, 0.62) 5.78%, rgba(11, 27, 52, 0.62) 96.58%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 20px;
  position: relative;
`;

export const TemperatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  justify-content: center;
  flex: 1;
`;

export const Temperature = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 57px;
  font-weight: 500;
  color: white;
  line-height: 69px;
  margin: 0;
`;

export const City = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: white;
  margin-top: 5px;
`;

export const WeatherIcon = styled.img`
  width: 74px;
  height: 74px;
  position: absolute;
  left: 60%;  
  transform: translateX(-50%); 
  top: 50%;
  transform: translate(-50%, -50%); 
`;
