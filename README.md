# comalbkaur-sarabjot

Premium digital Sikh/Punjabi wedding invitation — **Comal Kaur Weds Sarabjot Singh Lamba**

One domain, three path-based invitations with shared design system:

- `/` → redirect to `/comal-sarabjot/`
- `/comal-sarabjot/` — Main invitation (Sangeet 11 Dec, Ring 12 Dec, Wedding Day 13 Dec)
- `/comal-sarabjot/12-13/` — Ring Ceremony + Wedding Day
- `/comal-sarabjot/13/` — Wedding Day only

Built with **TanStack Start**, **React 19**, **Tailwind CSS v4**, optimized for **Cloudflare Workers**.

## Features
- Sikh opening blessing (Ik Onkar) as standalone respectful artwork
- Gold CS monogram (cropped best from supplied sheet)
- Countdown to 13 Dec 2026 (DAYS/HRS/MIN/SEC)
- Venue maps via central `locations` config
- Floating music player (`public/media/music.mp3`)
- Per-route Open Graph `1200×630` + portrait `1080×1350` for WhatsApp

## Development

```sh
npm install
npm run dev # http://localhost:5173
```

> Note: Avoid `&` in folder path on Windows (breaks `vite`). Use clean path like `comalbkaur-sarabjot` for local dev.

## Build (Cloudflare Workers)

```sh
npm run build # → .output/server/index.mjs + .output/public
npx wrangler deploy
# or: npx nitro deploy --prebuilt
```

## Deploy
- `wrangler.jsonc` → `comal-sarabjot-invitation` on Cloudflare Workers
- `public/_headers` and `public/_redirects` handle edge caching + `301` for `/`

## Assets
- `assets/logo.jpeg` — 4 CS options (top-left gold chosen)
- `assets/This at the start please.jpeg` — opening blessing
- `assets/music.mp3` — wedding melody
- `public/og/*` — separate OG images per route
# comalbkaur-sarabjot 
