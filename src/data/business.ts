// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for business/NAP info.
// Items marked `TODO` must be replaced with the real values before going live —
// they feed the contact page, footer, structured data (JSON-LD) and sitemap.
// ─────────────────────────────────────────────────────────────────────────────

export const business = {
  name: 'ПОКРИВЧЕ',
  // Official legal/company name (used on invoices & legal pages).
  legalName: 'ТС ГРУП БГ ЕООД',
  // ЕИК — Bulgarian Unified Identification Code.
  eik: '207523126',
  tagline: 'Вашият сигурен партньор за ремонт на покриви.',

  // Phone (single source — used in every CTA, tel: link and schema)
  phone: '0886 406 812',
  phoneHref: 'tel:0886406812',
  phoneIntl: '359886406812', // for wa.me / viber links

  email: 'pokrivcheremont@gmail.com',

  // Production domain (used for canonical URLs, OG tags and sitemap.xml)
  siteUrl: 'https://pokrivche.bg',

  // Full street address (NAP) — keep in sync with the Google Business Profile.
  address: {
    street: 'ул. „Кедър" 4',
    city: 'София',
    region: 'София-град',
    postalCode: '1618',
    countryCode: 'BG',
    country: 'България',
  },

  // Office coordinates (ул. „Кедър", кв. Манастирски ливади). Fine-tune to the exact Google Business pin.
  geo: { lat: 42.6617, lng: 23.2765 },

  // Keyless Google Maps embed centred on the office. Swap for the official "place" embed once the Google Business Profile is live.
  mapEmbedSrc: 'https://www.google.com/maps?q=42.6617,23.2765&z=16&output=embed',

  // Working hours (shown on contact page + openingHours schema)
  hoursLabel: 'Понеделник – Неделя: 07:00 – 20:00',
  // schema.org opening hours specification
  openingHours: [
    { days: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'], opens: '07:00', closes: '20:00' },
  ],

  // TODO: replace with real profile links (leave empty string to hide the icon)
  social: {
    facebook: '',
    instagram: '',
    viber: 'viber://chat?number=359886406812',
    whatsapp: 'https://wa.me/359886406812',
  },

  // TODO: link to the public Google Business Profile reviews page
  googleReviewsUrl: '',

  // Trust numbers (already shown on the homepage)
  experienceYears: 15,
  clients: 1000,

  // Areas served (used on homepage, footer and areaServed schema).
  // City landing pages are generated from `cities.ts` — keep the two in sync.
  areasServed: [
    'София', 'Пловдив', 'Варна', 'Бургас', 'Сливен', 'Стара Загора',
    'Русе', 'Плевен', 'Велико Търново', 'Благоевград',
  ],
} as const;

/** Absolute URL helper for canonical/OG/sitemap. `path` should start with "/". */
export function absoluteUrl(path: string): string {
  const base = business.siteUrl.replace(/\/$/, '');
  if (!path || path === '/') return base + '/';
  return base + (path.startsWith('/') ? path : `/${path}`);
}
