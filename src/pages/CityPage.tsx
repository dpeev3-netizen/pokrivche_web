import { useParams, Link } from 'react-router-dom';
import { Phone, ArrowRight, MapPin } from 'lucide-react';
import Seo from '../components/Seo';
import Breadcrumbs from '../components/Breadcrumbs';
import SectionHeading from '../components/SectionHeading';
import ReviewCard from '../components/ReviewCard';
import CTASection from '../components/CTASection';
import TrustSection from '../components/TrustSection';
import NotFound from './NotFound';
import { useQuote } from '../components/QuoteProvider';
import { cityBySlug } from '../data/cities';
import { services } from '../data/services';
import { reviews } from '../data/reviews';
import { localBusinessSchema, breadcrumbSchema } from '../lib/seo';

export default function CityPage() {
  const { city: slug } = useParams<{ city: string }>();
  const city = slug ? cityBySlug(slug) : undefined;
  const { openQuote } = useQuote();

  if (!city) return <NotFound />;

  const crumbs = [
    { name: 'Начало', path: '/' },
    { name: `Покривни услуги ${city.inName}`, path: `/pokrivni-uslugi/${city.slug}` },
  ];
  const cityReviews = reviews.filter((r) => r.city === city.name);

  return (
    <>
      <Seo
        title={city.metaTitle}
        description={city.metaDescription}
        path={`/pokrivni-uslugi/${city.slug}`}
        jsonLd={[localBusinessSchema(), breadcrumbSchema(crumbs)]}
      />

      {/* Header */}
      <section className="relative bg-dark overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="hidden lg:block absolute -left-[180px] top-1/2 -translate-y-1/2 w-[420px] h-[420px] border-[44px] border-primary/5 rounded-full" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-10 max-w-screen-xl py-12 md:py-16">
          <Breadcrumbs items={crumbs} dark />
          <div className="inline-flex items-center gap-2 bg-primary/15 text-primary px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <MapPin className="w-3.5 h-3.5" /> {city.name}
          </div>
          <h1 className="text-4xl md:text-5xl font-black font-heading text-white leading-[1.1] uppercase tracking-tighter max-w-4xl mb-5">
            {city.h1}
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed mb-8">{city.intro}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:0886406812" className="bg-primary text-white px-8 py-3.5 rounded-brand font-bold text-sm uppercase tracking-widest hover:bg-red-800 transition-colors inline-flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> Обадете се сега
            </a>
            <button onClick={openQuote} className="border-2 border-white/20 text-white px-8 py-3.5 rounded-brand font-bold text-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-colors cursor-pointer">
              Безплатен оглед
            </button>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-3xl">
          <div className="space-y-5">
            {city.body.map((p, i) => (
              <p key={i} className="text-gray-600 text-lg leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-bg-light py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-screen-xl">
          <SectionHeading label={`Услуги ${city.inName}`} className="mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => {
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

      {/* City reviews */}
      {cityReviews.length > 0 && (
        <section className="bg-white py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-screen-xl">
            <SectionHeading label={`Отзиви ${city.inName}`} className="mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cityReviews.map((r, i) => (
                <ReviewCard key={i} review={r} />
              ))}
            </div>
          </div>
        </section>
      )}

      <TrustSection />
      <CTASection title={`Ремонт на покриви ${city.inName}`} subtitle="Обадете се за безплатен оглед и честна оферта още днес." />
    </>
  );
}
