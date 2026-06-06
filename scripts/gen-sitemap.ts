/**
 * Generates public/sitemap.xml from the same data files the site renders from,
 * so the sitemap always matches the live routes. Run via the `prebuild` script.
 *
 *   npm run sitemap   # or runs automatically before `npm run build`
 */
import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { business } from '../src/data/business';
import { services } from '../src/data/services';
import { cities } from '../src/data/cities';
import { publishedPosts } from '../src/data/posts';

const base = business.siteUrl.replace(/\/$/, '');
const today = new Date().toISOString().slice(0, 10);

interface Entry {
  path: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

const entries: Entry[] = [
  { path: '/', lastmod: today, changefreq: 'weekly', priority: '1.0' },
  { path: '/uslugi', lastmod: today, changefreq: 'monthly', priority: '0.9' },
  ...services.map((s) => ({ path: `/uslugi/${s.slug}`, lastmod: today, changefreq: 'monthly', priority: '0.8' })),
  { path: '/za-nas', lastmod: today, changefreq: 'yearly', priority: '0.6' },
  { path: '/proekti', lastmod: today, changefreq: 'monthly', priority: '0.7' },
  { path: '/otzivi', lastmod: today, changefreq: 'monthly', priority: '0.6' },
  { path: '/chesto-zadavani-vaprosi', lastmod: today, changefreq: 'monthly', priority: '0.6' },
  { path: '/kontakti', lastmod: today, changefreq: 'yearly', priority: '0.7' },
  ...cities.map((c) => ({ path: `/pokrivni-uslugi/${c.slug}`, lastmod: today, changefreq: 'monthly', priority: '0.7' })),
  { path: '/blog', lastmod: today, changefreq: 'weekly', priority: '0.6' },
  ...publishedPosts.map((p) => ({ path: `/blog/${p.slug}`, lastmod: p.date, changefreq: 'yearly', priority: '0.5' })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>
    <loc>${base}${e.path}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

const outDir = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'public');
writeFileSync(resolve(outDir, 'sitemap.xml'), xml, 'utf8');
console.log(`✓ sitemap.xml generated with ${entries.length} URLs (base: ${base})`);
