import { useParams, Link } from 'react-router-dom';
import { Phone, Check, ArrowRight, CheckCircle2 } from 'lucide-react';
import Seo from '../components/Seo';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionHeading from '../components/SectionHeading';
import FaqAccordion from '../components/FaqAccordion';
import CTASection from '../components/CTASection';
import NotFound from './NotFound';
import { useQuote } from '../components/QuoteProvider';
import { serviceBySlug, services } from '../data/services';
import { serviceSchema, breadcrumbSchema, faqPageSchema } from '../lib/seo';

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? serviceBySlug(slug) : undefined;
  const { openQuote } = useQuote();

  if (!service) return <NotFound />;

  const crumbs = [
    { name: 'Начало', path: '/' },
    { name: 'Услуги', path: '/uslugi' },
    { name: service.shortTitle, path: `/uslugi/${service.slug}` },
  ];
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <Seo
        title={service.metaTitle}
        description={service.metaDescription}
        path={`/uslugi/${service.slug}`}
        image={service.heroImage}
        jsonLd={[serviceSchema(service), breadcrumbSchema(crumbs), faqPageSchema(service.faq)]}
      />

      {/* Header */}
      <section className="relative bg-dark overflow-hidden">
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-10 max-w-screen-xl py-12 md:py-16">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="flex-1">
              <Breadcrumbs items={crumbs} dark />
              <h1 className="text-4xl md:text-5xl font-black font-heading text-white leading-[1.1] uppercase tracking-tighter mb-5">
                {service.h1}
              </h1>
              <p className="text-white/60 text-lg leading-relaxed max-w-xl mb-8">{service.intro}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:0897858923" className="bg-primary text-white px-8 py-3.5 rounded-brand font-bold text-sm uppercase tracking-widest hover:bg-red-800 transition-colors inline-flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" /> Обадете се сега
                </a>
                <button onClick={openQuote} className="border-2 border-white/20 text-white px-8 py-3.5 rounded-brand font-bold text-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-colors cursor-pointer">
                  Поискай оферта
                </button>
              </div>
            </div>
            <div className="relative w-full lg:w-[460px] shrink-0">
              <div className="absolute -top-4 -right-4 w-full h-full rounded-brand bg-primary/20 rotate-2 transform-gpu" />
              <div className="relative rounded-brand overflow-hidden shadow-2xl shadow-black/50 border-2 border-white/10 aspect-[4/3]">
                <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Body + materials */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-screen-xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            <div className="flex-1 max-w-3xl">
              <SectionHeading label="За услугата" className="mb-8" />
              <div className="space-y-5">
                {service.body.map((p, i) => (
                  <p key={i} className="text-gray-600 text-lg leading-relaxed">{p}</p>
                ))}
              </div>
            </div>

            <aside className="lg:w-[320px] shrink-0">
              <div className="bg-bg-light rounded-brand p-7 border border-dark/5 sticky top-[100px]">
                <h3 className="font-black font-heading text-dark uppercase text-lg mb-5">Какво използваме</h3>
                <ul className="space-y-3">
                  {service.materials.map((m) => (
                    <li key={m} className="flex items-start gap-3 text-sm text-gray-600">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {m}
                    </li>
                  ))}
                </ul>
                <button onClick={openQuote} className="w-full mt-7 bg-primary text-white py-3.5 rounded-brand font-bold text-sm uppercase tracking-widest hover:bg-red-800 transition-colors cursor-pointer">
                  Безплатен оглед
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-bg-light py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-screen-xl">
          <SectionHeading label="Как работим" className="mb-10 md:mb-14" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {service.process.map((step, i) => (
              <div key={i} className="bg-white rounded-brand p-7 border border-white shadow-sm relative">
                <div className="text-5xl font-black font-heading text-primary/15 absolute top-4 right-5">{i + 1}</div>
                <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-bold font-heading text-dark text-base mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-snug">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {service.gallery.length > 0 && (
        <section className="bg-white pt-16 lg:pt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-screen-xl">
            <SectionHeading label="Реализирани проекти" className="mb-10" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {service.gallery.map((img) => (
                <div key={img} className="rounded-brand overflow-hidden border border-dark/5 aspect-[16/10]">
                  <img src={img} alt={`${service.title} — проект`} loading="lazy" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/proekti" className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest hover:gap-3 transition-all">
                Вижте всички проекти <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Service FAQ */}
      {service.faq.length > 0 && (
        <section className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-3xl">
            <SectionHeading label="Често задавани въпроси" className="mb-10" />
            <FaqAccordion items={service.faq} />
          </div>
        </section>
      )}

      {/* Other services */}
      <section className="bg-bg-light py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-screen-xl">
          <SectionHeading label="Други услуги" className="mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {others.map((s) => {
              const Icon = s.icon;
              return (
                <Link key={s.slug} to={`/uslugi/${s.slug}`} className="group bg-white p-6 rounded-brand border border-white hover:border-primary/20 hover:shadow-md transition-all flex items-center gap-4">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-bold font-heading text-dark text-sm">{s.shortTitle}</span>
                  <ArrowRight className="w-4 h-4 text-primary ml-auto group-hover:translate-x-1 transition-transform" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
