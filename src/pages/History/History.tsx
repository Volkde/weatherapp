import React from "react";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { clearHistory, removeHistoryItem } from "store/weatherSlice";
import WeatherInfo from "components/WeatherInfo/WeatherInfo"; 
import {
  HistoryWrapper,
  HistoryItem,
  DeleteButton,
  ClearHistoryButton,
  WeatherContent, 
} from "./styles";

const History = () => {
  const dispatch = useAppDispatch();
  let history = useAppSelector((state) => state.weather.history);

  const handleDelete = (city: string) => {
    dispatch(removeHistoryItem(city)); 
  };

  return (
    <HistoryWrapper>
      {history.length > 0 &&
        history.map((item) => (
          <HistoryItem key={item.city}>
            <WeatherContent>
              <WeatherInfo city={item.city} temperature={item.temp} icon={item.icon || ""} />
              <DeleteButton onClick={() => handleDelete(item.city)}>
                Delete
              </DeleteButton>
            </WeatherContent>
          </HistoryItem>
        ))
      }
      {history.length > 0 && (
        <ClearHistoryButton onClick={() => dispatch(clearHistory())}>
          Delete all cards
        </ClearHistoryButton>
      )}
    </HistoryWrapper>
  );
};

export default History;
