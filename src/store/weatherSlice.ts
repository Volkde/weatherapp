import { createAppSlice } from "./createAppSlice";
import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = "09168c34f1fc0f4d5f3cc06f2004d67e";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";


interface WeatherData {
  city: string;
  temp: number;
  icon: string;
}

export const fetchWeather = createAsyncThunk<WeatherData, string>(

  "weather/fetchWeather",
  async (city) => {
    const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    return {
      city: response.data.name,
      temp: response.data.main.temp,
      icon: response.data.weather[0].icon,
    };
  }
);


interface WeatherState {

  data: WeatherData | null;
  history: WeatherData[];
  loading: boolean;
  error: string | null;
}


const initialState: WeatherState = {
  data: null,
  history: [],
  loading: false,
  error: null,
};


export const weatherSlice = createAppSlice({
  name: "weather",
  initialState,
  reducers: (create) => ({
    clearHistory: create.reducer((state) => {
      state.history = [];
    }),
    removeHistoryItem: create.reducer((state, action: PayloadAction<string>) => {
      state.history = state.history.filter(item => item.city !== action.payload); 
    }),
  }),
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;

 
        state.history = [
          ...state.history,
          {
            city: action.payload.city,
            temp: action.payload.temp,
            icon: action.payload.icon || "default-icon",
          }
        ].slice(-3);
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error fetching weather data";
      });
  },
});


export const { clearHistory, removeHistoryItem } = weatherSlice.actions;
export default weatherSlice.reducer;
