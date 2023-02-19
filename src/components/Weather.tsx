import { useState, useEffect } from 'react';
import { WiDaySunny, WiRain, WiSnow, WiCloudy, WiDayCloudy, WiDayFog, WiThunderstorm } from 'react-icons/wi';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;

        // Fetch weather data from OpenWeatherMap API
        const API_KEY = '70b0b81705a1e0c4d5b2e44a1ea830df';
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

        fetch(API_URL)
          .then(response => response.json())
          .then(data => {
            setWeather(data);
            setLoading(false);
          })
          .catch(error => {
            setError(error);
            setLoading(false);
          });
      });
    } else {
      setError('Geolocation is not supported by this browser.');
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <p>Loading weather...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!weather) {
    return null;
  }

  const iconCode = weather.weather[0].icon;
  let icon;

  switch (iconCode) {
    case '01d':
      icon = <WiDaySunny />;
      break;
    case '01n':
      icon = <WiDaySunny />;
      break;
    case '02d':
      icon = <WiDayCloudy />;
      break;
    case '02n':
      icon = <WiDayCloudy />;
      break;
    case '03d':
    case '03n':
    case '04d':
    case '04n':
      icon = <WiCloudy />;
      break;
    case '09d':
    case '09n':
      icon = <WiRain />;
      break;
    case '10d':
    case '10n':
      icon = <WiRain />;
      break;
    case '11d':
    case '11n':
      icon = <WiThunderstorm />;
      break;
    case '13d':
    case '13n':
      icon = <WiSnow />;
      break;
    case '50d':
    case '50n':
      icon = <WiDayFog />;
      break;
    default:
      icon = null;
      break;
  }

  return (
    <div>
      <h2>{weather.name}</h2>
      <div>
        {icon}
        <span>{weather.main.temp}°C</span>
      </div>
      <p>
        {weather.main.temp_min}°C / {weather.main.temp_max}°C
      </p>
    </div>
  );
};

export default Weather;

