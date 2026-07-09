"use client";

import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type UIState = {
  isMenuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  isLightboxOpen: boolean;
  setLightboxOpen: (open: boolean) => void;
  isOverlayOpen: boolean;
};

const UIStateContext = createContext<UIState | null>(null);

export function UIStateProvider({ children }: { children: ReactNode }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLightboxOpen, setLightboxOpen] = useState(false);
  const value = useMemo(
    () => ({
      isMenuOpen,
      setMenuOpen,
      isLightboxOpen,
      setLightboxOpen,
      isOverlayOpen: isMenuOpen || isLightboxOpen,
    }),
    [isMenuOpen, isLightboxOpen],
  );
  return <UIStateContext.Provider value={value}>{children}</UIStateContext.Provider>;
}

export function useUIState() {
  const ctx = useContext(UIStateContext);
  if (!ctx) {
    throw new Error("useUIState must be used within a UIStateProvider");
  }
  return ctx;
}
