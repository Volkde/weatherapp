import React from "react";
import { WeatherWrapper, TemperatureWrapper, Temperature, City, WeatherIcon } from "./styles";

interface WeatherInfoProps {
  city: string;
  temperature: number;
  icon: string;
}

const WeatherInfo: React.FC<WeatherInfoProps> = ({ city, temperature, icon }) => {
  
  return (
    <WeatherWrapper>
      <TemperatureWrapper>
        <Temperature>{Math.round(temperature)}°</Temperature>
        <City>{city}</City>
      </TemperatureWrapper>
      <WeatherIcon src={`https://openweathermap.org/img/w/${icon}.png`} alt="Weather Icon" />
    </WeatherWrapper>
  );
};

export default WeatherInfo;
