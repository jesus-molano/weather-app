import Card3D from '@components/Card3D'
import { useUserLocation } from './hooks/useUserLocation'

function App () {
  useUserLocation()
  
  return (
    <div className='App'>
      <Card3D />
    </div>
  )
}

export default App
