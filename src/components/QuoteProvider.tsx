import { createContext, useContext, useState, type ReactNode } from 'react';
import QuoteModal from './QuoteModal';

interface QuoteContextValue {
  openQuote: () => void;
}

const QuoteContext = createContext<QuoteContextValue>({ openQuote: () => {} });

/** Hook to open the quote modal from any CTA button. */
export const useQuote = () => useContext(QuoteContext);

/**
 * Holds the quote-modal open state and renders a single modal instance for the
 * whole app. Wrap the layout so any button can call `useQuote().openQuote()`.
 */
export function QuoteProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <QuoteContext.Provider value={{ openQuote: () => setOpen(true) }}>
      {children}
      <QuoteModal isOpen={open} onClose={() => setOpen(false)} />
    </QuoteContext.Provider>
  );
}
