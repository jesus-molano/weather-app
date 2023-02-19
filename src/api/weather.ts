import { WeatherData } from "@types"

// const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
// console.log(import.meta.env.API_KEY);

export async function getWeather(lat: number, lon: number): Promise<WeatherData> {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=70b0b81705a1e0c4d5b2e44a1ea830df&units=metric&lang=sp`
  const response = await fetch(url)
  const data = await response.json()
  return data
}
