import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "../features/weather/weatherSlides";
export const store = configureStore({
    reducer: {
        weather: weatherReducer
    }
});