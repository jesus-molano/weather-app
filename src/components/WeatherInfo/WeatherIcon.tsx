import {
  WiDaySunny,
  WiRain,
  WiSnow,
  WiCloudy,
  WiThunderstorm,
  WiSandstorm,
  WiFog,
  WiDust,
  WiDayHaze,
  WiSmoke,
  WiTornado,
} from 'react-icons/wi';

interface Props {
  icon: string;
}

const generalWeatherSize = 200;

const weatherIcons: { [key: string]: JSX.Element } = {
  Clear: <WiDaySunny size={generalWeatherSize} />,
  Clouds: <WiCloudy size={generalWeatherSize} />,
  Rain: <WiRain size={generalWeatherSize} />,
  Snow: <WiSnow size={generalWeatherSize} />,
  Thunderstorm: <WiThunderstorm size={generalWeatherSize} />,
  Drizzle: <WiRain size={generalWeatherSize} />,
  Mist: <WiFog size={generalWeatherSize} />,
  Smoke: <WiSmoke size={generalWeatherSize} />,
  Haze: <WiDayHaze size={generalWeatherSize} />,
  Dust: <WiDust size={generalWeatherSize} />,
  Fog: <WiFog size={generalWeatherSize} />,
  Sand: <WiSandstorm size={generalWeatherSize} />,
  Ash: <WiCloudy size={generalWeatherSize} />,
  Squall: <WiCloudy size={generalWeatherSize} />,
  Tornado: <WiTornado size={generalWeatherSize} />,
};

const WeatherIcon: React.FC<Props> = ({ icon }) => {
  const iconComponent = weatherIcons[icon];
  if (!iconComponent) {
    return weatherIcons['Clear']
  }
  return (
    <div className='icon' data-weather={icon}>
      {iconComponent}
    </div>
  )
};

export default WeatherIcon;