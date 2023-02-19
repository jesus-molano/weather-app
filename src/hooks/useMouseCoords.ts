import { useState } from 'react'

export function useMouseCoords () {
  const [mouseCoords, setMouseCoords] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event: React.MouseEvent) => {
    setMouseCoords({ x: event.clientX, y: event.clientY })
  }
  const handleTouchMove = (event: React.TouchEvent) => {
    const touch = event.touches[0]
    setMouseCoords({ x: touch.clientX, y: touch.clientY })
  }
  return { mouseCoords, handleMouseMove, handleTouchMove}
}
