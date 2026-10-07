(function () {
  "use strict";

  const PROJECTS = [
    /* [JUMPGATE HIDDEN — UNCOMMENT THIS OBJECT TO RE-ENABLE JUMPGATE IN PROJECTS]
    {
      id: "jumpgate-agentic-lz",
      title: "Jumpgate: Zero-Trust Agentic AI Landing Zone & Vending Machine",
      category: "agentic",
      categoryLabel: "Agentic & Cloud Security",
      year: "2026",
      summary:
        "Self-service Dual-VPC cloud landing zone and 14-step Vending Machine Agent that compresses 4 to 6 weeks of setup and IM8 security verification into under 3 minutes, driving $1.96M in realised public sector ARR (+$1.46M pipeline).",
      architecture:
        "Separates Ingress (Regional HTTPS ALB with TLS 1.3, Cloud Armor OWASP WAF, Serverless NEG, IAM-locked Cloud Run) from Egress (Secure Web Proxy Layer 7 domain allowlisting, Private Service Connect to Vertex AI, non-root SHA-256 pinned containers) in Terraform. Paired with a 4-agent, 14-step ADLC pipeline enforcing an >=0.85 LLM-as-a-Judge quality gate and passing 14/14 Ingress runtime and 18/18 Egress static security checks.",
      stack: ["Terraform", "Dual-VPC & PSC", "14-Step ADLC", "IM8 Security"],
      repoUrl: "https://github.com/RZOWQ/trainee-project-jumpgate-agentic-lz",
      repoLabel: "Landing Zone Repo",
      secondaryRepoUrl: "https://github.com/jarrettyeo/vending-machine-agent",
      secondaryRepoLabel: "Vending Machine Repo",
    },
    */
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
      repoUrl: "https://github.com/elim316/real-time-cv-vlm-pipeline",
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

  let visualInstanceCounter = 0;

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function sanitizeHttpUrl(rawUrl, fallback = "https://github.com/elim316") {
    try {
      const parsed = new URL(String(rawUrl || "").trim());
      if (parsed.protocol === "https:" || parsed.protocol === "http:") {
        return parsed.href;
      }
    } catch (_) {}
    return fallback;
  }

  function sanitizeDomSlug(rawId) {
    return String(rawId || "")
      .toLowerCase()
      .replace(/[^a-z0-9-]+/g, "-")
      .replace(/^-+|-+$/g, "");
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
          ? p.stack.slice(0, 3).join(", ")
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
    const uid = ++visualInstanceCounter;

    switch (id) {
      case "jumpgate-agentic-lz":
        return `
          <svg class="visual-svg" viewBox="0 0 320 98" aria-hidden="true">
            <path class="trace-edge" d="M 88 50 L 114 50" />
            <path class="trace-edge" d="M 206 38 L 232 28" />
            <path class="trace-edge" d="M 206 62 L 232 72" />
            <path class="trace-packet" d="M 88 50 L 114 50" />
            <path class="trace-packet" d="M 206 38 L 232 28" />
            <path class="trace-packet" d="M 206 62 L 232 72" />
            <g class="clickable-node is-selected" data-jg="vpc">
              <rect class="trace-node node-accent" x="10" y="28" width="78" height="44" rx="7" />
              <text x="49" y="46" text-anchor="middle" class="visual-badge">INGRESS VPC</text>
              <text x="49" y="59" text-anchor="middle" class="deck-svg-label">14/14 WAF</text>
            </g>
            <g class="clickable-node" data-jg="adlc">
              <rect class="trace-node node-accent" x="114" y="26" width="92" height="48" rx="8" />
              <text x="160" y="46" text-anchor="middle" class="visual-badge">14-STEP ADLC</text>
              <text x="160" y="61" text-anchor="middle" class="visual-label">&lt; 3m, &gt;=0.85</text>
            </g>
            <g class="clickable-node" data-jg="egress">
              <rect class="trace-node" x="232" y="10" width="78" height="36" rx="6" />
              <text x="271" y="25" text-anchor="middle" class="visual-badge">PSC + SWP</text>
              <text x="271" y="37" text-anchor="middle" class="deck-svg-label">18/18 Egress</text>
            </g>
            <g class="clickable-node" data-jg="arr">
              <rect class="trace-node" x="232" y="54" width="78" height="36" rx="6" />
              <text x="271" y="69" text-anchor="middle" class="visual-label">IMPACT</text>
              <text x="271" y="81" text-anchor="middle" class="deck-svg-label">$1.96M ARR</text>
            </g>
          </svg>
          <div class="sandbox-bar" data-sandbox="jumpgate">
            <span class="sandbox-readout" data-role="readout-jumpgate">Dual-VPC: 14/14 Ingress &amp; 18/18 Egress IM8 PASS</span>
            <div class="sandbox-pills">
              <button type="button" class="sandbox-pill active" data-jg-btn="vpc">32/32 IM8</button>
              <button type="button" class="sandbox-pill" data-jg-btn="adlc">&lt; 3m ADLC</button>
              <button type="button" class="sandbox-pill" data-jg-btn="arr">$1.96M ARR</button>
            </div>
          </div>
        `;
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
              <text x="47" y="48" text-anchor="middle" class="visual-label">01: PROMPT</text>
              <text x="47" y="60" text-anchor="middle" class="deck-svg-label">12ms</text>
            </g>
            <g class="clickable-node is-selected" data-step="planner">
              <rect class="trace-node node-accent" x="114" y="28" width="92" height="44" rx="8" />
              <text x="160" y="47" text-anchor="middle" class="visual-badge">02: PLANNER</text>
              <text x="160" y="61" text-anchor="middle" class="visual-label">LLM, 640ms</text>
            </g>
            <g class="clickable-node" data-step="mcp">
              <rect class="trace-node node-accent" x="232" y="10" width="78" height="34" rx="6" />
              <text x="271" y="25" text-anchor="middle" class="visual-badge">03: MCP</text>
              <text x="271" y="37" text-anchor="middle" class="deck-svg-label">310ms</text>
            </g>
            <g class="clickable-node" data-step="subagent">
              <rect class="trace-node" x="232" y="54" width="78" height="34" rx="6" />
              <text x="271" y="69" text-anchor="middle" class="visual-label">04: SUB</text>
              <text x="271" y="81" text-anchor="middle" class="deck-svg-label">1.2s</text>
            </g>
          </svg>
          <div class="sandbox-bar" data-sandbox="agent-tracer">
            <span class="sandbox-readout" data-role="readout-agent-tracer">Step #02 PLANNER, 640ms</span>
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
              <clipPath id="harness-bar-clip-${uid}">
                <rect x="28" y="75" width="264" height="6" rx="3" />
              </clipPath>
            </defs>
            <rect x="18" y="6" width="138" height="20" rx="5" fill="var(--bg-elevated)" stroke="var(--accent)" stroke-width="1.2" />
            <text x="87" y="19" text-anchor="middle" class="visual-badge">PANE 1: AGENT CHAT</text>
            <rect x="164" y="6" width="138" height="20" rx="5" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-width="1.2" />
            <text x="233" y="19" text-anchor="middle" class="visual-label">PANE 2: SUBAGENT</text>
            <rect x="18" y="30" width="138" height="20" rx="5" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-width="1.2" />
            <text x="87" y="43" text-anchor="middle" class="visual-label">PANE 3: TRACE GRAPH</text>
            <rect x="164" y="30" width="138" height="20" rx="5" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-width="1.2" />
            <text x="233" y="43" text-anchor="middle" class="visual-badge" data-role="harness-rpc-status">71% Cached</text>
            <rect x="18" y="55" width="284" height="33" rx="6" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-width="1.2" />
            <text x="28" y="69" class="visual-label" data-role="harness-bar-label">CONTEXT WINDOW: 142k / 200k TOKENS</text>
            <rect x="28" y="75" width="264" height="6" rx="3" fill="var(--bg-subtle)" />
            <rect class="token-fill-bar" data-role="harness-token-bar" clip-path="url(#harness-bar-clip-${uid})" x="28" y="75" width="187" height="6" rx="3" fill="var(--accent)" />
          </svg>
          <div class="sandbox-bar" data-sandbox="jetski-harness">
            <span class="sandbox-readout" data-role="readout-jetski-harness">142k / 200k, Healthy</span>
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
            <span class="sandbox-readout" data-role="readout-meeting-prep">Linter: 0 hallucinated URLs</span>
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
              <clipPath id="kt-bars-clip-${uid}">
                <rect x="20" y="20" width="280" height="56" />
              </clipPath>
            </defs>
            <text x="24" y="14" class="visual-label">KNOWLEDGE TRACING MASTERY</text>
            <text x="296" y="14" text-anchor="end" class="visual-badge">2nd Place LifeHack</text>
            <g clip-path="url(#kt-bars-clip-${uid})">
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
            <span class="sandbox-readout">PyTorch kt_models, Adaptive routing</span>
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
            <span class="sandbox-readout">4 roles, Real-time coverage &amp; CSV export</span>
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
            <text x="52" y="27" text-anchor="middle" class="visual-label">TAB A: UI</text>
            <rect class="trace-node" x="14" y="56" width="76" height="28" rx="6" />
            <text x="52" y="73" text-anchor="middle" class="visual-label">TAB B: UI</text>

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
            <text x="20" y="16" class="visual-label" data-role="aci-svg-title">95% ADAPTIVE CONFORMAL INTERVAL (ACI)</text>
            <path class="ci-band" data-role="aci-band-path" d="M 24 24 Q 110 34, 190 50 T 296 68 L 296 90 Q 190 74, 110 56 T 24 44 Z" fill="var(--accent)" />
            <path d="M 24 34 Q 110 45, 190 62 T 296 79" fill="none" stroke="var(--accent)" stroke-width="2.2" />
            <circle class="trace-node node-accent" cx="190" cy="62" r="4.5" />
          </svg>
          <div class="sandbox-bar" data-sandbox="uq-xai">
            <span class="sandbox-readout" data-role="readout-uq-xai">PICP: 0.952, ECE: 0.012</span>
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
            <text x="90" y="54" text-anchor="middle" class="visual-label">ROAD MASK, 98%</text>
            <g class="yolo-box yb-1">
              <rect x="158" y="16" width="84" height="34" rx="5" fill="var(--bg-elevated)" stroke="var(--signal-teal)" stroke-width="1.5" />
              <text x="200" y="31" text-anchor="middle" class="visual-badge">DEEPLABV3+</text>
              <text x="200" y="43" text-anchor="middle" class="deck-svg-label">Vehicle, 0.94</text>
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
              <text x="160" y="44" text-anchor="middle" class="visual-badge">ZONE A: 21.5°C</text>
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
            <span class="sandbox-readout">Semifinalist, Whisper ASR + NLP JSON + VLM lock</span>
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
        (p, idx) => {
          const safeSlug = sanitizeDomSlug(p.id);
          return `
      <article
        class="project-card"
        id="project-${safeSlug}"
        style="--card-delay: ${Math.min(idx * 55, 360)}ms"
      >
        <div class="project-body">
          <div class="project-meta-line">
            <span class="project-category">${escapeHtml(getCategoryLabel(p.category, p.categoryLabel))}</span>
            <span class="project-year">${escapeHtml(p.year || "2026")}</span>
          </div>
          <h3 class="project-title">
            <a href="${escapeHtml(sanitizeHttpUrl(p.repoUrl))}" target="_blank" rel="noopener noreferrer">${escapeHtml(p.title)}</a>
          </h3>
          <p class="project-summary">${escapeHtml(p.summary)}</p>

          <div class="promo-links">
            <button
              type="button"
              class="closer-look-trigger-btn"
              data-closer-look-id="${safeSlug}"
              aria-label="Take a closer look at ${escapeHtml(p.title)}"
            >
              <span>Closer look</span>
              <span class="closer-look-plus-icon" aria-hidden="true">+</span>
            </button>
            <button
              type="button"
              class="apple-text-link arch-toggle-btn"
              data-drawer-target="drawer-${safeSlug}"
              aria-expanded="false"
            >
              <span>Technical architecture</span>
              <span class="arch-toggle-icon" aria-hidden="true">+</span>
            </button>
            <a
              class="apple-text-link"
              href="${escapeHtml(sanitizeHttpUrl(p.repoUrl))}"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>${escapeHtml(p.repoLabel || "Repository")} &#8599;</span>
            </a>
            ${
              p.secondaryRepoUrl
                ? `<a
                    class="apple-text-link"
                    href="${escapeHtml(sanitizeHttpUrl(p.secondaryRepoUrl))}"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>${escapeHtml(p.secondaryRepoLabel || "Agent Repo")} &#8599;</span>
                  </a>`
                : ""
            }
          </div>

          <div class="arch-drawer" id="drawer-${safeSlug}">
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
    `;
        }
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

    const closerButtons = document.querySelectorAll(".closer-look-trigger-btn");
    closerButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const pid = btn.getAttribute("data-closer-look-id");
        if (pid) openCloserLookModal(pid);
      });
    });
  }

  function initAboutConsole() {
    const aboutStage = document.getElementById("about");
    if (!aboutStage) return;

    const chapters = {
      google: {
        /* [JUMPGATE HIDDEN — UNCOMMENT ORIGINAL FIELDS TO RE-ENABLE JUMPGATE IN GOOGLE CHAPTER]
        paneLabel: "JUMPGATE DUAL-VPC LANDING ZONE & 14-STEP AGENT VENDING MACHINE",
        paneBadge: "< 3 min, 32/32 IM8, $1.96M ARR",
        story: "At Google in Singapore, I co-architected Jumpgate, an IM8-compliant Dual-VPC AI agent landing zone and 14-step Vending Machine Agent that compresses 4 to 6 weeks of setup into under 3 minutes (passing 14/14 Ingress and 18/18 Egress security checks), driving $1.96M in realised public sector ARR (+$1.46M pipeline) and training over 4,000 engineers and students across NTU, GovTech, DBS, and A*STAR.",
        bar1Label: "Jumpgate Dual-VPC & IM8 Security Posture",
        bar1Val: "< 3 min, 32 / 32 Checks",
        bar2Label: "Public Sector ARR & Buildathon Reach",
        bar2Val: "$1.96M ARR, 4,000+ Trained",
        */
        bezelTitle: "INTERACTIVE ENGINEERING PROFILE, GOOGLE CLOUD SINGAPORE",
        bezelStatus: "APR 2026 TO PRESENT",
        paneLabel: "CLOUD RUN, VERTEX AI & MULTI-AGENT ORCHESTRATION",
        paneBadge: "Cloud & AI, 4,000+ Trained",
        readout: "Chapter 01 / 04",
        story:
          "At Google in Singapore, I architect secure enterprise AI systems on Cloud Run and Vertex AI, built the native Jetski Agent Tracer visualiser and 200k context harness, and led technical enablement buildathons training over 4,000 engineers and students across NTU, GovTech, DBS, and A*STAR.",
        bar1Label: "Agentic Observability & Evaluation Rigour",
        bar1Val: "36 / 36 Checks",
        bar1Width: "100%",
        bar2Label: "Enterprise Workshops & Buildathon Reach",
        bar2Val: "4,000+ Trained",
        bar2Width: "95%",
      },
      grab: {
        bezelTitle: "INTERACTIVE ENGINEERING PROFILE, GRAB SINGAPORE",
        bezelStatus: "JAN 2026 TO MAR 2026",
        paneLabel: "REAL-TIME FRAUD DETECTION & GOLANG RUNTIME CONTROLS",
        paneBadge: "Golang, Feature Flags & PB-Scale",
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
        bezelTitle: "INTERACTIVE ENGINEERING PROFILE, A*STAR SINGAPORE",
        bezelStatus: "SEP 2024 TO MAY 2025",
        paneLabel: "UNCERTAINTY-AWARE DEEP LEARNING & EXPLAINABLE AI",
        paneBadge: "PyTorch, Conformal UQ & IEEE",
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
        bezelTitle: "INTERACTIVE ENGINEERING PROFILE, EDUCATION, HACKATHONS & LIFE",
        bezelStatus: "GLASGOW, SIT & SINGAPORE",
        paneLabel: "HONOURS COMPUTER SCIENCE, HACKATHONS & LIFE OUTSIDE CODE",
        paneBadge: "BSc (Hons) CS, 3x Awards",
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
      if (document.hidden) return;
      currentIdx = (currentIdx + 1) % order.length;
      selectChapter(order[currentIdx]);
    }, 6500);
  }

  function initFlagshipSandboxes() {
    const fJumpgate = document.getElementById("flagship-jumpgate-sandbox");
    if (fJumpgate) {
      const fJgStages = {
        vpc: {
          readout: "Dual-VPC: 14/14 Ingress & 18/18 Egress IM8 PASS",
          badge: "14/14 IN, 18/18 OUT",
          b1Val: "4 to 6 Weeks -> < 3 Min",
          b1Width: "100%",
          b2Val: "14/14 Ingress, 18/18 Egress",
          b2Width: "100%",
          b3Val: "$1.96M Realised + $1.46M Pipe",
          b3Width: "96%",
        },
        adlc: {
          readout: "14-Step ADLC: 4-6 wks -> < 3 min (>=0.85 Judge)",
          badge: "14-STEP VENDING MACHINE",
          b1Val: "3 Parallel Terraform Workstreams",
          b1Width: "100%",
          b2Val: "LLM-as-a-Judge >= 0.85 Gate",
          b2Width: "98%",
          b3Val: "70% Build Effort Reduction",
          b3Width: "94%",
        },
        egress: {
          readout: "Egress VPC: SWP L7 + PSC Vertex AI (0 Bypasses)",
          badge: "SWP L7, PSC & DLP",
          b1Val: "Private Service Connect (Vertex)",
          b1Width: "100%",
          b2Val: "Model Armor + DLP Redaction",
          b2Width: "100%",
          b3Val: "Zero Direct Internet Egress",
          b3Width: "100%",
        },
        arr: {
          readout: "Public Sector: $1.96M Realised + $1.46M Pipeline ARR",
          badge: "$1.96M ARR, 4,000+ TRAINED",
          b1Val: "$1.96M Realised Public Sector ARR",
          b1Width: "100%",
          b2Val: "+$1.46M Qualified Pipeline",
          b2Width: "95%",
          b3Val: "4,000+ Engineers & Students",
          b3Width: "98%",
        },
      };

      const jgReadout = document.getElementById("flagship-jg-readout");
      const jgBadge = document.getElementById("flagship-jg-badge");
      const jgB1Val = document.getElementById("flagship-jg-bar1-val");
      const jgB1Fill = document.getElementById("flagship-jg-bar1-fill");
      const jgB2Val = document.getElementById("flagship-jg-bar2-val");
      const jgB2Fill = document.getElementById("flagship-jg-bar2-fill");
      const jgB3Val = document.getElementById("flagship-jg-bar3-val");
      const jgB3Fill = document.getElementById("flagship-jg-bar3-fill");
      const jgBtns = fJumpgate.querySelectorAll("[data-fjg-btn]");
      const jgNodes = fJumpgate.querySelectorAll("[data-fjg]");
      const jgOrder = ["vpc", "adlc", "egress", "arr"];
      let jgIdx = 0;
      let jgTimer = null;

      function selectFlagshipJg(key) {
        const cfg = fJgStages[key];
        if (!cfg) return;
        jgIdx = Math.max(0, jgOrder.indexOf(key));
        jgBtns.forEach((b) =>
          b.classList.toggle("active", b.getAttribute("data-fjg-btn") === key)
        );
        jgNodes.forEach((n) =>
          n.classList.toggle("is-selected", n.getAttribute("data-fjg") === key)
        );
        if (jgReadout) jgReadout.textContent = cfg.readout;
        if (jgBadge) jgBadge.textContent = cfg.badge;
        if (jgB1Val) jgB1Val.textContent = cfg.b1Val;
        if (jgB1Fill) jgB1Fill.style.width = cfg.b1Width;
        if (jgB2Val) jgB2Val.textContent = cfg.b2Val;
        if (jgB2Fill) jgB2Fill.style.width = cfg.b2Width;
        if (jgB3Val) jgB3Val.textContent = cfg.b3Val;
        if (jgB3Fill) jgB3Fill.style.width = cfg.b3Width;
      }

      jgBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          if (jgTimer) clearInterval(jgTimer);
          selectFlagshipJg(btn.getAttribute("data-fjg-btn"));
        });
      });
      jgNodes.forEach((node) => {
        node.addEventListener("click", () => {
          if (jgTimer) clearInterval(jgTimer);
          selectFlagshipJg(node.getAttribute("data-fjg"));
        });
      });

      jgTimer = setInterval(() => {
      if (document.hidden) return;
        jgIdx = (jgIdx + 1) % jgOrder.length;
        selectFlagshipJg(jgOrder[jgIdx]);
      }, 3600);
    }

    const tracerData = {
      user: "Step #01 USER_INPUT, 12ms",
      planner: "Step #02 PLANNER, 640ms",
      mcp: "Step #03 CALL_MCP_TOOL, 310ms",
      subagent: "Step #04 SUBAGENT, 1.2s",
    };

    const fTracer = document.getElementById("flagship-tracer-sandbox");
    if (fTracer) {
      const fReadout = document.getElementById("flagship-tracer-readout");
      const fStepBtns = fTracer.querySelectorAll("[data-fstep-btn]");
      const fSvgNodes = fTracer.querySelectorAll("[data-fstep]");
      const stepOrder = ["user", "planner", "mcp", "subagent"];
      let stepIdx = 1;
      let stepTimer = null;

      function selectFlagshipStep(stepKey) {
        if (!stepKey || !tracerData[stepKey]) return;
        stepIdx = Math.max(0, stepOrder.indexOf(stepKey));
        if (fReadout) {
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
          if (stepTimer) clearInterval(stepTimer);
          selectFlagshipStep(btn.getAttribute("data-fstep-btn"));
        });
      });
      fSvgNodes.forEach((node) => {
        node.addEventListener("click", () => {
          if (stepTimer) clearInterval(stepTimer);
          selectFlagshipStep(node.getAttribute("data-fstep"));
        });
      });

      stepTimer = setInterval(() => {
      if (document.hidden) return;
        stepIdx = (stepIdx + 1) % stepOrder.length;
        selectFlagshipStep(stepOrder[stepIdx]);
      }, 3200);

      const fTurns = {
        turn2: {
          width: 74,
          color: "var(--signal-green)",
          label: "CONTEXT SATURATION: 48k / 200k TOKENS",
          readout: "48k / 200k, 42% Cached",
        },
        turn8: {
          width: 219,
          color: "var(--accent)",
          label: "CONTEXT SATURATION: 142k / 200k TOKENS",
          readout: "142k / 200k, 71% Cached",
        },
        turn14: {
          width: 302,
          color: "var(--signal-amber)",
          label: "CONTEXT SATURATION: 196k / 200k (AUTO-COMPACT)",
          readout: "196k / 200k, Auto-Compact",
        },
      };

      const fBar = document.getElementById("flagship-token-bar");
      const fBarLabel = document.getElementById("flagship-bar-label");
      const fHarnessReadout = document.getElementById("flagship-harness-readout");
      const fTurnBtns = fTracer.querySelectorAll("[data-fturn-btn]");
      const turnOrder = ["turn2", "turn8", "turn14"];
      let turnIdx = 1;
      let turnTimer = null;

      function selectFlagshipTurn(key) {
        const cfg = fTurns[key];
        if (!cfg) return;
        turnIdx = Math.max(0, turnOrder.indexOf(key));
        fTurnBtns.forEach((b) =>
          b.classList.toggle("active", b.getAttribute("data-fturn-btn") === key)
        );
        if (fBar) {
          fBar.setAttribute("width", String(cfg.width));
          fBar.setAttribute("fill", cfg.color);
        }
        if (fBarLabel) fBarLabel.textContent = cfg.label;
        if (fHarnessReadout) fHarnessReadout.textContent = cfg.readout;
      }

      fTurnBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          if (turnTimer) clearInterval(turnTimer);
          selectFlagshipTurn(btn.getAttribute("data-fturn-btn"));
        });
      });

      turnTimer = setInterval(() => {
      if (document.hidden) return;
        turnIdx = (turnIdx + 1) % turnOrder.length;
        selectFlagshipTurn(turnOrder[turnIdx]);
      }, 3800);
    }

    const fPrep = document.getElementById("flagship-prep-sandbox");
    if (fPrep) {
      const fPrepStages = {
        nbd: {
          readout: "Stage 1: 18:00 SGT Next-Business-Day Dossier",
          badge: "Multi-Corpus MCP",
          b1Val: "Calendar + People",
          b1Width: "92%",
          b2Val: "5 / 5 Scenarios",
          b2Width: "100%",
          b3Val: "18:00 SGT Cron",
          b3Width: "94%",
        },
        linter: {
          readout: "Stage 2: Hallucination Linter (36/36 Checks)",
          badge: "Zero Hallucinated URLs",
          b1Val: "100% Grounded",
          b1Width: "100%",
          b2Val: "36 / 36 Verified",
          b2Width: "100%",
          b3Val: "Zero Duplicates",
          b3Width: "100%",
        },
        t1h: {
          readout: "Stage 3: Stateless T-1h Pre-Meeting Reminder",
          badge: "60-Min Window",
          b1Val: "Cited One-Pager",
          b1Width: "98%",
          b2Val: "Gmail + Chat + Drive",
          b2Width: "96%",
          b3Val: "Stateless Partition",
          b3Width: "100%",
        },
      };

      const pReadout = document.getElementById("flagship-prep-readout");
      const pBadge = document.getElementById("flagship-prep-badge");
      const pB1Val = document.getElementById("flagship-prep-bar1-val");
      const pB1Fill = document.getElementById("flagship-prep-bar1-fill");
      const pB2Val = document.getElementById("flagship-prep-bar2-val");
      const pB2Fill = document.getElementById("flagship-prep-bar2-fill");
      const pB3Val = document.getElementById("flagship-prep-bar3-val");
      const pB3Fill = document.getElementById("flagship-prep-bar3-fill");
      const pBtns = fPrep.querySelectorAll("[data-fprep-btn]");
      const pNodes = fPrep.querySelectorAll("[data-fprep]");
      const prepOrder = ["nbd", "linter", "t1h"];
      let prepIdx = 1;
      let prepTimer = null;

      function selectPrepStage(key) {
        const cfg = fPrepStages[key];
        if (!cfg) return;
        prepIdx = Math.max(0, prepOrder.indexOf(key));
        pBtns.forEach((b) =>
          b.classList.toggle("active", b.getAttribute("data-fprep-btn") === key)
        );
        pNodes.forEach((n) =>
          n.classList.toggle("is-selected", n.getAttribute("data-fprep") === key)
        );
        if (pReadout) pReadout.textContent = cfg.readout;
        if (pBadge) pBadge.textContent = cfg.badge;
        if (pB1Val) pB1Val.textContent = cfg.b1Val;
        if (pB1Fill) pB1Fill.style.width = cfg.b1Width;
        if (pB2Val) pB2Val.textContent = cfg.b2Val;
        if (pB2Fill) pB2Fill.style.width = cfg.b2Width;
        if (pB3Val) pB3Val.textContent = cfg.b3Val;
        if (pB3Fill) pB3Fill.style.width = cfg.b3Width;
      }

      pBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          if (prepTimer) clearInterval(prepTimer);
          selectPrepStage(btn.getAttribute("data-fprep-btn"));
        });
      });
      pNodes.forEach((node) => {
        node.addEventListener("click", () => {
          if (prepTimer) clearInterval(prepTimer);
          selectPrepStage(node.getAttribute("data-fprep"));
        });
      });

      prepTimer = setInterval(() => {
      if (document.hidden) return;
        prepIdx = (prepIdx + 1) % prepOrder.length;
        selectPrepStage(prepOrder[prepIdx]);
      }, 3400);
    }

    const fUq = document.getElementById("flagship-uq-sandbox");
    if (fUq) {
      const fCiLevels = {
        "90": {
          scale: 0.68,
          title: "CONFORMAL BAND (90% ACI)",
          readout: "PICP: 0.904, ECE: 0.018",
          b1Label: "Prediction Interval Coverage (PICP @ 90%)",
          b1Val: "90.4% Empirical",
          b1Width: "90%",
          b2Val: "0.018 ECE",
          b2Width: "88%",
          b3Val: "Discharge Cycle & Temp",
          b3Width: "91%",
        },
        "95": {
          scale: 1.0,
          title: "CONFORMAL BAND (95% ACI)",
          readout: "PICP: 0.952, ECE: 0.012",
          b1Label: "Prediction Interval Coverage (PICP @ 95%)",
          b1Val: "95.2% Empirical",
          b1Width: "95%",
          b2Val: "0.012 ECE",
          b2Width: "93%",
          b3Val: "Voltage & Temp",
          b3Width: "95%",
        },
        "99": {
          scale: 1.38,
          title: "CONFORMAL BAND (99% ACI)",
          readout: "PICP: 0.989, ECE: 0.009",
          b1Label: "Prediction Interval Coverage (PICP @ 99%)",
          b1Val: "98.9% Empirical",
          b1Width: "99%",
          b2Val: "0.009 ECE",
          b2Width: "97%",
          b3Val: "SHAP + LIME + IG",
          b3Width: "98%",
        },
      };

      const fBand = document.getElementById("flagship-aci-band");
      const fTitle = document.getElementById("flagship-aci-title");
      const fReadout = document.getElementById("flagship-aci-readout");
      const uB1Label = document.getElementById("flagship-uq-bar1-label");
      const uB1Val = document.getElementById("flagship-uq-bar1-val");
      const uB1Fill = document.getElementById("flagship-uq-bar1-fill");
      const uB2Val = document.getElementById("flagship-uq-bar2-val");
      const uB2Fill = document.getElementById("flagship-uq-bar2-fill");
      const uB3Val = document.getElementById("flagship-uq-bar3-val");
      const uB3Fill = document.getElementById("flagship-uq-bar3-fill");
      const fCiBtns = fUq.querySelectorAll("[data-fci-btn]");
      const fCiNodes = fUq.querySelectorAll("[data-fci-node]");
      const ciOrder = ["90", "95", "99"];
      let ciIdx = 1;
      let ciTimer = null;

      function selectUqLevel(key) {
        const cfg = fCiLevels[key];
        if (!cfg) return;
        ciIdx = Math.max(0, ciOrder.indexOf(key));
        fCiBtns.forEach((b) =>
          b.classList.toggle("active", b.getAttribute("data-fci-btn") === key)
        );
        fCiNodes.forEach((n) =>
          n.classList.toggle("is-selected", n.getAttribute("data-fci-node") === key)
        );
        if (fBand) fBand.style.setProperty("--ci-scale", String(cfg.scale));
        if (fTitle) fTitle.textContent = cfg.title;
        if (fReadout) fReadout.textContent = cfg.readout;
        if (uB1Label) uB1Label.textContent = cfg.b1Label;
        if (uB1Val) uB1Val.textContent = cfg.b1Val;
        if (uB1Fill) uB1Fill.style.width = cfg.b1Width;
        if (uB2Val) uB2Val.textContent = cfg.b2Val;
        if (uB2Fill) uB2Fill.style.width = cfg.b2Width;
        if (uB3Val) uB3Val.textContent = cfg.b3Val;
        if (uB3Fill) uB3Fill.style.width = cfg.b3Width;
      }

      fCiBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          if (ciTimer) clearInterval(ciTimer);
          selectUqLevel(btn.getAttribute("data-fci-btn"));
        });
      });
      fCiNodes.forEach((node) => {
        node.addEventListener("click", () => {
          if (ciTimer) clearInterval(ciTimer);
          selectUqLevel(node.getAttribute("data-fci-node"));
        });
      });

      ciTimer = setInterval(() => {
      if (document.hidden) return;
        ciIdx = (ciIdx + 1) % ciOrder.length;
        selectUqLevel(ciOrder[ciIdx]);
      }, 3400);
    }
  }

  function attachSandboxControls(rootContainer = document) {
    const jgData = {
      vpc: "Dual-VPC: 14/14 Ingress & 18/18 Egress IM8 PASS",
      adlc: "14-Step ADLC: 4-6 wks -> < 3 min (>=0.85 Judge)",
      egress: "Egress VPC: SWP L7 + PSC Vertex AI (0 Bypasses)",
      arr: "Public Sector: $1.96M Realised + $1.46M Pipeline ARR",
    };

    const tracerData = {
      user: "Step #01 USER_INPUT, 12ms",
      planner: "Step #02 PLANNER, 640ms",
      mcp: "Step #03 CALL_MCP_TOOL, 310ms",
      subagent: "Step #04 SUBAGENT, 1.2s",
    };

    const harnessTurns = {
      turn2: {
        width: 63,
        color: "var(--signal-green)",
        label: "CONTEXT WINDOW: 48k / 200k TOKENS",
        rpc: "42% Cached",
        readout: "48k / 200k, Fresh",
      },
      turn8: {
        width: 187,
        color: "var(--accent)",
        label: "CONTEXT WINDOW: 142k / 200k TOKENS",
        rpc: "71% Cached",
        readout: "142k / 200k, Healthy",
      },
      turn14: {
        width: 259,
        color: "var(--signal-amber)",
        label: "CONTEXT WINDOW: 196k / 200k (AUTO-COMPACT)",
        rpc: "86% Cached",
        readout: "196k / 200k, Compact",
      },
    };

    const prepData = {
      linter: "Linter: 0 hallucinated URLs",
      nbd: "Stage 1: 18:00 SGT NBD brief",
      t1h: "Stage 2: 60-min T-1h window",
    };

    const ciLevels = {
      "90": {
        scale: 0.68,
        title: "90% ADAPTIVE CONFORMAL INTERVAL (ACI)",
        readout: "PICP: 0.904, ECE: 0.018",
      },
      "95": {
        scale: 1.0,
        title: "95% ADAPTIVE CONFORMAL INTERVAL (ACI)",
        readout: "PICP: 0.952, ECE: 0.012",
      },
      "99": {
        scale: 1.38,
        title: "99% ADAPTIVE CONFORMAL INTERVAL (ACI)",
        readout: "PICP: 0.989, ECE: 0.009",
      },
    };

    const sandboxes = [
      ...(rootContainer.matches && rootContainer.matches(".project-visual, #closer-look-visual")
        ? [rootContainer]
        : []),
      ...rootContainer.querySelectorAll(".project-visual, #closer-look-visual, .project-visual-sandbox"),
    ];
    sandboxes.forEach((box) => {
      if (box.dataset.sandboxBound === "1") return;
      box.dataset.sandboxBound = "1";

      const jgBtns = box.querySelectorAll("[data-jg-btn]");
      if (jgBtns.length) {
        const readout = box.querySelector('[data-role="readout-jumpgate"]');
        const jgNodes = box.querySelectorAll("[data-jg]");
        const selectJgStep = (key) => {
          if (readout && jgData[key]) readout.textContent = jgData[key];
          jgBtns.forEach((b) =>
            b.classList.toggle("active", b.getAttribute("data-jg-btn") === key)
          );
          jgNodes.forEach((n) =>
            n.classList.toggle("is-selected", n.getAttribute("data-jg") === key)
          );
        };
        jgBtns.forEach((btn) =>
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            selectJgStep(btn.getAttribute("data-jg-btn"));
          })
        );
        jgNodes.forEach((node) =>
          node.addEventListener("click", (e) => {
            e.stopPropagation();
            selectJgStep(node.getAttribute("data-jg"));
          })
        );
      }

      const stepBtns = box.querySelectorAll("[data-step-btn]");
      if (stepBtns.length) {
        const readout = box.querySelector('[data-role="readout-agent-tracer"]');
        const svgNodes = box.querySelectorAll("[data-step]");
        const selectTracerStep = (stepKey) => {
          if (readout && tracerData[stepKey]) readout.textContent = tracerData[stepKey];
          stepBtns.forEach((b) =>
            b.classList.toggle("active", b.getAttribute("data-step-btn") === stepKey)
          );
          svgNodes.forEach((n) =>
            n.classList.toggle("is-selected", n.getAttribute("data-step") === stepKey)
          );
        };
        stepBtns.forEach((btn) =>
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            selectTracerStep(btn.getAttribute("data-step-btn"));
          })
        );
        svgNodes.forEach((node) =>
          node.addEventListener("click", (e) => {
            e.stopPropagation();
            selectTracerStep(node.getAttribute("data-step"));
          })
        );
      }

      const turnBtns = box.querySelectorAll("[data-turn-btn]");
      if (turnBtns.length) {
        const bar = box.querySelector('[data-role="harness-token-bar"]');
        const barLabel = box.querySelector('[data-role="harness-bar-label"]');
        const rpcStatus = box.querySelector('[data-role="harness-rpc-status"]');
        const readout = box.querySelector('[data-role="readout-jetski-harness"]');
        turnBtns.forEach((btn) => {
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const cfg = harnessTurns[btn.getAttribute("data-turn-btn")];
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

      const prepBtns = box.querySelectorAll("[data-prep-btn]");
      if (prepBtns.length) {
        const readout = box.querySelector('[data-role="readout-meeting-prep"]');
        prepBtns.forEach((btn) => {
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const key = btn.getAttribute("data-prep-btn");
            prepBtns.forEach((b) => b.classList.toggle("active", b === btn));
            if (readout && prepData[key]) readout.textContent = prepData[key];
          });
        });
      }

      const ciBtns = box.querySelectorAll("[data-ci-btn]");
      if (ciBtns.length) {
        const band = box.querySelector('[data-role="aci-band-path"]');
        const title = box.querySelector('[data-role="aci-svg-title"]');
        const readout = box.querySelector('[data-role="readout-uq-xai"]');
        ciBtns.forEach((btn) => {
          btn.addEventListener("click", (e) => {
            e.stopPropagation();
            const cfg = ciLevels[btn.getAttribute("data-ci-btn")];
            if (!cfg) return;
            ciBtns.forEach((b) => b.classList.toggle("active", b === btn));
            if (band) band.style.setProperty("--ci-scale", String(cfg.scale));
            if (title) title.textContent = cfg.title;
            if (readout) readout.textContent = cfg.readout;
          });
        });
      }
    });
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
      const res = await fetch("./projects.json", { cache: "no-cache", signal: AbortSignal.timeout(5000) });
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
      const cacheKey = `gh_repos_v4_${config.githubUsername}`;
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
          `https://api.github.com/users/${encodeURIComponent(config.githubUsername)}/repos?sort=updated&per_page=100`,
          { signal: AbortSignal.timeout(6000) }
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
        const htmlUrl = sanitizeHttpUrl(String(repo.html_url || "").replace(/\/+$/, ""));
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
          id: sanitizeDomSlug(repo.name || "repo"),
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
        const stageRect = stage.getBoundingClientRect();
        if (stageRect.bottom < -160 || stageRect.top > vh + 160) return;

        const deck = stage.querySelector(".hardware-deck");
        const wordmark = stage.querySelector(".metallic-wordmark");
        if (!deck || !wordmark) return;

        let progress = 0;
        if (idx === 0) {
          const heroHeight = Math.max(stageRect.height || 500, 500);
          progress = Math.min(Math.max(scrollY / (heroHeight * 0.65), 0), 1);
        } else {
          const deckRect = deck.getBoundingClientRect();
          const startTop = vh * 0.96;
          const endTop = vh * 0.34;
          progress = Math.min(Math.max((startTop - deckRect.top) / (startTop - endTop), 0), 1);
        }

        const tilt = (1 - progress) * 15;
        const deckScale = 0.93 + progress * 0.07;
        const deckY = idx === 0 ? -progress * 14 : (1 - progress) * 26;
        const wordmarkY = idx === 0 ? progress * 28 : -22 + progress * 44;
        const wordmarkScale = 1.03 - progress * 0.07;

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

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const href = anchor.getAttribute("href");
        if (!href || href === "#") return;
        const targetEl = document.querySelector(href);
        if (targetEl) {
          e.preventDefault();
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
      });
    });

    /* Mouse-following metallic wordmark colour reflection ONLY (zero movement) */
    allStages.forEach((stage) => {
      const visualStage = stage.querySelector(".hero-visual-stage");
      const wordmark = stage.querySelector(".metallic-wordmark");
      if (!visualStage || !wordmark) return;

      stage.addEventListener("mousemove", (e) => {
        visualStage.classList.add("is-hovered");

        const wmRect = wordmark.getBoundingClientRect();
        if (wmRect.width > 0 && wmRect.height > 0) {
          const spotX = Math.min(
            Math.max(((e.clientX - wmRect.left) / wmRect.width) * 100, -10),
            110
          );
          const spotY = Math.min(
            Math.max(((e.clientY - wmRect.top) / wmRect.height) * 100, -20),
            120
          );
          wordmark.style.setProperty("--wordmark-spot-x", `${spotX.toFixed(1)}%`);
          wordmark.style.setProperty("--wordmark-spot-y", `${spotY.toFixed(1)}%`);
        }
      });

      stage.addEventListener("mouseleave", () => {
        visualStage.classList.remove("is-hovered");
        wordmark.style.setProperty("--wordmark-spot-x", "50%");
        wordmark.style.setProperty("--wordmark-spot-y", "50%");
      });
    });
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
        el.textContent = `Singapore, ${formatter.format(now)} SGT`;
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
        title: "Toggle Voice-Over Narration (Shortcut: V)",
        sub: "Play or pause human neural voice-over for the active stage or modal",
        badge: "Audio",
        action: () => {
          const btn = document.getElementById("stage-dock-play-btn");
          if (btn) btn.click();
        },
      },
      /* [JUMPGATE HIDDEN — UNCOMMENT TO RE-ENABLE JUMPGATE COMMAND PALETTE ITEM]
      {
        title: "Jump to Jumpgate Zero-Trust AI Landing Zone Stage",
        sub: "< 3 min Dual-VPC & 14-Step Vending Machine ($1.96M ARR, 32/32 IM8)",
        badge: "Stage 03",
        action: () =>
          document.getElementById("showcase-jumpgate")?.scrollIntoView({ behavior: "smooth" }),
      },
      */
      {
        title: "Jump to About & Background",
        sub: "Google Cloud & AI Engineer, Grab, A*STAR Research, Glasgow & SIT",
        badge: "About",
        action: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        title: "Jump to Featured Repositories",
        /* [JUMPGATE HIDDEN] */ sub: "Jetski Agent Tracer, Meeting Prep Agent, and Battery Conformal Prediction",
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
        /* [JUMPGATE HIDDEN] */ sub: "Show Agent Tracer, Jetski Harness, and Meeting Prep Agent",
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
        title: "Jump to Experience, Hackathons & Education",
        sub: "Google, Grab, A*STAR, 3x Hackathon Honours & 4,000+ Trained",
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
      {
        title: "Save 1-Page Executive CV (Print / PDF)",
        sub: "Format experience, research, and projects into a clean printable CV",
        badge: "Action",
        action: () => window.print(),
      },
      {
        title: "Take a Closer Look: Architecture Inspector",
        sub: "Open full-scale interactive architecture sheet modal",
        badge: "Inspector",
        action: () => openCloserLookModal(PROJECTS[0]?.id || "agent-tracer"),
      },
      ...PROJECTS.map((p) => ({
        title: p.title,
        sub: `${p.categoryLabel}, ${p.stack.join(", ")}`,
        badge: "Project",
        action: () => openCloserLookModal(p.id),
      })),
      {
        title: "Open GitHub Profile (@elim316)",
        sub: "https://github.com/elim316",
        badge: "External",
        action: () => window.open("https://github.com/elim316", "_blank", "noopener,noreferrer"),
      },
      {
        title: "Open LinkedIn Profile",
        sub: "https://linkedin.com/in/eliaslim",
        badge: "External",
        action: () => window.open("https://linkedin.com/in/eliaslim", "_blank", "noopener,noreferrer"),
      },
      {
        title: "Open Google Scholar Profile",
        sub: "Published IEEE Xplore papers",
        badge: "External",
        action: () =>
          window.open("https://scholar.google.com/citations?user=f2hfYeoAAAAJ", "_blank", "noopener,noreferrer"),
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

  /* Apple "Take a Closer Look" Full-Scale Architecture Sheet Modal */
  let closerLookIdx = 0;
  let stopSharedNarrationFn = null;
  let playProjectNarrationFn = null;

  function openCloserLookModal(projectId) {
    const backdrop = document.getElementById("closer-look-backdrop");
    if (!backdrop || PROJECTS.length === 0) return;

    const foundIdx = PROJECTS.findIndex((p) => p.id === projectId);
    closerLookIdx = foundIdx >= 0 ? foundIdx : 0;
    const p = PROJECTS[closerLookIdx];

    const eyebrowEl = document.getElementById("closer-look-eyebrow");
    const counterEl = document.getElementById("closer-look-counter");
    const titleEl = document.getElementById("closer-look-title");
    const summaryEl = document.getElementById("closer-look-summary");
    const visualEl = document.getElementById("closer-look-visual");
    const archEl = document.getElementById("closer-look-arch");
    const stackEl = document.getElementById("closer-look-stack");
    const repoLinkEl = document.getElementById("closer-look-repo-link");
    const repoLabelEl = document.getElementById("closer-look-repo-label");
    const secRepoLinkEl = document.getElementById("closer-look-secondary-repo-link");
    const secRepoLabelEl = document.getElementById("closer-look-secondary-repo-label");
    const copyLabelEl = document.getElementById("closer-copy-link-label");
    const listenBtnEl = document.getElementById("closer-look-listen-btn");

    if (eyebrowEl) {
      eyebrowEl.textContent = `${getCategoryLabel(p.category, p.categoryLabel).toUpperCase()}, ${p.year || "2026"}`;
    }
    if (listenBtnEl) {
      const hasHumanAudio = [
        "jumpgate-agentic-lz",
        "agent-tracer",
        "jetski-harness",
        "meeting-prep-agent",
        "uq-xai-battery",
      ].includes(p.id);
      listenBtnEl.style.display = hasHumanAudio ? "inline-flex" : "none";
    }
    if (counterEl) {
      counterEl.textContent = `${String(closerLookIdx + 1).padStart(2, "0")} / ${String(PROJECTS.length).padStart(2, "0")}`;
    }
    if (titleEl) titleEl.textContent = p.title;
    if (summaryEl) summaryEl.textContent = p.summary;
    if (visualEl) {
      visualEl.innerHTML = getProjectVisual(p);
      attachSandboxControls(visualEl);
    }
    if (archEl) archEl.textContent = p.architecture || p.summary;
    if (stackEl) {
      stackEl.innerHTML = (p.stack || [])
        .map((t) => `<span class="stack-tag">${escapeHtml(t)}</span>`)
        .join("");
    }
    if (repoLinkEl) repoLinkEl.setAttribute("href", sanitizeHttpUrl(p.repoUrl));
    if (repoLabelEl) {
      repoLabelEl.textContent = `${p.repoLabel || "Open GitHub Repository"} ↗`;
    }
    if (secRepoLinkEl) {
      if (p.secondaryRepoUrl) {
        secRepoLinkEl.setAttribute("href", sanitizeHttpUrl(p.secondaryRepoUrl));
        secRepoLinkEl.style.display = "inline-flex";
        if (secRepoLabelEl) {
          secRepoLabelEl.textContent = `${p.secondaryRepoLabel || "Agent Repo"} ↗`;
        }
      } else {
        secRepoLinkEl.style.display = "none";
      }
    }
    if (copyLabelEl) copyLabelEl.textContent = "Copy Deep-Link";

    backdrop.classList.add("is-open");
    backdrop.setAttribute("aria-hidden", "false");
    try {
      history.replaceState(null, "", `#inspect-${p.id}`);
    } catch (_) {}
  }

  function closeCloserLookModal() {
    const backdrop = document.getElementById("closer-look-backdrop");
    if (!backdrop) return;
    backdrop.classList.remove("is-open");
    backdrop.setAttribute("aria-hidden", "true");
    if (typeof stopSharedNarrationFn === "function") {
      stopSharedNarrationFn();
    }
  }

  function initCloserLookModal() {
    const backdrop = document.getElementById("closer-look-backdrop");
    const prevBtn = document.getElementById("closer-prev-btn");
    const nextBtn = document.getElementById("closer-next-btn");
    const closeBtn = document.getElementById("closer-close-btn");
    const copyBtn = document.getElementById("closer-copy-link-btn");
    const copyLabel = document.getElementById("closer-copy-link-label");
    const listenBtn = document.getElementById("closer-look-listen-btn");
    if (!backdrop) return;

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        const nextIdx = (closerLookIdx - 1 + PROJECTS.length) % PROJECTS.length;
        openCloserLookModal(PROJECTS[nextIdx].id);
        if (listenBtn?.classList.contains("is-speaking") && typeof playProjectNarrationFn === "function") {
          playProjectNarrationFn(PROJECTS[nextIdx]);
        }
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        const nextIdx = (closerLookIdx + 1) % PROJECTS.length;
        openCloserLookModal(PROJECTS[nextIdx].id);
        if (listenBtn?.classList.contains("is-speaking") && typeof playProjectNarrationFn === "function") {
          playProjectNarrationFn(PROJECTS[nextIdx]);
        }
      });
    }
    if (closeBtn) {
      closeBtn.addEventListener("click", closeCloserLookModal);
    }
    if (listenBtn) {
      listenBtn.addEventListener("click", () => {
        const p = PROJECTS[closerLookIdx];
        if (!p) return;
        if (listenBtn.classList.contains("is-speaking")) {
          if (typeof stopSharedNarrationFn === "function") stopSharedNarrationFn();
        } else if (typeof playProjectNarrationFn === "function") {
          playProjectNarrationFn(p);
        }
      });
    }
    if (copyBtn) {
      copyBtn.addEventListener("click", async () => {
        const p = PROJECTS[closerLookIdx];
        if (!p) return;
        const url = `${window.location.origin}${window.location.pathname}#inspect-${p.id}`;
        await copyTextToClipboard(url);
        if (copyLabel) copyLabel.textContent = "Copied Link";
        setTimeout(() => {
          if (copyLabel) copyLabel.textContent = "Copy Deep-Link";
        }, 1800);
      });
    }

    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeCloserLookModal();
    });
  }

  /* Apple Floating Bottom Stage Controller Pill & Human Voice-Over Narrator */
  function initAppleStageDock() {
    const dock = document.getElementById("apple-stage-dock");
    const captionEl = document.getElementById("stage-dock-caption");
    const dotBtns = document.querySelectorAll(".stage-dock-dot");
    const playBtn = document.getElementById("stage-dock-play-btn");
    const iconPause = document.getElementById("dock-icon-pause");
    const iconPlay = document.getElementById("dock-icon-play");
    const voiceLabel = document.getElementById("dock-voice-label");
    const progressCircle = document.getElementById("dock-voice-progress-circle");
    const inspectBtn = document.getElementById("stage-dock-inspect-btn");

    const closerListenBtn = document.getElementById("closer-look-listen-btn");
    const closerListenPlay = document.getElementById("closer-icon-play");
    const closerListenPause = document.getElementById("closer-icon-pause");
    const closerListenLabel = document.getElementById("closer-listen-label");
    if (!dock) return;

    const RING_CIRCUMFERENCE = 56.55;

    const stageConfigs = [
      {
        id: "hero-stage",
        label: "01 / 05  BUILDER",
        projectId: "agent-tracer",
        audioSrc: "audio/stage-builder.mp3?v=20261007-23",
        speechText:
          "Elias Lim. Cloud and AI engineer at Google Singapore, experienced in secure cloud architecture, Go and Python backend systems, applied machine learning, and autonomous agent tooling. Featured highlights include real-time multi-agent observability with Jetski Agent Tracer, 95.2 percent conformal coverage on battery State-of-Health analytics, and a 36-check evaluation harness for enterprise meeting dossiers.",
      },
      {
        id: "about",
        label: "02 / 05  PROFILE",
        projectId: "agent-tracer",
        audioSrc: "audio/stage-profile-google.mp3?v=20261007-23",
        speechText:
          "About Elias Lim, Chapter 1: Google Cloud and AI. At Google in Singapore, I architect secure enterprise AI systems on Cloud Run and Vertex AI, built the native Jetski Agent Tracer visualiser and 200k context harness, and led technical enablement buildathons training over 4,000 engineers and students across NTU, GovTech, DBS, and A-STAR.",
      },
      /* [JUMPGATE HIDDEN — UNCOMMENT THIS STAGE AND RE-INDEX 01/06..06/06 TO RE-ENABLE STAGE 3: JUMPGATE]
      {
        id: "showcase-jumpgate",
        label: "03 / 06  JUMPGATE",
        projectId: "jumpgate-agentic-lz",
        audioSrc: "audio/stage-jumpgate.mp3?v=20261007-23",
        speechText:
          "Stage 3: Jumpgate Zero-Trust AI Landing Zone and 14-Step Vending Machine Agent. Co-architected at Google Cloud Singapore, Jumpgate provisions an IM8-compliant Dual-VPC landing zone with Cloud Armor WAF, Secure Web Proxy L7 inspection, and Private Service Connect to Vertex AI in under three minutes, passing all 14 Ingress and 18 Egress security checks and driving 1.96 million dollars in realised public sector recurring revenue.",
      },
      */
      {
        id: "showcase-agent-tracer",
        label: "03 / 05  TRACER",
        projectId: "agent-tracer",
        audioSrc: "audio/stage-tracer.mp3?v=20261007-23",
        speechText:
          "Stage 3: Jetski Agent Tracer and Harness. Visualise every step an AI agent takes in real time, from user prompt and LLM planning to Model Context Protocol tool execution and subagent delegation, paired with a two-by-two workspace that monitors 200,000-token context window saturation and automatic compaction.",
      },
      {
        id: "showcase-meeting-prep",
        label: "04 / 05  DOSSIER",
        projectId: "meeting-prep-agent",
        audioSrc: "audio/stage-dossier.mp3?v=20261007-23",
        speechText:
          "Stage 4: Smart Meeting Prep and Dossier Agent. A two-stage scheduled agent that synthesises Calendar, Gmail, Chat, Drive, and People Directory context into cited one-page briefings at 6 PM the day before and one hour prior to every meeting, verified by a five-scenario, 36-check hallucination linter with zero fabricated links.",
      },
      {
        id: "showcase-uq-xai",
        label: "05 / 05  RESEARCH",
        projectId: "uq-xai-battery",
        audioSrc: "audio/stage-research.mp3?v=20261007-23",
        speechText:
          "Stage 5: Uncertainty and Explainable AI for Battery Analytics. Published as a first-author paper in IEEE Xplore, this unified deep learning framework quantifies both model and data uncertainty via Adaptive Conformal Inference, achieving 95.2 percent empirical prediction interval coverage and 0.012 expected calibration error across McMaster and Oxford degradation datasets, paired with SHAP and LIME feature attributions.",
      },
    ];

    const aboutChapterAudio = {
      google: {
        audioSrc: "audio/stage-profile-google.mp3?v=20261007-23",
        speechText: stageConfigs[1].speechText,
      },
      grab: {
        audioSrc: "audio/stage-profile-grab.mp3?v=20261007-23",
        speechText:
          "About Elias Lim, Chapter 2: Backend Systems at Grab. At Grab in Singapore, I engineered scalable Golang backend microservices for real-time fraud detection across petabyte-scale data infrastructure, implementing dynamic runtime feature flags, rate limiting controls, and high-coverage unit test suites.",
      },
      astar: {
        audioSrc: "audio/stage-profile-astar.mp3?v=20261007-23",
        speechText:
          "About Elias Lim, Chapter 3: AI Research at A-STAR. As an AI Research Intern at A-STAR in Singapore, I designed a unified deep learning framework that quantifies both data and model uncertainty alongside SHAP and LIME attributions for battery State-of-Health estimation, published as a first-author paper at APSIPA ASC 2025 in IEEE Xplore.",
      },
      beyond: {
        audioSrc: "audio/stage-profile-beyond.mp3?v=20261007-23",
        speechText:
          "About Elias Lim, Chapter 4: Glasgow, SIT, and Life Outside Code. I graduated with a Bachelor of Science with Honours in Computer Science, Second Upper Class, from the University of Glasgow and Singapore Institute of Technology, winning awards at NUS LifeHack, AI Singapore, and DSTA BrainHack. Away from the terminal, you will find me playing basketball, on the pickleball court, or thrifting for vintage pieces.",
      },
    };

    const projectAudioMap = {
      "jumpgate-agentic-lz": "audio/stage-jumpgate.mp3?v=20261007-23",
      "agent-tracer": "audio/stage-tracer.mp3?v=20261007-23",
      "jetski-harness": "audio/stage-tracer.mp3?v=20261007-23",
      "meeting-prep-agent": "audio/stage-dossier.mp3?v=20261007-23",
      "uq-xai-battery": "audio/stage-research.mp3?v=20261007-23",
    };

    let activeStageIdx = 0;
    let isNarrating = false;
    let currentTrackKey = "";
    const audioPlayer = new Audio();
    audioPlayer.preload = "none";
    const preloadedSet = new Set();

    function preloadAudioUrl(url) {
      if (!url || preloadedSet.has(url)) return;
      preloadedSet.add(url);
      try {
        const pre = new Audio();
        pre.preload = "auto";
        pre.src = url;
      } catch (_) {}
    }

    function setRingProgress(fraction) {
      if (!progressCircle) return;
      const clamped = Math.min(Math.max(Number(fraction) || 0, 0), 1);
      const offset = RING_CIRCUMFERENCE * (1 - clamped);
      progressCircle.style.strokeDashoffset = offset.toFixed(2);
    }

    function getActiveAboutChapterKey() {
      const activeTab = document.querySelector("#about [data-about-tab].active");
      return activeTab ? activeTab.getAttribute("data-about-tab") || "google" : "google";
    }

    function getTargetVoicePayload() {
      if (activeStageIdx === 1) {
        const chapKey = getActiveAboutChapterKey();
        const chap = aboutChapterAudio[chapKey] || aboutChapterAudio.google;
        return {
          key: `profile-${chapKey}`,
          audioSrc: chap.audioSrc,
          speechText: chap.speechText,
        };
      }
      const cfg = stageConfigs[activeStageIdx] || stageConfigs[0];
      return {
        key: cfg.id,
        audioSrc: cfg.audioSrc,
        speechText: cfg.speechText,
      };
    }

    const teleprompterEl = document.getElementById("stage-dock-teleprompter");
    const teleprompterTextEl = document.getElementById("teleprompter-text");
    const speedBtn = document.getElementById("stage-dock-speed-btn");
    const speedRates = [1.0, 1.25, 1.5];
    let currentSpeedIdx = 0;
    let currentSentences = [];

    function splitIntoSentences(text) {
      if (!text) return [];
      const parts = text
        .split(/(?<=[.!?])\s+/)
        .map((s) => s.trim())
        .filter(Boolean);
      return parts.length > 0 ? parts : [text.trim()];
    }

    function updateTeleprompterProgress(progressRatio) {
      if (!teleprompterTextEl || currentSentences.length === 0) return;
      const clamped = Math.max(0, Math.min(0.999, Number(progressRatio) || 0));
      const idx = Math.min(
        currentSentences.length - 1,
        Math.floor(clamped * currentSentences.length)
      );
      teleprompterTextEl.textContent = currentSentences[idx];
    }

    if (speedBtn) {
      speedBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        currentSpeedIdx = (currentSpeedIdx + 1) % speedRates.length;
        const rate = speedRates[currentSpeedIdx];
        audioPlayer.playbackRate = rate;
        speedBtn.textContent = `${rate}x`;
      });
    }

    function setVoiceUiState(speaking) {
      isNarrating = speaking;
      if (!speaking) {
        setRingProgress(0);
      }
      if (teleprompterEl) {
        teleprompterEl.classList.toggle("is-visible", speaking);
      }
      if (playBtn) {
        playBtn.classList.toggle("is-speaking", speaking);
        playBtn.setAttribute("aria-pressed", speaking ? "true" : "false");
        playBtn.setAttribute(
          "aria-label",
          speaking
            ? "Pause voice-over narration (Shortcut: V)"
            : "Play voice-over narration for active section (Shortcut: V)"
        );
      }
      if (iconPlay) iconPlay.style.display = speaking ? "none" : "block";
      if (iconPause) iconPause.style.display = speaking ? "block" : "none";
      if (voiceLabel) voiceLabel.textContent = speaking ? "Pause" : "Listen";

      if (closerListenBtn) {
        closerListenBtn.classList.toggle("is-speaking", speaking);
        closerListenBtn.setAttribute("aria-pressed", speaking ? "true" : "false");
      }
      if (closerListenPlay) closerListenPlay.style.display = speaking ? "none" : "block";
      if (closerListenPause) closerListenPause.style.display = speaking ? "block" : "none";
      if (closerListenLabel) closerListenLabel.textContent = speaking ? "Pause" : "Listen";
    }

    function stopAllNarration() {
      try {
        audioPlayer.pause();
      } catch (_) {}
      setVoiceUiState(false);
    }

    function playPayload(payload, forceRestart) {
      if (!payload || !payload.audioSrc) {
        setVoiceUiState(false);
        return;
      }

      currentSentences = splitIntoSentences(payload.speechText || "");
      updateTeleprompterProgress(0);

      if (!forceRestart && currentTrackKey === payload.key && audioPlayer.src) {
        audioPlayer.playbackRate = speedRates[currentSpeedIdx];
        setVoiceUiState(true);
        audioPlayer.play().catch((err) => {
          if (err && err.name === "NotAllowedError") {
            setVoiceUiState(false);
          }
        });
        return;
      }

      currentTrackKey = payload.key;
      audioPlayer.src = payload.audioSrc;
      audioPlayer.currentTime = 0;
      audioPlayer.playbackRate = speedRates[currentSpeedIdx];
      setVoiceUiState(true);
      audioPlayer.play().catch((err) => {
        if (err && err.name === "NotAllowedError") {
          setVoiceUiState(false);
        }
      });
    }

    function startOrSwitchNarration(forceRestart) {
      playPayload(getTargetVoicePayload(), forceRestart);
    }

    stopSharedNarrationFn = stopAllNarration;
    playProjectNarrationFn = (proj) => {
      if (!proj) return;
      const mappedAudio = projectAudioMap[proj.id] || "";
      if (!mappedAudio) {
        setVoiceUiState(false);
        return;
      }
      const text = `${proj.title}. ${proj.summary} ${proj.architecture || ""}`;
      playPayload(
        {
          key: `modal-${proj.id}`,
          audioSrc: mappedAudio,
          speechText: text,
        },
        true
      );
    };

    audioPlayer.addEventListener("timeupdate", () => {
      if (isNarrating && audioPlayer.duration > 0) {
        const ratio = audioPlayer.currentTime / audioPlayer.duration;
        setRingProgress(ratio);
        updateTeleprompterProgress(ratio);
      }
    });

    audioPlayer.addEventListener("ended", () => {
      setVoiceUiState(false);
    });

    let stageScrollTicking = false;
    const stageReadCache = new Map();

    function updateStageDockOnScroll() {
      const vh = window.innerHeight || 800;
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        const projRect = projectsSection.getBoundingClientRect();
        const shouldHide = projRect.top < vh * 0.42;
        dock.classList.toggle("is-hidden", shouldHide);
      }

      let bestIdx = 0;
      let bestDist = Infinity;
      stageConfigs.forEach((cfg, idx) => {
        const el = document.getElementById(cfg.id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const centerDist = Math.abs(rect.top + rect.height * 0.45 - vh * 0.5);
        if (centerDist < bestDist) {
          bestDist = centerDist;
          bestIdx = idx;
        }
      });

      const prevIdx = activeStageIdx;
      activeStageIdx = bestIdx;
      if (captionEl && stageConfigs[bestIdx]) {
        captionEl.textContent = stageConfigs[bestIdx].label;
      }
      dotBtns.forEach((btn, i) => btn.classList.toggle("active", i === bestIdx));

      if (prevIdx !== bestIdx) {
        resetStageReadTimer(false);
        if (isNarrating) {
          startOrSwitchNarration(true);
        }
      }
      stageScrollTicking = false;
    }

    /* Estimate reading time of visible prose on the active stage + 10s buffer */
    const WORDS_PER_SECOND = 3.8; /* ~228 WPM average reading speed */
    const EXTRA_BUFFER_SECONDS = 10;
    let stageElapsedMs = 0;
    let lastTickTs = performance.now();
    let isAutoScrolling = false;
    let currentReadEstimate = {
      wordCount: 100,
      readingSeconds: 26,
      totalSeconds: 36,
      durationMs: 36000,
    };

    function estimateStageReadDuration(stageId, forceRefresh) {
      if (!forceRefresh && stageReadCache.has(stageId)) {
        return stageReadCache.get(stageId);
      }
      const stageEl = document.getElementById(stageId);
      if (!stageEl) {
        return {
          wordCount: 100,
          readingSeconds: 26,
          totalSeconds: 36,
          durationMs: 36000,
        };
      }
      const readableNodes = stageEl.querySelectorAll(
        ".hero-copy, .about-live-story, .about-mini-bento, .bezel-top-bar, .pane-header, .telemetry-metrics, .sandbox-bar"
      );
      let combinedText = "";
      if (readableNodes.length > 0) {
        readableNodes.forEach((node) => {
          combinedText += ` ${node.textContent || ""}`;
        });
      } else {
        combinedText = stageEl.textContent || "";
      }
      const words = combinedText.trim().split(/\s+/).filter(Boolean).length;
      const readingSeconds = Math.max(8, Math.round(words / WORDS_PER_SECOND));
      const totalSeconds = readingSeconds + EXTRA_BUFFER_SECONDS;
      const est = {
        wordCount: words,
        readingSeconds,
        totalSeconds,
        durationMs: totalSeconds * 1000,
      };
      stageReadCache.set(stageId, est);
      return est;
    }

    function updateDotFillBars(progressPct, remainingSec) {
      dotBtns.forEach((btn, i) => {
        const fillEl = btn.querySelector(".stage-dot-fill");
        if (!fillEl) return;
        if (i === activeStageIdx) {
          fillEl.style.width = `${progressPct.toFixed(1)}%`;
          btn.setAttribute(
            "title",
            `${stageConfigs[i]?.label || ""}, Est. ${currentReadEstimate.readingSeconds}s read + 10s (${remainingSec}s to next stage)`
          );
        } else {
          fillEl.style.width = "0%";
        }
      });
    }

    function resetStageReadTimer(forceRefresh) {
      stageElapsedMs = 0;
      lastTickTs = performance.now();
      const cfg = stageConfigs[activeStageIdx] || stageConfigs[0];
      currentReadEstimate = estimateStageReadDuration(cfg.id, Boolean(forceRefresh));
      updateDotFillBars(0, currentReadEstimate.totalSeconds);
    }

    function advanceToNextStageOnBarFull() {
      if (isAutoScrolling) return;
      const nextStageCfg = stageConfigs[activeStageIdx + 1];
      const nextTargetEl = nextStageCfg
        ? document.getElementById(nextStageCfg.id)
        : document.getElementById("projects");
      if (!nextTargetEl) return;

      isAutoScrolling = true;
      nextTargetEl.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        isAutoScrolling = false;
        lastTickTs = performance.now();
      }, 950);
    }

    setInterval(() => {
      if (document.hidden) return;
      const now = performance.now();
      const cmdOpen = document.getElementById("cmd-backdrop")?.classList.contains("is-open");
      const closerOpen = document
        .getElementById("closer-look-backdrop")
        ?.classList.contains("is-open");
      const dockHidden = dock.classList.contains("is-hidden");

      if (document.hidden || dockHidden || cmdOpen || closerOpen || isAutoScrolling) {
        lastTickTs = now;
        return;
      }

      const deltaMs = Math.min(Math.max(now - lastTickTs, 0), 500);
      lastTickTs = now;
      stageElapsedMs += deltaMs;

      let effectiveDurationMs = currentReadEstimate.durationMs;
      if (isNarrating && audioPlayer.duration > 0) {
        effectiveDurationMs = Math.max(
          effectiveDurationMs,
          (audioPlayer.duration + 2) * 1000
        );
      }

      const pct = Math.min(100, (stageElapsedMs / effectiveDurationMs) * 100);
      const remainingSec = Math.max(
        0,
        Math.ceil((effectiveDurationMs - stageElapsedMs) / 1000)
      );
      updateDotFillBars(pct, remainingSec);

      if (stageElapsedMs >= effectiveDurationMs) {
        stageElapsedMs = 0;
        advanceToNextStageOnBarFull();
      }
    }, 100);

    dotBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = Number(btn.getAttribute("data-dock-idx") || 0);
        const target = stageConfigs[idx] ? document.getElementById(stageConfigs[idx].id) : null;
        resetStageReadTimer(false);
        if (target) target.scrollIntoView({ behavior: "smooth" });
      });
    });

    document
      .querySelectorAll(
        "#about [data-about-tab], #about [data-about-card], [data-fjg-btn], [data-fstep-btn], [data-fturn-btn], [data-fprep-btn], [data-fci-btn]"
      )
      .forEach((el) => {
        el.addEventListener("click", (e) => {
          if (e.isTrusted) {
            requestAnimationFrame(() => resetStageReadTimer(true));
          }
          if (
            isNarrating &&
            activeStageIdx === 1 &&
            (el.hasAttribute("data-about-tab") || el.hasAttribute("data-about-card"))
          ) {
            requestAnimationFrame(() => startOrSwitchNarration(true));
          }
        });
      });

    if (playBtn) {
      playBtn.addEventListener("mouseenter", () => {
        const payload = getTargetVoicePayload();
        if (payload?.audioSrc) preloadAudioUrl(payload.audioSrc);
      });
      playBtn.addEventListener("focus", () => {
        const payload = getTargetVoicePayload();
        if (payload?.audioSrc) preloadAudioUrl(payload.audioSrc);
      });
      playBtn.addEventListener("click", () => {
        if (isNarrating) {
          stopAllNarration();
        } else {
          startOrSwitchNarration(false);
        }
      });
    }

    if (inspectBtn) {
      inspectBtn.addEventListener("click", () => {
        const cfg = stageConfigs[activeStageIdx] || stageConfigs[0];
        openCloserLookModal(cfg.projectId);
      });
    }

    window.addEventListener(
      "scroll",
      () => {
        if (!isAutoScrolling) {
          stageElapsedMs = 0;
          lastTickTs = performance.now();
        }
        if (!stageScrollTicking) {
          requestAnimationFrame(updateStageDockOnScroll);
          stageScrollTicking = true;
        }
      },
      { passive: true }
    );
    updateStageDockOnScroll();
    resetStageReadTimer(true);
  }

  /* Apple Bento Specs, Before/After Comparison, Skill Chips, Deep-Linking, Print CV & Keyboard Nav */
  function initBentoSpecsAndSkillFilters() {
    const printBtn = document.getElementById("print-cv-btn");
    if (printBtn) {
      printBtn.addEventListener("click", () => window.print());
    }

    const compareBtns = document.querySelectorAll("[data-compare-mode]");
    const bentoSpecComparison = {
      /* [JUMPGATE HIDDEN — UNCOMMENT ORIGINAL BENTO SPEC VALUES TO RE-ENABLE JUMPGATE] */
      after: [
        {
          statId: "bento-stat-1",
          deltaId: "bento-delta-1",
          capId: "bento-cap-1",
          stat: "200k",
          delta: "Zero Cloud Lock-In",
          cap: "Live Connect-RPC trajectory spans and token context window gauge in Jetski Harness.",
        },
        {
          statId: "bento-stat-2",
          deltaId: "bento-delta-2",
          capId: "bento-cap-2",
          stat: "4,000+",
          delta: "4 Institutions",
          cap: "Engineers and students trained across GovTech, DBS Bank, NTU Singapore, and A*STAR.",
        },
        {
          statId: "bento-stat-3",
          deltaId: "bento-delta-3",
          capId: "bento-cap-3",
          stat: "100%",
          delta: "36 Automated Gates",
          cap: "36/36 multi-corpus linter assertions verifying zero hallucinated links across meeting dossiers.",
        },
        {
          statId: "bento-stat-4",
          deltaId: "bento-delta-4",
          capId: "bento-cap-4",
          stat: "95.2%",
          delta: "0.012 ECE Calibrated",
          cap: "Empirical conformal coverage (PICP) for battery State-of-Health deep learning at A*STAR.",
        },
      ],
      before: [
        {
          statId: "bento-stat-1",
          deltaId: "bento-delta-1",
          capId: "bento-cap-1",
          stat: "Blind Logs",
          delta: "Pre-Tracer",
          cap: "Raw unindexed JSONL terminal dumps without visual span timing or 200k context compaction visibility.",
        },
        {
          statId: "bento-stat-2",
          deltaId: "bento-delta-2",
          capId: "bento-cap-2",
          stat: "Ad-Hoc",
          delta: "Manual Baseline",
          cap: "Fragmented workshop repositories and unguided setup before structured cloud buildathon toolkits.",
        },
        {
          statId: "bento-stat-3",
          deltaId: "bento-delta-3",
          capId: "bento-cap-3",
          stat: "0 Gates",
          delta: "Manual Audit",
          cap: "Unverified single-prompt summaries and manual cloud security reviews without automated runtime or static posture gates.",
        },
        {
          statId: "bento-stat-4",
          deltaId: "bento-delta-4",
          capId: "bento-cap-4",
          stat: "No UQ",
          delta: "Point Estimates",
          cap: "Standard deep neural networks without distribution-free prediction intervals or SHAP/LIME feature attribution guarantees.",
        },
      ],
    };

    if (compareBtns.length > 0) {
      compareBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
          const mode = btn.getAttribute("data-compare-mode") || "after";
          const items = bentoSpecComparison[mode] || bentoSpecComparison.after;
          compareBtns.forEach((b) => {
            const active = b === btn;
            b.classList.toggle("active", active);
            b.setAttribute("aria-selected", active ? "true" : "false");
          });
          document.querySelectorAll(".bento-spec-tile").forEach((tile) => {
            tile.classList.toggle("is-legacy-mode", mode === "before");
          });
          items.forEach((item) => {
            const sEl = document.getElementById(item.statId);
            const dEl = document.getElementById(item.deltaId);
            const cEl = document.getElementById(item.capId);
            if (sEl) sEl.textContent = item.stat;
            if (dEl) dEl.textContent = item.delta;
            if (cEl) cEl.textContent = item.cap;
          });
        });
      });
    }

    const bentoTiles = document.querySelectorAll("[data-bento-target]");
    bentoTiles.forEach((tile) => {
      tile.addEventListener("click", () => {
        const target = tile.getAttribute("data-bento-target") || "";
        applyDeepLinkHash(target, true);
      });
    });

    const awardBtns = document.querySelectorAll("[data-award-target]");
    awardBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-award-target") || "";
        applyDeepLinkHash(target, true);
      });
    });

    const skillChips = document.querySelectorAll(".skill-chip[data-skill-cat]");
    skillChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        const cat = chip.getAttribute("data-skill-cat") || "all";
        const query = (chip.getAttribute("data-skill-query") || "").toLowerCase();

        skillChips.forEach((c) => c.classList.toggle("is-active", c === chip));
        setFilterCategory(cat);

        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: "smooth" });
        }

        requestAnimationFrame(() => {
          const cards = document.querySelectorAll(".project-card");
          cards.forEach((card) => {
            const text = (card.textContent || "").toLowerCase();
            card.classList.toggle("is-skill-matched", Boolean(query && text.includes(query)));
          });
        });
      });
    });

    function applyDeepLinkHash(hashStr, shouldScroll) {
      const clean = (hashStr || "").replace(/^#/, "").trim();
      if (!clean) return;

      if (clean.startsWith("projects-")) {
        const cat = clean.replace("projects-", "");
        if (["all", "agentic", "fullstack", "ml"].includes(cat)) {
          setFilterCategory(cat);
          if (shouldScroll) {
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
          }
        }
      } else if (clean.startsWith("about-")) {
        const chap = clean.replace("about-", "");
        if (!["google", "grab", "astar", "beyond"].includes(chap)) return;
        const tabBtn = document.querySelector(`[data-about-tab="${chap}"]`);
        if (tabBtn) {
          tabBtn.click();
          if (shouldScroll) {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }
        }
      } else if (clean.startsWith("inspect-")) {
        const pid = clean.replace("inspect-", "");
        openCloserLookModal(pid);
      }
    }

    /* Update URL hash when filter buttons or about chapter buttons are clicked */
    document.querySelectorAll(".filter-btn[data-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const f = btn.getAttribute("data-filter") || "all";
        try {
          history.replaceState(null, "", `#projects-${f}`);
        } catch (_) {}
      });
    });

    document.querySelectorAll("[data-about-tab]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const t = btn.getAttribute("data-about-tab") || "google";
        try {
          history.replaceState(null, "", `#about-${t}`);
        } catch (_) {}
      });
    });

    /* Keyboard navigation: V for voice-over, Left/Right for Closer Look modal & About chapters */
    window.addEventListener("keydown", (e) => {
      const cmdOpen = document.getElementById("cmd-backdrop")?.classList.contains("is-open");
      if (cmdOpen) return;

      const tag = (e.target && e.target.tagName ? e.target.tagName : "").toLowerCase();
      const isTyping = tag === "input" || tag === "textarea" || (e.target && e.target.isContentEditable);

      const closerBackdrop = document.getElementById("closer-look-backdrop");
      const closerOpen = closerBackdrop?.classList.contains("is-open");

      if (!isTyping && !e.metaKey && !e.ctrlKey && !e.altKey && e.key.toLowerCase() === "v") {
        e.preventDefault();
        if (closerOpen) {
          document.getElementById("closer-look-listen-btn")?.click();
        } else {
          document.getElementById("stage-dock-play-btn")?.click();
        }
        return;
      }

      if (closerOpen) {
        if (e.key === "Escape") {
          e.preventDefault();
          closeCloserLookModal();
        } else if (e.key === "ArrowRight") {
          e.preventDefault();
          document.getElementById("closer-next-btn")?.click();
        } else if (e.key === "ArrowLeft") {
          e.preventDefault();
          document.getElementById("closer-prev-btn")?.click();
        }
        return;
      }

      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        const aboutEl = document.getElementById("about");
        if (!aboutEl) return;
        const rect = aboutEl.getBoundingClientRect();
        const vh = window.innerHeight || 800;
        if (rect.top < vh * 0.65 && rect.bottom > vh * 0.35) {
          const tabs = Array.from(document.querySelectorAll("[data-about-tab]"));
          const activeIdx = tabs.findIndex((t) => t.classList.contains("active"));
          if (tabs.length > 0 && activeIdx >= 0) {
            const delta = e.key === "ArrowRight" ? 1 : -1;
            const nextTab = tabs[(activeIdx + delta + tabs.length) % tabs.length];
            if (nextTab) nextTab.click();
          }
        }
      }
    });

    if (window.location.hash) {
      setTimeout(() => applyDeepLinkHash(window.location.hash, true), 120);
    }
    window.addEventListener("hashchange", () => applyDeepLinkHash(window.location.hash, true));
  }

  /* 1. Apple "Get the Highlights." Horizontal Snap Carousel */
  function initAppleHighlightsCarousel() {
    const track = document.getElementById("highlights-track");
    const prevBtn = document.getElementById("highlights-prev");
    const nextBtn = document.getElementById("highlights-next");
    const dots = Array.from(document.querySelectorAll("#highlights-dots .highlight-dot"));
    const cards = Array.from(document.querySelectorAll("#highlights-track .highlight-card"));
    if (!track || cards.length === 0) return;

    let activeIdx = 0;
    let isProgrammaticScroll = false;
    let programmaticTimer = null;
    let scrollTicking = false;

    function setActiveDot(idx) {
      activeIdx = idx;
      dots.forEach((d, i) => {
        const isAct = i === idx;
        d.classList.toggle("active", isAct);
        d.setAttribute("aria-selected", isAct ? "true" : "false");
      });
    }

    function scrollToCard(idx) {
      const clamped = (idx + cards.length) % cards.length;
      setActiveDot(clamped);

      const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
      const targetLeft =
        cards.length > 1
          ? Math.round((clamped / (cards.length - 1)) * maxScroll)
          : 0;

      isProgrammaticScroll = true;
      if (programmaticTimer) clearTimeout(programmaticTimer);
      track.scrollTo({
        left: targetLeft,
        behavior: "smooth",
      });
      programmaticTimer = setTimeout(() => {
        isProgrammaticScroll = false;
      }, 460);
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => scrollToCard(activeIdx - 1));
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => scrollToCard(activeIdx + 1));
    }
    dots.forEach((dot) => {
      dot.addEventListener("click", () => {
        const idx = Number(dot.getAttribute("data-highlight-idx") || 0);
        scrollToCard(idx);
      });
    });

    track.addEventListener(
      "scroll",
      () => {
        if (isProgrammaticScroll || scrollTicking) return;
        scrollTicking = true;
        requestAnimationFrame(() => {
          scrollTicking = false;
          if (isProgrammaticScroll) return;
          const maxScroll = Math.max(1, track.scrollWidth - track.clientWidth);
          const ratio = Math.min(1, Math.max(0, track.scrollLeft / maxScroll));
          const best = Math.min(
            cards.length - 1,
            Math.max(0, Math.round(ratio * (cards.length - 1)))
          );
          if (best !== activeIdx) {
            setActiveDot(best);
          }
        });
      },
      { passive: true }
    );

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        const targetSel = card.getAttribute("data-highlight-target");
        if (!targetSel) return;
        const targetEl = document.querySelector(targetSel);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }

  /* 2. Smooth-Gliding macOS/iOS Segmented Pill Indicator */
  function initSlidingSegmentedControls() {
    const selectors = ["#bento-compare-bar"];
    const updaters = [];

    selectors.forEach((sel) => {
      const bar = document.querySelector(sel);
      if (!bar) return;
      bar.classList.add("has-sliding-pill");
      let pill = bar.querySelector(".seg-glide-pill");
      if (!pill) {
        pill = document.createElement("span");
        pill.className = "seg-glide-pill";
        pill.setAttribute("aria-hidden", "true");
        bar.prepend(pill);
      }

      const updatePill = () => {
        const activeBtn = bar.querySelector("button.active");
        if (!activeBtn) return;
        const x = activeBtn.offsetLeft;
        const y = activeBtn.offsetTop;
        const w = activeBtn.offsetWidth;
        const h = activeBtn.offsetHeight;
        if (w > 0 && h > 0) {
          pill.style.width = `${w}px`;
          pill.style.height = `${h}px`;
          pill.style.transform = `translate3d(${x}px, ${y}px, 0)`;
          bar.classList.add("glide-ready");
        }
      };

      bar.querySelectorAll("button").forEach((btn) => {
        btn.addEventListener("click", () => {
          requestAnimationFrame(updatePill);
        });
      });

      updaters.push(updatePill);
      requestAnimationFrame(updatePill);
      setTimeout(updatePill, 180);
    });

    window.addEventListener(
      "resize",
      () => {
        updaters.forEach((fn) => fn());
      },
      { passive: true }
    );
  }

  /* 3. Interactive "More details" Toggle inside the 6 Hardware Stage Bezels */
  function initHardwareXraySpecs() {
    const stageSpecs = {
      "hero-stage": [
        /* [JUMPGATE HIDDEN — UNCOMMENT ORIGINAL HERO SPECS TO RE-ENABLE JUMPGATE] */
        {
          label: "RUNTIME & TRANSPORT",
          val: "Go, Python & Connect-RPC",
          sub: "Streaming sidecar telemetry + Terraform infrastructure as code",
        },
        {
          label: "OBSERVABILITY",
          val: "200k Token Gauge",
          sub: "Real-time DAG trajectory spans & context compaction monitor",
        },
        {
          label: "EVALUATION GATE",
          val: "36 / 36 Checks",
          sub: "Automated multi-corpus linter verifying zero hallucinated links",
        },
        {
          label: "TECHNICAL REACH",
          val: "4,000+ Trained",
          sub: "Enterprise AI buildathons across GovTech, DBS, NTU & A*STAR",
        },
      ],
      about: [
        {
          label: "CLOUD ARCHITECTURE",
          val: "Google Singapore",
          sub: "Enterprise Cloud Run & Vertex AI systems + 4,000+ engineers trained",
        },
        {
          label: "HIGH-SCALE BACKEND",
          val: "Grab Singapore",
          sub: "Golang fraud detection services, feature flags & rate limiting",
        },
        {
          label: "APPLIED ML RESEARCH",
          val: "A*STAR Singapore",
          sub: "First-author IEEE Xplore conformal UQ & SHAP/LIME explainability",
        },
        {
          label: "HONOURS & DEGREE",
          val: "Glasgow & SIT (2:1)",
          sub: "2nd Place LifeHack 2025, Overall Best AISG/SMU, DSTA Semifinalist",
        },
      ],
      "showcase-jumpgate": [
        {
          label: "INGRESS PERIMETER",
          val: "Cloud Armor + L7 LB",
          sub: "OWASP WAF rules, Serverless NEG & zero public IP exposure",
        },
        {
          label: "EGRESS ISOLATION",
          val: "Private Service Connect",
          sub: "Dedicated consumer-to-producer PSC tunnel + Secure Web Proxy",
        },
        {
          label: "AGENTIC VENDING",
          val: "14-Step ADLC Pipeline",
          sub: "Automated Discovery, Architecture, IaC & >=0.85 Judge Gate",
        },
        {
          label: "VERIFIED OUTCOME",
          val: "4-6 wks -> < 3 min",
          sub: "$1.96M realised public sector ARR (+$1.46M pipeline)",
        },
      ],
      "showcase-agent-tracer": [
        {
          label: "INGESTION ENGINE",
          val: "Go fsnotify Watcher",
          sub: "Zero-polling local JSONL trajectory tailing with sub-ms diffs",
        },
        {
          label: "STREAMING RPC",
          val: "Connect-RPC Server",
          sub: "Typed server-streaming spans for Planner, Tool & Subagent nodes",
        },
        {
          label: "CONTEXT TELEMETRY",
          val: "128k Token Gauge",
          sub: "Real-time context window saturation & cost-burn attribution",
        },
        {
          label: "FRONTEND INTERFACE",
          val: "Svelte 5 Runes DAG",
          sub: "Interactive execution graph with zero external cloud lock-in",
        },
      ],
      "showcase-meeting-prep": [
        {
          label: "CADENCE ARCHITECTURE",
          val: "Two-Stage Scheduler",
          sub: "Next-Business-Day 17:00 briefing + stateless T-1h reminder",
        },
        {
          label: "MULTI-CORPUS FUSION",
          val: "Workspace MCP Suite",
          sub: "Parallel Calendar, Gmail, Chat, Drive & Docs context synthesis",
        },
        {
          label: "VERIFICATION HARNESS",
          val: "36 / 36 Eval Checks",
          sub: "Strict URL grounding linter with 0 hallucinated citations",
        },
        {
          label: "DEDUPLICATION",
          val: "60-Min Window Lock",
          sub: "Idempotent dispatch preventing duplicate pre-meeting alerts",
        },
      ],
      "showcase-uq-xai": [
        {
          label: "UNCERTAINTY ENGINE",
          val: "Adaptive Conformal",
          sub: "Distribution-free prediction intervals under exchangeability shift",
        },
        {
          label: "CALIBRATION METRICS",
          val: "95.2% PICP, 0.012 ECE",
          sub: "Verified across McMaster and Oxford battery degradation datasets",
        },
        {
          label: "EXPLAINABILITY SUITE",
          val: "SHAP, LIME & IG",
          sub: "Consistent physical attribution across voltage, temp & capacity",
        },
        {
          label: "PUBLICATION VENUE",
          val: "IEEE Xplore (2025)",
          sub: "First Author, APSIPA ASC 2025 (Document 11249263)",
        },
      ],
    };

    Object.entries(stageSpecs).forEach(([stageId, specs]) => {
      const stageEl = document.getElementById(stageId);
      if (!stageEl) return;
      const bezel = stageEl.querySelector(".hardware-bezel");
      const topBar = stageEl.querySelector(".bezel-top-bar");
      if (!bezel || !topBar || topBar.querySelector(".bezel-xray-btn")) return;

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "bezel-xray-btn";
      btn.setAttribute("aria-expanded", "false");
      btn.textContent = "More details";
      topBar.appendChild(btn);

      const drawer = document.createElement("div");
      drawer.className = "bezel-xray-drawer";
      drawer.innerHTML = `
        <div class="xray-spec-grid">
          ${specs
            .map(
              (s) => `
            <div class="xray-spec-cell">
              <span class="xray-spec-label">${escapeHtml(s.label)}</span>
              <span class="xray-spec-val">${escapeHtml(s.val)}</span>
              <span class="xray-spec-sub">${escapeHtml(s.sub)}</span>
            </div>
          `
            )
            .join("")}
        </div>
      `;
      bezel.appendChild(drawer);

      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = bezel.classList.toggle("is-xray-open");
        btn.classList.toggle("is-active", isOpen);
        btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
        btn.textContent = isOpen ? "Hide details" : "More details";
      });
    });
  }

  /* 4. Scroll-Triggered Number Counter Roll-Ups & Bar Fill Physics */
  function initScrollCountUpAndBars() {
    if (!("IntersectionObserver" in window)) return;

    const statTargets = [
      { id: "bento-stat-1", prefix: "$", target: 1.96, decimals: 2, suffix: "M" },
      { id: "bento-stat-2", prefix: "< ", target: 3, decimals: 0, suffix: " min" },
      { id: "bento-stat-3", prefix: "", target: 100, decimals: 0, suffix: "%" },
      { id: "bento-stat-4", prefix: "", target: 95.2, decimals: 1, suffix: "%" },
    ];

    const statObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          statObserver.unobserve(el);
          const cfg = statTargets.find((s) => s.id === el.id);
          if (!cfg) return;
          const duration = 900;
          const startTs = performance.now();
          function step(now) {
            const p = Math.min(1, (now - startTs) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            const val = (cfg.target * eased).toFixed(cfg.decimals);
            el.textContent = `${cfg.prefix}${val}${cfg.suffix}`;
            if (p < 1) {
              requestAnimationFrame(step);
            }
          }
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.35 }
    );

    statTargets.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) statObserver.observe(el);
    });

    const barEls = document.querySelectorAll(".metric-fill");
    const barObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const bar = entry.target;
          barObserver.unobserve(bar);
          const targetWidth = bar.style.width || "92%";
          bar.style.width = "0%";
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              bar.style.width = targetWidth;
            });
          });
        });
      },
      { threshold: 0.25 }
    );

    barEls.forEach((bar) => barObserver.observe(bar));
  }

  /* 5. Apple-Style "Compare Systems" Side-by-Side Architecture Selector */
  function initCompareSystemsSelector() {
    const selA = document.getElementById("compare-select-a");
    const selB = document.getElementById("compare-select-b");
    const swapBtn = document.getElementById("compare-swap-btn");
    const grid = document.getElementById("compare-cards-grid");
    if (!selA || !selB || !grid || PROJECTS.length < 2) return;

    const optionsHtml = PROJECTS.map(
      (p) => `<option value="${escapeHtml(p.id)}">${escapeHtml(p.title)}</option>`
    ).join("");
    selA.innerHTML = optionsHtml;
    selB.innerHTML = optionsHtml;

    selA.value = PROJECTS[0]?.id || "jumpgate-agentic-lz";
    selB.value = PROJECTS[1]?.id || "gemini-agent-tracer";

    function renderComparison() {
      const projA = PROJECTS.find((p) => p.id === selA.value) || PROJECTS[0];
      const projB = PROJECTS.find((p) => p.id === selB.value) || PROJECTS[1];

      grid.innerHTML = [projA, projB]
        .map((p) => {
          const stackBadges = (p.stack || [])
            .map((t) => `<span class="stack-tag">${escapeHtml(t)}</span>`)
            .join("");
          return `
            <article class="compare-card">
              <div>
                <div class="compare-card-top">
                  <span class="project-category">${escapeHtml(p.categoryLabel)}</span>
                  <span class="project-year">${escapeHtml(p.year)}</span>
                </div>
                <h4 class="compare-card-title">${escapeHtml(p.title)}</h4>
                <p class="compare-card-summary">${escapeHtml(p.summary)}</p>
              </div>

              <div class="project-visual">
                ${getProjectVisual(p)}
              </div>

              <div class="compare-spec-list">
                <div class="compare-spec-row">
                  <span class="compare-spec-key">Architectural Specification &amp; Verification</span>
                  <span class="compare-spec-value">${escapeHtml(p.architecture || p.summary)}</span>
                </div>
                <div class="compare-spec-row">
                  <span class="compare-spec-key">Runtime Stack</span>
                  <div class="stack-row" style="justify-content: flex-start; margin-top: 4px;">${stackBadges}</div>
                </div>
              </div>

              <div class="promo-links" style="justify-content: flex-start; margin-top: 4px;">
                <a href="${escapeHtml(sanitizeHttpUrl(p.repoUrl))}" target="_blank" rel="noopener noreferrer" class="apple-pill solid small">
                  <span>${escapeHtml(p.linkLabel || "GitHub")} &#8599;</span>
                </a>
                <button type="button" class="apple-pill outline small" data-compare-inspect="${escapeHtml(p.id)}">
                  <span>Closer Look (+)</span>
                </button>
              </div>
            </article>
          `;
        })
        .join("");

      grid.querySelectorAll("[data-compare-inspect]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const pid = btn.getAttribute("data-compare-inspect");
          if (pid) openCloserLookModal(pid);
        });
      });

      attachSandboxControls(grid);
    }

    selA.addEventListener("change", renderComparison);
    selB.addEventListener("change", renderComparison);
    if (swapBtn) {
      swapBtn.addEventListener("click", () => {
        const tmp = selA.value;
        selA.value = selB.value;
        selB.value = tmp;
        renderComparison();
      });
    }

    renderComparison();
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
    initCloserLookModal();
    initAppleStageDock();
    initBentoSpecsAndSkillFilters();
    initAppleHighlightsCarousel();
    initSlidingSegmentedControls();
    initHardwareXraySpecs();
    initScrollCountUpAndBars();
    initCompareSystemsSelector();
    initScalableProjects();
  });
})();
