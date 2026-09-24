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

// ── Events overview (exact per spec) ──
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
  },
  {
    id: "ring",
    name: "RING CEREMONY",
    dateLabel: "12 DECEMBER 2026",
    time: "8:30 PM onwards",
  },
  {
    id: "barat",
    name: "BARAT ARRIVAL",
    dateLabel: "13 DECEMBER 2026",
    dayLabel: "SUNDAY",
    time: "10:30 AM",
  },
  {
    id: "lavan",
    name: "LAVAN",
    dateLabel: "13 DECEMBER 2026",
    time: "Gurudwara Guru Nanak Darbar\nGurunankpura, Nagpur",
    venue: "Gurudwara Guru Nanak Darbar, Gurunankpura, Nagpur",
  },
  {
    id: "lunch",
    name: "FOLLOWED BY LUNCH",
    dateLabel: "13 DECEMBER 2026",
    time: "ESSENTIA",
    venue: "ESSENTIA",
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
  essentia: "ESSENTIA — Lunch Venue",
  reception: "Lamba Celebrations — Reception",
};

export const contact = {
  closingLine1: "WITH LOVE",
  closingFamily: "Bhangu and Palakkel Family",
  eventManagerLabel: "Event Manager",
  eventManagerPhone: "+91 7385640439",
  eventManagerHref: "tel:+917385640439",
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
    title: "Comal & Sarabjot — 12th & 13th December",
    description:
      "Ring Ceremony on 12th December and Wedding Day on 13th December — Comal Kaur & Sarabjot Singh Lamba.",
    urlPath: "/comal-sarabjot/12-13/",
    url: `${DOMAIN}/comal-sarabjot/12-13/`,
    image: "/og/12-13.jpg",
    imageAbsolute: `${DOMAIN}/og/12-13.jpg`,
  },
  r13: {
    title: "Comal & Sarabjot — Wedding Day",
    description:
      "Wedding Day — 13 December 2026 — Comal Kaur & Sarabjot Singh Lamba. Barat, Lavan at Gurudwara Guru Nanak Darbar, Lunch at Essentia & Reception.",
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
