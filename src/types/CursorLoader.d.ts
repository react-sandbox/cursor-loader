type Size = 'sm' | 'md' | 'lg'
type Delay = 0 | 100 | 200 | 300 | 500

export interface CursorLoaderProps {
  load: number
  color?: string
  size?: Size
  trailDelay?: Delay
}
