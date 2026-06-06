import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cookie } from 'lucide-react';
import { loadGA, CONSENT_KEY } from '../lib/analytics';

/**
 * GDPR cookie banner. Analytics (GA4) loads only after the visitor accepts.
 * Renders nothing on the server / before mount to avoid hydration mismatch.
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = localStorage.getItem(CONSENT_KEY);
    } catch {
      /* localStorage unavailable */
    }
    if (stored === 'accepted') loadGA();
    else if (stored !== 'declined') setVisible(true);
  }, []);

  if (!visible) return null;

  const decide = (value: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch {
      /* ignore */
    }
    if (value === 'accepted') loadGA();
    setVisible(false);
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-[60] p-4 print:hidden">
      <div className="container mx-auto max-w-screen-lg bg-dark text-white rounded-brand shadow-2xl shadow-black/40 border border-white/10 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <Cookie className="w-7 h-7 text-primary shrink-0 hidden sm:block" />
        <p className="text-sm text-white/70 leading-snug flex-1">
          Използваме бисквитки, за да подобрим работата на сайта и да анализираме трафика. Вижте нашата{' '}
          <Link to="/poveritelnost" className="text-primary font-semibold underline">Политика за поверителност</Link>.
        </p>
        <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
          <button
            onClick={() => decide('declined')}
            className="flex-1 sm:flex-none px-5 py-2.5 rounded-brand border border-white/20 text-white/80 text-xs font-bold uppercase tracking-widest hover:border-white/40 transition-colors"
          >
            Откажи
          </button>
          <button
            onClick={() => decide('accepted')}
            className="flex-1 sm:flex-none px-5 py-2.5 rounded-brand bg-primary text-white text-xs font-bold uppercase tracking-widest hover:bg-red-800 transition-colors"
          >
            Приемам
          </button>
        </div>
      </div>
    </div>
  );
}
