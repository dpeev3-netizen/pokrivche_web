import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export interface Crumb {
  name: string;
  path: string;
}

/**
 * Visual breadcrumb trail. The matching BreadcrumbList JSON-LD is emitted by the
 * page via <Seo jsonLd={breadcrumbSchema(...)} /> using the same items.
 */
export default function Breadcrumbs({ items, dark = false }: { items: Crumb[]; dark?: boolean }) {
  const base = dark ? 'text-white/50' : 'text-gray-400';
  const hover = dark ? 'hover:text-white' : 'hover:text-dark';
  const sep = dark ? 'text-white/30' : 'text-gray-300';

  return (
    <nav aria-label="breadcrumb" className="mb-6">
      <ol className={`flex flex-wrap items-center gap-1.5 text-xs font-bold uppercase tracking-wider ${base}`}>
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-1.5">
              {last ? (
                <span className="text-primary">{c.name}</span>
              ) : (
                <Link to={c.path} className={`${hover} transition-colors`}>{c.name}</Link>
              )}
              {!last && <ChevronRight className={`w-3.5 h-3.5 ${sep}`} />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
