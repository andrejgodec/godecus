# Plan: Modernize CV Website

**Goal:** Upgrade from Angular 12 (2021) to a modern, slick CV site ready for GitHub Pages at godec.us.

**Interpretation:** Keep Angular (you're an Angular dev — the stack choice signals expertise). Upgrade to Angular 19 with standalone components, replace Bootstrap/FA4 with modern tooling, and redesign the visual layer to be sleek and contemporary.

---

## Stack Decisions

| Concern | Old | New | Reason |
|---|---|---|---|
| Angular | 12.1.3 | **19.x** | Standalone, signals, `@if`/`@for`, inject() |
| Styling | Bootstrap 4 Darkly (double-loaded) | **Tailwind CSS 4** | Utility-first, zero runtime, no dead CSS |
| Icons | Font Awesome 4.7 (double-loaded) | **Lucide Angular** | Tree-shakeable, modern SVG icons |
| Linting | TSLint (dead) | **ESLint + @angular-eslint** | Standard |
| E2E | Protractor (dead) | Remove (no e2e needed for a CV) | Keep Karma unit tests |
| CI runner | ubuntu-20.04 + Node 14 | **ubuntu-latest + Node 20** | Both old are EOL |
| GH Deploy | `peaceiris/actions-gh-pages@v3` | **`actions/deploy-pages`** | Official GitHub action |

---

## Visual Direction

Dark theme with a clean, professional aesthetic — no gimmicks, just typography and spacing.

- **Background:** Near-black (`#0f0f0f`) with subtle surface elevation using transparent cards
- **Accent:** Electric blue-green (`#00d4aa`) — keeps the Darkly green feel but more vivid
- **Typography:** `Inter` for body, `Space Grotesk` for headings (both via Google Fonts)
- **Cards:** Subtle border + backdrop-blur glassmorphism panels for each section
- **Bubble animation:** Keep as a pure CSS/SVG layered background on the About page
- **Print:** Keep existing print media query — CV must print cleanly to PDF

---

## Architecture

### Route/Component Map (unchanged names, new internals)

```
/about    → AboutComponent (standalone)   — hero section with photo + bubble animation
/cv       → CvComponent (standalone)      — printable CV, all data from a shared data service
/edu      → EducationComponent (standalone) — education timeline (data from service)
/work     → WorkComponent (standalone)    — work experience cards (data from service)
```

### Shared Data Service

Create `src/app/core/cv-data.service.ts` — single source of truth for all CV content. All components read from this; no hardcoded strings in templates.

```typescript
// src/app/core/cv-data.service.ts
export interface WorkEntry { title: string; company: string; period: string; description: string; tags: string[] }
export interface EducationEntry { degree: string; institution: string; period: string; field: string; note?: string }

@Injectable({ providedIn: 'root' })
export class CvDataService {
  readonly profile = signal({ name: 'Andrej Godec', title: 'Application Consultant', location: 'Izola, Slovenia', email: '...', linkedin: '...', github: '...' });
  readonly summary = signal('...');
  readonly work = signal<WorkEntry[]>([...]);
  readonly education = signal<EducationEntry[]>([...]);
  readonly skills = signal<Record<string, string[]>>({...});
  readonly certifications = signal<...[]>([...]);
  readonly achievements = signal<...[]>([...]);
  readonly publications = signal<...[]>([...]);
}
```

---

## Implementation Steps

### Phase 1 — Fresh Angular 19 project scaffold

1. `ng new godecus-ng19 --standalone --routing --style=scss --skip-tests=false`
2. Copy `src/assets/profile.jpg` and `src/assets/icons/` into new project
3. Copy `src/manifest.json` (update for PWA)
4. Install dependencies:
   ```
   npm install lucide-angular tailwindcss @tailwindcss/typography
   npm install -D @angular-eslint/schematics
   ```
5. Configure Tailwind in `angular.json` styles array and create `tailwind.config.js`
6. Set up custom design tokens in `tailwind.config.js`:
   ```js
   theme: { extend: { colors: { accent: '#00d4aa', surface: '#1a1a1a', base: '#0f0f0f' } } }
   ```

### Phase 2 — Core infrastructure

7. Create `src/app/core/cv-data.service.ts` with all CV content (migrate from existing `cv.component.ts` + hardcoded HTML)
8. Create `src/app/app.routes.ts` with lazy-loaded routes:
   ```typescript
   export const routes: Routes = [
     { path: '', redirectTo: 'about', pathMatch: 'full' },
     { path: 'about', loadComponent: () => import('./about/about.component') },
     { path: 'cv', loadComponent: () => import('./cv/cv.component') },
     { path: 'edu', loadComponent: () => import('./education/education.component') },
     { path: 'work', loadComponent: () => import('./work/work.component') },
     { path: '**', redirectTo: 'about' },
   ];
   ```
9. Create `src/app/app.component.ts` (standalone) — navbar + router-outlet + footer
   - Navbar: `<a routerLink>` items, active class via `routerLinkActive`
   - Mobile hamburger menu (CSS-only toggle, no JS library)
   - Footer: name + year + GitHub link

### Phase 3 — Navbar & layout (`app.component`)

**File:** `src/app/app.component.html`

```html
<nav class="fixed top-0 w-full z-50 bg-base/90 backdrop-blur border-b border-white/10">
  <div class="max-w-5xl mx-auto px-4 flex items-center justify-between h-14">
    <a routerLink="/about" class="font-display text-accent font-semibold tracking-tight">AG</a>
    <div class="flex gap-6 text-sm">
      <a routerLink="/about" routerLinkActive="text-accent" class="text-gray-400 hover:text-white transition-colors">About</a>
      <a routerLink="/cv" routerLinkActive="text-accent" class="text-gray-400 hover:text-white transition-colors">CV</a>
      <a routerLink="/edu" routerLinkActive="text-accent" class="text-gray-400 hover:text-white transition-colors">Education</a>
      <a routerLink="/work" routerLinkActive="text-accent" class="text-gray-400 hover:text-white transition-colors">Work</a>
    </div>
  </div>
</nav>
<main class="pt-14 min-h-screen bg-base text-white">
  <router-outlet />
</main>
```

### Phase 4 — About component

**File:** `src/app/about/about.component.ts` (standalone)

Sections:
- Full-viewport hero: profile photo (circular, with glow ring in accent color) + name + title + location
- Animated SVG bubbles as absolutely positioned background layer (keep the existing keyframes, convert to Tailwind `@layer` or a dedicated SCSS file)
- CTA buttons: Download CV (links to `/cv` with `window.print()`), GitHub, LinkedIn
- Quick stats row: years experience, companies, technologies

**Profile image path:** `assets/profile.jpg` (local, not raw GitHub URL)

### Phase 5 — CV component (printable)

**File:** `src/app/cv/cv.component.ts` (standalone)

- Inject `CvDataService` via `inject()`
- Use `@for` loops for all sections
- Print button calls `window.print()`
- Print media query: hide navbar/sidebar, show full-width single column, black-on-white
- Layout: two-column on desktop (left sidebar: contact/skills/certs; right main: summary/experience/education)

```html
@for (entry of cvData.work(); track entry.company) {
  <div class="mb-6">
    <div class="flex justify-between items-start">
      <h3 class="font-semibold text-white">{{ entry.title }}</h3>
      <span class="text-xs text-gray-400">{{ entry.period }}</span>
    </div>
    <p class="text-accent text-sm mb-2">{{ entry.company }}</p>
    <p class="text-gray-300 text-sm">{{ entry.description }}</p>
    <div class="flex flex-wrap gap-1 mt-2">
      @for (tag of entry.tags; track tag) {
        <span class="px-2 py-0.5 text-xs rounded-full bg-accent/10 text-accent border border-accent/20">{{ tag }}</span>
      }
    </div>
  </div>
}
```

### Phase 6 — Education component

**File:** `src/app/education/education.component.ts` (standalone)

- Timeline layout: vertical line on left, entries staggered right
- Each entry: degree badge (Master/Bachelor/Exchange), institution, field, period, location flag emoji
- Data from `CvDataService`

### Phase 7 — Work component

**File:** `src/app/work/work.component.ts` (standalone)

- Card grid layout (1 col mobile, 2 col desktop)
- Each card: company name, role, period, description, tech tags
- Data from `CvDataService`

### Phase 8 — Global styles

**File:** `src/styles.scss`

```scss
@import 'tailwindcss';

@layer base {
  body { @apply bg-[#0f0f0f] text-white font-sans; }
  h1, h2, h3 { @apply font-display; }
}

@layer utilities {
  .glass { @apply bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl; }
}

/* Bubble animation keyframes (keep existing, adapt colors to accent) */
@keyframes up { ... }
@keyframes wobble { ... }

/* Print styles */
@media print {
  nav, footer, .no-print { display: none !important; }
  body { background: white !important; color: black !important; }
  .print-full { width: 100% !important; }
}
```

**`src/index.html`:** Add only:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
```
No Bootstrap CDN. No Font Awesome CDN. No double-loading.

### Phase 9 — CI/CD update

**File:** `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [master]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npx ng build --configuration production --base-href "https://godec.us/"
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist/godecus/browser   # Angular 19 output path

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Also add a `404.html` redirect trick for SPA routing on GitHub Pages:
- Copy `dist/index.html` to `dist/404.html` as a post-build step

### Phase 10 — Migrate content into the new project

10. Move all CV data from old `cv.component.ts` into `CvDataService`
11. Migrate hardcoded HTML from `education.component.html` and `work.component.html` into data arrays in `CvDataService`
12. Delete old project files, replace `src/` with new implementation

---

## File Manifest

Files to create/modify (all paths relative to project root):

| File | Action |
|---|---|
| `src/app/app.component.ts` | Rewrite (standalone, no NgModule) |
| `src/app/app.component.html` | Rewrite (new navbar + layout) |
| `src/app/app.component.scss` | Rewrite (minimal, Tailwind handles layout) |
| `src/app/app.routes.ts` | Create (replaces routing in app.module.ts) |
| `src/app/app.config.ts` | Create (provideRouter, provideHttpClient, SW) |
| `src/app/core/cv-data.service.ts` | Create |
| `src/app/about/about.component.ts` | Rewrite |
| `src/app/about/about.component.html` | Rewrite |
| `src/app/about/about.component.scss` | Rewrite (keep bubble keyframes) |
| `src/app/cv/cv.component.ts` | Rewrite |
| `src/app/cv/cv.component.html` | Rewrite |
| `src/app/cv/cv.component.scss` | Rewrite |
| `src/app/education/education.component.ts` | Rewrite |
| `src/app/education/education.component.html` | Rewrite |
| `src/app/education/education.component.scss` | Rewrite |
| `src/app/work/work.component.ts` | Rewrite |
| `src/app/work/work.component.html` | Rewrite |
| `src/app/work/work.component.scss` | Rewrite |
| `src/app/app.module.ts` | Delete (replaced by standalone config) |
| `src/styles.scss` | Rewrite |
| `src/index.html` | Rewrite (remove CDN links) |
| `tailwind.config.js` | Create |
| `.github/workflows/deploy.yml` | Rewrite |
| `package.json` | Update (Angular 19, Tailwind, Lucide, remove old deps) |
| `angular.json` | Update (remove vendored CSS from styles array) |
| `src/dist/css/darkly.bootstrap.min.css` | Delete |

---

## What's Out of Scope

- Upgrading testing setup (keep Karma/Jasmine as-is, just get them green)
- Adding a blog or portfolio projects section (not in original)
- Animations library (Framer Motion etc.) — CSS transitions are sufficient
- Dark/light mode toggle — dark only, consistent with current brand

---

## Risk Notes

- Angular 12 → 19 is not an incremental upgrade; it's a rewrite of the scaffolding. The component logic and templates carry over; the module system does not.
- Tailwind 4 uses a new CSS-first config API; `@config` in CSS replaces `tailwind.config.js` for some settings. Check docs before configuring.
- GitHub Pages SPA routing: the `404.html` trick is required because GH Pages serves 404 for direct navigation to Angular routes. The `index.html` copy handles this.
- The `assets/profile.jpg` must be in the Angular `assets` array in `angular.json` to be copied to `dist/`.
