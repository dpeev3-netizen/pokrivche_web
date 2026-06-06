import { MapPin, ShieldCheck, Banknote } from 'lucide-react';

const ITEMS = [
  { icon: MapPin, title: 'Национално покритие', desc: 'Работим бързо и качествено в цялата страна.' },
  { icon: ShieldCheck, title: 'Писмена гаранция', desc: 'Заставаме зад всяка свършена работа.' },
  { icon: Banknote, title: 'Честни цени', desc: 'Точна услуга без скрити такси.' },
];

export default function TrustSection() {
  return (
    <section className="bg-dark text-white py-16 lg:py-20 shrink-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 w-full max-w-3xl">
          {ITEMS.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col">
              <div className="flex items-center gap-2 mb-1.5">
                <Icon className="w-4 h-4 text-primary shrink-0" />
                <h3 className="text-xs uppercase tracking-widest font-heading font-black text-primary">{title}</h3>
              </div>
              <p className="text-sm opacity-70 leading-snug pl-6">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
