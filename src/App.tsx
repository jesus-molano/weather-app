import { createContext, useState } from 'react'
import Card3D from '@components/Card3D'
import UserPositionProvider from '@components/UserPositionProvider'
import '@styles/App.css'


function App() {
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event: React.MouseEvent) => {
    setMouseCoords({ x: event.clientX, y: event.clientY })
  }
  const handleTouchMove = (event: React.TouchEvent) => {
    const touch = event.touches[0]
    setMouseCoords({ x: touch.clientX, y: touch.clientY })
  }
  return (
    <UserPositionProvider>
      <div className="App" onMouseMove={handleMouseMove} onTouchMove={handleTouchMove}>
        <Card3D coords={mouseCoords} />
      </div>
    </UserPositionProvider>
  )
}

export default App
