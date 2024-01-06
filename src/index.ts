import { useCallback, useEffect, useRef } from "react";

export function useFullscreen() {
  const fullscreenRef = useRef<HTMLElement>(null);

  const keydownListener = useCallback((event: KeyboardEvent) => {
    const fullscreenEl = fullscreenRef.current;
    if (!fullscreenEl) {
      return;
    }

    if (event.isComposing) {
      return;
    }

    if (
      event.key === "Alt" ||
      event.key === "Control" ||
      event.key === "Meta" ||
      event.key === "Shift"
    ) {
      return;
    }

    if (event.code === "KeyF") {
      fullscreenEl.requestFullscreen().catch((err) => {
        console.error(err);
      });
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", keydownListener, { capture: true });

    return () => {
      document.removeEventListener("keydown", keydownListener);
    };
  }, [keydownListener]);

  return fullscreenRef;
}
