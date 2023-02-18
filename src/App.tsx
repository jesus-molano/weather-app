import { useState } from 'react'
import Card3D from '@components/Card3D'
import '@styles/App.css'

function App() {
  const [coords, setCoords] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event: React.MouseEvent) => {
    setCoords({ x: event.clientX, y: event.clientY })
  }
  const handleTouchMove = (event: React.TouchEvent) => {
    const touch = event.touches[0]
    setCoords({ x: touch.clientX, y: touch.clientY })
  }
  return (
    <div className="App" onMouseMove={handleMouseMove} onTouchMove={handleTouchMove}>
      <Card3D coords={coords} />
    </div>
  )
}

export default App
