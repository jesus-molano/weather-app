import { useContext, useEffect, useRef } from 'react'
import Weather from '@components/Weather'
import './card3d.css'

type Props = {
  coords: {
    x: number,
    y: number
  }
}

function Card3D({ coords }: Props) {
  const card: React.MutableRefObject<HTMLDivElement | null> = useRef(null)
  const middleX = window.innerWidth / 2
  const middleY = window.innerHeight / 2
  // Degrees (45 == max)
  const offsetX = ((coords.x - middleX) / middleX) * 45
  const offsetY = ((coords.y - middleY) / middleY) * 45

  useEffect(() => {
    if (card.current) {
      card.current.style.setProperty('--rotateX', -1 * offsetY + "deg")
      card.current.style.setProperty('--rotateY', offsetX + "deg")
    }
  }, [coords])

  return (
    <div className="card-3d" tabIndex={0} ref={card}>
      <Weather apiKey='70b0b81705a1e0c4d5b2e44a1ea830df' />
    </div>
  )
}
export default Card3D
