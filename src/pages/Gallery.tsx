import { useState } from 'react';
import { MapPin } from 'lucide-react';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';
import { projects } from '../data/projects';
import { services } from '../data/services';
import { breadcrumbSchema } from '../lib/seo';

const crumbs = [
  { name: 'Начало', path: '/' },
  { name: 'Проекти', path: '/proekti' },
];

// service slugs that actually appear in the gallery, in service order
const usedSlugs = services.filter((s) => projects.some((p) => p.serviceSlug === s.slug));

export default function Gallery() {
  const [filter, setFilter] = useState<string>('all');
  const shown = filter === 'all' ? projects : projects.filter((p) => p.serviceSlug === filter);

  return (
    <>
      <Seo
        title="Нашите проекти — реализирани покривни ремонти | ПОКРИВЧЕ"
        description="Галерия с реализирани покривни проекти на ПОКРИВЧЕ в цяла България — ремонти, керемиди, хидроизолация, нови конструкции и улуци. Реални снимки от обектите."
        path="/proekti"
        jsonLd={breadcrumbSchema(crumbs)}
      />
      <PageHeader
        crumbs={crumbs}
        label="Портфолио"
        title="Нашите проекти"
        intro="Реални снимки от завършени обекти в цяла България. Вижте качеството на работата ни със собствените си очи."
      />

      <section className="bg-bg-light py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-screen-xl">
          {/* Filters */}
          <div className="flex flex-wrap gap-2.5 mb-10">
            <button
              onClick={() => setFilter('all')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer border ${
                filter === 'all' ? 'bg-primary text-white border-primary' : 'bg-white text-dark border-dark/10 hover:border-primary/40'
              }`}
            >
              Всички
            </button>
            {usedSlugs.map((s) => (
              <button
                key={s.slug}
                onClick={() => setFilter(s.slug)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer border ${
                  filter === s.slug ? 'bg-primary text-white border-primary' : 'bg-white text-dark border-dark/10 hover:border-primary/40'
                }`}
              >
                {s.shortTitle}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {shown.map((p) => (
              <div key={p.id} className="group bg-white rounded-brand overflow-hidden border border-white shadow-sm hover:shadow-md transition-all">
                <div className="aspect-[4/3] overflow-hidden bg-dark/5">
                  {p.video ? (
                    <video
                      src={p.video}
                      poster={p.image}
                      controls
                      preload="metadata"
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img src={p.image} alt={`${p.title} — ${p.location}`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  )}
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-primary">{p.serviceLabel}</span>
                  <h3 className="font-bold font-heading text-dark text-lg mt-1 mb-2">{p.title}</h3>
                  <p className="text-sm text-gray-500 leading-snug mb-3">{p.description}</p>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 font-bold uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5 text-primary" /> {p.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
