import { useState, useEffect, useRef } from "react";

interface UseElementHeightOptions {
  element?: HTMLElement | null;
}

export const useElementHeight = ({ element }: UseElementHeightOptions = {}) => {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targetElement = element || ref.current?.parentElement;

    const updateHeight = () => {
      if (targetElement) {
        setHeight(targetElement.offsetHeight);
      }
    };

    // Initial measurement
    updateHeight();

    // Create ResizeObserver to watch for size changes
    const resizeObserver = new ResizeObserver(updateHeight);
    if (targetElement) {
      resizeObserver.observe(targetElement);
    }

    // Cleanup
    return () => {
      resizeObserver.disconnect();
    };
  }, [element]);

  return { ref, height };
};
