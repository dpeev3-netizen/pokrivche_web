import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import { services } from '../data/services';
import { breadcrumbSchema } from '../lib/seo';

const crumbs = [
  { name: 'Начало', path: '/' },
  { name: 'Услуги', path: '/uslugi' },
];

export default function Services() {
  return (
    <>
      <Seo
        title="Покривни услуги — ремонт, хидроизолация, нови покриви | ПОКРИВЧЕ"
        description="Пълен набор покривни услуги в цяла България: откриване и отстраняване на течове, ремонт на покриви, керемиди, хидроизолация, нови конструкции, улуци."
        path="/uslugi"
        jsonLd={breadcrumbSchema(crumbs)}
      />
      <PageHeader
        crumbs={crumbs}
        label="Какво предлагаме"
        title="Нашите услуги"
        intro="От спешно отстраняване на течове до изграждане на нови покриви — поемаме целия процес с качествени материали и писмена гаранция."
      />

      <section className="bg-bg-light py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-screen-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
