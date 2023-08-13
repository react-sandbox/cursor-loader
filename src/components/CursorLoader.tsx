import React, { useRef, useEffect } from 'react'
import { CursorLoaderProps } from '../types/CursorLoader'
import './styles/CursorLoader.css'

export default function CursorLoader({
  load,
  color = 'white',
  size = 'sm',
  trailDelay = 300
}: CursorLoaderProps) {
  const ref = useRef<HTMLDivElement>(null)

  const convertLoadToDegree = (load: number): number => {
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
    document.addEventListener('mousemove', updatePosition)
    return () => {
      document.removeEventListener('mousemove', updatePosition)
    }
  }, [])

  const degree = convertLoadToDegree(load)

  return (
    <div
      data-sandbox-cursor-loader
      data-size={size}
      data-trail-delay={trailDelay}
      ref={ref}
      style={{
        background: `conic-gradient(${color} ${degree}deg, transparent calc(${degree}deg + 0.5deg) 100%)`
      }}
    />
  )
}
