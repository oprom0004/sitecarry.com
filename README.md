# SiteCarry (sitecarry.com)

**WordPress Migration & Website Rebuilds Studio**
*“Move your website forward. Keep what matters.”*

---

## 1. Project Overview

SiteCarry is a high-performance, multilingual service agency website built with **Astro 7**, **TypeScript**, and **Tailwind CSS**. It is engineered to capture high-intent inquiries from businesses in the US, Europe, Japan, and Taiwan looking to migrate aging WordPress sites or legacy PHP applications into fast, decoupled static architectures (Astro, Next.js, Headless WP).

### Core Highlights
- **Single-Domain Multilingual Routing**:
  - `/` & `/en/`: English (US / Europe default)
  - `/ja/`: 日本語 (Japan)
  - `/zh-tw/`: 繁體中文 (Taiwan)
  - Proper `hreflang`, `canonical`, and `x-default` configurations.
- **Transparent Fixed-Price Tiers**:
  - **Migration Review**: $149 (3–5 business days, 100% credited toward build)
  - **Essential**: From $1,490 (2–3 weeks, up to 8 pages & 50 posts)
  - **Business Rebuild**: From $3,490 (4–6 weeks, 15 pages & 250 posts, Recommended)
  - **Content Scale**: From $6,900 (6–9 weeks, 30 pages & 1,000 posts, 2 languages)
  - **Monthly Care**: $79 / $199 per month
- **High-Intent Landing Pages**:
  - `/en/wordpress-to-astro/` (Sub-second static delivery & zero attack surface, inspired by `bushe.co`)
  - `/en/wordpress-to-nextjs/` (React ecosystem & dynamic web apps)
  - `/en/legacy-php-migration/` (Escaping PHP EOL and CVE panics, preserving `.php` 301 mappings)
  - `/en/guides/php2shell-wordpress-static-mitigation/` (Objective technical deep-dive on CVE-2026-109618)
- **Real Interactive Estimate Endpoint**:
  - Multi-attribute inquiry form with client & server-side validation.
  - Automatically generates verifiable reference numbers (`SC-YYYYMMDD-XXXX`).
  - Honeypot anti-spam protection.

---

## 2. Directory Structure

```text
sitecarry.com/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header.astro            # Sticky header with lang switcher
│   │   ├── Footer.astro            # 5-column comprehensive footer
│   │   ├── HomeView.astro          # High-converting homepage blueprint
│   │   ├── PricingTable.astro      # 3 tiers + scope breakdown + inclusions
│   │   ├── ProcessTimeline.astro   # 5-stage disciplined SOP
│   │   ├── FaqAccordion.astro      # Accessible FAQ with Schema.org FAQPage
│   │   └── EstimateForm.astro      # Interactive estimate questionnaire
│   ├── data/
│   │   └── siteConfig.ts           # Central pricing, SLA, and add-on rates
│   ├── i18n/
│   │   ├── translations.ts         # Authentic EN, JA, and ZH-TW dictionaries
│   │   └── utils.ts                # Route resolution, hreflang & canonical helpers
│   ├── layouts/
│   │   └── Layout.astro            # Global layout + OpenGraph + JSON-LD
│   ├── pages/
│   │   ├── api/
│   │   │   └── estimate.ts         # Hybrid server endpoint for form submission
│   │   ├── en/                     # English pages
│   │   ├── ja/                     # Japanese pages
│   │   ├── zh-tw/                  # Traditional Chinese pages
│   │   └── index.astro             # Root English entrance
│   └── styles/
│       └── global.css              # Tailwind CSS integration
├── astro.config.mjs                # Astro configuration (Node/Static + Sitemap)
└── package.json
```

---

## 3. Local Development

```bash
# Install dependencies
pnpm install

# Run local development server
pnpm dev

# Build production assets (pre-renders static pages + outputs server endpoint)
pnpm build

# Preview production build locally
pnpm preview
```

---

## 4. Production Deployment

### Option A: Cloudflare Pages (Recommended for Zero-Runtime Static Delivery)
1. Link your Git repository to **Cloudflare Pages**.
2. Set Build Command: `pnpm build`
3. Set Build Output Directory: `dist/client`
4. If deploying SSR API endpoints on Cloudflare Workers, switch adapter to `@astrojs/cloudflare` in `astro.config.mjs`.

### Option B: Node.js Server / Docker
Run the standalone entrypoint created by `@astrojs/node`:
```bash
node dist/server/entry.mjs
```

---

## 5. Delivery Verification Checklist

- [x] All 32 routes pre-rendered with zero build errors.
- [x] Canonical, hreflang (`en`, `ja`, `zh-TW`, `x-default`), and sitemaps generated.
- [x] Fixed pricing tiers strictly aligned with `01-sitecarry.md`.
- [x] Zero fake testimonials or fake partner logos; clearly marked Demo Benchmark specifications.
- [x] Responsive layout tested for 360px mobile through wide desktop screens.
