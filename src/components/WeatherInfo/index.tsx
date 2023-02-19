import { useEffect, useContext } from 'react'
import { WiStrongWind } from 'react-icons/wi'
import { getWeather } from '@api/getWeather'
import { LocationContext, WeatherContext } from '../../contexts'
import WeatherIcon from './WeatherIcon'
import './weather-info.css'

const WeatherInfo = () => {
  const { location } = useContext(LocationContext)
  const { weatherData, setWeatherData } = useContext(WeatherContext)

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (location.latitude && location.longitude) {
        const data = await getWeather(location.latitude, location.longitude)
        setWeatherData(data)
      }
    }
    fetchWeatherData()
  }, [location])

  if (!weatherData) return null

  return (
    <div className='weather-container'>
      <div className='weather-main-info'>
        <div className='weather-main-info-left'>
          <WeatherIcon icon={weatherData.weather[0].main} />
        </div>
        <div className='weather-main-info-right'>
          <div className='weather-description'>
            {weatherData.weather[0].description}
          </div>
          <div className='weather-currentTemp'>
            {weatherData.main.temp.toFixed(0)}°C
          </div>
          <p className='weather-city-name'>{weatherData.name}</p>
        </div>
      </div>
      <div className='weather-more-info'>
        <div className='weather-maxTemp'>
          Max temperature: {weatherData.main.temp_max.toFixed(0)}°C
        </div>
        <div className='weather-minTemp'>
          Min temperature: {weatherData.main.temp_min.toFixed(0)}°C
        </div>
        <div className='weather-feelsLike'>
          Feels like: {weatherData.main.feels_like.toFixed(0)}°C
        </div>
        <div className='weather-windSpeed'>
          <WiStrongWind size={50} />
          <span>{weatherData.wind.speed}</span>
        </div>
      </div>
    </div>
  )
}

export default WeatherInfo
