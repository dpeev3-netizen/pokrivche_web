import { Link } from 'react-router-dom';
import { Phone, MapPin, ShieldCheck } from 'lucide-react';
import Seo from '../components/Seo';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import ReviewCard from '../components/ReviewCard';
import ProjectCard from '../components/ProjectCard';
import CTASection from '../components/CTASection';
import TrustSection from '../components/TrustSection';
import { services } from '../data/services';
import { reviews } from '../data/reviews';
import { projects } from '../data/projects';
import { localBusinessSchema, webSiteSchema } from '../lib/seo';

function Hero() {
  return (
    <section className="relative w-full bg-dark overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/projects/zavarshen-keremiden-pokriv.webp"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 to-dark/70" />
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-[1]">
        <div className="hidden lg:block absolute -left-[200px] top-[50%] -translate-y-1/2 w-[500px] h-[500px] border-[50px] border-primary/5 rounded-full" />
        <div className="hidden lg:block absolute top-0 right-[42%] w-[2px] h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent rotate-[15deg] origin-top" />
        <div className="hidden lg:block absolute top-[20%] left-[8%] w-2 h-2 rounded-full bg-primary/30" />
        <div className="hidden lg:block absolute top-[30%] left-[10%] w-1.5 h-1.5 rounded-full bg-primary/20" />
        <div className="hidden lg:block absolute top-[25%] left-[12%] w-1 h-1 rounded-full bg-white/20" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-20 lg:py-24 max-w-screen-xl">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 max-w-[650px]">
            <h1 className="text-5xl sm:text-5xl md:text-6xl font-black font-heading text-white leading-[1.08] mb-5 uppercase tracking-tighter">
              ПРОБЛЕМ С ПОКРИВА?<br /><span className="text-primary">НИЕ ИМАМЕ РЕШЕНИЕТО.</span>
            </h1>
            <p className="text-bg-light/70 text-lg md:text-xl font-sans mb-8 leading-snug max-w-[550px]">
              100% отстраняване на течове и изграждане на нови покриви в цяла България. Гарантирано качество и спокойствие за вашия дом.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a href="tel:0897858923" className="bg-primary text-white px-8 md:px-10 py-3.5 md:py-4 rounded-brand font-bold text-sm md:text-base uppercase tracking-widest hover:bg-red-800 transition-colors inline-flex items-center gap-2">
                <Phone className="w-4 h-4" />
                ОБАДЕТЕ СЕ СЕГА
              </a>
              <span className="text-white/40 text-xs font-bold uppercase tracking-widest hidden sm:block">или</span>
              <Link to="/kontakti" className="border-2 border-white/20 text-white px-8 py-3.5 rounded-brand font-bold text-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-colors cursor-pointer text-center">
                ПОИСКАЙ ОФЕРТА
              </Link>
            </div>
          </div>

          <div className="relative flex-shrink-0 w-full lg:w-[480px] xl:w-[520px] hidden lg:block">
            <div className="absolute -top-4 -right-4 w-full h-full rounded-brand bg-primary/20 rotate-2 transform-gpu" />
            <div className="absolute -bottom-4 -left-4 w-full h-full rounded-brand border-2 border-primary/30 -rotate-1 transform-gpu" />
            <div className="relative rounded-brand overflow-hidden shadow-2xl shadow-black/50 border-2 border-white/10">
              <img src="/images/hero-roofer.png" alt="Професионален ремонт на покриви" className="w-full h-[380px] xl:h-[420px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-dark/20" />
              <div className="absolute top-0 right-0 w-20 h-20">
                <div className="absolute top-0 right-0 w-full h-full bg-primary clip-triangle" />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-brand px-5 py-4 shadow-xl shadow-black/20 border border-dark/5 z-20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-black font-heading text-dark leading-none">100%</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-0.5">Гаранция</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-5 right-8 bg-primary rounded-xl px-4 py-2.5 shadow-lg shadow-red-900/30 z-20 rotate-2 transform-gpu">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-white/80" />
                <span className="text-white text-xs font-bold uppercase tracking-wider">Цяла България</span>
              </div>
            </div>
            <div className="absolute -right-8 top-[40%] w-4 h-4 border-2 border-primary/40 rounded-full" />
            <div className="absolute -right-12 top-[50%] w-2 h-2 bg-primary/30 rounded-full" />
            <div className="absolute left-[30%] -bottom-10 w-3 h-3 border-2 border-white/10 rotate-45" />
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutUs() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-screen-xl">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-brand overflow-hidden shadow-sm border border-dark/5 group max-w-[450px] mx-auto">
              <img src="/images/team.png" alt="Ремонт на покрив" loading="lazy" className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-tr from-dark/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur px-6 py-4 rounded-xl border border-white inline-block">
                  <div className="text-3xl font-black font-heading text-primary mb-1">15+</div>
                  <div className="text-sm font-bold text-dark tracking-wide uppercase">Години опит</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <SectionHeading label="За нас" className="mb-6" />
            <h2 className="text-3xl md:text-4xl font-black font-heading text-dark leading-tight mb-6 uppercase tracking-tighter">
              Кой сме <br /><span className="text-primary">ние?</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Най-добрата реклама за нас са нашите доволни клиенти. Ние държим на оценката, която клиентите ни дават, тъй като тя е сигурен критерий за нашия професионализъм, не само по отношение на уменията ни да ремонтираме покриви, но и да обслужваме клиентите си.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Предлагаме гаранция за всеки ремонт. Ценим и създаваме доверие — предоставяме точната услуга, от която клиентите се нуждаят, с коректност и отговорност към работата.
            </p>
            <div className="flex flex-wrap items-center gap-6 md:gap-10">
              <div className="flex flex-col">
                <span className="text-3xl font-black font-heading text-dark mb-1">1000+</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 font-bold">Доволни клиенти</span>
              </div>
              <div className="w-[1px] h-10 bg-dark/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-black font-heading text-dark mb-1">100%</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 font-bold">Гаранция</span>
              </div>
              <div className="w-[1px] h-10 bg-dark/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-black font-heading text-dark mb-1">7/7</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 font-bold">Дни в седмицата</span>
              </div>
            </div>
            <Link to="/za-nas" className="inline-flex items-center gap-2 mt-8 text-primary text-sm font-bold uppercase tracking-widest hover:gap-3 transition-all">
              Повече за нас →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Seo
        title="ПОКРИВЧЕ — Ремонт на покриви в цяла България | Безплатен оглед"
        path="/"
        image="/images/projects/zavarshen-keremiden-pokriv.webp"
        jsonLd={[localBusinessSchema(), webSiteSchema()]}
      />

      <Hero />
      <AboutUs />

      {/* Services */}
      <section className="bg-bg-light py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-screen-xl">
          <SectionHeading label="Нашите услуги" className="mb-8 md:mb-12" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-dark py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-screen-xl relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-16">
            <div>
              <SectionHeading label="Нашите проекти" dark className="mb-6" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black font-heading text-white uppercase tracking-tighter leading-[1.05]">
                Работа, която <span className="text-primary">говори сама</span>.
              </h2>
            </div>
            <p className="text-white/60 text-base md:text-lg max-w-md leading-relaxed">
              Реални обекти от цялата страна — от ремонти на течове до изграждане на нови покриви и хидроизолация.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projects.slice(0, 3).map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/proekti" className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest hover:gap-3 transition-all">
              Всички проекти →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-screen-xl">
          <SectionHeading label="Отзиви от клиенти" align="right" className="mb-10 md:mb-16" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {reviews.slice(0, 3).map((r, i) => (
              <ReviewCard key={i} review={r} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/otzivi" className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-widest hover:gap-3 transition-all">
              Всички отзиви →
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <TrustSection />
    </>
  );
}
