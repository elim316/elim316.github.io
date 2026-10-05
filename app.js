(function () {
  "use strict";

  const PROJECTS = [
    {
      id: "agent-tracer",
      title: "Jetski Agent Tracer Plugin",
      category: "agentic",
      categoryLabel: "Agentic & DevTools",
      year: "2026",
      summary:
        "Real-time execution graph and three-lane architecture visualiser for autonomous agents, streaming live JSONL transcripts into Timeline, Architecture, and Simplified views.",
      architecture:
        "Zero-dependency Python 3 HTTP backend with 1.5s delta-tail JSONL streaming, paired with a Vis.js and SVG topology frontend. Detects mid-text tool exit codes, strips metadata envelopes, and supports inline subagent trajectory drill-down.",
      stack: ["Python", "Vis.js", "SVG", "SSE / JSONL"],
      repoUrl: "https://github.com/elim316/Jetski-Agent-Tracer-Plugin",
    },
    {
      id: "jetski-harness",
      title: "Jetski Harness",
      category: "agentic",
      categoryLabel: "Agentic & DevTools",
      year: "2026",
      summary:
        "Unified multi-agent workspace UI plugin combining a customisable 2x2 Bento grid, multi-session agent chat, embedded Agent Tracer graph, automation controls, and live token telemetry.",
      architecture:
        "Streams per-turn prompt, cached-context, and output token metrics from the local Language Server, calculates context window saturation against the 200k compaction threshold, and dispatches multi-session prompts.",
      stack: ["Python", "Connect-RPC", "JavaScript", "CSS Grid"],
      repoUrl: "https://github.com/elim316/Jetski-Harness",
    },
    {
      id: "meeting-prep-agent",
      title: "Smart Meeting Prep and Dossier Agent",
      category: "agentic",
      categoryLabel: "Agentic & DevTools",
      year: "2026",
      summary:
        "Two-stage scheduled agent that researches external and cross-functional meetings across Calendar, Gmail, Chat, Drive, and People Directory to generate cited one-page briefing docs.",
      architecture:
        "Pairs a Next-Business-Day dossier generator with a stateless T-1h reminder partitioned into 60-minute windows. Verified by a 5-scenario, 36-check mock test harness with an automated linter that flags hallucinated names, bugs, and URLs.",
      stack: ["Python", "Multi-Corpus MCP", "Eval Harness", "Cron"],
      repoUrl: "https://github.com/elim316/Jetski-Meeting-Prep-Agent",
    },
    {
      id: "eduverse",
      title: "EduVerse",
      category: "fullstack",
      categoryLabel: "Full-Stack & Cloud",
      year: "2025",
      summary:
        "Awarded 2nd Place Overall at NUS, Singtel, and Millennium Management LifeHack 2025. Adaptive learning platform pairing modular classroom routing with an ~85% accuracy Knowledge Tracing model.",
      architecture:
        "Modular React, Next.js, and TypeScript platform deployed on Cloudflare Workers for low-latency serverless execution, integrated with a Python and PyTorch Knowledge Tracing (kt_models) recommendation engine.",
      stack: ["React", "TypeScript", "Cloudflare Workers", "PyTorch"],
      repoUrl: "https://github.com/elim316/eduverse",
    },
    {
      id: "mindsync",
      title: "MINDSync (Lobang-Octagon)",
      category: "fullstack",
      categoryLabel: "Full-Stack & Cloud",
      year: "2026",
      summary:
        "Built for Hack4Good. Centralised multi-branch event and volunteer management platform for MINDS, replacing scattered spreadsheets and forms across branches.",
      architecture:
        "Role-based web application in TypeScript, Next.js App Router, and Supabase supporting staff, caregivers, and volunteers with unified calendar views, PostgreSQL RPC signup workflows, and real-time event coverage tracking.",
      stack: ["TypeScript", "Next.js", "Supabase", "PostgreSQL"],
      repoUrl: "https://github.com/elim316/Lobang-octagon",
    },
    {
      id: "multi-cloud-serverless",
      title: "Multi-Cloud Serverless Application",
      category: "fullstack",
      categoryLabel: "Full-Stack & Cloud",
      year: "2025",
      summary:
        "Full-stack serverless web application demonstrating cloud-portable CRUD workflows, real-time state synchronisation across browser tabs, and automated CI/CD.",
      architecture:
        "React and Vite frontend deployed on Vercel backed by Supabase (Postgres, Auth, Realtime) and AWS serverless primitives provisioned with Terraform Infrastructure-as-Code and GitHub Actions.",
      stack: ["React", "Terraform", "Supabase", "AWS", "GitHub Actions"],
      repoUrl: "https://github.com/elim316/multi-cloud-serverless-app",
    },
    {
      id: "uq-xai-battery",
      title: "Uncertainty Quantification & XAI for Battery Analytics",
      category: "ml",
      categoryLabel: "ML & Research",
      year: "2025",
      summary:
        "First-author paper at APSIPA ASC 2025 (IEEE Xplore) from A*STAR research. Unified deep learning framework quantifying both model and data uncertainty for battery State-of-Health estimation.",
      architecture:
        "Integrates Adaptive Conformal Inference (ACI), Prediction Interval Coverage Probability (PICP), Expected Calibration Error (ECE), and model-agnostic SHAP/LIME attributions into a CNN pipeline evaluated across McMaster and Oxford datasets.",
      stack: ["Python", "CNN", "Conformal Prediction", "SHAP / LIME"],
      repoUrl: "https://github.com/elim316/UQ-XAI-battery-analytics",
    },
    {
      id: "semantic-segmentation",
      title: "Real-Time Semantic Segmentation & Multimodal Captioning",
      category: "ml",
      categoryLabel: "ML & Research",
      year: "2025",
      summary:
        "Real-time computer vision inspection pipeline combining live frame-by-frame DeepLabV3+ResNet50 semantic segmentation with context-aware natural language captions.",
      architecture:
        "Streams webcam video through a PyTorch DeepLabV3+ResNet50 backbone to overlay semantic pixel masks via OpenCV and NumPy, paired with the Hugging Face BLIP vision-language model for live scene captioning.",
      stack: ["Python", "PyTorch", "DeepLabV3+", "BLIP", "OpenCV"],
      repoUrl: "https://github.com/elim316/Semantic-Segmentation",
    },
    {
      id: "transport-gpt",
      title: "TransportGPT",
      category: "ml",
      categoryLabel: "ML & Research",
      year: "2024",
      summary:
        "Built for the NUS NCS Innovation Challenge 2024. Multimodal traffic intelligence system combining live camera feeds, vehicle detection, and LLM synthesis.",
      architecture:
        "Chains YOLOv3 computer vision detection on traffic camera streams with time-series congestion modelling and LangChain LLM prompts to produce plain-English routing advisories.",
      stack: ["Python", "LangChain", "YOLOv3", "Computer Vision"],
      repoUrl: "https://github.com/elim316/TransportGPT",
    },
    {
      id: "panasonic-hvac",
      title: "Panasonic Commercial HVAC Control Dashboard",
      category: "fullstack",
      categoryLabel: "Full-Stack & Cloud",
      year: "2024",
      summary:
        "Industry collaboration case study building a centralised web dashboard to monitor and control commercial HVAC units across building zones.",
      architecture:
        "Combines a Svelte frontend and Three.js interactive 3D floor-plan visualiser with a Node.js and WebSocket backend streaming live telemetry and energy consumption metrics.",
      stack: ["Svelte", "Three.js", "Node.js", "WebSockets"],
      repoUrl: "https://github.com/elim316/Panasonic-HVAC-Dashboard-overview",
    },
    {
      id: "operation-guardian",
      title: "Autonomous Air Defence System (DSTA BrainHack 2024)",
      category: "ml",
      categoryLabel: "ML & Research",
      year: "2024",
      summary:
        "Semifinalist at DSTA BrainHack 2024 (TIL-AI). Voice-commanded multimodal defence pipeline linking spoken mission orders to live aircraft bounding box detection.",
      architecture:
        "Containerised pipeline integrating OpenAI Whisper real-time speech transcription, a custom-trained text-to-JSON NLP parser (>85% parsing accuracy), and Vision-Language Modelling (~80% aircraft bounding box alignment accuracy).",
      stack: ["Python", "OpenAI Whisper", "NLP (>85%)", "VLM", "Docker"],
      repoUrl: "https://github.com/elim316/TIL-AI-brainhack2024-project-overview",
    },
    {
      id: "onlynotes",
      title: "OnlyNotes Note Sharing Application",
      category: "fullstack",
      categoryLabel: "Full-Stack & Cloud",
      year: "2024",
      summary:
        "Collaborative Android note-sharing, flashcard, and study-group application built with Kotlin, Jetpack Compose, Firebase, and MVVM architecture.",
      architecture:
        "Native Android client architected with Kotlin, Jetpack Compose declarative UI, and MVVM state management, backed by Firebase Authentication, Cloud Firestore real-time document sync, and Cloud Storage.",
      stack: ["Kotlin", "Jetpack Compose", "Firebase", "Android MVVM"],
      repoUrl: "https://github.com/elim316/OnlyNotes-Note-Sharing-Application",
    },
    {
      id: "lobangcube",
      title: "LobangCube Financial Wellness Platform",
      category: "fullstack",
      categoryLabel: "Full-Stack & Cloud",
      year: "2025",
      summary:
        "Interactive personal finance and budgeting analytics application built with Python and Streamlit to visualise cashflow, savings goals, and spending categories.",
      architecture:
        "Data-driven Python and Streamlit web application that ingests personal transaction ledgers, computes category-level budget variance and savings projections, and renders interactive financial health dashboards.",
      stack: ["Python", "Streamlit", "Financial Analytics", "Data Visualisation"],
      repoUrl: "https://github.com/elim316/LobangCube-showcase",
    },
  ];

  const BIBTEX_ENTRIES = {
    "11249263": `@inproceedings{lim2025uqxai,
  author    = {Lim, Elias and others},
  title     = {A Unified Framework for Interpretable and Uncertainty-Aware Battery State of Health Estimation Using Deep Neural Networks},
  booktitle = {APSIPA ASC / IEEE Xplore},
  year      = {2025},
  url       = {https://ieeexplore.ieee.org/document/11249263}
}`,
    "10892827": `@inproceedings{lim2025teamwork,
  author    = {Lim, Elias and others},
  title     = {Teamwork Assessment in Software Engineering Education},
  booktitle = {IEEE Xplore},
  year      = {2025},
  url       = {https://ieeexplore.ieee.org/document/10892827}
}`,
  };

  let activeFilter = "all";

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function clipSvgLabel(text, maxLen) {
    const clean = String(text || "").trim();
    if (clean.length <= maxLen) return clean;
    return clean.slice(0, Math.max(1, maxLen - 1)).trim();
  }

  function renderAutoBlueprintVisual(project) {
    const p = project || {};
    const rawNodes =
      Array.isArray(p.visualNodes) && p.visualNodes.length >= 3
        ? p.visualNodes
        : Array.isArray(p.stack) && p.stack.length >= 3
          ? [p.stack[0], p.stack[1], p.stack[2]]
          : ["CLIENT", (p.stack && p.stack[0]) || "CORE", "STORAGE"];

    const n1 = escapeHtml(clipSvgLabel(rawNodes[0], 11).toUpperCase());
    const n2 = escapeHtml(clipSvgLabel(rawNodes[1], 11).toUpperCase());
    const n3 = escapeHtml(clipSvgLabel(rawNodes[2], 11).toUpperCase());
    const subBadge = escapeHtml(
      clipSvgLabel((p.stack && p.stack[0]) || p.year || "GitHub", 14)
    );
    const readout = escapeHtml(
      p.readout ||
        (Array.isArray(p.stack) && p.stack.length
          ? p.stack.slice(0, 3).join(" · ")
          : "Live GitHub Repository")
    );

    return `
      <svg class="visual-svg" viewBox="0 0 320 96" aria-hidden="true">
        <path class="trace-edge" d="M 96 48 L 132 30" />
        <path class="trace-edge" d="M 96 48 L 132 68" />
        <path class="trace-edge" d="M 212 30 L 236 48" />
        <path class="trace-edge" d="M 212 68 L 236 48" />
        <path class="trace-packet" d="M 96 48 L 132 30" />
        <path class="trace-packet" d="M 212 30 L 236 48" />
        <rect class="trace-node" x="16" y="30" width="80" height="36" rx="7" />
        <text x="56" y="51" text-anchor="middle" class="visual-label">${n1}</text>
        <rect class="trace-node node-accent" x="132" y="12" width="80" height="32" rx="6" />
        <text x="172" y="31" text-anchor="middle" class="visual-badge">${n2}</text>
        <rect class="trace-node" x="132" y="52" width="80" height="32" rx="6" />
        <text x="172" y="71" text-anchor="middle" class="visual-label">${n3}</text>
        <circle class="trace-node node-accent" cx="268" cy="48" r="22" />
        <text x="268" y="51" text-anchor="middle" class="visual-badge">LIVE</text>
      </svg>
      <div class="sandbox-bar">
        <span class="sandbox-readout">${readout}</span>
        <span class="visual-badge">${subBadge}</span>
      </div>
    `;
  }

  function getProjectVisual(projectOrId) {
    const p =
      typeof projectOrId === "object" && projectOrId !== null
        ? projectOrId
        : PROJECTS.find((item) => item.id === projectOrId) || { id: projectOrId };
    const id = p.id;

    switch (id) {
      case "agent-tracer":
        return `
          <svg class="visual-svg" viewBox="0 0 320 98" aria-hidden="true">
            <path class="trace-edge" d="M 84 50 L 114 50" />
            <path class="trace-edge" d="M 206 40 L 232 28" />
            <path class="trace-edge" d="M 206 60 L 232 72" />
            <path class="trace-packet" d="M 84 50 L 114 50" />
            <path class="trace-packet" d="M 206 40 L 232 28" />
            <path class="trace-packet" d="M 206 60 L 232 72" />
            <g class="clickable-node" data-step="user">
              <rect class="trace-node" x="10" y="32" width="74" height="36" rx="7" />
              <text x="47" y="48" text-anchor="middle" class="visual-label">01 · PROMPT</text>
              <text x="47" y="60" text-anchor="middle" class="deck-svg-label">12ms</text>
            </g>
            <g class="clickable-node is-selected" data-step="planner">
              <rect class="trace-node node-accent" x="114" y="28" width="92" height="44" rx="8" />
              <text x="160" y="47" text-anchor="middle" class="visual-badge">02 · PLANNER</text>
              <text x="160" y="61" text-anchor="middle" class="visual-label">LLM · 640ms</text>
            </g>
            <g class="clickable-node" data-step="mcp">
              <rect class="trace-node node-accent" x="232" y="10" width="78" height="34" rx="6" />
              <text x="271" y="25" text-anchor="middle" class="visual-badge">03 · MCP</text>
              <text x="271" y="37" text-anchor="middle" class="deck-svg-label">310ms</text>
            </g>
            <g class="clickable-node" data-step="subagent">
              <rect class="trace-node" x="232" y="54" width="78" height="34" rx="6" />
              <text x="271" y="69" text-anchor="middle" class="visual-label">04 · SUB</text>
              <text x="271" y="81" text-anchor="middle" class="deck-svg-label">1.2s</text>
            </g>
          </svg>
          <div class="sandbox-bar" data-sandbox="agent-tracer">
            <span class="sandbox-readout" id="readout-agent-tracer">Step #02 PLANNER · 640ms</span>
            <div class="sandbox-pills">
              <button type="button" class="sandbox-pill" data-step-btn="user">#01 User</button>
              <button type="button" class="sandbox-pill active" data-step-btn="planner">#02 Plan</button>
              <button type="button" class="sandbox-pill" data-step-btn="mcp">#03 MCP</button>
              <button type="button" class="sandbox-pill" data-step-btn="subagent">#04 Sub</button>
            </div>
          </div>
        `;
      case "jetski-harness":
        return `
          <svg class="visual-svg" viewBox="0 0 320 96" aria-hidden="true">
            <defs>
              <clipPath id="harness-bar-clip">
                <rect x="28" y="75" width="264" height="6" rx="3" />
              </clipPath>
            </defs>
            <rect x="18" y="6" width="138" height="20" rx="5" fill="var(--bg-elevated)" stroke="var(--accent)" stroke-width="1.2" />
            <text x="87" y="19" text-anchor="middle" class="visual-badge">PANE 1 · AGENT CHAT</text>
            <rect x="164" y="6" width="138" height="20" rx="5" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-width="1.2" />
            <text x="233" y="19" text-anchor="middle" class="visual-label">PANE 2 · SUBAGENT</text>
            <rect x="18" y="30" width="138" height="20" rx="5" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-width="1.2" />
            <text x="87" y="43" text-anchor="middle" class="visual-label">PANE 3 · TRACE GRAPH</text>
            <rect x="164" y="30" width="138" height="20" rx="5" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-width="1.2" />
            <text x="233" y="43" text-anchor="middle" class="visual-badge" id="harness-rpc-status">71% Cached</text>
            <rect x="18" y="55" width="284" height="33" rx="6" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-width="1.2" />
            <text x="28" y="69" class="visual-label" id="harness-bar-label">CONTEXT WINDOW: 142k / 200k TOKENS</text>
            <rect x="28" y="75" width="264" height="6" rx="3" fill="var(--bg-subtle)" />
            <rect class="token-fill-bar" id="harness-token-bar" clip-path="url(#harness-bar-clip)" x="28" y="75" width="187" height="6" rx="3" fill="var(--accent)" />
          </svg>
          <div class="sandbox-bar" data-sandbox="jetski-harness">
            <span class="sandbox-readout" id="readout-jetski-harness">142k / 200k · Healthy</span>
            <div class="sandbox-pills">
              <button type="button" class="sandbox-pill" data-turn-btn="turn2">Turn 2</button>
              <button type="button" class="sandbox-pill active" data-turn-btn="turn8">Turn 8</button>
              <button type="button" class="sandbox-pill" data-turn-btn="turn14">Turn 14</button>
            </div>
          </div>
        `;
      case "meeting-prep-agent":
        return `
          <svg class="visual-svg" viewBox="0 0 320 96" aria-hidden="true">
            <rect x="14" y="18" width="84" height="56" rx="7" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-width="1.2" />
            <text x="56" y="40" text-anchor="middle" class="visual-label">STAGE 1</text>
            <text x="56" y="55" text-anchor="middle" class="visual-badge">NBD Dossier</text>
            <path class="trace-edge" d="M 98 46 L 122 46" />
            <path class="trace-packet" d="M 98 46 L 122 46" />
            <g class="check-pill c1 is-highlighted">
              <rect x="122" y="12" width="104" height="19" rx="5" fill="var(--bg-elevated)" stroke="var(--accent)" stroke-width="1.2" />
              <text x="174" y="25" text-anchor="middle" class="visual-badge">&#10003; Citations</text>
            </g>
            <g class="check-pill c2 is-highlighted">
              <rect x="122" y="36" width="104" height="19" rx="5" fill="var(--bg-elevated)" stroke="var(--accent)" stroke-width="1.2" />
              <text x="174" y="49" text-anchor="middle" class="visual-badge">&#10003; 36/36 Checks</text>
            </g>
            <g class="check-pill c3 is-highlighted">
              <rect x="122" y="60" width="104" height="19" rx="5" fill="var(--bg-elevated)" stroke="var(--accent)" stroke-width="1.2" />
              <text x="174" y="73" text-anchor="middle" class="visual-badge">&#10003; T-1h Window</text>
            </g>
            <path class="trace-edge" d="M 226 46 L 248 46" />
            <rect class="trace-node node-accent" x="248" y="27" width="58" height="38" rx="7" />
            <text x="277" y="50" text-anchor="middle" class="visual-label">BRIEF</text>
          </svg>
          <div class="sandbox-bar" data-sandbox="meeting-prep">
            <span class="sandbox-readout" id="readout-meeting-prep">Linter: 0 hallucinated URLs</span>
            <div class="sandbox-pills">
              <button type="button" class="sandbox-pill active" data-prep-btn="linter">Linter</button>
              <button type="button" class="sandbox-pill" data-prep-btn="nbd">NBD Cron</button>
              <button type="button" class="sandbox-pill" data-prep-btn="t1h">T-1h Alert</button>
            </div>
          </div>
        `;
      case "eduverse":
        return `
          <svg class="visual-svg" viewBox="0 0 320 96" aria-hidden="true">
            <defs>
              <clipPath id="kt-bars-clip">
                <rect x="20" y="20" width="280" height="56" />
              </clipPath>
            </defs>
            <text x="24" y="14" class="visual-label">KNOWLEDGE TRACING MASTERY</text>
            <text x="296" y="14" text-anchor="end" class="visual-badge">2nd Place LifeHack</text>
            <g clip-path="url(#kt-bars-clip)">
              <rect class="kt-bar b1" x="44" y="48" width="36" height="32" rx="4" fill="var(--accent-subtle)" stroke="var(--accent)" stroke-width="1.2" />
              <rect class="kt-bar b2" x="108" y="40" width="36" height="40" rx="4" fill="var(--accent-subtle)" stroke="var(--accent)" stroke-width="1.2" />
              <rect class="kt-bar b3" x="172" y="32" width="36" height="48" rx="4" fill="var(--accent)" />
              <rect class="kt-bar b1" x="236" y="42" width="36" height="38" rx="4" fill="var(--accent-subtle)" stroke="var(--accent)" stroke-width="1.2" />
            </g>
            <line x1="24" y1="76" x2="296" y2="76" stroke="var(--border-strong)" stroke-width="1.2" />
            <text x="62" y="90" text-anchor="middle" class="visual-label">ALG</text>
            <text x="126" y="90" text-anchor="middle" class="visual-label">SYS</text>
            <text x="190" y="90" text-anchor="middle" class="visual-label">ML</text>
            <text x="254" y="90" text-anchor="middle" class="visual-label">NET</text>
          </svg>
          <div class="sandbox-bar">
            <span class="sandbox-readout">PyTorch kt_models · Adaptive routing</span>
            <span class="visual-badge">Next.js + Python</span>
          </div>
        `;
      case "mindsync":
        return `
          <svg class="visual-svg" viewBox="0 0 320 96" aria-hidden="true">
            <g class="fan-card fc-left">
              <rect x="48" y="18" width="92" height="62" rx="7" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-width="1.3" />
              <text x="94" y="38" text-anchor="middle" class="visual-label">BRANCH A</text>
              <text x="94" y="54" text-anchor="middle" class="visual-badge">14 Volunteers</text>
            </g>
            <g class="fan-card fc-right">
              <rect x="180" y="18" width="92" height="62" rx="7" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-width="1.3" />
              <text x="226" y="38" text-anchor="middle" class="visual-label">BRANCH C</text>
              <text x="226" y="54" text-anchor="middle" class="visual-badge">19 Volunteers</text>
            </g>
            <g class="fan-card fc-mid">
              <rect x="112" y="12" width="96" height="68" rx="8" fill="var(--bg-elevated)" stroke="var(--accent)" stroke-width="1.6" />
              <text x="160" y="34" text-anchor="middle" class="visual-label">MINDS HUB</text>
              <text x="160" y="50" text-anchor="middle" class="visual-badge">Synchronised</text>
              <rect x="128" y="60" width="64" height="6" rx="3" fill="var(--accent-subtle)" />
            </g>
          </svg>
          <div class="sandbox-bar">
            <span class="sandbox-readout">4 roles · Real-time coverage &amp; CSV export</span>
            <span class="visual-badge">Supabase RLS</span>
          </div>
        `;
      case "multi-cloud-serverless":
        return `
          <svg class="visual-svg" viewBox="0 0 320 96" aria-hidden="true">
            <path class="trace-edge" d="M 90 24 L 118 42" />
            <path class="trace-edge" d="M 90 70 L 118 54" />
            <path class="trace-edge" d="M 202 48 L 228 30" />
            <path class="trace-edge" d="M 202 48 L 228 68" />
            <path class="trace-packet" d="M 90 24 L 118 42" />
            <path class="trace-packet" d="M 90 70 L 118 54" />
            <path class="trace-packet" d="M 202 48 L 228 30" />
            <path class="trace-packet" d="M 202 48 L 228 68" />

            <rect class="trace-node" x="14" y="10" width="76" height="28" rx="6" />
            <text x="52" y="27" text-anchor="middle" class="visual-label">TAB A · UI</text>
            <rect class="trace-node" x="14" y="56" width="76" height="28" rx="6" />
            <text x="52" y="73" text-anchor="middle" class="visual-label">TAB B · UI</text>

            <rect class="trace-node node-accent" x="118" y="24" width="84" height="48" rx="9" />
            <text x="160" y="45" text-anchor="middle" class="visual-badge">SUPABASE</text>
            <text x="160" y="59" text-anchor="middle" class="visual-label">Realtime Bus</text>

            <rect class="trace-node" x="228" y="12" width="78" height="30" rx="6" />
            <text x="267" y="30" text-anchor="middle" class="visual-label">VERCEL CDN</text>
            <rect class="trace-node node-accent" x="228" y="54" width="78" height="30" rx="6" />
            <text x="267" y="72" text-anchor="middle" class="visual-badge">AWS + IaC</text>
          </svg>
          <div class="sandbox-bar">
            <span class="sandbox-readout">Cross-tab WebSocket sync &amp; cloud-portable IaC</span>
            <span class="visual-badge">Terraform + AWS</span>
          </div>
        `;
      case "uq-xai-battery":
        return `
          <svg class="visual-svg" viewBox="0 0 320 96" aria-hidden="true">
            <text x="20" y="16" class="visual-label" id="aci-svg-title">95% ADAPTIVE CONFORMAL INTERVAL (ACI)</text>
            <path class="ci-band" id="aci-band-path" d="M 24 24 Q 110 34, 190 50 T 296 68 L 296 90 Q 190 74, 110 56 T 24 44 Z" fill="var(--accent)" />
            <path d="M 24 34 Q 110 45, 190 62 T 296 79" fill="none" stroke="var(--accent)" stroke-width="2.2" />
            <circle class="trace-node node-accent" cx="190" cy="62" r="4.5" />
          </svg>
          <div class="sandbox-bar" data-sandbox="uq-xai">
            <span class="sandbox-readout" id="readout-uq-xai">PICP: 0.952 · ECE: 0.012</span>
            <div class="sandbox-pills">
              <button type="button" class="sandbox-pill" data-ci-btn="90">90% ACI</button>
              <button type="button" class="sandbox-pill active" data-ci-btn="95">95% ACI</button>
              <button type="button" class="sandbox-pill" data-ci-btn="99">99% ACI</button>
            </div>
          </div>
        `;
      case "semantic-segmentation":
        return `
          <svg class="visual-svg" viewBox="0 0 320 96" aria-hidden="true">
            <rect x="16" y="8" width="288" height="58" rx="8" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-width="1.2" />
            <polygon points="24,60 96,34 224,34 296,60" fill="var(--accent-subtle)" stroke="var(--accent)" stroke-width="1.2" />
            <text x="90" y="54" text-anchor="middle" class="visual-label">ROAD MASK · 98%</text>
            <g class="yolo-box yb-1">
              <rect x="158" y="16" width="84" height="34" rx="5" fill="var(--bg-elevated)" stroke="var(--signal-teal)" stroke-width="1.5" />
              <text x="200" y="31" text-anchor="middle" class="visual-badge">DEEPLABV3+</text>
              <text x="200" y="43" text-anchor="middle" class="deck-svg-label">Vehicle · 0.94</text>
            </g>
            <rect x="16" y="71" width="288" height="19" rx="5" fill="var(--bg-elevated)" stroke="var(--accent)" stroke-width="1.1" />
            <text x="160" y="84" text-anchor="middle" class="visual-badge">BLIP CAPTION: &quot;Active vehicle on urban roadway&quot;</text>
          </svg>
          <div class="sandbox-bar">
            <span class="sandbox-readout">Live ResNet50 pixel masks + BLIP VLM captioning</span>
            <span class="visual-badge">PyTorch + HF</span>
          </div>
        `;
      case "transport-gpt":
        return `
          <svg class="visual-svg" viewBox="0 0 320 96" aria-hidden="true">
            <line x1="20" y1="30" x2="300" y2="30" stroke="var(--border-strong)" stroke-dasharray="6 6" />
            <line x1="20" y1="70" x2="300" y2="70" stroke="var(--border-strong)" stroke-dasharray="6 6" />
            <g class="yolo-box yb-1">
              <rect x="44" y="36" width="70" height="28" rx="4" fill="var(--accent-subtle)" stroke="var(--accent)" stroke-width="1.5" />
              <text x="79" y="53" text-anchor="middle" class="visual-badge">VEH 0.96</text>
            </g>
            <g class="yolo-box yb-2">
              <rect x="188" y="36" width="80" height="28" rx="4" fill="var(--bg-elevated)" stroke="var(--signal-teal)" stroke-width="1.5" />
              <text x="228" y="53" text-anchor="middle" class="visual-label">FLOW: MOD</text>
            </g>
            <text x="22" y="18" class="visual-label">YOLOv3 STREAM &#8594; LANGCHAIN ADVISORY</text>
          </svg>
          <div class="sandbox-bar">
            <span class="sandbox-readout">Live camera CV detection + LLM synthesis</span>
            <span class="visual-badge">NUS NCS 2024</span>
          </div>
        `;
      case "panasonic-hvac":
        return `
          <svg class="visual-svg" viewBox="0 0 320 96" aria-hidden="true">
            <g class="iso-zone iz-bottom">
              <polygon points="160,38 244,64 160,90 76,64" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-width="1.3" />
            </g>
            <g class="iso-zone iz-top">
              <polygon points="160,14 244,40 160,66 76,40" fill="var(--accent-subtle)" stroke="var(--accent)" stroke-width="1.5" />
              <text x="160" y="44" text-anchor="middle" class="visual-badge">ZONE A · 21.5°C</text>
            </g>
            <text x="20" y="18" class="visual-label">3D FLOOR PLAN</text>
          </svg>
          <div class="sandbox-bar">
            <span class="sandbox-readout">Interactive 3D zone telemetry &amp; control</span>
            <span class="visual-badge">Three.js + Svelte</span>
          </div>
        `;
      case "operation-guardian":
        return `
          <svg class="visual-svg" viewBox="0 0 320 96" aria-hidden="true">
            <rect x="14" y="12" width="132" height="32" rx="6" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-width="1.2" />
            <text x="80" y="26" text-anchor="middle" class="visual-label">WHISPER AUDIO ASR</text>
            <text x="80" y="38" text-anchor="middle" class="deck-svg-label">&quot;Track target sector 4&quot;</text>

            <rect x="14" y="52" width="132" height="32" rx="6" fill="var(--bg-elevated)" stroke="var(--accent)" stroke-width="1.3" />
            <text x="80" y="66" text-anchor="middle" class="visual-badge">NLP PARSER (&gt;85%)</text>
            <text x="80" y="78" text-anchor="middle" class="deck-svg-label">{action: &quot;LOCK&quot;, id: 4}</text>

            <path class="trace-edge" d="M 146 68 L 182 54" />
            <path class="trace-packet" d="M 146 68 L 182 54" />

            <circle cx="242" cy="48" r="36" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-width="1.2" />
            <circle cx="242" cy="48" r="22" fill="none" stroke="var(--accent)" stroke-dasharray="4 4" stroke-width="1.2" />
            <line x1="202" y1="48" x2="282" y2="48" stroke="var(--border-subtle)" />
            <line x1="242" y1="8" x2="242" y2="88" stroke="var(--border-subtle)" />
            <g class="yolo-box yb-1">
              <rect x="220" y="32" width="44" height="24" rx="4" fill="var(--accent-subtle)" stroke="var(--accent)" stroke-width="1.5" />
              <text x="242" y="47" text-anchor="middle" class="visual-badge">VLM 80%</text>
            </g>
          </svg>
          <div class="sandbox-bar">
            <span class="sandbox-readout">Semifinalist · Whisper ASR + NLP JSON + VLM lock</span>
            <span class="visual-badge">DSTA TIL-AI</span>
          </div>
        `;
      case "onlynotes":
        return `
          <svg class="visual-svg" viewBox="0 0 320 96" aria-hidden="true">
            <g class="fan-card fc-left">
              <rect x="34" y="16" width="96" height="64" rx="8" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-width="1.2" />
              <text x="82" y="36" text-anchor="middle" class="visual-label">NOTE DECK</text>
              <text x="82" y="50" text-anchor="middle" class="deck-svg-label">Markdown + PDF</text>
              <rect x="52" y="58" width="60" height="5" rx="2.5" fill="var(--bg-subtle)" />
            </g>
            <g class="fan-card fc-right">
              <rect x="190" y="16" width="96" height="64" rx="8" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-width="1.2" />
              <text x="238" y="36" text-anchor="middle" class="visual-label">FLASHCARDS</text>
              <text x="238" y="50" text-anchor="middle" class="deck-svg-label">Active Recall</text>
              <rect x="208" y="58" width="60" height="5" rx="2.5" fill="var(--bg-subtle)" />
            </g>
            <g class="fan-card fc-mid">
              <rect x="106" y="10" width="108" height="72" rx="9" fill="var(--bg-elevated)" stroke="var(--accent)" stroke-width="1.6" />
              <text x="160" y="30" text-anchor="middle" class="visual-badge">JETPACK COMPOSE</text>
              <text x="160" y="45" text-anchor="middle" class="visual-label">Firebase Sync</text>
              <rect x="124" y="55" width="72" height="14" rx="4" fill="var(--accent-subtle)" />
              <text x="160" y="65" text-anchor="middle" class="visual-badge">MVVM State</text>
            </g>
          </svg>
          <div class="sandbox-bar">
            <span class="sandbox-readout">Collaborative Android study groups &amp; flashcards</span>
            <span class="visual-badge">Kotlin + Compose</span>
          </div>
        `;
      case "lobangcube":
        return `
          <svg class="visual-svg" viewBox="0 0 320 96" aria-hidden="true">
            <text x="20" y="15" class="visual-label">CASHFLOW &amp; SAVINGS ALLOCATION</text>
            <text x="300" y="15" text-anchor="end" class="visual-badge">+24% Savings Rate</text>
            <rect x="20" y="23" width="136" height="12" rx="4" fill="var(--accent)" />
            <rect x="160" y="23" width="84" height="12" rx="4" fill="var(--signal-teal)" />
            <rect x="248" y="23" width="52" height="12" rx="4" fill="var(--signal-emerald)" />
            <path d="M 24 80 Q 95 72, 160 58 T 296 42 L 296 84 L 24 84 Z" fill="var(--accent-subtle)" />
            <path d="M 24 80 Q 95 72, 160 58 T 296 42" fill="none" stroke="var(--accent)" stroke-width="2.2" />
            <circle class="trace-node node-accent" cx="160" cy="58" r="4" />
            <circle class="trace-node node-accent" cx="296" cy="42" r="4" />
            <text x="54" y="50" class="deck-svg-label">Essentials 48%</text>
            <text x="162" y="48" class="deck-svg-label">Investments 30%</text>
          </svg>
          <div class="sandbox-bar">
            <span class="sandbox-readout">Interactive budget variance &amp; savings projections</span>
            <span class="visual-badge">Streamlit + Python</span>
          </div>
        `;
      default:
        return renderAutoBlueprintVisual(p);
    }
  }

  function getCategoryLabel(category, explicitLabel) {
    if (explicitLabel) return explicitLabel;
    if (category === "agentic") return "Agentic & DevTools";
    if (category === "ml") return "ML & Research";
    return "Full-Stack & Cloud";
  }

  function renderProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    const filtered =
      activeFilter === "all"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === activeFilter);

    grid.innerHTML = filtered
      .map(
        (p, idx) => `
      <article
        class="project-card"
        id="project-${escapeHtml(p.id)}"
        style="--card-delay: ${Math.min(idx * 55, 360)}ms"
      >
        <div class="project-body">
          <div class="project-meta-line">
            <span class="project-category">${escapeHtml(getCategoryLabel(p.category, p.categoryLabel))}</span>
            <span class="project-year">· ${escapeHtml(p.year || "2026")}</span>
          </div>
          <h3 class="project-title">
            <a href="${escapeHtml(p.repoUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(p.title)}</a>
          </h3>
          <p class="project-summary">${escapeHtml(p.summary)}</p>

          <div class="promo-links">
            <button
              type="button"
              class="apple-text-link arch-toggle-btn"
              data-drawer-target="drawer-${escapeHtml(p.id)}"
              aria-expanded="false"
            >
              <span>Technical architecture</span>
              <span class="arch-toggle-icon" aria-hidden="true">+</span>
            </button>
            <a
              class="apple-text-link"
              href="${escapeHtml(p.repoUrl)}"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Repository &#8599;</span>
            </a>
          </div>

          <div class="arch-drawer" id="drawer-${escapeHtml(p.id)}">
            <div class="arch-collapse">
              <div class="arch-collapse-inner">
                <p class="arch-text">${escapeHtml(p.architecture || p.summary)}</p>
              </div>
            </div>
          </div>

          <div class="stack-tags">
            ${(p.stack || []).map((t) => `<span class="stack-tag">${escapeHtml(t)}</span>`).join("")}
          </div>
        </div>

        <div class="project-visual">
          ${getProjectVisual(p)}
        </div>
      </article>
    `
      )
      .join("");

    attachCardInteractions();
    attachSandboxControls();
  }

  function attachCardInteractions() {
    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    });

    const toggleButtons = document.querySelectorAll(".arch-toggle-btn");
    toggleButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-drawer-target");
        const drawer = targetId ? document.getElementById(targetId) : null;
        if (!drawer) return;
        const isOpen = drawer.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
    });
  }

  function initAboutConsole() {
    const aboutStage = document.getElementById("about");
    if (!aboutStage) return;

    const chapters = {
      google: {
        bezelTitle: "INTERACTIVE ENGINEERING PROFILE · GOOGLE CLOUD SINGAPORE",
        bezelStatus: "APR 2026 TO PRESENT",
        paneLabel: "ZERO-TRUST DUAL-VPC AI AGENT LANDING ZONE",
        paneBadge: "Terraform · PSC · Cloud Run",
        readout: "Chapter 01 / 04",
        story:
          "At Google in Singapore, I architect IM8-compliant zero-trust cloud landing zones for generative AI agents using Terraform, Dual-VPC, and Private Service Connect, build native trajectory visualisers, and lead AI buildathons for over 4,000 students and engineers across NTU, GovTech, DBS, and A*STAR.",
        bar1Label: "Zero-Trust Cloud & Terraform IaC",
        bar1Val: "36 / 36 IM8 Checks",
        bar1Width: "96%",
        bar2Label: "Enablement & Buildathon Reach",
        bar2Val: "4,000+ Participants",
        bar2Width: "92%",
      },
      grab: {
        bezelTitle: "INTERACTIVE ENGINEERING PROFILE · GRAB SINGAPORE",
        bezelStatus: "JAN 2026 TO MAR 2026",
        paneLabel: "REAL-TIME FRAUD DETECTION & GOLANG RUNTIME CONTROLS",
        paneBadge: "Golang · Feature Flags · PB-Scale",
        readout: "Chapter 02 / 04",
        story:
          "At Grab, I engineered scalable Golang backend services for real-time fraud detection on petabyte-scale data infrastructure, implementing dynamic runtime feature flags, rate limiting, and high-coverage unit test suites.",
        bar1Label: "Golang Microservices & Runtime Controls",
        bar1Val: "Feature Flags + Rate Limit",
        bar1Width: "94%",
        bar2Label: "Risk Platform Scale & Test Reliability",
        bar2Val: "Petabyte-Scale Pipeline",
        bar2Width: "90%",
      },
      astar: {
        bezelTitle: "INTERACTIVE ENGINEERING PROFILE · A*STAR AI RESEARCH",
        bezelStatus: "SEP 2024 TO MAY 2025",
        paneLabel: "UNCERTAINTY-AWARE DEEP LEARNING & EXPLAINABLE AI",
        paneBadge: "PyTorch · Conformal UQ · IEEE",
        readout: "Chapter 03 / 04",
        story:
          "As an AI Research Intern at A*STAR, I designed a unified deep learning framework that quantifies both data and model uncertainty alongside SHAP and LIME attributions for battery State-of-Health estimation, published as a first-author paper at APSIPA ASC 2025 (IEEE Xplore).",
        bar1Label: "Calibrated Prediction Coverage (1 - alpha)",
        bar1Val: "90.4% Empirical Coverage",
        bar1Width: "91%",
        bar2Label: "Publication & Interpretability Rigour",
        bar2Val: "First-Author IEEE Paper",
        bar2Width: "95%",
      },
      beyond: {
        bezelTitle: "INTERACTIVE ENGINEERING PROFILE · EDUCATION, HACKATHONS & LIFE",
        bezelStatus: "GLASGOW · SIT · SINGAPORE",
        paneLabel: "HONOURS COMPUTER SCIENCE, HACKATHONS & LIFE OUTSIDE CODE",
        paneBadge: "BSc (Hons) CS · 3x Awards",
        readout: "Chapter 04 / 04",
        story:
          "I graduated with a BSc (Hons) in Computer Science (Second Upper Class) from the University of Glasgow and Singapore Institute of Technology, placing at NUS LifeHack, AISG, and DSTA BrainHack. Away from the terminal, you will find me playing basketball, on the pickleball court, or thrifting for vintage pieces.",
        bar1Label: "National Hackathons & Applied Prototypes",
        bar1Val: "3x Award Winner / Finalist",
        bar1Width: "93%",
        bar2Label: "Life Outside Code (Basketball, Pickleball, Thrift)",
        bar2Val: "Always Active",
        bar2Width: "100%",
      },
    };

    const tabBtns = aboutStage.querySelectorAll("[data-about-tab]");
    const cardBtns = aboutStage.querySelectorAll("[data-about-card]");
    const scenes = aboutStage.querySelectorAll("[data-about-scene]");

    const bezelTitleEl = document.getElementById("about-bezel-title");
    const bezelStatusEl = document.getElementById("about-bezel-status");
    const paneLabelEl = document.getElementById("about-pane-label");
    const paneBadgeEl = document.getElementById("about-pane-badge");
    const readoutEl = document.getElementById("about-active-pill-readout");
    const storyEl = document.getElementById("about-live-story");

    const bar1LabelEl = document.getElementById("about-bar1-label");
    const bar1ValEl = document.getElementById("about-bar1-val");
    const bar1FillEl = document.getElementById("about-bar1-fill");
    const bar2LabelEl = document.getElementById("about-bar2-label");
    const bar2ValEl = document.getElementById("about-bar2-val");
    const bar2FillEl = document.getElementById("about-bar2-fill");

    const order = ["google", "grab", "astar", "beyond"];
    let currentIdx = 0;
    let autoTimer = null;

    function selectChapter(key) {
      const data = chapters[key];
      if (!data) return;
      currentIdx = Math.max(0, order.indexOf(key));

      tabBtns.forEach((btn) => {
        const active = btn.getAttribute("data-about-tab") === key;
        btn.classList.toggle("active", active);
        btn.setAttribute("aria-selected", active ? "true" : "false");
      });

      cardBtns.forEach((card) => {
        const active = card.getAttribute("data-about-card") === key;
        card.classList.toggle("active", active);
      });

      scenes.forEach((scene) => {
        const active = scene.getAttribute("data-about-scene") === key;
        scene.classList.toggle("is-active", active);
      });

      if (bezelTitleEl) bezelTitleEl.textContent = data.bezelTitle;
      if (bezelStatusEl) bezelStatusEl.textContent = data.bezelStatus;
      if (paneLabelEl) paneLabelEl.textContent = data.paneLabel;
      if (paneBadgeEl) paneBadgeEl.textContent = data.paneBadge;
      if (readoutEl) readoutEl.textContent = data.readout;
      if (storyEl) storyEl.textContent = data.story;

      if (bar1LabelEl) bar1LabelEl.textContent = data.bar1Label;
      if (bar1ValEl) bar1ValEl.textContent = data.bar1Val;
      if (bar1FillEl) bar1FillEl.style.width = data.bar1Width;
      if (bar2LabelEl) bar2LabelEl.textContent = data.bar2Label;
      if (bar2ValEl) bar2ValEl.textContent = data.bar2Val;
      if (bar2FillEl) bar2FillEl.style.width = data.bar2Width;
    }

    function stopAutoCycle() {
      if (autoTimer) {
        clearInterval(autoTimer);
        autoTimer = null;
      }
    }

    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        stopAutoCycle();
        const key = btn.getAttribute("data-about-tab");
        if (key) selectChapter(key);
      });
    });

    cardBtns.forEach((card) => {
      card.addEventListener("click", () => {
        stopAutoCycle();
        const key = card.getAttribute("data-about-card");
        if (key) selectChapter(key);
      });
    });

    autoTimer = setInterval(() => {
      currentIdx = (currentIdx + 1) % order.length;
      selectChapter(order[currentIdx]);
    }, 6500);
  }

  function initFlagshipSandboxes() {
    const tracerData = {
      user: "Step #01 USER_INPUT · 12ms",
      planner: "Step #02 PLANNER · 640ms",
      mcp: "Step #03 CALL_MCP_TOOL · 310ms",
      subagent: "Step #04 SUBAGENT · 1.2s",
    };

    const fTracer = document.getElementById("flagship-tracer-sandbox");
    if (fTracer) {
      const fReadout = document.getElementById("flagship-tracer-readout");
      const fStepBtns = fTracer.querySelectorAll("[data-fstep-btn]");
      const fSvgNodes = fTracer.querySelectorAll("[data-fstep]");

      function selectFlagshipStep(stepKey) {
        if (fReadout && tracerData[stepKey]) {
          fReadout.textContent = tracerData[stepKey];
        }
        fStepBtns.forEach((b) =>
          b.classList.toggle("active", b.getAttribute("data-fstep-btn") === stepKey)
        );
        fSvgNodes.forEach((n) =>
          n.classList.toggle("is-selected", n.getAttribute("data-fstep") === stepKey)
        );
      }

      fStepBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          selectFlagshipStep(btn.getAttribute("data-fstep-btn"));
        });
      });
      fSvgNodes.forEach((node) => {
        node.addEventListener("click", () => {
          selectFlagshipStep(node.getAttribute("data-fstep"));
        });
      });

      const fTurns = {
        turn2: {
          width: 74,
          color: "var(--signal-green)",
          label: "CONTEXT SATURATION: 48k / 200k TOKENS",
          readout: "48k / 200k · 42% Cached",
        },
        turn8: {
          width: 219,
          color: "var(--accent)",
          label: "CONTEXT SATURATION: 142k / 200k TOKENS",
          readout: "142k / 200k · 71% Cached",
        },
        turn14: {
          width: 302,
          color: "var(--signal-amber)",
          label: "CONTEXT SATURATION: 196k / 200k (AUTO-COMPACT)",
          readout: "196k / 200k · Auto-Compact",
        },
      };

      const fBar = document.getElementById("flagship-token-bar");
      const fBarLabel = document.getElementById("flagship-bar-label");
      const fHarnessReadout = document.getElementById("flagship-harness-readout");
      const fTurnBtns = fTracer.querySelectorAll("[data-fturn-btn]");

      fTurnBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const key = btn.getAttribute("data-fturn-btn");
          const cfg = fTurns[key];
          if (!cfg) return;
          fTurnBtns.forEach((b) => b.classList.toggle("active", b === btn));
          if (fBar) {
            fBar.setAttribute("width", String(cfg.width));
            fBar.setAttribute("fill", cfg.color);
          }
          if (fBarLabel) fBarLabel.textContent = cfg.label;
          if (fHarnessReadout) fHarnessReadout.textContent = cfg.readout;
        });
      });
    }

    const fUq = document.getElementById("flagship-uq-sandbox");
    if (fUq) {
      const fCiLevels = {
        "90": {
          scale: 0.68,
          title: "CONFORMAL BAND (90% ACI)",
          readout: "PICP: 0.904 · ECE: 0.018",
        },
        "95": {
          scale: 1.0,
          title: "CONFORMAL BAND (95% ACI)",
          readout: "PICP: 0.952 · ECE: 0.012",
        },
        "99": {
          scale: 1.38,
          title: "CONFORMAL BAND (99% ACI)",
          readout: "PICP: 0.989 · ECE: 0.009",
        },
      };

      const fBand = document.getElementById("flagship-aci-band");
      const fTitle = document.getElementById("flagship-aci-title");
      const fReadout = document.getElementById("flagship-aci-readout");
      const fCiBtns = fUq.querySelectorAll("[data-fci-btn]");

      fCiBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const key = btn.getAttribute("data-fci-btn");
          const cfg = fCiLevels[key];
          if (!cfg) return;
          fCiBtns.forEach((b) => b.classList.toggle("active", b === btn));
          if (fBand) fBand.style.setProperty("--ci-scale", String(cfg.scale));
          if (fTitle) fTitle.textContent = cfg.title;
          if (fReadout) fReadout.textContent = cfg.readout;
        });
      });
    }
  }

  function attachSandboxControls() {
    const tracerData = {
      user: "Step #01 USER_INPUT · 12ms",
      planner: "Step #02 PLANNER · 640ms",
      mcp: "Step #03 CALL_MCP_TOOL · 310ms",
      subagent: "Step #04 SUBAGENT · 1.2s",
    };

    const tracerCard = document.getElementById("project-agent-tracer");
    if (tracerCard) {
      const readout = document.getElementById("readout-agent-tracer");
      const stepBtns = tracerCard.querySelectorAll("[data-step-btn]");
      const svgNodes = tracerCard.querySelectorAll("[data-step]");

      function selectTracerStep(stepKey) {
        if (readout && tracerData[stepKey]) {
          readout.textContent = tracerData[stepKey];
        }
        stepBtns.forEach((b) =>
          b.classList.toggle("active", b.getAttribute("data-step-btn") === stepKey)
        );
        svgNodes.forEach((n) =>
          n.classList.toggle("is-selected", n.getAttribute("data-step") === stepKey)
        );
      }

      stepBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          selectTracerStep(btn.getAttribute("data-step-btn"));
        });
      });
      svgNodes.forEach((node) => {
        node.addEventListener("click", () => {
          selectTracerStep(node.getAttribute("data-step"));
        });
      });
    }

    const harnessTurns = {
      turn2: {
        width: 63,
        color: "var(--signal-green)",
        label: "CONTEXT WINDOW: 48k / 200k TOKENS",
        rpc: "42% Cached",
        readout: "48k / 200k · Fresh",
      },
      turn8: {
        width: 187,
        color: "var(--accent)",
        label: "CONTEXT WINDOW: 142k / 200k TOKENS",
        rpc: "71% Cached",
        readout: "142k / 200k · Healthy",
      },
      turn14: {
        width: 259,
        color: "var(--signal-amber)",
        label: "CONTEXT WINDOW: 196k / 200k (AUTO-COMPACT)",
        rpc: "86% Cached",
        readout: "196k / 200k · Compact",
      },
    };

    const harnessCard = document.getElementById("project-jetski-harness");
    if (harnessCard) {
      const bar = document.getElementById("harness-token-bar");
      const barLabel = document.getElementById("harness-bar-label");
      const rpcStatus = document.getElementById("harness-rpc-status");
      const readout = document.getElementById("readout-jetski-harness");
      const turnBtns = harnessCard.querySelectorAll("[data-turn-btn]");

      turnBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const key = btn.getAttribute("data-turn-btn");
          const cfg = harnessTurns[key];
          if (!cfg) return;
          turnBtns.forEach((b) => b.classList.toggle("active", b === btn));
          if (bar) {
            bar.setAttribute("width", String(cfg.width));
            bar.setAttribute("fill", cfg.color);
          }
          if (barLabel) barLabel.textContent = cfg.label;
          if (rpcStatus) rpcStatus.textContent = cfg.rpc;
          if (readout) readout.textContent = cfg.readout;
        });
      });
    }

    const prepData = {
      linter: "Linter: 0 hallucinated URLs",
      nbd: "Stage 1: 18:00 SGT NBD brief",
      t1h: "Stage 2: 60-min T-1h window",
    };

    const prepCard = document.getElementById("project-meeting-prep-agent");
    if (prepCard) {
      const readout = document.getElementById("readout-meeting-prep");
      const btns = prepCard.querySelectorAll("[data-prep-btn]");
      btns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const key = btn.getAttribute("data-prep-btn");
          btns.forEach((b) => b.classList.toggle("active", b === btn));
          if (readout && prepData[key]) {
            readout.textContent = prepData[key];
          }
        });
      });
    }

    const ciLevels = {
      "90": {
        scale: 0.68,
        title: "90% ADAPTIVE CONFORMAL INTERVAL (ACI)",
        readout: "PICP: 0.904 · ECE: 0.018",
      },
      "95": {
        scale: 1.0,
        title: "95% ADAPTIVE CONFORMAL INTERVAL (ACI)",
        readout: "PICP: 0.952 · ECE: 0.012",
      },
      "99": {
        scale: 1.38,
        title: "99% ADAPTIVE CONFORMAL INTERVAL (ACI)",
        readout: "PICP: 0.989 · ECE: 0.009",
      },
    };

    const uqCard = document.getElementById("project-uq-xai-battery");
    if (uqCard) {
      const band = document.getElementById("aci-band-path");
      const title = document.getElementById("aci-svg-title");
      const readout = document.getElementById("readout-uq-xai");
      const ciBtns = uqCard.querySelectorAll("[data-ci-btn]");

      ciBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const key = btn.getAttribute("data-ci-btn");
          const cfg = ciLevels[key];
          if (!cfg) return;
          ciBtns.forEach((b) => b.classList.toggle("active", b === btn));
          if (band) band.style.setProperty("--ci-scale", String(cfg.scale));
          if (title) title.textContent = cfg.title;
          if (readout) readout.textContent = cfg.readout;
        });
      });
    }
  }

  function formatRepoSlugToTitle(name) {
    return String(name || "")
      .replace(/[-_]+/g, " ")
      .replace(/\b\w/g, (ch) => ch.toUpperCase());
  }

  function inferRepoCategory(repo) {
    const text = [
      repo.name || "",
      repo.description || "",
      repo.language || "",
      ...(Array.isArray(repo.topics) ? repo.topics : []),
    ]
      .join(" ")
      .toLowerCase();

    if (
      /\b(agent|mcp|llm|prompt|tracer|harness|autonomous|langchain|gemini)\b/.test(
        text
      )
    ) {
      return "agentic";
    }
    if (
      /\b(ml|pytorch|tensorflow|keras|vision|segmentation|yolo|whisper|conformal|xai|shap|deep-learning|neural)\b/.test(
        text
      ) ||
      repo.language === "Jupyter Notebook"
    ) {
      return "ml";
    }
    return "fullstack";
  }

  async function initScalableProjects() {
    let config = {
      githubUsername: "elim316",
      autoDiscoverNewGithubRepos: true,
      excludedRepos: [
        "elim316",
        "elim316.github.io",
        "CSC2106-IoT",
        "real-time-cv-vlm-pipeline",
        "WeatherPredictor",
        "yolov6-object-detector",
        "Opencv-real-time-face-detection",
        "INF2007_Week2_Lab",
        "mylab2",
        "Google-Certificate---Introduction-to-Github",
        "Wind-City-BrainHack-2023",
        "COMPUTERFUNCTION-Easy",
      ],
    };

    try {
      const res = await fetch("./projects.json", { cache: "no-cache" });
      if (res.ok) {
        const payload = await res.json();
        if (payload && typeof payload === "object") {
          if (payload.config) {
            config = Object.assign(config, payload.config);
          }
          if (Array.isArray(payload.projects) && payload.projects.length > 0) {
            PROJECTS.length = 0;
            payload.projects.forEach((item) => PROJECTS.push(item));
            updateFilterCounts();
            renderProjects();
          }
        }
      }
    } catch (_err) {
      /* Fallback to built-in PROJECTS when opened via file:// */
    }

    if (!config.autoDiscoverNewGithubRepos || !config.githubUsername) return;

    try {
      const cacheKey = `gh_repos_v3_${config.githubUsername}`;
      let repos = null;
      const cachedRaw = sessionStorage.getItem(cacheKey);
      if (cachedRaw) {
        const parsed = JSON.parse(cachedRaw);
        if (parsed && Date.now() - parsed.ts < 15 * 60 * 1000) {
          repos = parsed.data;
        }
      }

      if (!repos) {
        const ghRes = await fetch(
          `https://api.github.com/users/${encodeURIComponent(config.githubUsername)}/repos?sort=updated&per_page=100`
        );
        if (ghRes.ok) {
          repos = await ghRes.json();
          sessionStorage.setItem(
            cacheKey,
            JSON.stringify({ ts: Date.now(), data: repos })
          );
        }
      }

      if (!Array.isArray(repos)) return;

      const excludedSet = new Set(
        (config.excludedRepos || []).map((r) => String(r).toLowerCase())
      );
      const knownUrls = new Set(
        PROJECTS.map((p) => String(p.repoUrl || "").toLowerCase().replace(/\/+$/, ""))
      );

      const publicNonFork = repos.filter(
        (r) =>
          r &&
          !r.fork &&
          !r.archived &&
          !excludedSet.has(String(r.name || "").toLowerCase())
      );

      let addedAny = false;
      publicNonFork.forEach((repo) => {
        const htmlUrl = String(repo.html_url || "").replace(/\/+$/, "");
        if (!htmlUrl || knownUrls.has(htmlUrl.toLowerCase())) return;

        const category = inferRepoCategory(repo);
        const year = repo.created_at
          ? String(new Date(repo.created_at).getFullYear())
          : String(new Date().getFullYear());
        const topics = Array.isArray(repo.topics) ? repo.topics.slice(0, 3) : [];
        const stack = [
          ...(repo.language ? [repo.language] : []),
          ...topics,
        ].slice(0, 4);
        if (stack.length === 0) stack.push("GitHub");

        PROJECTS.push({
          id: String(repo.name || "repo")
            .toLowerCase()
            .replace(/[^a-z0-9-]+/g, "-"),
          title: formatRepoSlugToTitle(repo.name),
          category,
          categoryLabel: getCategoryLabel(category),
          year,
          summary:
            repo.description ||
            `Public ${repo.language || "software"} repository hosted on GitHub (@${config.githubUsername}).`,
          architecture:
            repo.description ||
            `Automatically discovered from GitHub (@${config.githubUsername}/${repo.name}). Add an entry in projects.json to customise technical architecture notes.`,
          stack,
          repoUrl: htmlUrl,
        });
        knownUrls.add(htmlUrl.toLowerCase());
        addedAny = true;
      });

      const countEl = document.getElementById("hero-repo-count");
      if (countEl) {
        countEl.textContent = `${Math.max(PROJECTS.length, publicNonFork.length)} PUBLIC REPOS`;
      }

      if (addedAny) {
        updateFilterCounts();
        renderProjects();
      }
    } catch (_err) {
      /* Ignore GitHub API offline/rate-limit errors gracefully */
    }
  }

  /* Apple-Style Scroll-Driven 3D Stage Physics Across All Stages */
  function initHeroScrollPhysics() {
    const allStages = document.querySelectorAll(".hero-stage, .repo-showcase.scroll-stage");
    if (!allStages.length) return;

    let ticking = false;

    function updateScrollPhysics() {
      const scrollY = window.scrollY || window.pageYOffset;
      const vh = Math.max(window.innerHeight || 800, 500);

      allStages.forEach((stage, idx) => {
        const deck = stage.querySelector(".hardware-deck");
        const wordmark = stage.querySelector(".metallic-wordmark");
        if (!deck || !wordmark) return;

        let progress = 0;
        if (idx === 0) {
          const heroHeight = Math.max(stage.offsetHeight, 500);
          progress = Math.min(Math.max(scrollY / (heroHeight * 0.65), 0), 1);
        } else {
          const rect = stage.getBoundingClientRect();
          const startTop = vh * 0.88;
          const endTop = vh * 0.14;
          progress = Math.min(Math.max((startTop - rect.top) / (startTop - endTop), 0), 1);
        }

        const tilt = (1 - progress) * 14;
        const deckScale = 0.95 + progress * 0.05;
        const deckY = idx === 0 ? -progress * 14 : (1 - progress) * 20;
        const wordmarkY = idx === 0 ? progress * 28 : -16 + progress * 34;
        const wordmarkScale = 1.02 - progress * 0.06;

        deck.style.setProperty("--deck-tilt", `${tilt.toFixed(2)}deg`);
        deck.style.setProperty("--deck-scale", deckScale.toFixed(3));
        deck.style.setProperty("--deck-y", `${deckY.toFixed(1)}px`);
        wordmark.style.setProperty("--wordmark-y", `${wordmarkY.toFixed(1)}px`);
        wordmark.style.setProperty("--wordmark-scale", wordmarkScale.toFixed(3));
      });

      ticking = false;
    }

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          requestAnimationFrame(updateScrollPhysics);
          ticking = true;
        }
      },
      { passive: true }
    );

    window.addEventListener("resize", updateScrollPhysics);
    updateScrollPhysics();
  }

  function updateFilterCounts() {
    const counts = {
      all: PROJECTS.length,
      agentic: PROJECTS.filter((p) => p.category === "agentic").length,
      fullstack: PROJECTS.filter((p) => p.category === "fullstack").length,
      ml: PROJECTS.filter((p) => p.category === "ml").length,
    };
    Object.keys(counts).forEach((key) => {
      const el = document.getElementById(`count-${key}`);
      if (el) el.textContent = `${counts[key]}`;
    });
  }

  function syncSlidingPill(containerEl, pillEl, activeEl) {
    if (!containerEl || !pillEl || !activeEl) return;
    const containerRect = containerEl.getBoundingClientRect();
    const activeRect = activeEl.getBoundingClientRect();
    const offsetLeft = activeRect.left - containerRect.left - 4;
    pillEl.style.width = `${activeRect.width}px`;
    pillEl.style.transform = `translateX(${offsetLeft}px)`;
  }

  function setFilterCategory(category) {
    const bar = document.getElementById("filter-bar");
    const pill = document.getElementById("filter-pill-bg");
    const buttons = document.querySelectorAll(".filter-btn");
    activeFilter = category || "all";
    buttons.forEach((b) => {
      const isMatch = b.getAttribute("data-filter") === activeFilter;
      b.classList.toggle("active", isMatch);
      b.setAttribute("aria-selected", isMatch ? "true" : "false");
    });
    const activeBtn = document.querySelector(".filter-btn.active");
    syncSlidingPill(bar, pill, activeBtn);
    renderProjects();
  }

  function initFilters() {
    const bar = document.getElementById("filter-bar");
    const pill = document.getElementById("filter-pill-bg");
    const buttons = document.querySelectorAll(".filter-btn");

    function updateActiveFilterPill() {
      const activeBtn = document.querySelector(".filter-btn.active");
      syncSlidingPill(bar, pill, activeBtn);
    }

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        setFilterCategory(btn.getAttribute("data-filter") || "all");
      });
    });

    window.addEventListener("resize", updateActiveFilterPill);
    requestAnimationFrame(updateActiveFilterPill);
  }

  function initNavHighlight() {
    const links = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll("[data-section-target]");
    if ("IntersectionObserver" in window && sections.length > 0) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = entry.target.getAttribute("data-section-target");
              links.forEach((l) => {
                l.classList.toggle("active", l.getAttribute("data-section") === id);
              });
            }
          });
        },
        { rootMargin: "-25% 0px -55% 0px", threshold: 0.05 }
      );
      sections.forEach((s) => observer.observe(s));
    }
  }

  function initScrollReveal() {
    const items = document.querySelectorAll(".reveal-on-scroll");
    const stages = document.querySelectorAll(".scroll-stage");

    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      stages.forEach((el) => el.classList.add("is-inview"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            entry.target.classList.add("is-inview");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    items.forEach((el) => observer.observe(el));
    stages.forEach((el) => observer.observe(el));
  }

  async function copyTextToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    return false;
  }

  function initBibtexButtons() {
    const buttons = document.querySelectorAll(".bibtex-btn");
    buttons.forEach((btn) => {
      btn.addEventListener("click", async () => {
        const docId = btn.getAttribute("data-doc-id");
        const bibtex = docId ? BIBTEX_ENTRIES[docId] : null;
        if (!bibtex) return;
        const label = btn.querySelector(".bibtex-label");
        try {
          await copyTextToClipboard(bibtex);
          btn.classList.add("copied");
          if (label) label.textContent = "Copied BibTeX";
          setTimeout(() => {
            btn.classList.remove("copied");
            if (label) label.textContent = "Copy BibTeX";
          }, 2000);
        } catch (_) {}
      });
    });
  }

  function initLocalClock() {
    const el = document.getElementById("local-time-display");
    if (!el) return;

    function updateClock() {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Singapore",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });
        el.textContent = `Singapore · ${formatter.format(now)} SGT`;
      } catch (_) {
        el.textContent = "Singapore (GMT+8)";
      }
    }

    updateClock();
    setInterval(updateClock, 30000);
  }

  function applyTheme(theme) {
    const clean = theme === "dark" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", clean);
    try {
      localStorage.setItem("eliaslim_theme_pref", clean);
    } catch (_) {}
    const label = document.getElementById("theme-toggle-label");
    if (label) {
      label.textContent = clean === "dark" ? "Light" : "Dark";
    }
  }

  function toggleTheme() {
    const cur = document.documentElement.getAttribute("data-theme");
    applyTheme(cur === "dark" ? "light" : "dark");
  }

  function initTheme() {
    let saved = null;
    try {
      saved = localStorage.getItem("eliaslim_theme_pref");
    } catch (_) {}
    applyTheme(saved || "light");

    const btn = document.getElementById("theme-toggle-btn");
    if (btn) {
      btn.addEventListener("click", toggleTheme);
    }
  }

  /* Command Palette (Cmd+K / Ctrl+K) */
  function initCommandPalette() {
    const backdrop = document.getElementById("cmd-backdrop");
    const input = document.getElementById("cmd-input");
    const resultsEl = document.getElementById("cmd-results");
    const triggerBtn = document.getElementById("cmd-palette-trigger");
    const escBtn = document.getElementById("cmd-esc-btn");
    if (!backdrop || !input || !resultsEl) return;

    let selectedIdx = 0;
    let currentItems = [];

    const baseCommands = [
      {
        title: "Jump to About & Background",
        sub: "Google Cloud & AI Engineer, Grab, A*STAR Research, Glasgow & SIT",
        badge: "About",
        action: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        title: "Jump to Featured Repositories",
        sub: "Jetski Agent Tracer, Meeting Prep Agent, and Battery Conformal Prediction",
        badge: "Featured",
        action: () => document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        title: "Toggle Light / Dark Theme",
        sub: "Switch between Alabaster Light and Obsidian Dark",
        badge: "Action",
        action: () => toggleTheme(),
      },
      {
        title: "Filter: Agentic & DevTools Projects",
        sub: "Show Agent Tracer, Jetski Harness, and Meeting Prep Agent",
        badge: "Filter",
        action: () => {
          setFilterCategory("agentic");
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        },
      },
      {
        title: "Filter: Full-Stack & Cloud Projects",
        sub: "Show EduVerse, MINDSync, Multi-Cloud Serverless, and Panasonic HVAC",
        badge: "Filter",
        action: () => {
          setFilterCategory("fullstack");
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        },
      },
      {
        title: "Filter: ML & Research Projects",
        sub: "Show Battery UQ & XAI, Semantic Segmentation, TransportGPT, and Air Defence",
        badge: "Filter",
        action: () => {
          setFilterCategory("ml");
          document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
        },
      },
      {
        title: "Jump to Experience & Education",
        sub: "Google, Grab, A*STAR, University of Glasgow & SIT",
        badge: "Section",
        action: () => document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        title: "Jump to Peer-Reviewed Research",
        sub: "IEEE Xplore papers and BibTeX citations",
        badge: "Section",
        action: () =>
          document.getElementById("publications")?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        title: "Copy BibTeX: UQ & Explainable AI for Battery Analytics",
        sub: "IEEE Xplore Document 11249263",
        badge: "BibTeX",
        action: () => copyTextToClipboard(BIBTEX_ENTRIES["11249263"]),
      },
      {
        title: "Copy BibTeX: Teamwork Assessment in Software Engineering Education",
        sub: "IEEE Xplore Document 10892827",
        badge: "BibTeX",
        action: () => copyTextToClipboard(BIBTEX_ENTRIES["10892827"]),
      },
      ...PROJECTS.map((p) => ({
        title: p.title,
        sub: `${p.categoryLabel} · ${p.stack.join(", ")}`,
        badge: "Project",
        action: () => {
          setFilterCategory("all");
          setTimeout(() => {
            const card = document.getElementById(`project-${p.id}`);
            if (card) {
              card.scrollIntoView({ behavior: "smooth", block: "center" });
              const drawer = document.getElementById(`drawer-${p.id}`);
              if (drawer) drawer.classList.add("is-open");
            }
          }, 80);
        },
      })),
      {
        title: "Open GitHub Profile (@elim316)",
        sub: "https://github.com/elim316",
        badge: "External",
        action: () => window.open("https://github.com/elim316", "_blank", "noopener"),
      },
      {
        title: "Open LinkedIn Profile",
        sub: "https://linkedin.com/in/eliaslim",
        badge: "External",
        action: () => window.open("https://linkedin.com/in/eliaslim", "_blank", "noopener"),
      },
      {
        title: "Open Google Scholar Profile",
        sub: "Published IEEE Xplore papers",
        badge: "External",
        action: () =>
          window.open("https://scholar.google.com/citations?user=f2hfYeoAAAAJ", "_blank", "noopener"),
      },
    ];

    function renderResults() {
      const q = input.value.trim().toLowerCase();
      currentItems = baseCommands.filter(
        (item) =>
          !q ||
          item.title.toLowerCase().includes(q) ||
          item.sub.toLowerCase().includes(q) ||
          item.badge.toLowerCase().includes(q)
      );

      if (selectedIdx >= currentItems.length) {
        selectedIdx = Math.max(0, currentItems.length - 1);
      }

      if (currentItems.length === 0) {
        resultsEl.innerHTML = `<div class="cmd-empty">No matching projects or actions found.</div>`;
        return;
      }

      resultsEl.innerHTML = currentItems
        .map(
          (item, idx) => `
        <div
          class="cmd-item ${idx === selectedIdx ? "selected" : ""}"
          role="option"
          aria-selected="${idx === selectedIdx ? "true" : "false"}"
          data-cmd-idx="${idx}"
        >
          <div class="cmd-item-left">
            <span class="cmd-item-title">${escapeHtml(item.title)}</span>
            <span class="cmd-item-sub">${escapeHtml(item.sub)}</span>
          </div>
          <span class="cmd-item-badge">${escapeHtml(item.badge)}</span>
        </div>
      `
        )
        .join("");

      const optionEls = resultsEl.querySelectorAll(".cmd-item");
      optionEls.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          selectedIdx = Number(el.getAttribute("data-cmd-idx") || 0);
          optionEls.forEach((opt, i) => opt.classList.toggle("selected", i === selectedIdx));
        });
        el.addEventListener("click", () => {
          const idx = Number(el.getAttribute("data-cmd-idx") || 0);
          const chosen = currentItems[idx];
          closePalette();
          if (chosen) chosen.action();
        });
      });
    }

    function openPalette() {
      backdrop.classList.add("is-open");
      backdrop.setAttribute("aria-hidden", "false");
      input.value = "";
      selectedIdx = 0;
      renderResults();
      requestAnimationFrame(() => input.focus());
    }

    function closePalette() {
      backdrop.classList.remove("is-open");
      backdrop.setAttribute("aria-hidden", "true");
    }

    if (triggerBtn) triggerBtn.addEventListener("click", openPalette);
    if (escBtn) escBtn.addEventListener("click", closePalette);

    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closePalette();
    });

    input.addEventListener("input", () => {
      selectedIdx = 0;
      renderResults();
    });

    window.addEventListener("keydown", (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (backdrop.classList.contains("is-open")) {
          closePalette();
        } else {
          openPalette();
        }
        return;
      }

      if (!backdrop.classList.contains("is-open")) return;

      if (e.key === "Escape") {
        e.preventDefault();
        closePalette();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (currentItems.length > 0) {
          selectedIdx = (selectedIdx + 1) % currentItems.length;
          renderResults();
          const activeEl = resultsEl.querySelector(".cmd-item.selected");
          if (activeEl) activeEl.scrollIntoView({ block: "nearest" });
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (currentItems.length > 0) {
          selectedIdx = (selectedIdx - 1 + currentItems.length) % currentItems.length;
          renderResults();
          const activeEl = resultsEl.querySelector(".cmd-item.selected");
          if (activeEl) activeEl.scrollIntoView({ block: "nearest" });
        }
      } else if (e.key === "Enter") {
        e.preventDefault();
        const chosen = currentItems[selectedIdx];
        closePalette();
        if (chosen) chosen.action();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    updateFilterCounts();
    renderProjects();
    initAboutConsole();
    initFlagshipSandboxes();
    initHeroScrollPhysics();
    initFilters();
    initNavHighlight();
    initScrollReveal();
    initBibtexButtons();
    initLocalClock();
    initCommandPalette();
    initScalableProjects();
  });
})();
