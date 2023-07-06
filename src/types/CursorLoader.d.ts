type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface CursorLoaderProps {
  load: number
  size?: Size
  color?: string
  trailDelay?: number
  onComplete?: () => void
}
