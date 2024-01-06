# react-simple-fullscreen

Hook to make an element fullscreen.

## Installation

```
npm i react-simple-fullscreen
```

## Usage

``` typescript
import { useFullscreen } from "react-simple-fullscreen";

export function Main() {
  const fullscreenRef = useFullscreen();

  return (
    <main className="bg-white" ref={fullscreenRef}>
      Push F key to fullscreen
    </main>
  );
}
```

## License

MIT
