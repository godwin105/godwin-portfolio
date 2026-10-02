# Godwin Tairo — Portfolio Website

My personal portfolio - Godwin Innocent Tairo, Data Analyst based in Dar es Salaam, Tanzania.

Built with **React + Vite** and CSS Modules. Editorial "data journal" design with light and dark themes.

---

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run locally
```bash
npm run dev
```
Open http://localhost:5173 in your browser.

### 3. Build for production
```bash
npm run build
```
The build also **pre-renders** the page (`src/entry-server.jsx` → `scripts/prerender.mjs`), so `dist/index.html` contains the full content before JavaScript loads. Good for speed, SEO, link previews and no-JS visitors. `npm run dev` skips this.

### Features worth knowing
- **Download CV**: the hero button prints the page. A print stylesheet turns it into a clean light CV, so choose *Save as PDF*. Hide anything from the CV with `data-print="hide"`; show print-only content with `className="print-only"`.
- **Command palette**: Ctrl/⌘ + K (or the search button in the nav) jumps to sections, projects and links. Commands live in `src/components/CommandPalette.jsx`.
- **Themes**: light and dark, remembered per visitor. Tokens for both are in `src/index.css`.
- **Share card**: `public/og-image.jpg` (1200×630) is what LinkedIn, X and WhatsApp show. Regenerate it if your role or photo changes.

---

## Project Structure

```
src/
  components/
    Nav.jsx          ← Floating pill nav: active section, scroll progress, theme toggle, mobile menu
    Hero.jsx         ← Name, portrait and bento tiles (career chart, stats, live Dar es Salaam clock)
    Marquee.jsx      ← Scrolling band of tools
    About.jsx        ← Scroll-lit statement, what I do, at a glance, education, interests
    Experience.jsx   ← Expandable timeline (current role opens by default)
    Projects.jsx     ← Filterable project cards
    ProjectArt.jsx   ← Generated cover illustration for each project
    Skills.jsx       ← Skill groups as rows
    Contact.jsx      ← Social links + Formspree contact form (with spam honeypot)
    Footer.jsx       ← Wordmark, socials, back to top
    CommandPalette.jsx ← Ctrl/⌘+K quick navigation
    SectionHead.jsx  ← Shared numbered section header
    icons.jsx        ← Shared SVG icons and social links
  data.js       ← All content: experience, skills, projects, education, interests, marquee tools
  hooks.js      ← Scroll reveal, active section, count-up, theme, clock, scroll progress
  App.jsx       ← Assembles all sections
  entry-server.jsx ← Build-time pre-render entry
  index.css     ← Design tokens (both themes), global styles, buttons, chips
public/
  robots.txt, sitemap.xml, favicon, profile photo
```

Add `className="reveal"` to any element to fade it in on scroll (optional `style={{ '--delay': '100ms' }}`).

---

## Updating content

- **New job or internship** → add it to `experiences` in `src/data.js` with `type: 'job'` or `'internship'`. Use `end: null` for a current role (its months count up automatically). The hero chart, stats and "Now" badge update themselves.
- **New skill** → add it to `skillGroups` in `src/data.js`.
- **New project** → add it to `projects` in `src/data.js` with `categories` (`data`, `web3`, `web`) and an `art` style (`bars`, `chain`, `hash`, `radar`, `scatter`, `window`).
- **Social links** → `socials` in `src/components/icons.jsx`.
- **Domain** → if the site moves from godwintairo.vercel.app, update the URLs in `index.html`, `public/robots.txt` and `public/sitemap.xml`.

---

## Deployment (Free — Vercel)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Or push to GitHub and connect repo at vercel.com
```

Every push to `main` will auto-deploy.

---

## Design tokens (`src/index.css`)

Dark values live on `:root`, light values on `:root[data-theme='light']`. The main ones:

| Token | Dark | Light | Usage |
|-------|------|-------|-------|
| `--bg` | `#0a0b0d` | `#f4f3ee` | Page background |
| `--card` | `#121418` | `#ffffff` | Cards and tiles |
| `--text` | `#f2f2ee` | `#0e1012` | Primary text |
| `--muted` | `#a3a7ae` | `#50555d` | Secondary text |
| `--accent` | `#3ee6b0` | `#067a5a` | Mint accent |
| `--amber` | `#f5b54a` | `#9a5b00` | Secondary accent |

Fonts: Geist (text), Instrument Serif italic (accents), Geist Mono (labels), all from Google Fonts.
