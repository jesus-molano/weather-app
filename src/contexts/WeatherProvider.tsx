import { WeatherData } from "@types"
import { useState } from "react"
import { WeatherContext } from "."

interface Props {
  children: React.ReactNode
}

export const WeatherProvider = ({ children }: Props) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  
  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </WeatherContext.Provider>
  )
}