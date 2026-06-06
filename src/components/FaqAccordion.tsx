import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import type { Faq } from '../data/faqs';

export default function FaqAccordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="bg-white rounded-brand border border-dark/5 overflow-hidden">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
            >
              <span className="font-bold font-heading text-dark text-base md:text-lg pr-2">{f.q}</span>
              <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                {isOpen ? <Minus className="w-4 h-4 text-primary" /> : <Plus className="w-4 h-4 text-primary" />}
              </span>
            </button>
            {isOpen && (
              <div className="px-6 pb-5 -mt-1 text-gray-600 leading-relaxed text-sm md:text-base">{f.a}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
