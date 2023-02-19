import { getWeather } from '@api/getWeather';
import { WeatherData } from '@types';
import { useState, useEffect, useContext } from 'react';
import { LocationContext } from '../../contexts';
import WeatherIcon from './WeatherIcon';

const WeatherInfo = () => {
  const { location } = useContext(LocationContext);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  

  useEffect(() => {
    const fetchWeatherData = async () => {
      if (location.latitude && location.longitude) {
        const data = await getWeather(location.latitude, location.longitude);
        setWeatherData(data);
      }
    }
    fetchWeatherData();
  }, [location]);

  if (!weatherData) return null;

  return (
    <div>
      <h2>{weatherData.name}</h2>
      <div className="weather-info">
       <WeatherIcon icon={weatherData.weather[0].main} /> 
        <div className="temperature-info">
          <div className='weather-currentTemp'>Current temperature: {weatherData.main.temp} °C</div>
          <div className='weather-description'>{weatherData.weather[0].description}</div>
          <div className='weather-maxTemp'>Max temperature: {weatherData.main.temp_max} °C</div>
          <div className='weather-minTemp'>Min temperature: {weatherData.main.temp_min} °C</div>
          <div className='weather-feelsLike'>Feels like: {weatherData.main.feels_like} °C</div>
          <div className='weather-windSpeed'>Wind speed: { weatherData.wind.speed }</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;