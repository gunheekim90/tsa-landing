export const GA_MEASUREMENT_ID = 'G-14Y2FCV8KK';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export function trackEvent(action: string, params?: Record<string, string | number>) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, params);
  }
}
