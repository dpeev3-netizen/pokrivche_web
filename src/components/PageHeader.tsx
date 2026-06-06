import type { ReactNode } from 'react';
import Breadcrumbs, { type Crumb } from './Breadcrumbs';

interface PageHeaderProps {
  crumbs: Crumb[];
  label?: string;
  title: ReactNode;
  intro?: string;
}

/**
 * Dark inner-page header band — reuses the hero's decorative accents and the
 * brand typography for a consistent look across all secondary pages.
 */
export default function PageHeader({ crumbs, label, title, intro }: PageHeaderProps) {
  return (
    <section className="relative bg-dark overflow-hidden">
      {/* Decorative accents (echo the homepage hero) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="hidden lg:block absolute -left-[180px] top-1/2 -translate-y-1/2 w-[420px] h-[420px] border-[44px] border-primary/5 rounded-full" />
        <div className="hidden lg:block absolute top-0 right-[20%] w-[2px] h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent rotate-[15deg] origin-top" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-10 max-w-screen-xl py-12 md:py-16">
        <Breadcrumbs items={crumbs} dark />
        {label && (
          <p className="text-xs font-black font-heading tracking-[0.3em] text-primary uppercase mb-3">{label}</p>
        )}
        <h1 className="text-4xl md:text-5xl font-black font-heading text-white leading-[1.1] uppercase tracking-tighter max-w-4xl">
          {title}
        </h1>
        {intro && <p className="text-white/60 text-lg mt-5 max-w-2xl leading-relaxed">{intro}</p>}
      </div>
    </section>
  );
}
