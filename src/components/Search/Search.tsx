import React, { useState } from "react";
import { useAppDispatch } from "store/hooks";
import { fetchWeather } from "store/weatherSlice";
import { SearchWrapper, Input, Button } from "./styles";

const Search = () => {
  const [city, setCity] = useState("");
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    if (city.trim()) {
      dispatch(fetchWeather(city));
    } else {
      alert("Enter city name");
    }
  };

  return (
    <SearchWrapper>
      <Input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <Button onClick={handleSearch}>Search</Button>
    </SearchWrapper>
  );
};

export default Search;
