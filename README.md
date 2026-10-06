# Elias Lim · Personal Portfolio

Live site: [https://elim316.github.io/](https://elim316.github.io/)

<!--
================================================================================
AGENT HANDOFF & CONTINUATION GUIDE (HIDDEN FROM PUBLIC GITHUB RENDER)
================================================================================
If you are an AI coding assistant (1P Google Gemini CLI / Antigravity / Jetski,
or 3P Claude Code, Cursor, Windsurf, GitHub Copilot, OpenAI Codex, etc.) working
on this repository for Elias Lim, read this entire hidden specification before
making any changes. After completing your changes, keep `README.md` (this hidden
comment block), `.cursorrules`, and `.github/copilot-instructions.md`
synchronised so the next agent can pick up seamlessly where you left off.

1. OWNER PREFERENCES & EDITORIAL RULES (STRICT)
--------------------------------------------------------------------------------
- Spelling: Always use British English spelling across all UI copy, comments,
  and documentation (e.g., visualiser, customisable, synchronised, centralised,
  personalise, modelling, defence, behaviour, colour).
- Punctuation & Formatting: Avoid em dashes and en dashes in prose and replies
  (use middle dots `·`, colons, commas, or parentheses). Avoid bold text
  formatting in prose or chat replies.
- No Decorative Emojis: Never add decorative emojis (such as robot, wrench, or
  rocket emojis) in headers, badges, or documentation, as they make interfaces
  look "vibe-coded". Keep only minimal functional toolbar symbols (`🌙`/`☀️`,
  `↗`, `+`, `-`) and clean inline SVG vector icons.
- Privacy: Never include Elias's personal email address or internal company
  project IDs anywhere in `index.html`, `app.js`, `projects.json`, or READMEs.
- No Vibe-Coded Tropes: Do not add fake glowing status indicators (such as
  "CONNECT-RPC ACTIVE") or meaningless sci-fi filler text. Every visual
  schematic must represent the real technical architecture of that system.
- Company Naming: Always refer to Grab simply as `Grab` (never `Grab TIS`).
  Always use `astar-logo.png` for the A*STAR company logo badge.

2. REPOSITORY ARCHITECTURE (ZERO-DEPENDENCY STATIC SITE)
--------------------------------------------------------------------------------
This site is deployed directly via GitHub Pages (`https://elim316.github.io/`)
and is also pre-configured with `vercel.json` for zero-config Vercel deployment
from the `main` branch with zero build steps, bundlers, or external runtime
dependencies:
- Local Dev Server: Run `python3 -m http.server 8000` (or `npx serve .`) in the
  repository root and open `http://localhost:8000`.
- `index.html`: Semantic structure containing the sticky glass navigation bar,
  5 full-bleed scroll-animated hardware stages, the interactive experience
  timeline (`#journey`), the filterable project grid (`#projects`),
  peer-reviewed research (`#publications`), and toolkit (`#stack`).
- `styles.css`: Apple-inspired design system in Light Mode by default (`:root`),
  with full Dark Mode variables under `[data-theme="dark"]`.
- `app.js`: Interactive behaviours, scroll-driven 3D stage physics, cursor-
  tracked metallic wordmark specular reflections and 3D hover tilt, About Me
  chapter switcher, flagship sandboxes, custom per-project SVG visualisations,
  Command+K palette, and live GitHub repository synchronisation.
- `projects.json`: Declarative project catalogue and `excludedRepos` list.
- `astar-logo.png`: Official A*STAR logo asset used in `#about` and `#journey`.
- `vercel.json`: Zero-build static hosting and security header configuration
  for Vercel.
- `.cursorrules` & `.github/copilot-instructions.md`: Hidden agent rule files
  mirroring this handoff specification for 1P and 3P coding agents.

3. VISUAL SYSTEM & LAYOUT GUARDRAILS
--------------------------------------------------------------------------------
- Button Hierarchy: Paired CTA buttons must always pair `.apple-pill.solid`
  (blue primary `#0066cc`) for the primary action with `.apple-pill.outline`
  for the secondary action. Never style both buttons in a pair with the same
  solid colour.
- 6 Scroll-Animated & Cursor-Interactive Hardware Stages (`initHeroScrollPhysics()`):
  1. `#hero-stage` (Wordmark: `BUILDER`)
  2. `#about` (Wordmark: `PROFILE`)
  3. `#showcase-jumpgate` (Wordmark: `JUMPGATE`)
  4. `#showcase-agent-tracer` (Wordmark: `TRACER`)
  5. `#showcase-meeting-prep` (Wordmark: `DOSSIER`)
  6. `#showcase-uq-xai` (Wordmark: `RESEARCH`)
  On scroll, `app.js` interpolates `--deck-tilt`, `--deck-scale`, `--deck-y`,
  `--wordmark-y`, and `--wordmark-scale` via `requestAnimationFrame` based on
  `deck.getBoundingClientRect()`. By default, `.metallic-wordmark` continuously
  runs `titaniumShimmer` (with `--wordmark-spot-size: 0px`). On `mousemove`,
  `app.js` toggles `.is-hovered` (activating `--wordmark-spot-size: 260px`) and
  updates `--wordmark-spot-x` and `--wordmark-spot-y` on the backdrop words
  only. Never move the words on mousemove (`--wordmark-mx` / `--wordmark-my`
  are forbidden), and never apply mouse tilt or mouse glare to `.hardware-deck`
  or `.hardware-bezel` (both the words and the box stay steady in position and
  only animate position on scroll).
- Anti-Clipping & Overflow Guardrails (`styles.css`):
  - `.hardware-bezel`, `.bezel-grid` (`grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr)`),
    `.bezel-pane`, and `.about-mini-card` must preserve `min-width: 0;
    max-width: 100%; box-sizing: border-box; overflow: hidden;` so the right
    pane never overflows outside the rounded hardware bezel border.
  - Never apply `stroke` or `stroke-width` directly to `<g class="clickable-node">`
    or `<text>` elements in SVG, as SVG inheritance will outline the text and
    make it look blurry. Always target child shapes
    (`.clickable-node.is-selected .trace-node`) and keep `stroke: none !important`
    on all SVG `<text>` elements.

4. HOW TO ADD OR UPDATE PROJECTS
--------------------------------------------------------------------------------
- Curated Projects (`PROJECTS` in `app.js` & `projects` in `projects.json`):
  There are 14 curated projects across 3 categories (`agentic`, `fullstack`, `ml`),
  including `jumpgate-agentic-lz` (which links to both
  `RZOWQ/trainee-project-jumpgate-agentic-lz` and
  `jarrettyeo/vending-machine-agent` via `secondaryRepoUrl`).
- Custom SVG Visualisations (`getProjectVisual(project)` in `app.js`):
  IMPORTANT: Never use a generic "3 boxes lined up" diagram for any project.
  Every project in `#projects-grid` has a bespoke SVG schematic in
  `getProjectVisual(project)` in `app.js`.
  When adding a new project:
  1. Add the project object to `PROJECTS` in `app.js` and `projects` in
     `projects.json`.
  2. Add a dedicated `case '<project-id>':` in `getProjectVisual(project)` in
     `app.js` with a custom SVG visualisation tailored to the project's real
     architecture.
- Excluded Repositories (`EXCLUDED_REPOS` in `app.js` & `projects.json`):
  Coursework, lab, and duplicate repositories are listed in `excludedRepos`
  (`CSC2106-IoT`, `real-time-cv-vlm-pipeline`, `WeatherPredictor`,
  `yolov6-object-detector`, `Opencv-real-time-face-detection`,
  `INF2007_Week2_Lab`, `mylab2`, `Google-Certificate---Introduction-to-Github`,
  `Wind-City-BrainHack-2023`, `COMPUTERFUNCTION-Easy`) so `initScalableProjects()`
  does not auto-import them from the GitHub API.
- Cache Busting on Every Update:
  Whenever you edit `styles.css` or `app.js`, increment the version query string
  in `index.html` (`styles.css?v=YYYYMMDD-N` and `app.js?v=YYYYMMDD-N`) and bump
  `cacheKey` (`gh_repos_v4_elim316`) in `app.js` if the project list changed.

5. CURRENT STATE & CHANGELOG (UPDATE THIS BEFORE ENDING YOUR SESSION)
--------------------------------------------------------------------------------
- Last updated: 2026-10-06
- Asset version in `index.html`: `?v=20261005-13`
- SessionStorage cache key in `app.js`: `gh_repos_v4_elim316`
- Recent milestones completed:
  * Replaced the default `EL` navbar box and missing tab icon with a custom
    Apple Silicon / macOS squircle vector icon (`favicon.svg` + `.nav-apple-icon`).
  * Added `#showcase-jumpgate` (`JUMPGATE` wordmark + `#flagship-jumpgate-sandbox`
    interactive 4-node Dual-VPC & 14-step ADLC deck) as a full-bleed stage at the
    top of `#featured`, backed by `audio/stage-jumpgate.mp3` (9 neural voice-over
    tracks total).
  * Added a circular SVG progress ring (`#dock-voice-progress-circle`), hover/focus
    audio preloading, keyboard shortcut `V`, and a `Listen` / `Pause` button
    (`#closer-look-listen-btn`) inside the Closer Look (`+`) architecture modal.
  * Added the Apple-style `With Jumpgate & Conformal AI` vs. `Legacy Baseline (Before)`
    comparison toggle (`#bento-compare-bar`) on `#bento-specs-grid` and the
    Hackathon Honours & 4,000+ Engineer Buildathon leadership showcase strip
    (`#leadership-strip`) in `#journey`.
================================================================================
-->
