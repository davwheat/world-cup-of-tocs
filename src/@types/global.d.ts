export {}

declare global {
  interface Window {
    cookiehub: {
      openSettings: () => void
    }
  }
}
