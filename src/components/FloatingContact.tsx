import { Phone } from 'lucide-react';
import { business } from '../data/business';

/** Floating quick-contact buttons (phone / Viber / WhatsApp) — bottom right. */
export default function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3 print:hidden">
      {business.social.whatsapp && (
        <a
          href={business.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Пишете ни в WhatsApp"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-black/20 hover:scale-105 transition-transform"
        >
          <img src="/images/whatsapp-white-icon.webp" alt="WhatsApp" className="w-7 h-7" />
        </a>
      )}
      {business.social.viber && (
        <a
          href={business.social.viber}
          aria-label="Обадете се във Viber"
          className="w-12 h-12 rounded-full bg-[#7360F2] text-white flex items-center justify-center shadow-lg shadow-black/20 hover:scale-105 transition-transform"
        >
          <img src="/images/viber-white-icon.webp" alt="Viber" className="w-7 h-7" />
        </a>
      )}
      <a
        href={business.phoneHref}
        aria-label="Обадете се сега"
        className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-xl shadow-primary/30 hover:scale-105 transition-transform relative"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
        <Phone className="w-6 h-6 relative" />
      </a>
    </div>
  );
}
