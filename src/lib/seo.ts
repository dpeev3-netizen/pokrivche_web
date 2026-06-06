import { business, absoluteUrl } from '../data/business';
import type { Service } from '../data/services';
import type { Faq } from '../data/faqs';
import type { Post } from '../data/posts';

export const SITE_NAME = 'ПОКРИВЧЕ';
export const DEFAULT_OG_IMAGE = absoluteUrl('/images/og-default.jpg'); // TODO: add a real 1200×630 share image
export const DEFAULT_DESCRIPTION =
  'Професионален ремонт на покриви, хидроизолация и нови покривни конструкции в цяла България. 15+ години опит. Безплатен оглед. ☎ 0886 406 812';

const phoneE164 = '+359886406812';

/** schema.org address object built from the single source of truth. */
function postalAddress() {
  return {
    '@type': 'PostalAddress',
    streetAddress: business.address.street,
    addressLocality: business.address.city,
    addressRegion: business.address.region,
    postalCode: business.address.postalCode,
    addressCountry: business.address.countryCode,
  };
}

/** Main business entity — RoofingContractor (a LocalBusiness subtype). */
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'RoofingContractor',
    '@id': absoluteUrl('/#business'),
    name: business.name,
    legalName: business.legalName,
    taxID: business.eik,
    url: business.siteUrl,
    telephone: phoneE164,
    email: business.email,
    image: absoluteUrl('/images/projects/zavarshen-keremiden-pokriv.webp'),
    logo: absoluteUrl('/images/logo.png'),
    priceRange: '$$',
    address: postalAddress(),
    geo: { '@type': 'GeoCoordinates', latitude: business.geo.lat, longitude: business.geo.lng },
    areaServed: business.areasServed.map((name) => ({ '@type': 'City', name })),
    openingHoursSpecification: business.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    // NOTE: no aggregateRating/review here — Google disallows self-serving review
    // markup. Star ratings surface via the Google Business Profile instead.
  };
}

/** WebSite entity (helps Google understand the site identity). */
export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': absoluteUrl('/#website'),
    url: business.siteUrl,
    name: SITE_NAME,
    inLanguage: 'bg-BG',
    publisher: { '@id': absoluteUrl('/#business') },
  };
}

export function serviceSchema(service: Service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    serviceType: service.shortTitle,
    description: service.metaDescription,
    url: absoluteUrl(`/uslugi/${service.slug}`),
    provider: { '@id': absoluteUrl('/#business') },
    areaServed: business.areasServed.map((name) => ({ '@type': 'City', name })),
  };
}

export function faqPageSchema(items: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

export function articleSchema(post: Post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: absoluteUrl(post.coverImage),
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: 'bg-BG',
    author: { '@type': 'Organization', name: post.author },
    publisher: { '@id': absoluteUrl('/#business') },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };
}
