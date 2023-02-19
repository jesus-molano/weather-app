import { useEffect, useRef } from 'react'
import { useMouseCoords } from '@hooks/useMouseCoords'
import Weather from '@components/Weather'
import './card3d.css'

function Card3D () {
  const { mouseCoords, handleMouseMove, handleTouchMove } = useMouseCoords()
  const card: React.MutableRefObject<HTMLDivElement | null> = useRef(null)
  const middleX = window.innerWidth / 2
  const middleY = window.innerHeight / 2
  // Degrees (45 == max)
  const offsetX = ((mouseCoords.x - middleX) / middleX) * 45
  const offsetY = ((mouseCoords.y - middleY) / middleY) * 45

  useEffect(() => {
    if (card.current) {
      card.current.style.setProperty('--rotateX', -1 * offsetY + 'deg')
      card.current.style.setProperty('--rotateY', offsetX + 'deg')
    }
  }, [mouseCoords])

  return (
    <div className='container-card' onMouseMove={handleMouseMove} onTouchMove={handleTouchMove}>
      <div className='card-3d' tabIndex={0} ref={card}>
        <Weather />
      </div>
    </div>
  )
}
export default Card3D
