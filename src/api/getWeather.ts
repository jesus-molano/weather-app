import { WeatherData } from "@types"

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY
const browserLang = navigator.language.split('-')[0]

export async function getWeather(lat: number, lon: number): Promise<WeatherData | null> {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=${browserLang}`
  const response = await fetch(url)
  const data = await response.json()
  return data 
}
