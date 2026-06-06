export interface LeadPayload {
  name: string;
  phone: string;
  message?: string;
  /** which page the form was submitted from */
  sourcePage: string;
  /** which form (quote modal / contact page) */
  source: 'quote-modal' | 'contact-page';
  consent: boolean;
}

/**
 * Sends a structured lead to the make.com Custom Webhook (VITE_MAKE_WEBHOOK_URL).
 * Throws on failure so the UI can show an error state with the phone fallback.
 */
export async function submitLead(data: LeadPayload): Promise<void> {
  const url = import.meta.env.VITE_MAKE_WEBHOOK_URL;
  const payload = {
    ...data,
    timestamp: new Date().toISOString(),
    site: 'pokrivche',
  };

  if (!url) {
    // The webhook URL hasn't been configured yet. Surface it loudly for the
    // developer and fail so the visitor sees the "call us instead" fallback.
    console.error(
      '[ПОКРИВЧЕ] VITE_MAKE_WEBHOOK_URL не е зададен — заявката НЕ е изпратена:',
      payload,
    );
    throw new Error('WEBHOOK_NOT_CONFIGURED');
  }

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`Webhook responded with status ${res.status}`);
  }
}
