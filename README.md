# ПОКРИВЧЕ — уебсайт за ремонт на покриви

Многостраничен, статично-пре-рендиран (SSG) сайт с пълна SEO оптимизация, изграден с
**Vite + React 19 + React Router 6 + Tailwind CSS v4** и `vite-react-ssg`.

View your app in AI Studio: https://ai.studio/apps/96c150b8-b96b-4c0b-aab3-cae35bf02bc2

## Стартиране локално

**Изисквания:** Node.js

```bash
npm install
npm run dev      # дев сървър (SSR в режим на разработка) на http://localhost:3000
```

## Команди

| Команда | Какво прави |
|---|---|
| `npm run dev` | Дев сървър с SSR (vite-react-ssg). |
| `npm run build` | Генерира статичния сайт в `dist/` (всяка страница като отделен HTML с title/meta/JSON-LD). Преди това генерира `sitemap.xml`. |
| `npm run preview` | Сервира построения `dist/` локално. |
| `npm run sitemap` | Прегенерира `public/sitemap.xml` от данните. |
| `npm run lint` | Проверка на типовете (`tsc --noEmit`). |

## Environment променливи (вижте `.env.example`)

Копирайте `.env.example` в `.env.local` и попълнете:

- **`VITE_MAKE_WEBHOOK_URL`** — make.com **Custom Webhook** URL (`https://hook.eu1.make.com/...`).
  Формите за оферта и контакт изпращат структуриран JSON `POST` към него
  (`{ name, phone, message, sourcePage, source, consent, timestamp }`).
  Докато не е зададен, формата показва грешка с телефона като резервен вариант.
- **`VITE_GA_ID`** — Google Analytics 4 ID (по избор). Зарежда се само след съгласие за бисквитки.

## Какво трябва да се попълни преди пускане (`TODO`)

Повечето текстове са готови. Заменете маркираните `TODO` неща:

1. **`src/data/business.ts`** — реален адрес, имейл, точно работно време, домейн (`siteUrl`),
   координати, Google Maps embed адрес, линкове към социални мрежи, линк към Google отзиви.
2. **`VITE_MAKE_WEBHOOK_URL`** в `.env.local` (make.com Custom Webhook).
3. **Снимки** — реални before/after снимки за галерията (`src/data/projects.ts`, папка `public/images/projects/`).
4. **Блог** — три статии са готови; още три са чернови в `src/data/posts.ts` (`draft: true`).
5. **Фавикон и OG изображение** — `public/images/logo.png` е временен фавикон;
   добавете истински `favicon` и `public/images/og-default.jpg` (1200×630).
6. **Градове** — списъкът се управлява от `src/data/cities.ts`.
7. **`public/robots.txt`** — обновете домейна в `Sitemap:` реда.

## Структура

- `src/data/` — съдържание (услуги, градове, ЧЗВ, отзиви, проекти, блог, бизнес инфо).
- `src/components/` — споделени компоненти (навигация, футър, форма за оферта, SEO и др.).
- `src/pages/` — страниците.
- `src/routes.tsx` — маршрутите (динамичните използват `getStaticPaths`).
- `src/lib/seo.ts` — генератори на структурирани данни (Schema.org JSON-LD).
- `scripts/gen-sitemap.ts` — генерира `sitemap.xml`.

## Деплой

Билдът произвежда статични файлове в `dist/` (чисти URL-и: `/uslugi/hidroizolatsiya/index.html`).
Може да се качи на всеки статичен хостинг (Netlify, Vercel, Cloudflare Pages, Firebase Hosting и др.),
които автоматично сервират `/path` → `/path/index.html`.

**След деплой (ръчно, от съответните акаунти):**
- Регистрирайте сайта в **Google Search Console** и подайте `sitemap.xml`.
- Настройте **Google Business Profile** за локално SEO.
