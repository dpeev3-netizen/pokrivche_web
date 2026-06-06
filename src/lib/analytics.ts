let loaded = false;

/**
 * Loads Google Analytics 4 — only when a measurement id is configured
 * (VITE_GA_ID) AND the visitor has accepted cookies. No-op otherwise.
 */
export function loadGA() {
  const id = import.meta.env.VITE_GA_ID;
  if (!id || loaded || typeof document === 'undefined') return;
  loaded = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);

  const w = window as unknown as { dataLayer: unknown[]; gtag: (...args: unknown[]) => void };
  w.dataLayer = w.dataLayer || [];
  w.gtag = function gtag() {
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer.push(arguments);
  };
  w.gtag('js', new Date());
  w.gtag('config', id, { anonymize_ip: true });
}

export const CONSENT_KEY = 'pokrivche_cookie_consent';
