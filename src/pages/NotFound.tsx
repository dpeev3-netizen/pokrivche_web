import { Link } from 'react-router-dom';
import { Home, Phone } from 'lucide-react';
import Seo from '../components/Seo';
import { business } from '../data/business';

export default function NotFound() {
  return (
    <>
      <Seo title="Страницата не е намерена | ПОКРИВЧЕ" path="/404" noindex />
      <section className="relative bg-dark overflow-hidden flex items-center min-h-[70vh]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="hidden lg:block absolute -left-[180px] top-1/2 -translate-y-1/2 w-[420px] h-[420px] border-[44px] border-primary/5 rounded-full" />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-10 max-w-screen-xl text-center">
          <div className="text-7xl md:text-9xl font-black font-heading text-primary leading-none mb-4">404</div>
          <h1 className="text-2xl md:text-3xl font-black font-heading text-white uppercase tracking-tighter mb-4">
            Страницата не е намерена
          </h1>
          <p className="text-white/60 text-lg max-w-md mx-auto mb-8">
            Изглежда тази страница е преместена или вече не съществува. Нека ви върнем на правилния път.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/" className="bg-primary text-white px-8 py-3.5 rounded-brand font-bold text-sm uppercase tracking-widest hover:bg-red-800 transition-colors inline-flex items-center gap-2">
              <Home className="w-4 h-4" /> Към началото
            </Link>
            <a href={business.phoneHref} className="border-2 border-white/20 text-white px-8 py-3.5 rounded-brand font-bold text-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-colors inline-flex items-center gap-2">
              <Phone className="w-4 h-4" /> {business.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
