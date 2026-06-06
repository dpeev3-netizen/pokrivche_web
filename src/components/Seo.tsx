import { Head } from 'vite-react-ssg';
import { absoluteUrl } from '../data/business';
import { SITE_NAME, DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE } from '../lib/seo';

interface SeoProps {
  title: string;
  description?: string;
  /** route path starting with "/" — used for canonical + og:url */
  path: string;
  /** absolute or root-relative image for social sharing */
  image?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  /** one or more JSON-LD objects rendered as <script type="application/ld+json"> */
  jsonLd?: object | object[];
}

export default function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
  image,
  type = 'website',
  noindex = false,
  jsonLd,
}: SeoProps) {
  const canonical = absoluteUrl(path);
  const ogImage = image
    ? (image.startsWith('http') ? image : absoluteUrl(image))
    : DEFAULT_OG_IMAGE;
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Head>
      <html lang="bg" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="bg_BG" />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Head>
  );
}
