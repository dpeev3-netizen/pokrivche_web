import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { business } from '../data/business';
import { services } from '../data/services';
import { navItems } from '../lib/nav';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-16 pb-8 shrink-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-screen-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src="/images/logo.png" alt="ПОКРИВЧЕ" className="h-14 w-auto brightness-0 invert" />
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mb-5 max-w-xs">{business.tagline}</p>
            <a href={business.phoneHref} className="text-2xl font-black font-heading tracking-wider hover:text-primary transition-colors block">
              {business.phone}
            </a>
            <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest mt-1">
              Безплатен оглед и консултация
            </p>
            {(business.social.facebook || business.social.instagram || business.social.whatsapp) && (
              <div className="flex items-center gap-3 mt-5">
                {business.social.facebook && (
                  <a href={business.social.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer"
                     className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                    <Facebook className="w-4 h-4" />
                  </a>
                )}
                {business.social.instagram && (
                  <a href={business.social.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer"
                     className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                    <Instagram className="w-4 h-4" />
                  </a>
                )}
                {business.social.whatsapp && (
                  <a href={business.social.whatsapp} aria-label="WhatsApp" target="_blank" rel="noopener noreferrer"
                     className="w-9 h-9 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-black font-heading uppercase tracking-widest text-primary mb-5">Услуги</h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/uslugi/${s.slug}`} className="text-sm text-white/60 hover:text-white transition-colors">
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-black font-heading uppercase tracking-widest text-primary mb-5">Навигация</h3>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-white/60 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-black font-heading uppercase tracking-widest text-primary mb-5">Контакти</h3>
            <ul className="space-y-3.5 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{business.address.street}, {business.address.city}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a href={business.phoneHref} className="hover:text-white transition-colors">{business.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a href={`mailto:${business.email}`} className="hover:text-white transition-colors break-all">{business.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>{business.hoursLabel}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6">
          <p className="text-[11px] text-white/50 text-center md:text-left">
            ПОКРИВЧЕ — <span className="opacity-70">Работим в цяла България.</span>
          </p>
          <div className="flex items-center gap-5 text-[11px]">
            <Link to="/poveritelnost" className="text-white/50 hover:text-white transition-colors">Поверителност</Link>
            <Link to="/obshti-usloviya" className="text-white/50 hover:text-white transition-colors">Общи условия</Link>
          </div>
          <p className="text-[10px] text-white/30 uppercase tracking-widest text-center md:text-right">
            &copy; {year} ПОКРИВЧЕ. Всички права запазени.
          </p>
        </div>
      </div>
    </footer>
  );
}
