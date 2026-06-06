// ─────────────────────────────────────────────────────────────────────────────
// SINGLE SOURCE OF TRUTH for business/NAP info.
// Items marked `TODO` must be replaced with the real values before going live —
// they feed the contact page, footer, structured data (JSON-LD) and sitemap.
// ─────────────────────────────────────────────────────────────────────────────

export const business = {
  name: 'ПОКРИВЧЕ',
  // TODO: official legal/company name (ЕООД/ООД) for invoices & legal pages
  legalName: 'ПОКРИВЧЕ',
  tagline: 'Вашият сигурен партньор за ремонт на покриви.',

  // Phone (single source — used in every CTA, tel: link and schema)
  phone: '0897 858 923',
  phoneHref: 'tel:0897858923',
  phoneIntl: '359897858923', // for wa.me / viber links

  // TODO: real public email address
  email: 'office@pokrivche.bg',

  // TODO: real domain (used for canonical URLs, OG tags and sitemap.xml)
  siteUrl: 'https://pokrivche.bg',

  // TODO: confirm full street address (NAP) — important for local SEO
  address: {
    street: 'ул. Примерна 1', // TODO
    city: 'София',
    region: 'София-град',
    postalCode: '1000', // TODO
    countryCode: 'BG',
    country: 'България',
  },

  // Approximate office coordinates — TODO: set real lat/lng for LocalBusiness schema
  geo: { lat: 42.6977, lng: 23.3219 },

  // TODO: paste the Google Maps "embed" iframe src for the contact page
  mapEmbedSrc: '',

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
    viber: 'viber://chat?number=359897858923',
    whatsapp: 'https://wa.me/359897858923',
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
