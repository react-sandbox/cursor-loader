<h1 align="center">
  <a href="https://www.npmjs.com/package/@react-sandbox/cursor-loader">@react-sandbox/cursor-loader</a>
</h1>

<p align="center">
  <img src="https://img.shields.io/github/actions/workflow/status/react-sandbox/cursor-loader/playwright.yml" alt="Build status" />
  <img src="https://img.shields.io/badge/dependencies-0-brightgreen" alt="Dependencies" />
  <img src="https://img.shields.io/bundlephobia/minzip/@react-sandbox/cursor-loader?color=%234ba0f6" alt="Build size" />
  <img src="https://img.shields.io/npm/dt/@react-sandbox/cursor-loader?color=%234ba0f6" alt="Package downloads" />
</p>

<p align="center">
  <img src="example.gif" alt="Example" />
</p>

<p align="center">🖱️ Cursor loader component.</p>

## Usage

### Install

Install the `@react-sandbox/cursor-loader` package:

```
npm install @react-sandbox/cursor-loader
```

### Import

Import the `CursorLoader` component:

```tsx
import React, { useState } from 'react'
import CursorLoader from '@react-sandbox/cursor-loader'

function App() {
  const [load, setLoad] = useState(0)

  return (
    <div>
      <CursorLoader load={load} />
    </div>
  )
}
```

### Props

| Prop         | Type                            | Default      | Description                       |
| ------------ | ------------------------------- | ------------ | --------------------------------- |
| `load`       | `number`                        | **required** | Load/progress (between 0 and 100) |
| `color`      | `string`                        | `'#01D45B'`  | Color of loader                   |
| `size`       | `'sm' \| 'md' \| 'lg'`          | `'sm'`       | Size of loader                    |
| `trailDelay` | `0 \| 100 \| 200 \| 300 \| 500` | `300`        | Cursor trail delay                |
| `onComplete` | `function`                      | `-`          | Callback function on completion   |
| `className`  | `string`                        | `-`          | CSS classes                       |
| `style`      | `React.CSSProperties`           | `-`          | CSS styles                        |

## Development

### Local

```
pnpm install
pnpm dev
```

### Tests

```
pnpm test
```

### Example

Inside `test/`:

```
pnpm install
pnpm dev
```

## License

MIT
