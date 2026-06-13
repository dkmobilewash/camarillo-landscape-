# Camarillo Landscape Solutions

A multi-page marketing website for **Camarillo Landscape Solutions**, a premium
landscaping and outdoor-living company serving Camarillo and the surrounding
communities in Ventura County, California.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 6**
- **React Router v7** (lazy-loaded routes with `Suspense` + a gold top-bar loader)
- **Tailwind CSS 3** + PostCSS + Autoprefixer
- **Framer Motion** (FAQ accordion animations)
- Google Fonts: **Oswald**, **Source Serif 4**, **Lato**

> The contact form is intentionally backend-free: on submit it validates inline
> and shows a success message (no database / Bolt / Supabase integration).

## Getting Started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
```

## Design System

All brand tokens are defined as CSS variables in `src/index.css` and surfaced to
Tailwind in `tailwind.config.js`:

| Token | Value | Use |
| --- | --- | --- |
| `--color-navy` | `#1B2B3A` | Primary background, nav |
| `--color-gold` | `#B8863B` | Accent, buttons, links |
| `--color-gold-lt` | `#D4A45A` | Gold hover |
| `--color-cream` | `#F5F0E8` | Alternate sections |
| `--color-charcoal` | `#2C2C2C` | Body text |
| `--color-mid` | `#5A5A5A` | Secondary text |

A recurring **gold rule eyebrow** (`SectionEyebrow`) sits above every major
section heading to tie the brand together.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/landscaping-services` | Services overview |
| `/<service-slug>` | One of 8 individual service pages |
| `/about-camarillo-landscape-solutions` | About |
| `/gallery` | Gallery |
| `/free-estimate-camarillo` | Contact / free estimate |
| `/landscaping-blog` | Blog index |
| `/landscaping-blog/:slug` | Blog post |
| `/service-areas` | Service areas index |
| `/service-areas/<area-slug>` | One of 10 service-area pages |
| `*` | Redirects to Home |

## Project Structure

```
src/
  components/   Reusable UI (Header, Footer, PageMeta, PageHero, ...)
  data/         Content: business, services, serviceAreas, blogPosts
  hooks/        useFadeUp scroll-reveal hook
  lib/          routes helper
  pages/        One component per route
```

## Content

All copy is tailored to Camarillo: HOA architectural review, Calleguas
Municipal Water District conservation, Spanish-style architecture, and
neighborhood-specific notes for each of the 10 service areas.

## Deployment

The app is a client-rendered SPA. `vercel.json` (Vercel) and
`public/_redirects` (Netlify) rewrite all paths to `index.html` so deep links
resolve correctly. Replace the favicon and `og:image` URLs in `index.html`, and
the canonical/base URL and geo coordinates in `src/data/business.ts`, with real
brand assets before going live.
