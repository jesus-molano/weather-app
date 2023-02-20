import { WiDaySunny } from 'react-icons/wi'
import { MdLocationOff } from 'react-icons/md'
import './loading-spinner.css'
import { LocationContext } from '@contexts/index'
import { useContext } from 'react'

const LoadingSpinner = () => {
  const { location, setLocation } = useContext(LocationContext)
  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      })
    })
  }
  return (
    <div className='weather-loading-spinner-container'>
      <div className='weather-icon-container'>
        <WiDaySunny className='spinner-icon' size={100} />
      </div>
      <div className='enable-location-text'>
        <p>
          You must grant access to the location at the top of the search bar{' '}
          <MdLocationOff className='location-icon' size={20} /> and click the button below.
        </p>
      </div>
      <button onClick={handleLocation}>Grant access</button>
    </div>
  )
}

export default LoadingSpinner
