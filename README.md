# Elias Lim, Personal Portfolio

Live site: [https://elim316.github.io/](https://elim316.github.io/)

<!--
================================================================================
AGENT HANDOFF & CONTINUATION GUIDE (HIDDEN FROM PUBLIC GITHUB RENDER)
================================================================================
If you are an AI coding assistant (1P Google Gemini CLI / Antigravity / Antigravity,
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
- `sandbox/agent-tracer/` (`index.html` + `sandbox-mock.js`): Zero-backend static
  interactive browser sandbox of the Antigravity Agent Tracer (`https://elim316.github.io/sandbox/agent-tracer/`),
  intercepting all 6 `/api/*` endpoints in `window.fetch` across 3 preloaded multi-agent
  scenarios (`01: PR Security Audit`, `02: Dual-VPC Firewall Posture`, `03: 177k Context Compaction`)
  with both standalone full-screen mode and `?embed=1` iframe mode inside `#flagship-tracer-sandbox`.
- `sandbox/meeting-prep/` (`index.html`): Zero-backend static interactive browser sandbox
  of the Smart Meeting Prep & Dossier Agent (`https://elim316.github.io/sandbox/meeting-prep/`),
  pairing a multi-column Week Calendar (`September 2026`) with stacked `Meeting` + `Brief ready ->`
  triggers and a Google Docs Briefing workspace (`isBubbleOpen` tracked across views).
- `sandbox/uq-battery/` (`index.html`): Zero-backend static interactive browser sandbox
  of the IEEE Xplore Doc `11249263` Battery Health UQ & XAI Digital Twin
  (`https://elim316.github.io/sandbox/uq-battery/`), plotting CNN State-of-Health forecasts
  alongside Adaptive Conformal Inference intervals (`90%`, `95.2%`, `98.9%`), stacked cycle nodes
  (`XAI Drivers ->`), floating speech bubbles, and a 4-method XAI attribution report sheet.

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
  (`CSC2106-IoT`, `real-time-cv-vlm-pipeline`,
  `WeatherPredictor`, `yolov6-object-detector`, `Opencv-real-time-face-detection`,
  `INF2007_Week2_Lab`, `mylab2`, `Google-Certificate---Introduction-to-Github`,
  `Wind-City-BrainHack-2023`, `COMPUTERFUNCTION-Easy`) so `initScalableProjects()`
  does not auto-import them from the GitHub API.
- Cache Busting on Every Update:
  Whenever you edit `styles.css` or `app.js`, increment the version query string
  in `index.html` (`styles.css?v=YYYYMMDD-N` and `app.js?v=YYYYMMDD-N`) and bump
  `cacheKey` (`gh_repos_v5_elim316`) in `app.js` if the project list changed.

5. CURRENT STATE & CHANGELOG (UPDATE THIS BEFORE ENDING YOUR SESSION)
--------------------------------------------------------------------------------
- Last updated: 2026-10-23
- Asset version in `index.html`: `?v=20261023-63`
- SessionStorage cache key in `app.js`: `gh_repos_v5_elim316`
- Recent milestones completed:
  * Moved `Experience & Education` (`#journey`) to the second section immediately below Stage 01 (`#about`) and above `Get the highlights.` (`#featured`), updated the top navbar `#nav-dock` link order (`Profile`, `Experience`, `Featured Repos`, `All Projects`, `Research`, `Toolkit`) and downward-pointing proof pill arrows (`&#8595;`), removed the duplicate right-hand workshop card inside `#leadership-strip` so `HACKATHON HONOURS` renders as a full-width showcase card with a two-by-two award grid, and paused stage auto-advance when `#about` or other stages scroll out of view into `#journey` (`?v=20261023-63`).
  * Regenerated the neural voice-over tracks (`audio/stage-tracer.mp3`, `audio/stage-dossier.mp3`, `audio/stage-research.mp3` via `Charon` voice) so Stage 2, Stage 3, and Stage 4 spoken stage numbers match the active 4-stage flow (`01 PROFILE`, `02 TRACER`, `03 DOSSIER`, `04 RESEARCH`), added a minimalist Apple-style interactive audio scrubber (`#stage-dock-scrubber` with `#scrubber-time-current`, `#scrubber-time-total`, and `#teleprompter-close-btn`) inside `#stage-dock-teleprompter`, preserved paused progress and scrubbing state on `pauseNarration()`, and locked smooth-scroll stage navigation (`scrollToStageIndex()`) so intermediate scroll ticks or modal audio endings never hijack active stage narration (`?v=20261023-62`).
  * Removed the secondary sticky sub-navigation bar (`#apple-localnav`) so only the single frosted 44px `#site-header` remains, and shipped 6 UI and aesthetic enhancements (`?v=20261023-61`): (1) auto-compacting bottom stage controller pill (`#apple-stage-dock.is-compact`) when scrolling below Stage 04 into `#projects` through `#stack`, (2) fluid spring blur-and-scale cross-fade (`sceneSpringIn` & `cardFilterSpringIn`) on tab switches and category filters, (3) scroll-linked vertical progress spine (`#timeline-spine-fill`) and interactive proof pills (`.timeline-proof-pill`) on the Experience & Education timeline (`#journey`), (4) expandable `Read Abstract & Results` benchmark drawers (`.pub-abstract-drawer`) on both IEEE Xplore publication cards (`#publications`), (5) cursor-tracked `1px` specular border highlights (`--card-mx`, `--card-my`) across cards, and (6) true OLED Dark Mode surface hierarchy (`[data-theme="dark"]`).
  * Redesigned the Open Graph social preview card (`og-image.png`, rendered at `1200x630` using self-hosted `SF Pro Display` / `SF Pro Text` webfonts) and simplified Open Graph / Twitter metadata (`Elias Lim | Cloud & AI Engineer`) in `index.html` for a minimal, uncluttered Apple-style aesthetic (`?v=20261023-59`).
  * Resolved 6 end-to-end functional, state-sync, dark-mode, and mobile layout bugs (`?v=20261023-58`): synchronised Dark Mode across all 3 embedded sandbox iframes (`sandbox/agent-tracer/`, `sandbox/meeting-prep/`, `sandbox/uq-battery/`), fixed mobile (`390px`) horizontal overflow in `.browser-top-bar` / `.browser-tab-strip` / `.leadership-card` / `.closing-cta-actions`, aligned initial SSR copy and `Next tab` labels across Stages 01/03/04, recalculated `--step-arrow-x` speech-bubble pointers on hidden tab switches, fixed `.skill-chip` query matching and filter-bar state reset, and queued Stage 02 host tour `postMessage` actions until the lazy `#tracer-embedded-iframe` finishes loading.
  * Added 1st Place at Google's AI Agent Lab Hackathon 2026 recognition across Stage 01 (`#about`), Highlight Card 1 & Card 3 (`#highlights-track`), Stage 02 (`#showcase-agent-tracer`), the Google Cloud experience timeline (`#milestone-gcloud`), the Hackathon Honours strip (`#leadership-strip`, updated to `4x`), and the `agent-tracer` project summary in `projects.json` and `app.js` (`?v=20261022-56`).
  * Added authentic self-hosted Apple San Francisco webfonts (`fonts/SFProDisplay-*.woff2` and `fonts/SFProText-*.woff2` with optical sizing across `index.html`, `styles.css`, and all 3 sandboxes) alongside 6 signature Apple aesthetic details: two-tier sticky sub-navigation ribbon (`#apple-localnav` beneath slim 44px `#site-header` with `scroll-padding-top: 104px`), two-tone editorial headlines (`.apple-tone-muted`), Liquid Glass inner specular hairlines (`--glass-specular`) and concentric 28px/16px radii, container-aligned horizontal highlight track gutters, circular dark `+` action controls (`.apple-card-plus`), and continuous scroll-linked stage framing (`?v=20261011-53`).
  * Launched the 3rd live zero-backend browser sandbox for Repo Showcase 03 (`#showcase-uq-xai` / `sandbox/uq-battery/index.html`, IEEE Xplore Doc `11249263`), featuring interactive CNN State-of-Health & Adaptive Conformal Inference curves across McMaster and Oxford battery cells, stacked cycle checkpoints with `XAI Drivers ->` triggers, floating speech bubbles (`#uqPopoverBubble`) with `isBubbleOpen` state preservation, and a full 4-method XAI attribution report sheet (`?v=20261011-49`).
  * Upgraded Stage 03 (`#showcase-meeting-prep` / `sandbox/meeting-prep/index.html`) to a full interactive Day Calendar View (`09:00` to `18:00` hourly grid) with colour-coded qualified external/cross-team calendar blocks vs dashed filtered routine blocks, a live shaded `14:00 - 15:00` 1-hour reminder window band + `13:00` current-time marker, interactive `Test Fake Link Blocker`, and floating speech bubbles (`#prepCoachBubble`) anchored next to the active calendar block (`?v=20261011-45`).
  * Added pop-up explanation speech bubbles (`#tracer-overview-bubble` beneath the 4 SVG steps on Tab 1 `Execution Timeline` with dynamic pointer tail `--step-arrow-x`, plus `#sandboxCoachBubble` floating inside `.canvas-wrapper` of `sandbox/agent-tracer/index.html` tracking active nodes via `network.canvasToDOM()` and `Close Bubble` on Step 4), ordered Stage 02 (`#showcase-agent-tracer`) tabs as `Execution Timeline` first, `200k Memory Meter` second, and `Interactive Sandbox` last, and wrapped `#inspector-title` (`flex-wrap: wrap`) so `Collapse Step Tools` and `<- Overview` stay inside `#right` (`?v=20261010-38`).
  * Unified all 5 visible stage windows (`#hero-hardware-deck`, `#about-hardware-deck` with `Education` tab, `#flagship-tracer-sandbox`, `#flagship-prep-sandbox`, and `#flagship-uq-sandbox`) onto connected top macOS browser tabs (`.browser-window-bezel` + `.browser-top-bar` + `.browser-tab-strip` + `.browser-single-pane`), added Apple-style oversized gradient KPI numbers (`200k`, `95.2%`, `4,000+` via `.highlight-pop-number`) to `#highlights-section`, fixed descender clipping on `.bento-spec-stat` (`line-height: 1.24; padding-bottom: 4px`), and replaced technical acronyms (`No UQ`, `Ad-Hoc`, `JSONL`, `PICP`, `ECE`) across `#highlights-section` and `#stack` with recruiter-friendly plain English.
  * Added 6 Apple-inspired visual and functional upgrades:
    1. "Get the highlights." horizontal carousel (`#highlights-section` with
       `#highlights-track`, `#highlights-dots`, and arrow controls) at the top of
       `#featured`.
    2. Smooth-gliding macOS/iOS segmented pill indicators (`.seg-glide-pill` via
       `initSlidingSegmentedControls()`) on `#bento-compare-bar` (while `#filter-bar`
       uses `#filter-pill-bg` via `initFilters()`).
    3. Interactive `More details` / `Hide details` toggle button (`.bezel-xray-btn`)
       and 4-column architectural specification overlay drawer (`.bezel-xray-drawer`)
       inside all 6 hardware stage bezels (`initHardwareXraySpecs()`).
    4. Live synced voice-over caption ribbon (`#stage-dock-teleprompter` +
       `#teleprompter-text`) and `1x / 1.25x / 1.5x` playback speed toggle
       (`#stage-dock-speed-btn`) above `#apple-stage-dock`.
    5. Scroll-triggered number counter roll-ups and bar fills (`initScrollCountUpAndBars()`
       using `IntersectionObserver`).
    6. Apple-style "Compare systems." side-by-side architecture selector
       (`#compare-systems-box` with `#compare-select-a`, `#compare-select-b`, and
       `#compare-swap-btn`) in `#projects`.
  * Replaced the monospace `JetBrains Mono` coding font across all UI badges,
    readouts (such as `Linter: 0 hallucinated URLs`), eyebrows, pills, and SVG
    diagram labels with Apple's San Francisco (`SF Pro Display` / `SF Pro Text` /
    `-apple-system`) font stack (`--font-sans` and `--font-mono`) paired with
    `font-variant-numeric: tabular-nums`.
  * Made the active stage pill dot (`#apple-stage-dock .stage-dot-fill`) a live
    reading-time progress bar that estimates the reading time of the visible prose
    on the active stage (~228 WPM / 3.8 words per second) plus a 10-second buffer
    (or waits for voice-over completion if narration is active), fills smoothly
    from 0% to 100%, and automatically smooth-scrolls to the next stage when full.
  * Restored the clean `EL` rounded-square monogram for both the Chrome tab icon
    (`favicon.svg`) and the navbar logo (`.nav-monogram`).
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
