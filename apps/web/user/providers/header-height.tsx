"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface HeaderHeightContextType {
  headerHeight: number;
}

const HeaderHeightContext = createContext<HeaderHeightContextType>({
  headerHeight: 0,
});

export function HeaderHeightProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const header = document.querySelector("header");
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    // Initial measurement
    updateHeaderHeight();

    // Update on resize
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  return (
    <HeaderHeightContext.Provider value={{ headerHeight }}>
      {children}
    </HeaderHeightContext.Provider>
  );
}

export const useHeaderHeight = () => useContext(HeaderHeightContext);
