import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Award, Users, ArrowRight } from 'lucide-react';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import TrustSection from '../components/TrustSection';
import { business } from '../data/business';
import { breadcrumbSchema } from '../lib/seo';

const crumbs = [
  { name: 'Начало', path: '/' },
  { name: 'За нас', path: '/za-nas' },
];

const VALUES = [
  { icon: Award, title: '15+ години опит', desc: 'Зад гърба си имаме стотици успешно завършени покривни проекти в цяла България.' },
  { icon: ShieldCheck, title: 'Писмена гаранция', desc: 'За всяка извършена работа издаваме официална гаранция — заставаме зад качеството.' },
  { icon: Clock, title: 'Бърза реакция', desc: 'Реагираме навреме, особено при спешни течове, и спазваме договорените срокове.' },
  { icon: Users, title: '1000+ доволни клиенти', desc: 'Доверието на клиентите ни е най-добрата ни реклама и мярка за работата ни.' },
];

export default function About() {
  return (
    <>
      <Seo
        title="За нас — ПОКРИВЧЕ | 15+ години опит в ремонта на покриви"
        description="ПОКРИВЧЕ е екип с над 15 години опит в ремонта на покриви, хидроизолацията и изграждането на нови покривни конструкции в цяла България. Над 1000 доволни клиенти."
        path="/za-nas"
        jsonLd={breadcrumbSchema(crumbs)}
      />
      <PageHeader
        crumbs={crumbs}
        label="За нас"
        title="Кой сме ние?"
        intro="Екип професионалисти, посветени на едно — да върнат спокойствието във вашия дом с покрив, на който можете да разчитате."
      />

      {/* Story */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-screen-xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full lg:w-1/2">
              <div className="relative rounded-brand overflow-hidden shadow-sm border border-dark/5 aspect-[4/3]">
                <img src="/images/about-hero.png" alt="Екипът на ПОКРИВЧЕ при работа" loading="lazy" width={1254} height={1254} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <SectionHeading label="Нашата история" className="mb-6" />
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Най-добрата реклама за нас са нашите доволни клиенти. Ние държим на оценката, която клиентите ни дават, тъй като тя е сигурен критерий за нашия професионализъм — не само по отношение на уменията ни да ремонтираме покриви, но и да обслужваме клиентите си.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Предлагаме гаранция за всеки ремонт. Ценим и създаваме доверие — предоставяме точната услуга, от която клиентите се нуждаят, с коректност и отговорност към работата.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Работим в цяла България — от единичен теч до изграждане на изцяло нов покрив. Използваме доказани материали и проверени техники, за да получите дълготраен резултат и спокойствие за години напред.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-bg-light py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-screen-xl">
          <SectionHeading label="Защо да изберете нас" className="mb-10 md:mb-14" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-brand p-7 border border-white shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold font-heading text-dark text-base mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-snug">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link to="/proekti" className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest hover:gap-3 transition-all">
              Вижте нашите проекти <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/otzivi" className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest hover:gap-3 transition-all">
              Прочетете отзивите <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <TrustSection />
      <CTASection title="Готови сме да помогнем" subtitle={`Обадете се на ${business.phone} за безплатен оглед и честна оферта.`} />
    </>
  );
}
