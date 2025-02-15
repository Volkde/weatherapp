import React from "react";
import { useAppSelector } from "store/hooks";
import WeatherInfo from "components/WeatherInfo/WeatherInfo";
import ErrorMessage from "components/ErrorMessage/ErrorMessage"; 
import { HomeWrapper } from "./styles";

const Home = () => {
  const { data, loading, error } = useAppSelector((state) => state.weather);

  return (
    <HomeWrapper>
      {loading && <p>Loading...</p>}
      {error ? ( 
        <ErrorMessage message={error} />  
      ) : data && ( 
        <WeatherInfo city={data.city} temperature={data.temp} icon={data.icon} />
      )}
    </HomeWrapper>
  );
};

export default Home;
