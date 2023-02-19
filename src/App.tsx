import Card3D from '@components/Card3D'
import { WeatherProvider } from '@contexts/WeatherProvider'
import { useUserLocation } from './hooks/useUserLocation'

function App () {
  useUserLocation()
  
  return (
    <div className='App'>
      <WeatherProvider>
        <Card3D />
      </WeatherProvider>
    </div>
  )
}

export default App
