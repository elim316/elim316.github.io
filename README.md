# Elias Lim · Personal Portfolio

Live site: [https://elim316.github.io/](https://elim316.github.io/)

<!--
================================================================================
AGENT HANDOFF & CONTINUATION GUIDE (HIDDEN FROM PUBLIC GITHUB RENDER)
================================================================================
If you are an AI coding assistant (Claude Code, Cursor, Windsurf, GitHub Copilot,
OpenAI Codex, Gemini CLI, etc.) working on this repository for Elias Lim, read
this entire hidden specification before making any changes. After completing
your changes, update the "Current State & Changelog" section at the bottom of
this comment block (and in `.cursorrules`) so the next agent can pick up
seamlessly where you left off.

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
This site is deployed directly via GitHub Pages from the `main` branch with zero
build steps, bundlers, or external runtime dependencies:
- `index.html`: Semantic structure containing the sticky glass navigation bar,
  5 full-bleed scroll-animated hardware stages, the interactive experience
  timeline (`#experience`), the filterable project grid (`#projects`), and the
  footer.
- `styles.css`: Apple-inspired design system in Light Mode by default (`:root`),
  with full Dark Mode variables under `[data-theme="dark"]`.
- `app.js`: Interactive behaviours, scroll-driven 3D stage physics, About Me
  chapter switcher, timeline accordion, custom per-project SVG visualisations,
  and live GitHub repository synchronisation.
- `projects.json`: Declarative project catalogue and `excludedRepos` list.
- `astar-logo.png`: Official A*STAR logo asset used in `#about` and `#experience`.
- `.cursorrules`: Hidden agent rules file mirroring this handoff specification.

3. VISUAL SYSTEM & LAYOUT GUARDRAILS
--------------------------------------------------------------------------------
- Button Hierarchy: Paired CTA buttons must always pair `.apple-pill.solid`
  (blue primary `#0066cc`) for the primary action with `.apple-pill.outline`
  for the secondary action. Never style both buttons in a pair with the same
  solid colour.
- 5 Scroll-Animated Hardware Stages (`initHeroScrollPhysics()` in `app.js`):
  1. `#hero-stage` (Wordmark: `BUILDER`)
  2. `#about` (Wordmark: `PROFILE`)
  3. `#showcase-agent-tracer` (Wordmark: `TRACER`)
  4. `#showcase-meeting-prep` (Wordmark: `DOSSIER`)
  5. `#showcase-uq-xai` (Wordmark: `RESEARCH`)
  Every stage uses `<div class="hardware-deck stage-deck" data-stage-deck>` and
  `<div class="stage-bg-wordmark" data-stage-wordmark>`. On scroll, `app.js`
  interpolates `--deck-tilt`, `--deck-scale`, `--deck-y`, `--wordmark-y`, and
  `--wordmark-scale` via `requestAnimationFrame`.
- Anti-Clipping & Overflow Guardrails (`styles.css`):
  - `.hardware-bezel`, `.bezel-grid` (`grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr)`),
    `.bezel-pane`, and `.about-mini-card` must preserve `min-width: 0;
    max-width: 100%; box-sizing: border-box; overflow: hidden;` so the right
    pane never overflows outside the rounded hardware bezel border.
  - All SVG diagrams inside `.bezel-svg-wrap` and `.project-visual` must retain
    `overflow: visible` and safe `viewBox` coordinates so text and animated
    packets are never clipped.

4. HOW TO ADD OR UPDATE PROJECTS
--------------------------------------------------------------------------------
- Curated Projects (`PROJECTS` in `app.js` & `projects` in `projects.json`):
  There are 13 curated projects across 3 categories (`agentic`, `fullstack`, `ml`).
- Custom SVG Visualisations (`getProjectVisual(project)` in `app.js`):
  IMPORTANT: Never use a generic "3 boxes lined up" diagram for any project.
  Every project in `#project-grid` has a bespoke `viewBox="0 0 280 92"` SVG
  schematic in `getProjectVisual(project)` in `app.js` (for example: branching
  agent execution graphs, multi-cloud fan-out topologies, DeepLabV3 encoder-
  decoder pyramids, autonomous threat radar scopes, Android note sync cards, and
  financial allocation donut charts).
  When adding a new project:
  1. Add the project object to `PROJECTS` in `app.js` and `projects` in
     `projects.json`.
  2. Add a dedicated `case '<project-id>':` in `getProjectVisual(project)` in
     `app.js` with a custom SVG visualisation tailored to the project's real
     architecture.
- Excluded Repositories (`EXCLUDED_REPOS` in `app.js` & `projects.json`):
  Coursework, lab, and duplicate repositories are listed in `EXCLUDED_REPOS`
  (`CSC2106-IoT`, `real-time-cv-vlm-pipeline`, `WeatherPredictor`,
  `yolov6-object-detector`, `Opencv-real-time-face-detection`,
  `INF2007_Week2_Lab`, `mylab2`, `Google-Certificate---Introduction-to-Github`,
  `Wind-City-BrainHack-2023`, `COMPUTERFUNCTION-Easy`) so `initScalableProjects()`
  does not auto-import them from the GitHub API.
- Cache Busting on Every Update:
  Whenever you edit `styles.css` or `app.js`, increment the version query string
  in `index.html` (`styles.css?v=YYYYMMDD-N` and `app.js?v=YYYYMMDD-N`) and bump
  `CACHE_KEY` (`gh_repos_v3_elim316`) in `app.js` if the project list changed.

5. CURRENT STATE & CHANGELOG (UPDATE THIS BEFORE ENDING YOUR SESSION)
--------------------------------------------------------------------------------
- Last updated: 2026-10-05
- Asset version in `index.html`: `?v=20261005-5`
- SessionStorage cache key in `app.js`: `gh_repos_v3_elim316`
- Recent milestones completed:
  * Reverted paired CTA buttons to `.apple-pill.solid` + `.apple-pill.outline`.
  * Updated About Me Chapter 04 to `04 · Glasgow, SIT & Life` (`Glasgow & SIT · Life`).
  * Integrated official `astar-logo.png` across `#about` and `#experience`.
  * Fixed `.bezel-grid` and `.bezel-pane` right-pane overflow inside `.hardware-bezel`.
  * Removed green `CONNECT-RPC ACTIVE` badge and redesigned `BUILDER` & `TRACER`
    stages with a 4-step Agent Execution Graph and 2x2 Multi-Agent Workspace.
  * Enabled 3D scroll tilt, scale, and wordmark parallax on all 5 stages.
  * Curated `#projects` to 13 signature repositories, each with a custom SVG
    architectural visualisation in `getProjectVisual()`.
================================================================================
-->
