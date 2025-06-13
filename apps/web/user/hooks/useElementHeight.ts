import { useState, useEffect } from "react";

/**
 * A React hook that tracks the height of an element by its ID.
 *
 * @param elementId - The ID of the element to track. If null, the hook will return 0.
 * @returns The current height of the element in pixels.
 *
 * @example
 * ```tsx
 * // Track height of an element with ID "header"
 * const headerHeight = useElementHeight("header");
 *
 * // Use the height in your component
 * <div style={{ height: `${headerHeight}px` }}>
 *   Content
 * </div>
 * ```
 *
 * @remarks
 * - The hook uses ResizeObserver to efficiently track height changes
 * - Returns 0 if the element is not found or if elementId is null
 * - Only runs on the client side (after component mount)
 * - Automatically cleans up the ResizeObserver when unmounting
 */
export const useElementHeight = (elementId: string | null) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!elementId) return;

    const element = document.getElementById(elementId);
    if (!element) return;

    const updateHeight = () => {
      setHeight(element.offsetHeight);
    };

    // Initial measurement
    updateHeight();

    // Create ResizeObserver to watch for size changes
    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(element);

    // Cleanup
    return () => {
      resizeObserver.disconnect();
    };
  }, [elementId]);

  return height;
};
