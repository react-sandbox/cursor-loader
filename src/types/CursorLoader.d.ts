type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>

type Size = 'sm' | 'md' | 'lg'
type Delay = 0 | 100 | 200 | 300 | 500

export interface CursorLoaderProps {
  load: IntRange<0, 100>
  color?: string
  size?: Size
  trailDelay?: Delay
}
