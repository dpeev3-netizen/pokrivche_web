import React, { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { X, Send, User, Phone, MessageSquare, ShieldCheck, AlertTriangle, Loader2 } from 'lucide-react';
import { submitLead } from '../lib/submitLead';
import { business } from '../data/business';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function QuoteModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formState, setFormState] = useState({ name: '', phone: '', message: '', consent: false });
  const [status, setStatus] = useState<Status>('idle');
  const location = useLocation();

  if (!isOpen) return null;

  const close = () => {
    onClose();
    // reset shortly after closing so the modal is clean next time
    setTimeout(() => {
      setStatus('idle');
      setFormState({ name: '', phone: '', message: '', consent: false });
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.consent || status === 'sending') return;
    setStatus('sending');
    try {
      await submitLead({
        name: formState.name,
        phone: formState.phone,
        message: formState.message,
        sourcePage: location.pathname,
        source: 'quote-modal',
        consent: formState.consent,
      });
      setStatus('success');
      setTimeout(close, 2800);
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={close}>
      <div className="absolute inset-0 bg-dark/70 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]" />

      <div className="relative w-full max-w-md animate-[slideUp_0.3s_ease-out]" onClick={(e) => e.stopPropagation()}>
        <div className="absolute -top-3 -right-3 w-full h-full rounded-brand bg-primary/20 rotate-1 transform-gpu" />
        <div className="absolute -bottom-3 -left-3 w-full h-full rounded-brand border-2 border-primary/15 -rotate-1 transform-gpu" />

        <div className="relative bg-white rounded-brand shadow-2xl shadow-black/30 overflow-hidden">
          {/* Header */}
          <div className="bg-dark px-8 pt-8 pb-6 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -right-10 -top-10 w-40 h-40 border-[20px] border-primary rounded-full" />
              <div className="absolute -left-5 -bottom-5 w-24 h-24 border-[12px] border-white/20 rounded-full" />
            </div>
            <button
              onClick={close}
              aria-label="Затвори"
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-4 h-4 text-white" />
            </button>
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                <Send className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-black font-heading text-white uppercase tracking-tight">Поискай оферта</h3>
              <p className="text-white/50 text-sm mt-1.5">Попълнете формата и ще се свържем с вас до 30 минути.</p>
            </div>
          </div>

          {status === 'success' ? (
            <div className="px-8 py-16 text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                <ShieldCheck className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="text-xl font-black font-heading text-dark uppercase mb-2">Благодарим Ви!</h4>
              <p className="text-gray-500 text-sm">Ще се свържем с вас възможно най-скоро.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="px-8 py-8 space-y-5">
              {status === 'error' && (
                <div className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                  <AlertTriangle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-xs text-dark/80 leading-snug">
                    Възникна проблем при изпращането. Моля, опитайте отново или ни се обадете на{' '}
                    <a href={business.phoneHref} className="font-bold text-primary whitespace-nowrap">{business.phone}</a>.
                  </p>
                </div>
              )}

              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5 block">
                  Име <span className="text-primary">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                  <input
                    type="text" required value={formState.name}
                    onChange={(e) => setFormState((p) => ({ ...p, name: e.target.value }))}
                    placeholder="Вашето име"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border-2 border-gray-100 bg-bg-light/50 text-dark font-medium text-sm placeholder:text-gray-300 focus:outline-none focus:border-primary/40 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5 block">
                  Телефон <span className="text-primary">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                  <input
                    type="tel" required value={formState.phone}
                    onChange={(e) => setFormState((p) => ({ ...p, phone: e.target.value }))}
                    placeholder="0888 123 456"
                    className="w-full pl-11 pr-4 py-3.5 rounded-xl border-2 border-gray-100 bg-bg-light/50 text-dark font-medium text-sm placeholder:text-gray-300 focus:outline-none focus:border-primary/40 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1.5 block">
                  Съобщение <span className="text-gray-300 font-normal normal-case tracking-normal">(по избор)</span>
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-3.5 w-4 h-4 text-gray-300" />
                  <textarea
                    rows={3} value={formState.message}
                    onChange={(e) => setFormState((p) => ({ ...p, message: e.target.value }))}
                    placeholder="Опишете проблема или услугата..."
                    className="w-full pl-11 pr-4 py-3 rounded-xl border-2 border-gray-100 bg-bg-light/50 text-dark font-medium text-sm placeholder:text-gray-300 focus:outline-none focus:border-primary/40 focus:bg-white transition-all resize-none"
                  />
                </div>
              </div>

              {/* GDPR consent */}
              <label className="flex items-start gap-2.5 cursor-pointer select-none">
                <input
                  type="checkbox" required checked={formState.consent}
                  onChange={(e) => setFormState((p) => ({ ...p, consent: e.target.checked }))}
                  className="mt-0.5 w-4 h-4 accent-primary shrink-0"
                />
                <span className="text-[11px] text-gray-500 leading-snug">
                  Съгласен/на съм с обработката на личните ми данни съгласно{' '}
                  <Link to="/poveritelnost" className="text-primary font-semibold underline" onClick={(e) => e.stopPropagation()}>
                    Политиката за поверителност
                  </Link>.
                </span>
              </label>

              <button
                type="submit" disabled={status === 'sending' || !formState.consent}
                className="w-full bg-primary text-white py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-red-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                {status === 'sending' ? 'ИЗПРАЩАНЕ…' : 'ИЗПРАТИ ЗАПИТВАНЕ'}
              </button>

              <p className="text-center text-[10px] text-gray-400 font-medium">
                <ShieldCheck className="w-3 h-3 inline-block mr-1 -mt-0.5 text-gray-300" />
                Вашите данни са защитени и няма да бъдат споделяни.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
