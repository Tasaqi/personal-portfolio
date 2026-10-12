# Portfolio V2 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild the single-page portfolio in a light, logo-blue, proof-first design with the same content.

**Architecture:** Same React + Vite + Tailwind app. `src/constants/index.js` stays the content source; every page section becomes one focused component that reads constants directly. Theme lives in Tailwind tokens; a shared `Section` wrapper gives every section the same tag/title/fade-up treatment.

**Tech Stack:** React 18, Vite 3, Tailwind 3.4, framer-motion 7.10, react-icons 5.

**Spec:** `docs/superpowers/specs/2026-10-12-portfolio-redesign-design.md`

## Global Constraints

- No new npm dependencies; no dependency upgrades.
- Content text comes from `src/constants/index.js` unchanged. Only new copy allowed: "Open to consulting & freelance work", "Let's work together", "Have a project in mind?", "Backend, AI integration or data work. Let's talk."
- Light theme only. Accent = `brand` scale (`600` `#1A6FF0`, `700` `#1559C9`, `100` `#D9E8FF`, `50` `#EEF5FF`, `200` `#B8D4FF`, `500` `#1E88FF`). Neutrals: canvas `#FAFAF7`, surface `#FFFFFF`, ink `#111111`, body `#1C1917`, muted `#57534E`, line `#E7E5DF`, chip `#F1F0EB`.
- Fonts: Plus Jakarta Sans (headings) + Inter (body) from Google Fonts.
- Cards: 14px radius, 1px `line` border, white. Buttons: 10px radius.
- Logo mark always on a dark `ink` tile (its "A" is white).
- Animations skipped when the visitor prefers reduced motion.
- Site must work under base path `/personal-portfolio/` (GitHub Pages). Use `import.meta.env.BASE_URL` or imports for asset URLs, never hard-coded `/file`.
- Mobile: 16px side gutter (`px-4`), no horizontal scroll at 390px.

## Review Focus

1. **390px phone width** — long chips, the navbar and stat cards must not cause horizontal scroll. Check in Tasks 1 and 4 (`scrollWidth === innerWidth`).
2. **Anchor navigation under the sticky header** — clicking a nav link must land with the section heading visible, not hidden under the header. Check in Task 1 (`scroll-padding-top`) and Task 4 for every section.
3. **Mobile menu** — tapping a link must close the menu and scroll to the section. Check in Task 1.
4. **Optional fields missing** — project without `link`/`github`, consultancy entry without `project`, education `content2` blank or whitespace: no empty buttons, bullets or gaps. Checks in Tasks 2, 3 and 4.
5. **Reduced motion** — with reduced motion emulated, every section is visible immediately (no content stuck at opacity 0). Check in Task 4.

## Verification method (applies to every task)

There is no test framework in this repo and the spec says none is added. Each task is verified by:

1. `npx vite build --outDir /tmp/v2-dist` from the worktree root — must exit 0 with no errors (the existing "chunks larger than 500 KiB" warning is fine).
2. The dev server (`npx vite --port 5174 --strictPort`, started once in Task 1 and left running) plus the Playwright MCP browser: `browser_navigate` to `http://localhost:5174/`, `browser_evaluate` the snippet given in the task, compare to the expected result, then `browser_take_screenshot` and look at it.

Work in the worktree `scratchpad/redesign` on branch `v2`. `node_modules` there is a symlink to the main checkout's `node_modules` (created in Task 1).

## File Structure

| File | Responsibility |
|---|---|
| `tailwind.config.cjs` | theme tokens (colors, fonts, radii, shadows) |
| `index.html` | fonts, favicon, meta description, Open Graph tags |
| `src/index.css` | Tailwind layers, base typography, Resume button animation |
| `src/constants/index.js` | content (+ new `hero`, `contactCta`, `highlights`, labelled `socialMedia`, new `navLinks`) |
| `src/assets/index.js` | asset exports (+ `logoMark`) |
| `src/App.jsx` | page composition only |
| `src/components/index.js` | component exports |
| `src/components/Section.jsx` | shared section wrapper: tag, title, fade-up |
| `src/components/Chip.jsx` | shared pill with optional icon |
| `src/components/ResumeButton.jsx` | animated Resume link (restyled) |
| `src/components/Navbar.jsx` | sticky nav, mobile menu |
| `src/components/Hero.jsx` | intro, CTAs, photo |
| `src/components/Highlights.jsx` | 4 stat cards |
| `src/components/CaseStudy.jsx` | TicketDeck + Claude Code skills + scope cards |
| `src/components/Projects.jsx` | project grid with show-all toggle |
| `src/components/Experience.jsx` | role cards with read-more |
| `src/components/Consultancy.jsx` | client cards grid |
| `src/components/Skills.jsx` | skill groups + Education |
| `src/components/Education.jsx` | education card(s) |
| `src/components/Contact.jsx` | dark contact band + footer row |

Deleted: `Achievements.jsx`, `BlogPosts.jsx`, `Button.jsx`, `ClaudeBanner.jsx`, `ExtraCurricular.jsx`, `Footer.jsx`, `LetsConnect.jsx`, `Loading.jsx`, `OpenSource.jsx`, `SkillsAndExperience.jsx`, `Stats.jsx`, `src/style.js`.

---

### Task 1: Foundation, Navbar, Hero, Highlights

**Files:**
- Create: `src/components/Section.jsx`, `src/components/Chip.jsx`, `src/components/Highlights.jsx`, `src/assets/logo-mark.png`, `public/favicon.png`, `public/og-image.jpg`
- Modify: `tailwind.config.cjs`, `index.html`, `src/index.css`, `src/constants/index.js`, `src/assets/index.js`, `src/App.jsx`, `src/components/index.js`, `src/components/ResumeButton.jsx`, `src/components/Navbar.jsx` (rewrite), `src/components/Hero.jsx` (rewrite)
- Delete: the 11 old components listed above and `src/style.js`

**Interfaces:**
- Produces: `Section({ id, tag, title, className, children })`; `Chip({ icon, children })`; `ResumeButton({ compact })`; constants `hero {badge, cta}`, `contactCta {heading, line}`, `highlights [{id, value, suffix, label}]`, `navLinks [{id, title}]` with ids `work, experience, consultancy, skills, contactMe`, `socialMedia [{id, icon, link, label}]` with labels `LinkedIn, GitHub, Email, Fiverr`; asset `logoMark`.

- [ ] **Step 1: Link node_modules and start the dev server**

```bash
ln -s /Users/tanveer.ahmad1/Projects/personal-portfolio/node_modules node_modules
git check-ignore -q node_modules && echo ignored
npx vite --port 5174 --strictPort   # run in background, leave running
```
Expected: `ignored`, then Vite prints `Local: http://localhost:5174/`.

- [ ] **Step 2: Prepare logo assets**

The supplied logo must be a transparent PNG or SVG of the TA mark. Copy it in as `src/assets/logo-mark.png` (square, mark only, no "TANVEER AHMED" lettering). Then make the favicon (mark on an ink tile) and the Open Graph image (profile photo):

```bash
python3 - <<'EOF'
from PIL import Image
mark = Image.open("src/assets/logo-mark.png").convert("RGBA")
tile = Image.new("RGBA", (256, 256), (17, 17, 17, 255))
mark.thumbnail((200, 200))
tile.paste(mark, ((256 - mark.width) // 2, (256 - mark.height) // 2), mark)
tile.save("public/favicon.png")
EOF
cp src/assets/profile-pic.jpg public/og-image.jpg
```
If PIL is missing, run `sips -Z 200 src/assets/logo-mark.png --out public/favicon.png` instead (the browser tab shows it on its own transparent background).

Add to `src/assets/index.js`: `import logoMark from "./logo-mark.png";` and add `logoMark` to the export list.

- [ ] **Step 3: Replace `tailwind.config.cjs`**

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#FAFAF7",
        surface: "#FFFFFF",
        ink: "#111111",
        body: "#1C1917",
        muted: "#57534E",
        line: "#E7E5DF",
        chip: "#F1F0EB",
        brand: {
          50: "#EEF5FF",
          100: "#D9E8FF",
          200: "#B8D4FF",
          500: "#1E88FF",
          600: "#1A6FF0",
          700: "#1559C9",
        },
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "14px",
        btn: "10px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(17,17,17,0.04), 0 8px 24px -12px rgba(17,17,17,0.08)",
        photo: "0 18px 40px -12px rgba(26,111,240,0.35)",
      },
    },
  },
  plugins: [],
};
```

- [ ] **Step 4: Replace `src/index.css`**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 88px;
  }

  body {
    @apply bg-canvas font-sans text-body antialiased;
  }

  h1,
  h2,
  h3,
  h4 {
    @apply font-display text-ink;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}

/* Resume call-to-action: glow pulse + shine sweep */
.resume-cta {
  position: relative;
  overflow: hidden;
  animation: resume-glow 2.4s ease-out infinite;
}

.resume-cta::after {
  content: "";
  position: absolute;
  top: 0;
  left: -75%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.45) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  transform: skewX(-20deg);
  animation: resume-shine 3.6s ease-in-out infinite;
}

@keyframes resume-glow {
  0% {
    box-shadow: 0 0 0 0 rgba(26, 111, 240, 0.45);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(26, 111, 240, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(26, 111, 240, 0);
  }
}

@keyframes resume-shine {
  0%,
  60% {
    left: -75%;
  }
  100% {
    left: 125%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .resume-cta,
  .resume-cta::after {
    animation: none;
  }
}
```

- [ ] **Step 5: Replace `index.html`**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Tanveer Ahmad · Principal Software Engineer</title>
    <meta
      name="description"
      content="Principal Software Engineer building scalable backend systems, data pipelines and AI-driven solutions with Python, FastAPI and Django."
    />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Tanveer Ahmad · Principal Software Engineer" />
    <meta
      property="og:description"
      content="Backend, AI integration and data work. Case studies, projects and experience."
    />
    <meta property="og:url" content="https://tasaqi.github.io/personal-portfolio/" />
    <meta property="og:image" content="https://tasaqi.github.io/personal-portfolio/og-image.jpg" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@700;800&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 6: Update `src/constants/index.js`**

Replace the whole `navLinks` export with:

```js
export const navLinks = [
  { id: "work", title: "Work" },
  { id: "experience", title: "Experience" },
  { id: "consultancy", title: "Consultancy" },
  { id: "skills", title: "Skills" },
  { id: "contactMe", title: "Contact" },
];

// Short client-facing copy used by the hero and contact sections
export const hero = {
  badge: "Open to consulting & freelance work",
  cta: "Let's work together",
};

export const contactCta = {
  heading: "Have a project in mind?",
  line: "Backend, AI integration or data work. Let's talk.",
};
```

Replace the whole `socialMedia` export with (Twitter dropped, labels added):

```js
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/tanveer-ahmed-bb8694164/",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    label: "GitHub",
    link: "https://www.github.com/tasaqi",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    label: "Email",
    link: "mailto:10vir72@gmail.com",
  },
  {
    id: "social-media-5",
    icon: SiFiverr,
    label: "Fiverr",
    link: "https://www.fiverr.com/tasaqi_pro",
  },
];
```

Append at the very end of the file (after `experiences` and `achievements` exist):

```js
// Headline numbers shown under the hero; counts come from the data above
export const highlights = [
  { id: "h-1", value: "7", suffix: "+", label: "years building backends" },
  {
    id: "h-2",
    value: String(experiences.length),
    suffix: "",
    label: "companies, latest as Principal Engineer",
  },
  {
    id: "h-3",
    value: String(achievements.length),
    suffix: "",
    label: "consulting clients",
  },
  {
    id: "h-4",
    value: "200",
    suffix: "+",
    label: "technical interviews, 10+ engineers mentored",
  },
];
```

- [ ] **Step 7: Create `src/components/Section.jsx`**

```jsx
import { motion, useReducedMotion } from "framer-motion";

// Shared wrapper: anchor id, small uppercase tag, heading and a fade-up on first view
const Section = ({ id, tag, title, className = "", children }) => {
  const reduceMotion = useReducedMotion();

  return (
    <section id={id} className={`border-t border-line py-16 sm:py-20 ${className}`}>
      <motion.div
        className="mx-auto max-w-6xl px-4 sm:px-6"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {tag && (
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-700">
            {tag}
          </p>
        )}
        {title && <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">{title}</h2>}
        <div className={title ? "mt-8" : "mt-3"}>{children}</div>
      </motion.div>
    </section>
  );
};

export default Section;
```

- [ ] **Step 8: Create `src/components/Chip.jsx`**

```jsx
import React from "react";

const Chip = ({ icon, children }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-chip px-3 py-1 text-xs font-medium text-body">
    {icon && React.createElement(icon, { className: "text-sm text-muted", "aria-hidden": true })}
    {children}
  </span>
);

export default Chip;
```

- [ ] **Step 9: Replace `src/components/ResumeButton.jsx`**

```jsx
import { AiFillFilePdf } from "react-icons/ai";
import { resumeLink } from "../constants";

// Highlighted, animated link to the resume PDF (see .resume-cta in index.css)
const ResumeButton = ({ compact = false }) => (
  <a
    href={resumeLink}
    target="_blank"
    rel="noopener noreferrer"
    className={`resume-cta inline-flex items-center gap-2 rounded-full bg-brand-600 font-semibold text-white transition-colors hover:bg-brand-700 ${
      compact ? "px-3.5 py-1.5 text-sm" : "px-5 py-3 text-sm"
    }`}
  >
    <AiFillFilePdf className="text-base" aria-hidden="true" />
    Resume
  </a>
);

export default ResumeButton;
```

- [ ] **Step 10: Replace `src/components/Navbar.jsx`**

```jsx
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { aboutMe, navLinks } from "../constants";
import { logoMark } from "../assets";
import ResumeButton from "./ResumeButton";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        solid ? "border-line bg-canvas/90 backdrop-blur" : "border-transparent bg-canvas"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <a href="#home" className="flex items-center gap-2.5" aria-label={`${aboutMe.name}, back to top`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-btn bg-ink p-1.5">
            <img src={logoMark} alt="" className="h-full w-full object-contain" />
          </span>
          <span className="hidden font-display text-base font-extrabold text-ink sm:inline">
            {aboutMe.name}
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7 text-sm font-medium text-muted">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <a href={`#${nav.id}`} className="transition-colors hover:text-ink">
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
          <ResumeButton compact />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ResumeButton compact />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-btn p-2 text-2xl text-ink hover:bg-chip"
          >
            {open ? <HiX /> : <HiOutlineMenuAlt3 />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-line px-4 py-3 md:hidden">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a
                href={`#${nav.id}`}
                onClick={() => setOpen(false)}
                className="block rounded-btn px-3 py-2.5 text-base font-medium text-body hover:bg-chip"
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
```

The name text next to the logo tile shows from 640px up; phones show the tile only.

- [ ] **Step 11: Replace `src/components/Hero.jsx`**

```jsx
import { HiArrowRight } from "react-icons/hi";
import { aboutMe, hero } from "../constants";
import { profilePic } from "../assets";
import ResumeButton from "./ResumeButton";

const Hero = () => (
  <section id="home" className="mx-auto max-w-6xl px-4 pb-14 pt-10 sm:px-6 sm:pt-16 md:pb-20">
    <div className="grid items-center gap-10 md:grid-cols-[1.5fr_1fr]">
      <div className="order-2 md:order-1">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-600" aria-hidden="true" />
          {hero.badge}
        </span>
        <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          Hi, I'm <span className="text-brand-600">{aboutMe.name}</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{aboutMe.intro}</p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#contactMe"
            className="inline-flex items-center gap-2 rounded-btn bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
          >
            {hero.cta}
            <HiArrowRight aria-hidden="true" />
          </a>
          <ResumeButton />
        </div>
      </div>

      <div className="order-1 flex justify-center md:order-2">
        <img
          src={profilePic}
          alt={aboutMe.name}
          className="h-44 w-44 rounded-full border-4 border-white object-cover shadow-photo sm:h-60 sm:w-60 md:h-72 md:w-72"
        />
      </div>
    </div>
  </section>
);

export default Hero;
```

- [ ] **Step 12: Create `src/components/Highlights.jsx`**

```jsx
import { highlights } from "../constants";

const Highlights = () => (
  <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {highlights.map((item) => (
        <div key={item.id} className="rounded-card border border-line bg-surface p-5 shadow-card">
          <p className="font-display text-3xl font-extrabold text-ink">
            {item.value}
            <span className="text-brand-600">{item.suffix}</span>
          </p>
          <p className="mt-1 text-sm leading-snug text-muted">{item.label}</p>
        </div>
      ))}
    </div>
  </div>
);

export default Highlights;
```

- [ ] **Step 13: Delete old components and wire App**

```bash
git rm -q src/components/{Achievements,BlogPosts,Button,ClaudeBanner,ExtraCurricular,Footer,LetsConnect,Loading,OpenSource,SkillsAndExperience,Stats}.jsx src/style.js
```

Replace `src/components/index.js`:

```js
// Page sections, in page order
import Navbar from "./Navbar";
import Hero from "./Hero";
import Highlights from "./Highlights";

export { Navbar, Hero, Highlights };
```

Replace `src/App.jsx`:

```jsx
import { Navbar, Hero, Highlights } from "./components";

const App = () => (
  <div className="min-h-screen bg-canvas">
    <Navbar />
    <main>
      <Hero />
      <Highlights />
    </main>
  </div>
);

export default App;
```

(`Projects.jsx` and `Education.jsx` are rewritten in later tasks; they are no longer imported, so the build ignores them.)

- [ ] **Step 14: Verify**

Run: `npx vite build --outDir /tmp/v2-dist` → exits 0.

In the browser at `http://localhost:5174/`, desktop 1280×800, `browser_evaluate`:

```js
() => ({
  h1: document.querySelector("h1")?.textContent,
  stats: [...document.querySelectorAll("#home ~ div p.font-display")].map((p) => p.textContent),
  resume: [...document.querySelectorAll(".resume-cta")].map((a) => a.getAttribute("href")),
  font: getComputedStyle(document.querySelector("h1")).fontFamily,
  sticky: getComputedStyle(document.querySelector("header")).position,
})
```
Expected: `h1` = "Hi, I'm Tanveer Ahmad"; `stats` = `["7+","4","5","200+"]`; every `resume` ends with `Tanveer_Ahmad_Resume.pdf`; `font` starts with `"Plus Jakarta Sans"`; `sticky` = `"sticky"`.

Resize to 390×844 and evaluate:

```js
() => ({ noHScroll: document.documentElement.scrollWidth === innerWidth })
```
Expected: `true`. Then click the menu button, click "Contact" in the panel, and evaluate `() => document.querySelector('header ul.border-t') === null` → `true` (menu closed). Screenshot both widths and look at them: logo tile visible with white "A", photo above text on phone.

- [ ] **Step 15: Commit**

```bash
git add -A tailwind.config.cjs index.html src public
git commit -m "V2: light logo-blue theme, navbar, hero and highlights"
```

---

### Task 2: Case study and Projects

**Files:**
- Create: `src/components/CaseStudy.jsx`
- Modify: `src/components/Projects.jsx` (rewrite), `src/components/index.js`, `src/App.jsx`

**Interfaces:**
- Consumes: `Section`, `Chip` (Task 1); constants `claudeBanner {eyebrow, content, skills, caseStudy {title, link, duration, summary, workflow, scope[{id, icon, title, items}]}}`, `projects [{id, title, github, link, image, content, stack[{id, icon, name}]}]`.
- Produces: `CaseStudy`, `Projects` (section id `work`).

- [ ] **Step 1: Create `src/components/CaseStudy.jsx`**

```jsx
import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { claudeBanner } from "../constants";
import Section from "./Section";
import Chip from "./Chip";

const CaseStudy = () => {
  const caseStudy = claudeBanner.caseStudy;

  return (
    <Section id="case-study" tag={`Featured case study · ${claudeBanner.eyebrow}`}>
      <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-start">
        <div>
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            {caseStudy.title}, built end to end in{" "}
            <span className="text-brand-600">{caseStudy.duration}</span>
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">{caseStudy.summary}</p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{caseStudy.workflow}</p>
          <a
            href={caseStudy.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-btn bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-black"
          >
            View live site
            <HiArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <div className="rounded-card border border-line bg-surface p-6 shadow-card">
          <p className="font-display font-bold text-ink">Built with Claude Code</p>
          <p className="mt-2 text-sm leading-relaxed text-muted">{claudeBanner.content}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {claudeBanner.skills.map((skill) => (
              <Chip key={skill.id} icon={skill.icon}>
                {skill.name}
              </Chip>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {caseStudy.scope.map((area) => (
          <div key={area.id} className="rounded-card border border-line bg-surface p-5">
            <p className="flex items-center gap-2 font-display font-bold text-ink">
              {React.createElement(area.icon, { className: "text-brand-600", "aria-hidden": true })}
              {area.title}
            </p>
            <ul className="mt-3 space-y-1.5 text-sm text-muted">
              {area.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default CaseStudy;
```

- [ ] **Step 2: Replace `src/components/Projects.jsx`**

```jsx
import { useState } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { projects } from "../constants";
import Section from "./Section";
import Chip from "./Chip";

const VISIBLE_COUNT = 3;

const ProjectLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-1 text-brand-700 hover:underline"
  >
    {children}
    <HiArrowUpRight aria-hidden="true" />
  </a>
);

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const shown = showAll ? projects : projects.slice(0, VISIBLE_COUNT);

  return (
    <Section id="work" tag="Selected work" title="Projects">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((project) => (
          <article
            key={project.id}
            className="flex flex-col rounded-card border border-line bg-surface p-6 shadow-card transition hover:-translate-y-0.5 hover:border-brand-200"
          >
            <div className="flex items-center gap-3">
              <img
                src={project.image}
                alt=""
                className="h-10 w-10 flex-shrink-0 rounded-full border border-line object-cover"
              />
              <h3 className="text-lg font-bold leading-tight">{project.title}</h3>
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{project.content}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Chip key={tech.id} icon={tech.icon}>
                  {tech.name}
                </Chip>
              ))}
            </div>
            {(project.link || project.github) && (
              <div className="mt-5 flex gap-5 text-sm font-semibold">
                {project.link && <ProjectLink href={project.link}>Live</ProjectLink>}
                {project.github && <ProjectLink href={project.github}>GitHub</ProjectLink>}
              </div>
            )}
          </article>
        ))}
      </div>

      {projects.length > VISIBLE_COUNT && (
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            aria-expanded={showAll}
            className="rounded-btn border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
          >
            {showAll ? "Show fewer" : `Show all ${projects.length} projects`}
          </button>
        </div>
      )}
    </Section>
  );
};

export default Projects;
```

- [ ] **Step 3: Wire into App**

`src/components/index.js`:

```js
// Page sections, in page order
import Navbar from "./Navbar";
import Hero from "./Hero";
import Highlights from "./Highlights";
import CaseStudy from "./CaseStudy";
import Projects from "./Projects";

export { Navbar, Hero, Highlights, CaseStudy, Projects };
```

`src/App.jsx`:

```jsx
import { Navbar, Hero, Highlights, CaseStudy, Projects } from "./components";

const App = () => (
  <div className="min-h-screen bg-canvas">
    <Navbar />
    <main>
      <Hero />
      <Highlights />
      <CaseStudy />
      <Projects />
    </main>
  </div>
);

export default App;
```

- [ ] **Step 4: Verify**

Run: `npx vite build --outDir /tmp/v2-dist` → exits 0.

Browser (1280×800), scroll through the page, then evaluate:

```js
async () => {
  const cards = () => document.querySelectorAll("#work article").length;
  const before = cards();
  const btn = [...document.querySelectorAll("#work button")].find((b) => b.textContent.includes("Show all"));
  btn.click();
  await new Promise((r) => setTimeout(r, 300));
  const after = cards();
  const emptyLinkRows = [...document.querySelectorAll("#work article")].filter(
    (a) => a.querySelector("div.mt-5.flex.gap-5") && !a.querySelector("div.mt-5.flex.gap-5 a")
  ).length;
  return {
    caseTitle: document.querySelector("#case-study h2")?.textContent,
    scopeCards: document.querySelectorAll("#case-study .lg\\:grid-cols-4 > div").length,
    claudeChips: document.querySelectorAll("#case-study .shadow-card span.rounded-full").length,
    before, after, emptyLinkRows,
    button: btn.textContent,
  };
}
```
Expected: `caseTitle` = "TicketDeck, built end to end in 2 months"; `scopeCards` = 4; `claudeChips` = 8; `before` = 3; `after` = 6; `emptyLinkRows` = 0 (projects without links show no link row); `button` = "Show fewer". Screenshot and look: case study two columns, scope cards in one row.

- [ ] **Step 5: Commit**

```bash
git add src
git commit -m "V2: TicketDeck case study and projects grid"
```

---

### Task 3: Experience and Consultancy

**Files:**
- Create: `src/components/Experience.jsx`, `src/components/Consultancy.jsx`
- Modify: `src/components/index.js`, `src/App.jsx`

**Interfaces:**
- Consumes: `Section` (Task 1); constants `experiences [{organisation, logo, link, positions[{title, duration, content[{text, link}]}]}]`, `achievements [{id, event, position, content1, content2, content3, project}]`.
- Produces: `Experience` (id `experience`), `Consultancy` (id `consultancy`).

- [ ] **Step 1: Create `src/components/Experience.jsx`**

```jsx
import { useState } from "react";
import { experiences } from "../constants";
import Section from "./Section";

const Experience = () => {
  // The first (most recent) role starts expanded
  const [openRoles, setOpenRoles] = useState(() => new Set([0]));

  const toggle = (index) =>
    setOpenRoles((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });

  return (
    <Section id="experience" tag="Career" title="Experience">
      <div className="space-y-4">
        {experiences.map((exp, index) => {
          const isOpen = openRoles.has(index);
          return (
            <article
              key={exp.organisation}
              className="rounded-card border border-line bg-surface p-5 shadow-card sm:p-6"
            >
              <div className="flex gap-4">
                <img
                  src={exp.logo}
                  alt=""
                  className="h-12 w-12 flex-shrink-0 rounded-full border border-line object-cover"
                />
                <div className="min-w-0 flex-1">
                  {exp.positions.map((position) => (
                    <div key={`${position.title}-${position.duration}`}>
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                        <h3 className="text-lg font-bold leading-snug">
                          {position.title}{" "}
                          <span className="font-medium text-muted">
                            ·{" "}
                            <a
                              href={exp.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-brand-700"
                            >
                              {exp.organisation}
                            </a>
                          </span>
                        </h3>
                        <p className="text-sm text-muted sm:whitespace-nowrap">{position.duration}</p>
                      </div>
                      {isOpen ? (
                        <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted">
                          {position.content.map((item) => (
                            <p key={item.text}>{item.text}</p>
                          ))}
                        </div>
                      ) : (
                        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
                          {position.content[0]?.text}
                        </p>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    className="mt-3 text-sm font-semibold text-brand-700 hover:underline"
                  >
                    {isOpen ? "Show less" : "Read more"}
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
};

export default Experience;
```

- [ ] **Step 2: Create `src/components/Consultancy.jsx`**

```jsx
import { HiArrowUpRight } from "react-icons/hi2";
import { achievements } from "../constants";
import Section from "./Section";

// "Kifwat immo" -> "KI", "TicketDeck" -> "TI"; used instead of the placeholder icons in the data
const initials = (name) => {
  const words = name.trim().split(/\s+/);
  const letters = words.length > 1 ? words.map((word) => word[0]).join("") : words[0].slice(0, 2);
  return letters.slice(0, 2).toUpperCase();
};

const Consultancy = () => (
  <Section id="consultancy" tag="Client work" title="Consultancy Experience">
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {achievements.map((client) => {
        const lines = [client.content1, client.content2, client.content3].filter(
          (line) => line && line.trim()
        );
        return (
          <article
            key={client.id}
            className="flex flex-col rounded-card border border-line bg-surface p-6 shadow-card"
          >
            <div className="flex items-center gap-3">
              <span
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-brand-200 bg-brand-50 text-sm font-bold text-brand-700"
                aria-hidden="true"
              >
                {initials(client.event)}
              </span>
              <div>
                <h3 className="text-lg font-bold leading-tight">{client.event}</h3>
                <p className="text-sm font-medium text-brand-700">{client.position}</p>
              </div>
            </div>
            <ul className="mt-4 flex-1 space-y-2 text-sm leading-relaxed text-muted">
              {lines.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className="text-brand-600" aria-hidden="true">
                    ▹
                  </span>
                  {line}
                </li>
              ))}
            </ul>
            {client.project && (
              <a
                href={client.project}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:underline"
              >
                Visit site
                <HiArrowUpRight aria-hidden="true" />
              </a>
            )}
          </article>
        );
      })}
    </div>
  </Section>
);

export default Consultancy;
```

- [ ] **Step 3: Wire into App**

`src/components/index.js`:

```js
// Page sections, in page order
import Navbar from "./Navbar";
import Hero from "./Hero";
import Highlights from "./Highlights";
import CaseStudy from "./CaseStudy";
import Projects from "./Projects";
import Experience from "./Experience";
import Consultancy from "./Consultancy";

export { Navbar, Hero, Highlights, CaseStudy, Projects, Experience, Consultancy };
```

`src/App.jsx`:

```jsx
import { Navbar, Hero, Highlights, CaseStudy, Projects, Experience, Consultancy } from "./components";

const App = () => (
  <div className="min-h-screen bg-canvas">
    <Navbar />
    <main>
      <Hero />
      <Highlights />
      <CaseStudy />
      <Projects />
      <Experience />
      <Consultancy />
    </main>
  </div>
);

export default App;
```

- [ ] **Step 4: Verify**

Run: `npx vite build --outDir /tmp/v2-dist` → exits 0.

Browser (1280×800), evaluate:

```js
async () => {
  const roles = [...document.querySelectorAll("#experience article")];
  const second = roles[1].querySelector("button");
  const collapsedBefore = second.getAttribute("aria-expanded");
  second.click();
  await new Promise((r) => setTimeout(r, 200));
  return {
    roles: roles.length,
    firstOpen: roles[0].querySelector("button").getAttribute("aria-expanded"),
    collapsedBefore,
    afterClick: second.getAttribute("aria-expanded"),
    clients: [...document.querySelectorAll("#consultancy h3")].map((h) => h.textContent),
    initials: [...document.querySelectorAll("#consultancy article > div span")].map((s) => s.textContent),
    emptyBullets: [...document.querySelectorAll("#consultancy li")].filter((li) => !li.textContent.replace("▹", "").trim()).length,
    visitLinks: document.querySelectorAll("#consultancy a").length,
  };
}
```
Expected: `roles` 4; `firstOpen` "true"; `collapsedBefore` "false"; `afterClick` "true"; `clients` = TicketDeck, Active Digital, VistaBee, Kifwat immo, Transparagent; `initials` = TI, AD, VI, KI, TR; `emptyBullets` 0 (VistaBee's blank `content3` adds no bullet); `visitLinks` 5. Screenshot and look.

- [ ] **Step 5: Commit**

```bash
git add src
git commit -m "V2: experience cards and consultancy grid"
```

---

### Task 4: Skills, Education, Contact, and full-page checks

**Files:**
- Create: `src/components/Skills.jsx`, `src/components/Contact.jsx`
- Modify: `src/components/Education.jsx` (rewrite), `src/components/index.js`, `src/App.jsx`

**Interfaces:**
- Consumes: `Section`, `Chip`, `ResumeButton` (Task 1); constants `skills [{title, items[{id, icon, name}]}]`, `educationList [{id, icon, title, degree, duration, content1, content2}]`, `socialMedia` (labelled, Task 1), `contactCta`, `aboutMe`.
- Produces: `Skills` (id `skills`, renders `Education`), `Contact` (id `contactMe`).

- [ ] **Step 1: Replace `src/components/Education.jsx`**

```jsx
import { educationList } from "../constants";

const Education = () => (
  <div id="education">
    <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-700">Education</p>
    <div className="mt-4 space-y-4">
      {educationList.map((edu) => {
        const notes = [edu.content1, edu.content2].filter((note) => note && note.trim());
        return (
          <article key={edu.id} className="rounded-card border border-line bg-surface p-6 shadow-card">
            <img
              src={edu.icon}
              alt=""
              className="h-12 w-12 rounded-full border border-line bg-white object-contain"
            />
            <h3 className="mt-4 text-lg font-bold">{edu.title}</h3>
            <p className="text-sm font-medium text-body">{edu.degree}</p>
            <p className="mt-1 text-sm text-muted">{edu.duration}</p>
            {notes.length > 0 && (
              <ul className="mt-3 space-y-1 text-sm text-muted">
                {notes.map((note) => (
                  <li key={note}>{note.trim()}</li>
                ))}
              </ul>
            )}
          </article>
        );
      })}
    </div>
  </div>
);

export default Education;
```

- [ ] **Step 2: Create `src/components/Skills.jsx`**

```jsx
import { skills } from "../constants";
import Section from "./Section";
import Chip from "./Chip";
import Education from "./Education";

const Skills = () => (
  <Section id="skills" tag="Toolbox" title="Skills">
    <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
      <div className="space-y-6">
        {skills.map((group) => (
          <div key={group.title}>
            <h3 className="text-sm font-semibold text-ink">{group.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Chip key={item.id} icon={item.icon}>
                  {item.name}
                </Chip>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Education />
    </div>
  </Section>
);

export default Skills;
```

- [ ] **Step 3: Create `src/components/Contact.jsx`**

```jsx
import React from "react";
import { aboutMe, contactCta, socialMedia } from "../constants";
import ResumeButton from "./ResumeButton";

const PRIMARY_LABELS = ["Email", "LinkedIn", "Fiverr"];

// mailto: links open the mail app; everything else opens in a new tab
const linkProps = (link) =>
  link.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" };

const Contact = () => {
  const primary = PRIMARY_LABELS.map((label) => socialMedia.find((s) => s.label === label)).filter(Boolean);

  return (
    <footer id="contactMe" className="bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{contactCta.heading}</h2>
            <p className="mt-3 text-lg text-stone-400">{contactCta.line}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {primary.map((social, index) => (
              <a
                key={social.id}
                href={social.link}
                {...linkProps(social.link)}
                className={`inline-flex items-center gap-2 rounded-btn px-5 py-3 text-sm font-semibold transition-colors ${
                  index === 0
                    ? "bg-brand-600 text-white hover:bg-brand-500"
                    : "border border-stone-700 text-white hover:border-stone-400"
                }`}
              >
                {React.createElement(social.icon, { "aria-hidden": true })}
                {social.label === "Email" ? "Email me" : social.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-stone-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-stone-500">
            © {new Date().getFullYear()} {aboutMe.name}
          </p>
          <div className="flex items-center gap-5">
            {socialMedia.map((social) => (
              <a
                key={social.id}
                href={social.link}
                aria-label={social.label}
                {...linkProps(social.link)}
                className="text-xl text-stone-400 transition-colors hover:text-white"
              >
                {React.createElement(social.icon, { "aria-hidden": true })}
              </a>
            ))}
            <ResumeButton compact />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
```

- [ ] **Step 4: Final wiring**

`src/components/index.js`:

```js
// Page sections, in page order
import Navbar from "./Navbar";
import Hero from "./Hero";
import Highlights from "./Highlights";
import CaseStudy from "./CaseStudy";
import Projects from "./Projects";
import Experience from "./Experience";
import Consultancy from "./Consultancy";
import Skills from "./Skills";
import Contact from "./Contact";

export { Navbar, Hero, Highlights, CaseStudy, Projects, Experience, Consultancy, Skills, Contact };
```

`src/App.jsx`:

```jsx
import {
  Navbar,
  Hero,
  Highlights,
  CaseStudy,
  Projects,
  Experience,
  Consultancy,
  Skills,
  Contact,
} from "./components";

const App = () => (
  <div className="min-h-screen bg-canvas">
    <Navbar />
    <main>
      <Hero />
      <Highlights />
      <CaseStudy />
      <Projects />
      <Experience />
      <Consultancy />
      <Skills />
    </main>
    <Contact />
  </div>
);

export default App;
```

- [ ] **Step 5: Verify sections**

Run: `npx vite build --outDir /tmp/v2-dist` → exits 0.

Browser (1280×800), evaluate:

```js
() => ({
  skillGroups: document.querySelectorAll("#skills .space-y-6 > div").length,
  eduNotes: [...document.querySelectorAll("#education li")].map((li) => li.textContent),
  primary: [...document.querySelectorAll("#contactMe .md\\:flex-row a")].map((a) => [a.textContent.trim(), a.getAttribute("target")]),
  footerIcons: [...document.querySelectorAll("#contactMe [aria-label]")].map((a) => a.getAttribute("aria-label")),
  twitter: document.querySelectorAll('a[href="#"]').length,
})
```
Expected: `skillGroups` 7; `eduNotes` = ["Major: Software Engineering", "Minor: Artificial Intelligence, Data Science"] (no trailing whitespace); `primary` = [["Email me", null], ["LinkedIn", "_blank"], ["Fiverr", "_blank"]]; `footerIcons` = LinkedIn, GitHub, Email, Fiverr; `twitter` 0.

- [ ] **Step 6: Verify the whole page (Review Focus)**

a) Anchors under the sticky header, desktop 1280×800:

```js
async () => {
  const out = {};
  for (const id of ["work", "experience", "consultancy", "skills", "contactMe"]) {
    document.querySelector(`header a[href="#${id}"]`).click();
    await new Promise((r) => setTimeout(r, 1200));
    const top = document.getElementById(id).getBoundingClientRect().top;
    const headerBottom = document.querySelector("header").getBoundingClientRect().bottom;
    out[id] = top >= headerBottom - 2 || id === "contactMe";
  }
  return out;
}
```
Expected: every value `true` (`contactMe` is the last section and may not reach the top).

b) Phone 390×844: scroll top to bottom in 600px steps, then evaluate `() => document.documentElement.scrollWidth === innerWidth` → `true`. Screenshot hero, case study, projects and contact at this width and look at each.

c) Reduced motion: `browser_emulate_media` with `reducedMotion: "reduce"`, reload, wait 1s without scrolling, then evaluate:

```js
() => [...document.querySelectorAll("section > div")].every((d) => getComputedStyle(d).opacity === "1")
```
Expected: `true`. Also `getComputedStyle(document.querySelector('.resume-cta')).animationName` → `"none"`. Reset media emulation afterwards.

d) Every Resume link: `() => [...document.querySelectorAll('.resume-cta')].every(a => a.href.endsWith('/Tanveer_Ahmad_Resume.pdf'))` → `true`.

- [ ] **Step 7: Commit**

```bash
git add src
git commit -m "V2: skills, education and contact sections"
```

---

### Task 5: Production build check and push

**Files:** none changed.

- [ ] **Step 1: Build with the GitHub Pages base path**

```bash
npx vite build --base=/personal-portfolio/ --outDir /tmp/v2-pages
grep -o 'href="[^"]*favicon[^"]*"' /tmp/v2-pages/index.html
ls /tmp/v2-pages
```
Expected: favicon href is `/personal-portfolio/favicon.png`; listing contains `index.html`, `assets`, `favicon.png`, `og-image.jpg`, `Tanveer_Ahmad_Resume.pdf`.

- [ ] **Step 2: Preview the base-path build**

```bash
npx vite preview --base=/personal-portfolio/ --outDir /tmp/v2-pages --port 5175 --strictPort   # background
```
Browser: open `http://localhost:5175/personal-portfolio/`, evaluate `() => [...document.images].filter(i => i.complete && i.naturalWidth === 0).length` → `0`, and confirm the Resume link opens the PDF (`fetch(document.querySelector('.resume-cta').href).then(r => r.status)` → `200`). Stop the preview server.

- [ ] **Step 3: Push the branch**

```bash
git push -u origin v2
```

Deployment to GitHub Pages is a separate step after Tanveer reviews the branch (spec: merge to `main` first, then publish `gh-pages`).
