import { FC } from 'react'
import {
  WiDaySunny,
  WiRain,
  WiSnow,
  WiCloudy,
  WiThunderstorm
} from 'react-icons/wi'

interface Props {
  icon: string
}

const WeatherIcon  = ({ icon } :Props) => {
  return (
    <div className='icon' data-weather={icon}>
      {icon === 'Clear' && <WiDaySunny size={200} />}
      {icon === 'Clouds' && <WiCloudy size={200} />}
      {icon === 'Rain' && <WiRain size={200} />}
      {icon === 'Snow' && <WiSnow size={200} />}
      {icon === 'Thunderstorm' && (
        <WiThunderstorm size={200} />
      )}
    </div>
  )
}
export default WeatherIcon