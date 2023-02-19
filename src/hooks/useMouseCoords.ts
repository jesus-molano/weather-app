import { useState } from 'react'
type Coords = { x: number ; y: number }

export function useMouseCoords ({middleX, middleY}: {middleX: number, middleY: number}) {
  const [mouseCoords, setMouseCoords] = useState<Coords>({ x: middleX, y: middleY })

  const handleMouseMove = (event: React.MouseEvent) => {
    setMouseCoords({ x: event.clientX, y: event.clientY })
  }
  const handleTouchMove = (event: React.TouchEvent) => {
    const touch = event.touches[0]
    setMouseCoords({ x: touch.clientX, y: touch.clientY })
  }
  return { mouseCoords, handleMouseMove, handleTouchMove}
}
