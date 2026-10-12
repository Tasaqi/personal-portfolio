# Portfolio V2: light theme in logo blue, proof first

Date: 2026-10-12
Branch: `v2`

## Goal

A new version of the portfolio with a modern look and clearer placement, built to win
clients (startups, marketplace clients and companies hiring a consultant). Direct contact
is the main call to action; Fiverr and LinkedIn are secondary.

Success: a visitor understands within seconds who Tanveer is and what he builds, sees
proof (case study, projects, experience, clients), and has one obvious way to get in touch.

## Decisions already made

- **Same content.** Everything currently on the site stays. No new claims, numbers or
  clients. Only three short client-facing lines are added (see "New copy").
- **Approach A:** redesign inside this repo. Keep React 18, Vite 3, Tailwind 3,
  framer-motion 7 and react-icons. No new npm dependencies.
- **Theme:** the approved light design, with the accent switched from emerald to the
  blue of Tanveer's TA logo (light only, no dark mode). Decided after the mockup review,
  when the logo was supplied.
- **Logo:** the TA monogram is the brand mark (navbar and favicon).
- **Layout:** proof first, single scrolling page (approved mockup `full-page.html`).

## Visual system

Defined once as Tailwind theme tokens in `tailwind.config.cjs`:

| Token | Value | Use |
|---|---|---|
| `canvas` | `#FAFAF7` | page background |
| `surface` | `#FFFFFF` | cards |
| `ink` | `#111111` | headings, dark buttons, contact band |
| `body` | `#1C1917` | body text |
| `muted` | `#57534E` | secondary text |
| `line` | `#E7E5DF` | borders, dividers |
| `chip` | `#F1F0EB` | chip background |
| `brand.50` | `#EEF5FF` | soft tint |
| `brand.100` | `#D9E8FF` | badge tint, button glow |
| `brand.200` | `#B8D4FF` | hover borders |
| `brand.500` | `#1E88FF` | gradient end (matches logo) |
| `brand.600` | `#1A6FF0` | accent, primary button, accent headings |
| `brand.700` | `#1559C9` | small accent text, links on white |

- **Fonts:** Plus Jakarta Sans (headings, 700/800) and Inter (body, 400/500/600), loaded
  from Google Fonts in `index.html`. Replaces Poppins.
- **Shape:** cards 14px radius, 1px `line` border, white surface; buttons 10px radius;
  chips fully rounded.
- **Motion:** subtle fade-up when a section enters view (framer-motion, once only).
  Skipped entirely when the visitor prefers reduced motion (`useReducedMotion`). The
  Resume button keeps its glow pulse, recoloured brand blue, and stays off under
  `prefers-reduced-motion`.
- **Logo usage:** the logo's "A" is white, so on the light page the mark always sits on
  a small dark (`ink`) rounded tile: navbar (tile + "Tanveer Ahmad" text) and favicon. Asset prepared from the supplied file as a square PNG cropped to
  the TA mark (`src/assets/logo-mark.png`, `public/favicon.png`). The "TANVEER AHMED"
  lettering in the supplied image is not used (the site spells the name "Ahmad").
- **Loading screen:** removed. It added a fixed 1.2s delay before any content showed.

## Page structure (top to bottom)

1. **Navbar** (sticky, white with blur when scrolled). Left: logo tile + "Tanveer Ahmad". Right:
   Work, Experience, Consultancy, Skills, Contact, plus the highlighted Resume button.
   Phone: logo tile, compact Resume button and a menu icon that opens the links.
2. **Hero.** Badge "Open to consulting & freelance work", heading "Hi, I'm Tanveer Ahmad"
   (name in brand blue), the existing `aboutMe.intro`, buttons "Let's work together"
   (scrolls to Contact) and Resume. Right side: large round profile photo with white
   ring and soft brand blue shadow. Phone: photo above text.
3. **Highlights strip.** Four stat cards from existing facts: 7+ years building
   backends; N companies, latest as Principal Engineer; N consulting clients (both counted from
   the data, currently 4 and 5); 200+
   technical interviews, 10+ engineers mentored.
4. **Featured case study (TicketDeck).** Tag "Featured case study · AI-assisted
   engineering", title with "2 months" in brand blue, summary, workflow line, "View live
   site" button, the 4 scope cards (Frontend, Backend, DevOps, Quality), and a "Built with
   Claude Code" card listing the 8 Claude Code skills as chips. Absorbs the current
   Claude Code banner.
5. **Projects** (`#work`). Grid of project cards (3 columns desktop, 2 tablet, 1 phone):
   company logo, title, description (dates are part of it), tech stack as chips. First 3 shown, "Show all
   projects" reveals the other 3.
6. **Experience** (`#experience`). One card per role: logo, title · company, dates. The
   first role is expanded; the others show a "Read more" toggle that expands the full
   description and skills line.
7. **Consultancy Experience** (`#consultancy`). All clients (currently 5) as cards in a grid
   (replaces the carousel): client name, role, the content lines, and a link to the
   client site when one exists. Uses an initials badge instead of the current
   placeholder icons, which are unrelated hackathon images.
8. **Skills + Education** (`#skills`). Skills as the 7 existing groups, each a row of
   chips with icons. Education card alongside on desktop, below on phone.
9. **Contact band + footer** (`#contactMe`, dark `ink` background). "Have a project in
   mind?" with a line "Backend, AI integration or data work. Let's talk.", buttons
   Email (primary, brand blue), LinkedIn, Fiverr. Footer row: © Tanveer Ahmad, social icons
   (GitHub, LinkedIn, Email, Fiverr) and the Resume button. The empty Twitter link is
   dropped.

## New copy

Only these lines are new; all other text comes from `src/constants/index.js` unchanged:

- Hero badge: "Open to consulting & freelance work"
- Hero button: "Let's work together"
- Contact heading: "Have a project in mind?" and line "Backend, AI integration or data
  work. Let's talk."

They live in a new `contactCta` / `hero` object in constants so they are editable in one
place.

## Code structure

- **Data:** `src/constants/index.js` stays the single source of content. Additions:
  `hero` (badge, CTA label), `highlights` (the 4 stats), `contactCta` (heading, line).
  Existing exports keep their shape so content edits work as before.
- **Components** (`src/components/`), one file each, each consuming constants directly:
  `Navbar`, `Hero`, `Highlights`, `CaseStudy`, `Projects`, `Experience`, `Consultancy`,
  `Skills`, `Education`, `Contact`, plus small shared pieces `Section` (tag + title +
  fade-up wrapper), `Chip` and `ResumeButton` (restyled).
- **Removed:** components the new page no longer uses (`Loading`, `Achievements`,
  `SkillsAndExperience`, `ClaudeBanner`, `Footer`, `Button`, `Stats`, and the already
  unused `BlogPosts`, `OpenSource`, `ExtraCurricular`, `LetsConnect`). Git keeps them.
- **Styles:** `src/index.css` trimmed to Tailwind layers, font defaults, the Resume
  animation and smooth scroll. Old gradient utilities removed.
- **`index.html`:** fonts, meta description, Open Graph tags (title, description,
  profile photo) so shared links show a preview.

## Out of scope

Dark mode, separate pages per case study, a contact form or booking widget, blog,
analytics, dependency upgrades, and any change to deployment.

## Deployment

Unchanged: build with `vite build --base=/personal-portfolio/` and publish the output to
the `gh-pages` branch. Merge to `main` first.

## Testing

No test framework exists in the repo and none is added. Verification:

- `vite build` succeeds.
- Browser check at 1680px, 1280px and 390px: every section renders, no horizontal
  scroll, images load, nav links scroll to the right sections.
- All Resume buttons open the PDF; external links (TicketDeck, LinkedIn, Fiverr,
  GitHub, client sites) open in a new tab; Email opens a mail draft.
- "Show all projects" and the Experience "Read more" toggles work.
- With reduced motion emulated, no animations run.
