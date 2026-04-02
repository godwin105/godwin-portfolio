# Godwin Tairo — Portfolio Website

My personal portfolio - Godwin Innocent Tairo, Data Analyst based in Dar es Salaam, Tanzania.

Built with **React + Vite** and CSS Modules. Dark, minimal aesthetic.

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

---

## Project Structure

```
src/
  components/
    Nav.jsx / Nav.module.css          ← Fixed navigation bar
    Hero.jsx / Hero.module.css        ← Landing section
    About.jsx / About.module.css      ← Bio, info, education
    Skills.jsx / Skills.module.css    ← Skill chips + proficiency bars
    Experience.jsx / Experience.module.css  ← Work timeline
    Projects.jsx / Projects.module.css      ← Project cards
    Contact.jsx / Contact.module.css        ← Contact links + cards
    Footer.jsx / Footer.module.css          ← Footer
  App.jsx       ← Assembles all sections
  main.jsx      ← React entry point
  index.css     ← Global styles & design tokens
```

---

## Customisation Checklist

- [ ] **Projects** — Replace the sample projects in `Projects.jsx` with your real ones. Add GitHub/live demo links.
- [ ] **LinkedIn & GitHub** — Update the URLs in `Contact.jsx`.
- [ ] **Proficiency bars** — Adjust the `pct` values in `Skills.jsx` to match your honest self-assessment.
- [ ] **Photo** — Add a profile photo to the About section if desired (add an `<img>` in `About.jsx`).
- [ ] **Meta description** — Update `index.html` with your real description.

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

## Design Tokens (CSS Variables in `index.css`)

| Token | Value | Usage |
|-------|-------|-------|
| `--bg` | `#04131a` | Page background |
| `--surface` | `#071e29` | Section backgrounds |
| `--teal` | `#0dd4b0` | Primary accent |
| `--gold` | `#e8b84b` | Secondary accent |
| `--text` | `#e8f0f0` | Primary text |
| `--muted` | `rgba(...)` | Subdued text |

To change the colour scheme, edit these variables in `src/index.css`.
