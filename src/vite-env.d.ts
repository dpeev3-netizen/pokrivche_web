/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** make.com Custom Webhook URL that receives form submissions */
  readonly VITE_MAKE_WEBHOOK_URL?: string;
  /** Google Analytics 4 measurement ID, e.g. G-XXXXXXXXXX */
  readonly VITE_GA_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
