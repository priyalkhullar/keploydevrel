# Keploy DevRel Assignment: Execution Plan

**Deadline:** Sat 3 Oct 2026, 12:00 noon IST (submit by 11:30).
**Deliverables:** (1) public GitHub repo link, (2) live Vercel link.
**Chosen quickstart:** Keploy Go sample `fasthttp-postgres` (FastHttp + Postgres), Docker Compose flavour, run from WSL2 on Windows.
**Product:** a single-page, static documentation tutorial built with Next.js + MDX.

---

## 0. How to use this file

1. Create an empty folder (e.g. `keploy-devrel-tutorial`) and put this file in it.
2. Open Claude Code in that folder and send:

   > Read `keploy-assignment-plan.md` fully. Execute Phases 0, 1 and 2 now. Commit after each phase. Stop at the Phase 4 gate and wait for me.

3. While Claude Code builds the site, the human does Phase 3 (the quickstart run and writing) in parallel.

---

## 1. Roles and hard rules

### Human (the candidate)
- Runs the Keploy quickstart on their own machine.
- Takes notes, writes all tutorial prose, explains the "why" in their own voice.
- Creates and logs in to GitHub and Vercel.

### Claude Code (coding assistant)
- Builds the Next.js + MDX project, components, theme, layout, README, repo hygiene.
- Verifies with `npm run build` and `npm run lint`.
- Integrates the human's draft into MDX (formatting only), checks typos, deploys with the human's approval.

### Hard rules for Claude Code
1. **Do not write the tutorial's first-person experience.** Never invent steps the human did, errors they hit, outputs they saw, or "a-ha" moments. The tutorial must come from the human's notes.
2. **Do not claim Keploy was run** unless the human confirms it.
3. Editing the human's draft is limited to: typo and grammar fixes, MDX formatting, wrapping text in components. Wording or structure suggestions go in `REVIEW.md` as suggestions; never apply them silently.
4. For Keploy facts that are not in the human's notes, link to the official docs rather than asserting from memory.
5. Ask before anything destructive or anything that touches the human's accounts (GitHub repo creation, Vercel deploy, pushes).
6. Commit at the end of each phase with a clear message. Never commit `node_modules`, `.next`, `.env*` or secrets.

---

## 2. Stack decisions (fixed; don't relitigate)

| Concern | Choice |
|---|---|
| Framework | Next.js, App Router, TypeScript |
| Content | MDX via `@next/mdx` (`app/page.mdx`) |
| Styling | Tailwind CSS + `@tailwindcss/typography` |
| UI library | shadcn/ui (Button, Badge, Tabs, Accordion, Separator) |
| Theme | `next-themes` (class strategy), light and dark |
| Icons | `lucide-react` |
| Code highlighting | `rehype-pretty-code` + Shiki, dual light/dark themes |
| MDX plugins | `remark-gfm`, `rehype-slug`, `rehype-autolink-headings` |
| Hosting | Vercel (free tier) |

Output must be a statically prerendered single page. No `output: 'export'` is needed; confirm in the `npm run build` output that `/` is marked static.

---

## 3. Phase 0: Preflight (Claude Code)

- [ ] Check `node -v` (need a version supported by current Next.js; if older than 20, tell the human), `npm -v`, `git --version`, and whether `gh` (GitHub CLI) is installed.
- [ ] Confirm the working directory is empty apart from this file.
- [ ] Run `git init`, set default branch to `main`.

---

## 4. Phase 1: Scaffold (Claude Code)

1. Create the app in the current folder:
   ```bash
   npx create-next-app@latest . --ts --tailwind --eslint --app --src-dir=false --import-alias "@/*" --use-npm
   ```
   Keep this file; if the CLI refuses a non-empty folder, scaffold in a temp subfolder and move the files up.
2. Install MDX and plugins:
   ```bash
   npm i @next/mdx @mdx-js/loader @mdx-js/react @types/mdx remark-gfm rehype-slug rehype-autolink-headings rehype-pretty-code shiki next-themes lucide-react
   npm i -D @tailwindcss/typography
   ```
3. Configure `next.config.mjs` (plugins passed as strings so they work with both Turbopack and webpack):
   ```js
   import createMDX from '@next/mdx'

   /** @type {import('next').NextConfig} */
   const nextConfig = {
     pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
   }

   const withMDX = createMDX({
     options: {
       remarkPlugins: ['remark-gfm'],
       rehypePlugins: [
         'rehype-slug',
         ['rehype-autolink-headings', { behavior: 'wrap' }],
         ['rehype-pretty-code', { theme: { light: 'github-light', dark: 'github-dark' }, keepBackground: false }],
       ],
     },
   })

   export default withMDX(nextConfig)
   ```
   If the build complains about plugin serialization or resolution, check the current `@next/mdx` docs for the installed version and adapt.
4. Create `mdx-components.tsx` at the project root (required by the App Router). Map `pre` to the `CodeBlock` component and expose `Callout`, `Steps`, `Step`, `RecordReplayDiagram` and `Tabs` so the MDX doesn't need imports.
5. Initialise shadcn/ui with defaults (`npx shadcn@latest init -d`; if prompted, accept defaults) and add: `button badge tabs accordion separator`.
6. Enable Tailwind typography according to the installed Tailwind version (v4: `@plugin "@tailwindcss/typography";` in the global CSS).
7. Add a placeholder `app/page.mdx` (see Phase 2.5), verify `npm run dev` renders it, then `npm run build`.
8. Commit: `chore: scaffold Next.js + MDX + Tailwind + shadcn`.

---

## 5. Phase 2: Components and layout (Claude Code)

### 2.1 Theme
- `ThemeProvider` from `next-themes` with `attribute="class"`, `defaultTheme="system"`, `enableSystem`, and `suppressHydrationWarning` on `<html>`.
- `ThemeToggle` client component (sun/moon icons, accessible label, no hydration flash; render after mount).
- Add the Shiki dual-theme CSS from the `rehype-pretty-code` docs, keyed to the `.dark` class. Verify code colours switch correctly in both modes.

### 2.2 Layout (`app/layout.tsx`)
- Sticky header: site title, link to the GitHub repo, `ThemeToggle`.
- Hero block: tutorial title, one-line subtitle, badges (Go, Keploy, Postgres, "~20 min read" as a placeholder the human can edit).
- Two-column body: article (`prose` classes, max width about 72ch) and a sticky table of contents on large screens (hidden on mobile).
- Footer: author name placeholder, repo link, "Built with Next.js and MDX".
- Page metadata: proper `<title>`, description, `lang="en"`, favicon, Open Graph basics.
- Fonts: use `next/font` (e.g. Inter plus a mono font) for a clean docs look.

### 2.3 Components (`components/`)
| Component | Behaviour |
|---|---|
| `Callout` | `type`: `info` / `tip` / `warning` / `danger`; icon, title prop, coloured border, readable in both themes |
| `Steps` + `Step` | numbered vertical steps with a connecting line; each `Step` has a `title` |
| `CodeBlock` | wraps `pre`; shows language label and an optional title; copy button with a "Copied" state; horizontal scroll, no overflow |
| `TableOfContents` | client component; collects `h2` and `h3` inside `article` (IDs come from `rehype-slug`); highlights the active heading with IntersectionObserver; smooth-scrolls |
| `RecordReplayDiagram` | inline SVG using CSS variables or `currentColor`; shows Record (client → app → Postgres, Keploy capturing both) and Replay (Keploy → app with mocked Postgres). Must be legible in both themes and on mobile |
| `Tabs` (shadcn) | exposed to MDX, e.g. for "Docker Compose" vs "Local on WSL" |
| Accordion (shadcn) | exposed to MDX for a "Troubleshooting" section |
| Reading progress bar | thin bar at the top of the page, optional |

### 2.4 Quality bar for components
- Keyboard accessible, with visible focus rings and a contrast check in both themes.
- No horizontal page scroll at 360px width.
- No console errors or hydration warnings.

### 2.5 Content skeleton (`app/page.mdx`)
Create the skeleton below. Placeholders use MDX comments starting with `USER:`; the check script in Phase 5 fails while any remain. **Do not write the prose.**

```mdx
{/* USER: intro, 3-4 sentences, what Keploy does and who this is for */}

## Why Keploy for Go developers
{/* USER: your own explanation of the "why". Which pain does record/replay remove? */}

## Prerequisites
{/* USER: WSL2, Docker Desktop with WSL integration, Go, Keploy, with the versions you used */}

## Install Keploy
{/* USER */}

## Clone and start the sample
{/* USER: what the sample app does, how you started it */}

## Record your first test cases
{/* USER: the requests you made and what Keploy did */}

## What Keploy generated
{/* USER: explain test-1.yaml and mocks.yaml in your own words */}

## Replay the tests
{/* USER: keploy test; point out that no real database was needed */}

## Break it on purpose
{/* USER: optional: change something and show the failing diff */}

## Gotchas I hit
{/* USER: real problems and fixes from your run */}

## Next steps
{/* USER: links to Keploy docs and where to go next */}
```

Commit: `feat: layout, theme, MDX components, content skeleton`.

---

## 6. Phase 3: The human's work (runs in parallel)

### 6.1 Environment (Windows)
- Use a WSL2 Ubuntu terminal. Enable Docker Desktop's WSL integration for that distro.
- Clone inside the Linux filesystem (e.g. `~/`), not under `/mnt/c`.
- Record versions in your notes: `go version`, `docker --version`, `keploy --version`, WSL distro.

### 6.2 Run commands (from Keploy's docs at the time of planning; follow the current official page if it differs)
```bash
# Install Keploy (check the official install page for the current method)
curl --silent -O -L https://keploy.io/install.sh && source install.sh

# Sample app
git clone https://github.com/keploy/samples-go.git && cd samples-go/fasthttp-postgres
go mod download

# Record: the app and Postgres start under Keploy via Docker Compose
keploy record -c "docker compose up" --container-name "fasthttpPostgresApp"
# In a second terminal: send API requests (create, list, get, update, delete) with curl or Postman

# Replay
keploy test -c "docker compose up" --container-name "fasthttpPostgresApp" --delay 10
```
If you hit permission errors, other Keploy Postgres pages prefix the command with `sudo -E env PATH=$PATH`. Note whether you needed it.

### 6.3 What to capture while running (the raw material of your tutorial)
Use this template in `notes.md` (keep it out of the final repo or in a `docs/` folder if you want to share it).

```md
## Environment
OS / WSL distro / Go / Docker / Keploy versions:

## For each step
- Command I ran:
- What I expected:
- What actually happened (paste output):
- Anything confusing or missing from the official docs:
- Fix (if any):

## "A-ha" moments (what clicked, in your words)
-

## Files Keploy created (paths, one sentence on what each is for)
-

## Break-it-on-purpose experiment (optional)
- What I changed:
- What the failing replay showed:

## Screenshots / terminal output saved (file names)
-
```

### 6.4 Writing guidelines (from the assignment)
- Your voice, crisp, step by step. Do not copy the official docs.
- Explain the "why" behind each step: what Keploy is doing at that moment and why that helps a Go developer.
- Target reader: a developer who has never used Keploy.
- Use callouts for gotchas and tips, `Steps` for sequences, code blocks for every command and file.

Write your draft directly into `app/page.mdx` (replacing the `USER:` placeholders), or write it in `draft.md` and hand it to Claude Code for Phase 4.

---

## 7. Phase 4: Integrate content (gate; start only when the human says the draft is ready)

- [ ] Claude Code reads the draft and converts it to MDX using `Callout`, `Steps`, `CodeBlock` titles and `Tabs` where the structure already implies them. No wording changes beyond typo and grammar fixes.
- [ ] Write suggestions (clarity, missing "why", ordering) to `REVIEW.md`. The human decides which to apply.
- [ ] Add screenshots with `next/image` and meaningful `alt` text, if the human provides any (store in `public/images/`).
- [ ] Add `scripts/check-placeholders.mjs` and an npm script `check:content`; it fails if any `USER:` marker or `TODO` remains in `app/page.mdx`.
- [ ] Commit: `docs: add tutorial content`.

---

## 8. Phase 5: Quality gate (Claude Code, then human review)

Must all pass before deploying:

- [ ] `npm run lint` and `npm run build` pass with no errors or warnings that matter; `/` shows as static.
- [ ] `npm run check:content` passes.
- [ ] Spell check: `npx cspell "app/**/*.mdx" "README.md"` (add a `cspell.json` with words like Keploy, FastHttp, Postgres, MDX, WSL2, eBPF).
- [ ] Every code block copies correctly; commands in the tutorial match what the human actually ran.
- [ ] Every external link works and points to the official Keploy docs or the sample repo.
- [ ] Both themes checked: contrast, code highlighting, diagram, callouts.
- [ ] Responsive check at 360px, 768px, 1280px; TOC hidden on mobile with no layout shift.
- [ ] Lighthouse (local, `npm run build && npm start`): aim for 90+ on accessibility and best practices.
- [ ] Repo hygiene: `.gitignore` correct, no unused boilerplate (default Next.js assets, example pages), no `notes.md` with private data, meaningful commit history.
- [ ] `README.md` with: what this is, live link placeholder, tech stack, local setup (`npm install`, `npm run dev`), project structure, and a short note on which Keploy sample the tutorial covers.

---

## 9. Phase 6: GitHub and Vercel (with the human's approval at each step)

### GitHub
```bash
# If gh is installed and the human is logged in:
gh repo create keploy-fasthttp-postgres-tutorial --public --source=. --remote=origin --push

# Otherwise: the human creates an empty public repo on github.com, then:
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```
Confirm the repo is **public** and the default branch is `main`.

### Vercel
- Option A (dashboard): vercel.com, Add New, Project, import the GitHub repo, framework preset auto-detects Next.js, deploy.
- Option B (CLI): `npx vercel login`, then `npx vercel --prod`.

### After deploy
- [ ] Open the live URL in an incognito window, on a phone, and in dark mode.
- [ ] Confirm the favicon, title, TOC, copy buttons and theme toggle all work in production.
- [ ] Put the live URL into `README.md`, commit and push (Vercel redeploys automatically).

---

## 10. Submission

Reply to Keploy with exactly two links:

1. GitHub repository: `https://github.com/<username>/<repo>`
2. Live site: `https://<project>.vercel.app`

Target send time: **11:30 IST**, leaving a 30-minute buffer.

---

## 11. Assignment traceability

| Requirement / criterion | Where it's satisfied |
|---|---|
| Use Next.js | Phase 1 |
| Page built with MDX | `app/page.mdx`, `@next/mdx` |
| Any UI library | Tailwind + shadcn/ui |
| Step-by-step instructions | `Steps` component, sections in 2.5 |
| Code snippets with syntax highlighting | `rehype-pretty-code` + `CodeBlock` |
| Callouts / interactive elements | `Callout`, `Tabs`, accordion, diagram, TOC |
| Run a Go quickstart; record and test | Phase 3 (human) |
| Own voice, not copied docs; explain the "why" | Hard rules 1 and 3; Phase 3.4 |
| Public GitHub repo | Phase 6 |
| Deployed on Vercel | Phase 6 |
| Content quality | Human's draft plus `REVIEW.md` suggestions |
| Technical implementation (static Next.js + MDX) | Phases 1 and 5 |
| UI/UX | Phase 2 |
| Attention to detail (typos, working code, clean repo) | Phase 5 |
| Bonus: polished UI, dark/light toggle, library components | Phase 2.1 to 2.3 |

---

## 12. Troubleshooting (Claude Code)

- **MDX plugin error on build:** make sure plugins are passed as strings and that every plugin is installed; check the `@next/mdx` docs for the installed Next.js version.
- **`mdx-components.tsx` not picked up:** it must sit at the project root (next to `app/`), not inside `app/`.
- **Theme flashes or hydration warnings:** `suppressHydrationWarning` on `<html>`; render the toggle only after mount.
- **Code block colours wrong in dark mode:** add the dual-theme CSS rules for `rehype-pretty-code` and use `attribute="class"` with next-themes.
- **TOC shows no headings:** `rehype-slug` must be in the plugin list so headings get IDs, and the TOC must query inside the `article` element after mount.
- **Vercel build fails but local passes:** check the Node version, case-sensitive file names, and that no required file is git-ignored.
