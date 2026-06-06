import { Phone, ShieldCheck } from 'lucide-react';
import { business } from '../data/business';

interface CTASectionProps {
  /** custom heading; when omitted the default homepage headline is shown */
  title?: string;
  subtitle?: string;
}

export default function CTASection({ title, subtitle }: CTASectionProps) {
  return (
    <section className="bg-white pb-16 lg:pb-32 pt-8 lg:pt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-screen-xl">
        <div className="bg-primary rounded-brand overflow-hidden relative shadow-[0_20px_50px_rgba(185,28,28,0.2)]">
          <div className="relative z-10 px-6 py-16 md:p-16 lg:p-20 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              {title ? (
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-heading text-white leading-[1.1] mb-6 uppercase tracking-tighter drop-shadow-sm">
                  {title}
                </h2>
              ) : (
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading text-white leading-[1.1] mb-6 uppercase tracking-tighter drop-shadow-sm">
                  Сложете край на <br className="hidden md:block" />
                  <span className="text-dark bg-white/90 px-3 py-1 rounded-lg inline-block mt-2 lg:mt-3 rotate-1 transform-gpu shadow-sm">течовете</span>{' '}
                  <span className="mt-2 inline-block">още днес.</span>
                </h2>
              )}
              <p className="text-white/90 text-lg sm:text-xl font-medium leading-relaxed max-w-xl mx-auto lg:mx-0">
                {subtitle ??
                  'Заявете безплатен оглед. Ние ще ви дадем честна оценка, ясна цена и дълготрайно решение с официална гаранция.'}
              </p>
            </div>

            <div className="shrink-0 flex flex-col items-center">
              <a
                href={business.phoneHref}
                className="group bg-dark text-white px-8 sm:px-12 py-5 rounded-brand font-bold text-sm sm:text-base uppercase tracking-widest hover:bg-white hover:text-dark transition-all duration-300 shadow-xl flex items-center gap-4 border border-dark hover:border-white"
              >
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 group-hover:bg-primary/50" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 group-hover:bg-primary" />
                </span>
                ОБАДЕТЕ СЕ СЕГА
              </a>
              <p className="text-white/80 text-[10px] sm:text-xs font-bold uppercase tracking-widest mt-5 text-center flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 opacity-70" />
                Работим в цялата страна
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
