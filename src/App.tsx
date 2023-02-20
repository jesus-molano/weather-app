import Card3D from '@components/Card3D'
import LoadingSpinner from '@components/LoadingSpinner'
import { WeatherProvider } from '@contexts/WeatherProvider'
import { useContext } from 'react'
import { LocationContext } from './contexts'
import { useUserLocation } from './hooks/useUserLocation'

function App () {
  useUserLocation()
  const {location} = useContext(LocationContext)
  return (
    <div className='App'>
      <WeatherProvider>
        {location.latitude && location.longitude
          ? <Card3D />
          : <LoadingSpinner />
        }
      </WeatherProvider>
    </div>
  )
}

export default App
