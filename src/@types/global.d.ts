// Trick TS into letting us modify the global scope
export {}

declare global {
  // We need this to add more properties to `window` so TS doesn't complain
  interface Window {
    cookiehub: {
      /**
       * Opens the CookieHub cookie settings window where users can change their cookie preferences.
       */
      openSettings: () => void
    }
  }
}
