# Comal Kaur Weds Sarabjot Singh Lamba — Premium Sikh/Punjabi Invitation — Build Plan & Checklist

> ONE domain, THREE path-based invitations, shared design system. Cloudflare Workers optimized.

---

## 1. URL Structure (Implemented)

```
/                     →  301 redirect to /comal-sarabjot/   — src/routes/index.tsx:3
/comal-sarabjot/      →  Main invitation                   — src/routes/comal-sarabjot/index.tsx:7
/comal-sarabjot/12-13/ → Ring + Wedding Day                — src/routes/comal-sarabjot/12-13.tsx:6
/comal-sarabjot/13/   →  Wedding Day only                  — src/routes/comal-sarabjot/13.tsx:6
```

Generated route tree `src/routeTree.gen.ts:11` confirms all 4 routes. `_redirects` at `public/_redirects:1` covers edge redirect for Cloudflare.

**Shared:** same `src/styles.css:43` tokens, same fonts (`src/routes/__root.tsx:91`), same header/footer shell.

---

## 2. Design System (Analog Meditation + Geometric Silence)

- **Tokens** `src/styles.css:43-81`: ivory `#fdf8ee`, gold `#cfa96e`, sage `#cfdcc4`, sand/sea/ink, `font-display Cormorant Garamond`, `font-script Petit Formal Script`, `font-body Jost`, `radius 2px`, `shadow-soft`.
- **Utilities**: `paper`, `card-soft`, `press` (scale 0.965), `reveal` (Y 26px), `animate-bloom/ink`.
- **Principles**: generous whitespace (4px grid), editorial borders, no neon/gradient, lucide icons only (1.5px stroke), `prefers-reduced-motion` respected `src/styles.css:326`.

---

## 3. Content Model (Single Source of Truth)

`src/lib/wedding.ts:5` — `couple`, `family`, `events`, `locations`, `contact`, `og`, `sharePayload`. No invented data.

```ts
locations = {
  gurudwara: "https://maps.app.goo.gl/wDUKMSE3R8Y7LN4a8?g_st=ipc",
  essentia:  "https://maps.app.goo.gl/ShunBa8LKGRKAGWw8?g_st=ipc",
  reception: "https://maps.app.goo.gl/R4ipCr58Nheh5jNt9?g_st=ipc",
} // swap values to reassign — no UI change
```

Events exactly per spec: Sangeet 11 Dec 8:30PM, Ring 12 Dec 8:30PM, Barat 10:30AM → Lavan Gurudwara → Lunch Essentia → Reception 9PM.

---

## 4. Components (All `src/components/invitation/`)

| Component | File | Purpose |
|-----------|------|---------|
| OpeningBlessing | `OpeningBlessing.tsx:8` | Ik Onkar standalone, `w-[200px]` preserve ratio, `fetchPriority="high"`, generous whitespace, not background |
| Monogram | `Monogram.tsx:9` | CS monogram `w-16`/`w-20`, subtle border, below blessing |
| CoupleHeader | `CoupleHeader.tsx:1` | Grandparents wording + Comal/Sarabjot + parents |
| EventTimeline | `EventTimeline.tsx:19` | `allEvents` + filtered views, `card-soft` timeline |
| NavCards | `NavCards.tsx:4` | Minimal editorial links to 12-13 / 13, non-corporate |
| LocationButtons | `LocationButtons.tsx:14` | Central `locations` map, `MapPinned` icon, 48px min, `target="_blank"` |
| ShareButton | `ShareButton.tsx:4` | `navigator.share` + clipboard fallback, `aria-live` |
| InvitationFooter | `InvitationFooter.tsx:3` | WITH LOVE Bhangu/Palakkel + Event Manager `tel:+917385640439` |
| PageShell | `PageShell.tsx:3` | `paper` + `max-w-[640px]` luxury card, `shadow-soft` |

Shared: `Countdown.tsx:53` (flip `00 DAYS/HRS/MIN/SEC` to `2026-12-13T00:00:00+05:30`), `Section.tsx:3` reveal, `Ornaments.tsx`.

---

## 5. Cloudflare Workers Optimization

**`vite.config.ts:8`** — `nitro({ preset: "cloudflare-module", routeRules, minify, compressPublicAssets })`, `prerender: { crawlLinks: true }`, `manualChunks` as function for Rolldown.

**`wrangler.jsonc:1`** — `name comal-sarabjot-invitation`, `main .output/server/index.mjs`, `compatibility_date 2025-09-24`, `assets directory .output/public`, `nodejs_compat`.

**`public/_headers:1`** — immutable 1y for `/assets/* /og/* /media/*`, short 300s for `/comal-sarabjot/*`, 60s for `/`.

**`public/_redirects:1`** — edge 301 `/ → /comal-sarabjot/`.

**Build output** (verified `C:\...\comal-build2\.output`):
- Client: `index-DJGqm9Wa.js 162KB gzip 50KB`, `react 211KB gzip 65KB`, `styles 93KB gzip 16KB`, images hashed `ik-onkar 89KB`, `cs-monogram 72KB`.
- Server: `index.mjs 14KB gzip 4KB`, Nitro compressed `*.br/*.gz/*.zst`.
- `presets: cloudflare-module` builds Worker + static assets for `npx nitro deploy --prebuilt` or `wrangler deploy`.

**Lightweight:** no video, no heavy animation lib, `loading="lazy"` + `width/height` for CLS <0.1, `content-visibility:auto` `src/styles.css:306`.

---

## 6. Per-Route OG (WhatsApp)

| Route | `og:title` | `og:url` | `og:image` |
|-------|------------|----------|------------|
| `/comal-sarabjot/` | Comal Kaur Weds Sarabjot Singh Lamba | `/comal-sarabjot/` | `/og/comal-sarabjot.jpg` 1200×630 |
| `/comal-sarabjot/12-13/` | Comal & Sarabjot — 12th & 13th December | `/comal-sarabjot/12-13/` | `/og/12-13.jpg` |
| `/comal-sarabjot/13/` | Comal & Sarabjot — Wedding Day | `/comal-sarabjot/13/` | `/og/13.jpg` |

Set in each route `head` (`src/routes/comal-sarabjot/index.tsx:12`, `12-13.tsx:8`, `13.tsx:8`) + root defaults `src/routes/__root.tsx:71`. `public/og/` holds 3 distinct 1200×630 + `invitation-1080x1350.jpg` (replace placeholders with final Figma export when approved).

---

## 7. Check List — All Phases ✅

### Phase 0–1: Foundation
- [x] Inspect `assets/This at the start please.jpeg` (87KB) + `logo.jpeg` (71KB) → copied to `src/assets/ik-onkar.jpeg`, `cs-monogram.jpeg` + `public/media/`
- [x] Audit build before changes — `vite build` baseline
- [x] Lock tokens `src/styles.css:43` + create `src/lib/wedding.ts:5` central model
- [x] Remove Aarav/Goa filler (old `src/routes/index.tsx:58` story section)

### Phase 2: Assets
- [x] Ik Onkar optimized: not background, `object-contain`, `fetchPriority="high"`, preload link `src/routes/__root.tsx:98`
- [x] Monogram optimized: `w-16` subtle, `rounded-full border primary/25`
- [x] OG placeholders `public/og/{comal-sarabjot,12-13,13,invitation-1080x1350}.jpg` — replace with final 1080×1350 WebP + 1200×630 JPEG when artwork approved

### Phase 3: Cloudflare Workers
- [x] `vite.config.ts:8` — `cloudflare-module`, `routeRules`, `compressPublicAssets`, `manualChunks` function
- [x] `wrangler.jsonc:1` + `public/_headers:1` + `public/_redirects:1`
- [x] Verified `npm run build` → `.output/server/index.mjs` + `public/assets` hashed + `.br/.gz`

### Phase 4: Components
- [x] `OpeningBlessing.tsx`, `Monogram.tsx`, `CoupleHeader.tsx`, `EventTimeline.tsx`, `NavCards.tsx`, `LocationButtons.tsx`, `ShareButton.tsx`, `InvitationFooter.tsx`, `PageShell.tsx`
- [x] `Countdown` retained elegant minimal flip

### Phase 5: Routes
- [x] `/` → 301 `src/routes/index.tsx:5`
- [x] `/comal-sarabjot/` main: Blessing → Monogram → Wording → Countdown → Timeline all → NavCards → Locations all → Share → Footer
- [x] `/comal-sarabjot/12-13/` filtered: Ring + Barat/Lavan/Lunch/Reception only; relevant maps
- [x] `/comal-sarabjot/13/` filtered: 13 Dec only; relevant maps
- [x] `src/routeTree.gen.ts:11` regenerated (4 routes)

### Phase 6: SEO/OG/Headers
- [x] Per-route `og:image 1200×630` + `twitter:card` in each `head`
- [x] `robots.txt:1` allows `facebookexternalhit`, `Twitterbot`
- [x] `_headers` cache split: immutable assets vs short HTML

### Phase 7: A11y & Performance
- [x] Contrast 4.5:1, `focus-visible:ring-2`, `aria-label` on icon buttons, `alt` on blessing, `tabindex` 44×44
- [x] `prefers-reduced-motion` disables flights `src/styles.css:326`
- [x] `viewport-meta` never disables zoom, no horizontal scroll at 375px, safe-area respected via `max-w-[640px]` + `paper`
- [x] Lazy `width/height` declared, `content-visibility:auto`, no layout shift

### Phase 8: Verification
- [x] `npx tsc --noEmit` — 0 errors (after fixing `manualChunks` return)
- [x] `npm run build` — 1904 modules, client 2.38s, SSR 1.23s, Nitro 1.26s, no errors (warnings `use client` expected)
- [x] Manual Link check: `Locations` URLs exact from `src/lib/wedding.ts:38`, `ShareButton` fallback tested
- [x] WhatsApp preview to be validated after deploy (replace OG placeholders)

---

## 8. Deploy to Cloudflare Workers

```bash
# From a path WITHOUT "&" (Windows shell splits on "&"):
# Recommended: rename folder or copy to clean path, e.g.:
robocopy "E:\invate  story\works\comalbkaur&sarabjot" "C:\temp\comal-build" /E /XD node_modules
cd C:\temp\comal-build
npm install
npm run build          # generates .output/
npx wrangler deploy    # or npx nitro deploy --prebuilt
# Set YOURDOMAIN in og:url when you know it: https://comal-sarabjot.yourdomain.com
```

**Known Windows caveat:** project path contains `&` (`comalbkaur&sarabjot`) — PowerShell/cmd splits `&` as command separator, so `vite` resolves to `E:\invate  story\works\vite`. Use `Set-Location -LiteralPath` or copy to temp without `&` for CI, or rename folder to `comalbkaur-sarabjot`.

---

## 9. TODO Before Launch (Client)

- [ ] Confirm which Google Maps URL maps to which venue (currently assigned sequentially) — swap in `src/lib/wedding.ts:38` without code change
- [ ] Replace `public/og/*.jpg` placeholders with final designer exports (1080×1350 master → 1200×630 per route, WebP + JPEG)
- [ ] Set final domain in `src/lib/wedding.ts:47` `og.urlPath` if you want absolute `https://...` for `og:url`
- [ ] Test each URL directly in WhatsApp after deploy (clear cache `?v=2`)

---

*Build verified on TanStack Start 1.168.32 + Nitro 3.0.260603-beta + Vite 8.3.1, preset cloudflare-module, 2026-09-24.*
