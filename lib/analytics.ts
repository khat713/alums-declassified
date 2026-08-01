// GA4 custom event helpers.
// IP anonymization is on by default in GA4 — no extra config needed.
//
// To enable DebugView locally:
//   1. Add ?debug_mode=1 to the URL, OR
//   2. Set { debug_mode: true } as a param in the gtag config call below.
// Then open GA4 → Admin → DebugView to watch events in real time.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function gtag(...args: unknown[]) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag(...args);
  }
}

export function trackModuleStart(moduleNumber: number, moduleTitle: string) {
  gtag('event', 'module_start', {
    module_number: moduleNumber,
    module_title: moduleTitle,
  });
}

export function trackSelfCheckComplete(moduleNumber: number) {
  gtag('event', 'selfcheck_complete', {
    module_number: moduleNumber,
  });
}

export function trackActivityStart(moduleNumber: number) {
  gtag('event', 'activity_start', {
    module_number: moduleNumber,
  });
}

export function trackPortfolioStart() {
  gtag('event', 'portfolio_start');
}
