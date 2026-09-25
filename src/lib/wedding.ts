/**
 * Central wedding data — single source of truth for all three routes.
 * Keep text exact per client; do NOT invent missing addresses/details.
 */

export const couple = {
  bride: "Comal Kaur",
  groom: "Sarabjot Singh Lamba",
  brideLine1: "COMAL KAUR",
  groomLine1: "SARABJOT SINGH LAMBA",
  tagline: "WEDS",
  weddingISO: "2026-12-13T00:00:00+05:30",
  dateLabel: "13 December 2026",
} as const;

export const family = {
  grandparents:
    "Sardarni Surjeet Kaur and Sardar Parduman Singh",
  grandparentsInvitation:
    "Sardarni Surjeet Kaur and Sardar Parduman Singh\ninvite you to celebrate the wedding of their granddaughter",
  brideParents: "Daughter of Beena and Sukhvinder Singh",
} as const;

// ── Events overview (exact per customer spec) ──
export type WeddingEvent = {
  id: string;
  name: string;
  dateLabel: string; // display e.g. "11 DECEMBER 2026"
  dayLabel?: string; // e.g. "SUNDAY"
  time: string;
  venue?: string;
  note?: string;
};

export const events: WeddingEvent[] = [
  {
    id: "sangeet",
    name: "SANGEET",
    dateLabel: "11 DECEMBER 2026",
    time: "8:30 PM onwards",
    venue: "Essentia Luxury Hotel & Convention, Nagpur",
  },
  {
    id: "engagement",
    name: "ENGAGEMENT CEREMONY",
    dateLabel: "12 DECEMBER 2026",
    time: "8:30 PM onwards",
    venue: "Essentia Luxury Hotel & Convention, Nagpur",
  },
  {
    id: "anand-karaj",
    name: "ANAND KARAJ",
    dateLabel: "13 DECEMBER 2026",
    dayLabel: "SUNDAY",
    time: "11:00 AM – 12:00 PM",
    venue: "Gurudwara Guru Nanak Darbar\nGurunankpura, Nagpur",
  },
  {
    id: "lunch",
    name: "LUNCH",
    dateLabel: "13 DECEMBER 2026",
    time: "1:30 PM",
    venue: "Essentia Luxury Hotel & Convention, Nagpur",
  },
  {
    id: "reception",
    name: "RECEPTION",
    dateLabel: "13 DECEMBER 2026",
    time: "9:00 PM",
    venue: "Lamba Celebrations",
  },
];

// ── Central Google Maps config (easy to reassign) ──
// IMPORTANT: Do not guess mapping. These three URLs are the ONLY client-supplied maps.
// Reassign by swapping values — no page design change required.
export const locations = {
  gurudwara: "https://maps.app.goo.gl/wDUKMSE3R8Y7LN4a8?g_st=ipc",
  essentia: "https://maps.app.goo.gl/ShunBa8LKGRKAGWw8?g_st=ipc",
  reception: "https://maps.app.goo.gl/R4ipCr58Nheh5jNt9?g_st=ipc",
} as const;

export type LocationKey = keyof typeof locations;

export const locationLabels: Record<LocationKey, string> = {
  gurudwara: "Gurudwara Guru Nanak Darbar",
  essentia: "Essentia Luxury Hotel & Convention, Nagpur",
  reception: "Lamba Celebrations — Reception",
};

export const contact = {
  closingLine1: "WITH LOVE",
  closingFamily: "Bhangu and Palakkel Family",
} as const;

// Per-route OG (own image per route)
// Use absolute URLs for WhatsApp crawler — invitingyou.top is the live custom domain
// Also fallback to workers.dev if custom domain not set. Update DOMAIN if you change hosting.
const DOMAIN = "https://comalbkaur-sarabjot.invitingyou.top";
export const og = {
  main: {
    title: "Comal Kaur Weds Sarabjot Singh Lamba",
    description:
      "Join us in celebrating the wedding of Comal Kaur and Sarabjot Singh Lamba.",
    urlPath: "/comal-sarabjot/",
    url: `${DOMAIN}/comal-sarabjot/`,
    image: "/og/comal-sarabjot.jpg",
    imageAbsolute: `${DOMAIN}/og/comal-sarabjot.jpg`,
  },
  r12_13: {
    title: "Comal & Sarabjot — Events",
    description:
      "Engagement Ceremony on 12th December and Wedding Day on 13th December — Comal Kaur & Sarabjot Singh Lamba.",
    urlPath: "/comal-sarabjot/12-13/",
    url: `${DOMAIN}/comal-sarabjot/12-13/`,
    image: "/og/12-13.jpg",
    imageAbsolute: `${DOMAIN}/og/12-13.jpg`,
  },
  r13: {
    title: "Comal & Sarabjot — Reception",
    description:
      "Reception — 13 December 2026 — Comal Kaur & Sarabjot Singh Lamba. Anand Karaj at Gurudwara Guru Nanak Darbar, Lunch at Essentia & Reception at Lamba Celebrations.",
    urlPath: "/comal-sarabjot/13/",
    url: `${DOMAIN}/comal-sarabjot/13/`,
    image: "/og/13.jpg",
    imageAbsolute: `${DOMAIN}/og/13.jpg`,
  },
} as const;

// Share payload (Web Share API)
export const sharePayload = {
  title: "Comal Kaur Weds Sarabjot Singh Lamba",
  text: "You are invited to celebrate the wedding of Comal Kaur and Sarabjot Singh Lamba.",
} as const;
