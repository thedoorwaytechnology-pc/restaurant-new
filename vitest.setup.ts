import "@testing-library/jest-dom/vitest";

class MockObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}

if (typeof window !== "undefined") {
  window.IntersectionObserver =
    window.IntersectionObserver || (MockObserver as unknown as typeof IntersectionObserver);
  window.ResizeObserver =
    window.ResizeObserver || (MockObserver as unknown as typeof ResizeObserver);

  Object.defineProperty(window, "matchMedia", {
    writable: true,
    configurable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }),
  });

  window.scrollTo = window.scrollTo || (() => {});
}
