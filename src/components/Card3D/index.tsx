import { useEffect, useRef } from 'react'
import { useMouseCoords } from '@hooks/useMouseCoords'
import WeatherInfo from '@components/WeatherInfo'
import './card3d.css'

function Card3D () {
  const card: React.MutableRefObject<HTMLDivElement | null> = useRef(null)
  // Get middle of the screen
  const middleX = window.innerWidth / 2
  const middleY = window.innerHeight / 2
  // Get mouse coordinates
  const { mouseCoords, handleMouseMove, handleTouchMove } = useMouseCoords({middleX, middleY})
  // Calculate offset from middle of the screen to mouse coordinates with max 45 degrees
  const offsetX = ((mouseCoords.x - middleX) / middleX) * 45
  const offsetY = ((mouseCoords.y - middleY) / middleY) * 45

  useEffect(() => {
    // Set rotation of card to offset values
    if (card.current) {
      card.current.style.setProperty('--rotateX', -1 * offsetY + 'deg')
      card.current.style.setProperty('--rotateY', offsetX + 'deg')
    }
  }, [mouseCoords])

  return (
    <div className='container-card' onMouseMove={handleMouseMove} onTouchMove={handleTouchMove}>
      <div className='card-3d' tabIndex={0} ref={card}>
        <WeatherInfo />
      </div>
    </div>
  )
}
export default Card3D
