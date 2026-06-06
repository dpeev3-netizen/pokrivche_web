import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Service } from '../data/services';

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <Link
      to={`/uslugi/${service.slug}`}
      className="group bg-white p-6 md:p-8 rounded-brand shadow-sm flex flex-col border border-white hover:border-primary/20 hover:shadow-md transition-all"
    >
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="font-bold text-dark font-heading text-lg mb-2">{service.shortTitle}</h3>
      <p className="text-sm text-gray-500 leading-snug flex-grow">{service.cardDesc}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-primary text-xs font-bold uppercase tracking-widest">
        Научи повече
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </span>
    </Link>
  );
}
