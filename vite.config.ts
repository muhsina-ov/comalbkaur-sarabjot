import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tanstackStart({
      server: { entry: "server" },
      // Prerender for Cloudflare Workers edge caching — invitation content is static
      prerender: { crawlLinks: true },
    }),
    viteReact(),
    tailwindcss(),
    nitro({
      // Cloudflare Workers preset — produces .output/server/index.mjs worker + .output/public assets
      // For Cloudflare Pages use "cloudflare-pages" preset. For Workers (this project) use "cloudflare-module".
      preset: "cloudflare-module",
      // Aggressive edge caching for immutable assets (hashed by Vite) — crucial for Indian mobile networks
      routeRules: {
        "/og/**": {
          headers: { "cache-control": "public, max-age=31536000, immutable" },
        },
        "/media/**": {
          headers: { "cache-control": "public, max-age=31536000, immutable" },
        },
        "/assets/**": {
          headers: { "cache-control": "public, max-age=31536000, immutable" },
        },
        // invitation pages: short cache + stale-while-revalidate via Cloudflare cache header
        "/comal-sarabjot/**": {
          headers: { "cache-control": "public, max-age=300, s-maxage=600" },
        },
      },
      // Minify — Nitro uses unjs/nitro presets that already minify for edge
      minify: true,
      compressPublicAssets: true,
    }),
  ],
  resolve: {
    tsconfigPaths: true,
  },
});

