import { LocationContextType, WeatherContextType } from "@types";
import { createContext } from "react";

export const LocationContext = createContext<LocationContextType>({
  location: {
    latitude: null,
    longitude: null,
  },
  setLocation: () => { },
})

export const WeatherContext = createContext<WeatherContextType>({
  weatherData: null,
  setWeatherData: () => { },
})