# godec.us — Personal CV & Portfolio

Personal CV and portfolio website for **Andrej Godec**, Application Consultant at IBM.

Live at **[godec.us](https://godec.us)**

---

## Stack

| | |
|---|---|
| Framework | React 19 + TypeScript (strict) |
| Build | Vite 6 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Hosting | GitHub Pages (custom domain) |
| CI/CD | GitHub Actions → `actions/deploy-pages` |

---

## Development

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview production build locally
```

---

## Project Structure

```
src/
├── components/
│   ├── Nav.tsx           # Sticky navbar with active section tracking
│   ├── Hero.tsx          # Full-viewport hero with animated bubbles
│   ├── Experience.tsx    # Work history timeline
│   ├── Education.tsx     # Education cards
│   ├── Skills.tsx        # Skills, languages, achievements, publications
│   ├── Contact.tsx       # Contact section
│   ├── Footer.tsx        # Footer
│   └── EuropassPrint.tsx # Europass CV layout (print only)
├── data/
│   └── cv.ts             # All CV content — edit this to update the site
├── App.tsx
├── main.tsx
└── index.css             # Design tokens, animations, print styles
public/
├── assets/
│   ├── profile.jpg
│   └── icons/
├── manifest.json
└── 404.html              # SPA routing fallback for GitHub Pages
```

---

## Updating Content

All CV data lives in **`src/data/cv.ts`** — one file, no CMS needed.

```ts
// Change personal info
export const profile = { name, title, location, email, linkedin, github }

// Add a new job
export const work = [{ title, company, period, description, tags }, ...]

// Update skills
export const skills = { 'Category': ['skill1', 'skill2'], ... }

// Update languages (CEFR levels: A1 A2 B1 B2 C1 C2)
export const languages = [{ language, listening, reading, spoken, written, note }, ...]
```

---

## Print / PDF Export

Click **Download CV** on the site — or `Ctrl+P` / `Cmd+P` in the browser.

The print stylesheet hides the website UI and renders a **Europass-format CV** with:
- EU header bar and CEFR language table
- Work experience, education, and skills sections
- Clean black-on-white layout suitable for PDF export

---

## Deployment

Pushing to `master` triggers the GitHub Actions workflow which builds and deploys to GitHub Pages automatically. The site is served at `godec.us` via a custom CNAME.

```bash
git push origin master   # → CI builds → deploys to godec.us
```
