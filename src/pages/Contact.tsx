import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare, ShieldCheck, AlertTriangle, Loader2, MapPinned } from 'lucide-react';
import Seo from '../components/Seo';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import { business } from '../data/business';
import { submitLead } from '../lib/submitLead';
import { localBusinessSchema, breadcrumbSchema } from '../lib/seo';

const crumbs = [
  { name: 'Начало', path: '/' },
  { name: 'Контакти', path: '/kontakti' },
];

type Status = 'idle' | 'sending' | 'success' | 'error';

function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', message: '', consent: false });
  const [status, setStatus] = useState<Status>('idle');
  const location = useLocation();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent || status === 'sending') return;
    setStatus('sending');
    try {
      await submitLead({ ...form, sourcePage: location.pathname, source: 'contact-page' });
      setStatus('success');
      setForm({ name: '', phone: '', message: '', consent: false });
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-bg-light rounded-brand p-10 text-center border border-dark/5">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
          <ShieldCheck className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-black font-heading text-dark uppercase mb-2">Благодарим Ви!</h3>
        <p className="text-gray-500">Получихме вашето запитване и ще се свържем с вас възможно най-скоро.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {status === 'error' && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
          <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <p className="text-sm text-dark/80 leading-snug">
            Възникна проблем при изпращането. Моля, опитайте отново или ни се обадете на{' '}
            <a href={business.phoneHref} className="font-bold text-primary whitespace-nowrap">{business.phone}</a>.
          </p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5 block">Име <span className="text-primary">*</span></label>
          <div className="relative">
            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
            <input type="text" required value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} placeholder="Вашето име"
              className="w-full pl-11 pr-4 py-3.5 rounded-xl border-2 border-gray-100 bg-bg-light/50 text-dark font-medium text-sm placeholder:text-gray-300 focus:outline-none focus:border-primary/40 focus:bg-white transition-all" />
          </div>
        </div>
        <div>
          <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5 block">Телефон <span className="text-primary">*</span></label>
          <div className="relative">
            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
            <input type="tel" required value={form.phone} onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))} placeholder="0888 123 456"
              className="w-full pl-11 pr-4 py-3.5 rounded-xl border-2 border-gray-100 bg-bg-light/50 text-dark font-medium text-sm placeholder:text-gray-300 focus:outline-none focus:border-primary/40 focus:bg-white transition-all" />
          </div>
        </div>
      </div>

      <div>
        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5 block">Съобщение <span className="text-gray-300 font-normal normal-case tracking-normal">(по избор)</span></label>
        <div className="relative">
          <MessageSquare className="absolute left-4 top-3.5 w-4 h-4 text-gray-300" />
          <textarea rows={5} value={form.message} onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))} placeholder="Опишете проблема или услугата, от която се нуждаете..."
            className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-100 bg-bg-light/50 text-dark font-medium text-sm placeholder:text-gray-300 focus:outline-none focus:border-primary/40 focus:bg-white transition-all resize-none" />
        </div>
      </div>

      <label className="flex items-start gap-2.5 cursor-pointer select-none">
        <input type="checkbox" required checked={form.consent} onChange={(e) => setForm((p) => ({ ...p, consent: e.target.checked }))} className="mt-0.5 w-4 h-4 accent-primary shrink-0" />
        <span className="text-[11px] text-gray-500 leading-snug">
          Съгласен/на съм с обработката на личните ми данни съгласно{' '}
          <Link to="/poveritelnost" className="text-primary font-semibold underline">Политиката за поверителност</Link>.
        </span>
      </label>

      <button type="submit" disabled={status === 'sending' || !form.consent}
        className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-brand font-bold text-sm uppercase tracking-widest hover:bg-red-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed">
        {status === 'sending' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
        {status === 'sending' ? 'Изпращане…' : 'Изпрати запитване'}
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <>
      <Seo
        title="Контакти — ПОКРИВЧЕ | Безплатен оглед в цяла България"
        description={`Свържете се с ПОКРИВЧЕ за безплатен оглед и оферта. Телефон ${business.phone}, имейл ${business.email}. Работим в цяла България.`}
        path="/kontakti"
        jsonLd={[localBusinessSchema(), breadcrumbSchema(crumbs)]}
      />
      <PageHeader
        crumbs={crumbs}
        label="Контакти"
        title="Свържете се с нас"
        intro="Обадете се или ни пишете — ще отговорим бързо и ще организираме безплатен оглед в удобно за вас време."
      />

      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-screen-xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Info */}
            <div>
              <SectionHeading label="Информация за връзка" className="mb-8" />
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><Phone className="w-5 h-5 text-primary" /></div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Телефон</div>
                    <a href={business.phoneHref} className="text-xl font-black font-heading text-dark hover:text-primary transition-colors">{business.phone}</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><Mail className="w-5 h-5 text-primary" /></div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Имейл</div>
                    <a href={`mailto:${business.email}`} className="text-base font-bold text-dark hover:text-primary transition-colors break-all">{business.email}</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-primary" /></div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Адрес</div>
                    <p className="text-base font-bold text-dark">{business.address.street}, {business.address.city}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><Clock className="w-5 h-5 text-primary" /></div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-0.5">Работно време</div>
                    <p className="text-base font-bold text-dark">{business.hoursLabel}</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 pt-8 border-t border-dark/5">
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">Обслужвани райони</div>
                <div className="flex flex-wrap gap-2">
                  {business.areasServed.map((a) => (
                    <span key={a} className="text-xs font-bold text-dark bg-bg-light border border-dark/5 px-3 py-1.5 rounded-full">{a}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <SectionHeading label="Изпратете запитване" className="mb-8" />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-bg-light pb-16 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10 max-w-screen-xl">
          <div className="rounded-brand overflow-hidden border border-dark/5 shadow-sm">
            {business.mapEmbedSrc ? (
              <iframe
                src={business.mapEmbedSrc}
                title="Карта"
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="h-[320px] bg-dark/[0.03] flex flex-col items-center justify-center text-center px-6">
                <MapPinned className="w-10 h-10 text-primary/40 mb-3" />
                <p className="text-gray-500 text-sm max-w-md">
                  Картата ще се покаже тук. {/* TODO: задайте `mapEmbedSrc` в src/data/business.ts с iframe адреса от Google Maps. */}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
