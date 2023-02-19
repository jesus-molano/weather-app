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
    <div className='icon'>
      {icon === 'Clear' && <WiDaySunny size={50} />}
      {icon === 'Clouds' && <WiCloudy size={50} />}
      {icon === 'Rain' && <WiRain size={50} />}
      {icon === 'Snow' && <WiSnow size={50} />}
      {icon === 'Thunderstorm' && (
        <WiThunderstorm size={50} />
      )}
    </div>
  )
}
export default WeatherIcon