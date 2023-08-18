import React, { useRef, useEffect, CSSProperties } from 'react'
import { CursorLoaderProps } from '../types/CursorLoader'
import './styles/CursorLoader.css'

export default function CursorLoader({
  load = 0,
  color = '#01D45B',
  size = 'sm',
  trailDelay = 300,
  className,
  style
}: CursorLoaderProps) {
  const ref = useRef<HTMLDivElement>(null)

  const convertLoadToDegrees = (load: number): number => {
    // 0..100 -> 0..360
    return (load * 360) / 100
  }

  const updatePosition = (e: MouseEvent): void => {
    const cursor = ref.current

    if (cursor) {
      cursor.style.top = `${e.clientY}px`
      cursor.style.left = `${e.clientX}px`
    }
  }

  useEffect(() => {
    if (load > 0) {
      document.addEventListener('mousemove', updatePosition)
    }

    return () => {
      document.removeEventListener('mousemove', updatePosition)
    }
  }, [load])

  const degrees = convertLoadToDegrees(load)

  return (
    <div
      data-sandbox-cursor-loader
      data-size={size}
      ref={ref}
      className={className}
      style={
        {
          '--color': color,
          '--degrees': `${degrees}deg`,
          '--delay': `${trailDelay}ms`,
          ...style
        } as CSSProperties
      }
    />
  )
}
