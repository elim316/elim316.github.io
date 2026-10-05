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
        "Unified mission control UI plugin combining a customisable 2x2 Bento grid, multi-session agent chat, embedded Agent Tracer graph, automation controls, and live token telemetry.",
      architecture:
        "Connects to the local Language Server via Connect-RPC to stream per-turn prompt, cached-context, and output token metrics, calculate context window saturation against the 200k compaction threshold, and dispatch multi-session prompts.",
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

  function getProjectVisual(id) {
    switch (id) {
      case "agent-tracer":
        return `
          <svg class="visual-svg" viewBox="0 0 320 96" aria-hidden="true">
            <text x="16" y="16" class="visual-label">USER</text>
            <text x="138" y="16" class="visual-label">PLANNER</text>
            <text x="250" y="16" class="visual-label">MCP / SUB</text>
            <path class="trace-edge" d="M 48 52 C 90 52, 105 38, 148 38" />
            <path class="trace-edge" d="M 172 38 C 215 38, 230 30, 272 30" />
            <path class="trace-edge" d="M 172 38 C 215 38, 230 72, 272 72" />
            <path class="trace-packet" d="M 48 52 C 90 52, 105 38, 148 38" />
            <path class="trace-packet" d="M 172 38 C 215 38, 230 30, 272 30" />
            <path class="trace-packet" d="M 172 38 C 215 38, 230 72, 272 72" />
            <circle class="trace-node clickable-node" data-step="user" cx="38" cy="52" r="10" />
            <circle class="trace-node node-accent clickable-node is-selected" data-step="planner" cx="160" cy="38" r="12" />
            <rect class="trace-node node-accent clickable-node" data-step="mcp" x="264" y="20" width="22" height="20" rx="5" />
            <rect class="trace-node clickable-node" data-step="subagent" x="264" y="62" width="22" height="20" rx="5" />
          </svg>
          <div class="sandbox-bar" data-sandbox="agent-tracer">
            <span class="sandbox-readout" id="readout-agent-tracer">Step #02 PLANNER · 640ms · 1,840 tok</span>
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
            <rect x="18" y="8" width="136" height="36" rx="6" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-width="1.2" />
            <rect x="164" y="8" width="138" height="36" rx="6" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-width="1.2" />
            <text x="28" y="23" class="visual-label">2x2 BENTO HARNESS</text>
            <text x="28" y="36" class="visual-badge" id="harness-rpc-status">Connect-RPC · 71% Cached</text>
            <text x="174" y="23" class="visual-label">SESSIONS: 3 ACTIVE</text>
            <circle cx="179" cy="34" r="3.5" fill="var(--signal-green)" />
            <circle cx="191" cy="34" r="3.5" fill="var(--signal-green)" />
            <circle cx="203" cy="34" r="3.5" fill="var(--signal-amber)" />
            <rect x="18" y="52" width="284" height="34" rx="6" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-width="1.2" />
            <text x="28" y="66" class="visual-label" id="harness-bar-label">CONTEXT WINDOW: 142k / 200k TOKENS</text>
            <rect x="28" y="73" width="264" height="6" rx="3" fill="var(--bg-subtle)" />
            <rect class="token-fill-bar" id="harness-token-bar" x="28" y="73" width="264" height="6" rx="3" fill="var(--accent)" />
          </svg>
          <div class="sandbox-bar" data-sandbox="jetski-harness">
            <span class="sandbox-readout" id="readout-jetski-harness">142k / 200k · Healthy window</span>
            <div class="sandbox-pills">
              <button type="button" class="sandbox-pill" data-turn-btn="turn2">Turn 2</button>
              <button type="button" class="sandbox-pill active" data-turn-btn="turn8">Turn 8</button>
              <button type="button" class="sandbox-pill" data-turn-btn="turn14">Turn 14 (196k)</button>
            </div>
          </div>
        `;
      case "meeting-prep-agent":
        return `
          <svg class="visual-svg" viewBox="0 0 320 96" aria-hidden="true">
            <rect x="16" y="18" width="84" height="56" rx="7" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-width="1.2" />
            <text x="26" y="38" class="visual-label">STAGE 1</text>
            <text x="26" y="54" class="visual-badge">NBD Dossier</text>
            <path class="trace-edge" d="M 100 46 L 130 46" />
            <path class="trace-packet" d="M 100 46 L 130 46" />
            <g class="check-pill c1 is-highlighted">
              <rect x="130" y="12" width="94" height="19" rx="5" fill="var(--bg-elevated)" stroke="var(--accent)" stroke-width="1.2" />
              <text x="140" y="25" class="visual-badge">&#10003; Citations</text>
            </g>
            <g class="check-pill c2 is-highlighted">
              <rect x="130" y="36" width="94" height="19" rx="5" fill="var(--bg-elevated)" stroke="var(--accent)" stroke-width="1.2" />
              <text x="140" y="49" class="visual-badge">&#10003; 36/36 Checks</text>
            </g>
            <g class="check-pill c3 is-highlighted">
              <rect x="130" y="60" width="94" height="19" rx="5" fill="var(--bg-elevated)" stroke="var(--accent)" stroke-width="1.2" />
              <text x="140" y="73" class="visual-badge">&#10003; T-1h Window</text>
            </g>
            <path class="trace-edge" d="M 224 46 L 246 46" />
            <rect class="trace-node node-accent" x="246" y="27" width="56" height="38" rx="7" />
            <text x="256" y="50" class="visual-label">BRIEF</text>
          </svg>
          <div class="sandbox-bar" data-sandbox="meeting-prep">
            <span class="sandbox-readout" id="readout-meeting-prep">Linter: 0 hallucinated URLs or names</span>
            <div class="sandbox-pills">
              <button type="button" class="sandbox-pill active" data-prep-btn="linter">Linter (36/36)</button>
              <button type="button" class="sandbox-pill" data-prep-btn="nbd">NBD Cron</button>
              <button type="button" class="sandbox-pill" data-prep-btn="t1h">T-1h Alert</button>
            </div>
          </div>
        `;
      case "eduverse":
        return `
          <svg class="visual-svg" viewBox="0 0 320 96" aria-hidden="true">
            <text x="24" y="16" class="visual-label">KNOWLEDGE TRACING MASTERY</text>
            <text x="214" y="16" class="visual-badge">2nd Place LifeHack</text>
            <line x1="24" y1="78" x2="296" y2="78" stroke="var(--border-strong)" stroke-width="1.2" />
            <rect class="kt-bar b1" x="44" y="44" width="36" height="34" rx="4" fill="var(--accent-subtle)" stroke="var(--accent)" stroke-width="1.2" />
            <rect class="kt-bar b2" x="108" y="34" width="36" height="44" rx="4" fill="var(--accent-subtle)" stroke="var(--accent)" stroke-width="1.2" />
            <rect class="kt-bar b3" x="172" y="26" width="36" height="52" rx="4" fill="var(--accent)" />
            <rect class="kt-bar b1" x="236" y="38" width="36" height="40" rx="4" fill="var(--accent-subtle)" stroke="var(--accent)" stroke-width="1.2" />
            <text x="48" y="91" class="visual-label">ALG</text>
            <text x="112" y="91" class="visual-label">SYS</text>
            <text x="176" y="91" class="visual-label">ML</text>
            <text x="240" y="91" class="visual-label">NET</text>
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
              <rect x="64" y="18" width="82" height="62" rx="7" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-width="1.3" />
              <text x="74" y="38" class="visual-label">BRANCH A</text>
              <text x="74" y="54" class="visual-badge">14 Volunteers</text>
            </g>
            <g class="fan-card fc-right">
              <rect x="174" y="18" width="82" height="62" rx="7" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-width="1.3" />
              <text x="184" y="38" class="visual-label">BRANCH C</text>
              <text x="184" y="54" class="visual-badge">19 Volunteers</text>
            </g>
            <g class="fan-card fc-mid">
              <rect x="116" y="12" width="88" height="68" rx="8" fill="var(--bg-elevated)" stroke="var(--accent)" stroke-width="1.6" />
              <text x="128" y="34" class="visual-label">MINDS HUB</text>
              <text x="128" y="50" class="visual-badge">Synchronised</text>
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
            <rect class="trace-node" x="22" y="26" width="70" height="42" rx="7" />
            <text x="35" y="50" class="visual-label">VERCEL</text>
            <path class="trace-edge" d="M 92 47 L 130 47" />
            <path class="trace-packet" d="M 92 47 L 130 47" />
            <rect class="trace-node node-accent" x="130" y="20" width="76" height="54" rx="8" />
            <text x="141" y="44" class="visual-label">SUPABASE</text>
            <text x="141" y="58" class="visual-badge">Realtime</text>
            <path class="trace-edge" d="M 206 47 L 242 47" />
            <path class="trace-packet" d="M 206 47 L 242 47" />
            <rect class="trace-node" x="242" y="26" width="60" height="42" rx="7" />
            <text x="255" y="46" class="visual-label">AWS</text>
            <text x="250" y="59" class="visual-badge">IaC</text>
          </svg>
          <div class="sandbox-bar">
            <span class="sandbox-readout">Cross-tab Realtime Postgres CRUD</span>
            <span class="visual-badge">Terraform IaC</span>
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
            <span class="sandbox-readout" id="readout-uq-xai">PICP: 0.952 · ECE: 0.012 · SHAP</span>
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
            <rect class="trace-node" x="20" y="24" width="84" height="46" rx="7" />
            <text x="30" y="45" class="visual-label">DEEPLABV3+</text>
            <text x="30" y="59" class="visual-badge">Pixel Masks</text>
            <path class="trace-edge" d="M 104 47 L 136 47" />
            <path class="trace-packet" d="M 104 47 L 136 47" />
            <rect class="trace-node node-accent" x="136" y="24" width="76" height="46" rx="7" />
            <text x="148" y="45" class="visual-label">BLIP VLM</text>
            <text x="148" y="59" class="visual-badge">Captioning</text>
            <path class="trace-edge" d="M 212 47 L 240 47" />
            <path class="trace-packet" d="M 212 47 L 240 47" />
            <rect class="trace-node" x="240" y="24" width="62" height="46" rx="7" />
            <text x="250" y="51" class="visual-label">OPENCV</text>
          </svg>
          <div class="sandbox-bar">
            <span class="sandbox-readout">Live ResNet50 masks + BLIP scene captioning</span>
            <span class="visual-badge">PyTorch + HF</span>
          </div>
        `;
      case "transport-gpt":
        return `
          <svg class="visual-svg" viewBox="0 0 320 96" aria-hidden="true">
            <line x1="20" y1="30" x2="300" y2="30" stroke="var(--border-strong)" stroke-dasharray="6 6" />
            <line x1="20" y1="70" x2="300" y2="70" stroke="var(--border-strong)" stroke-dasharray="6 6" />
            <g class="yolo-box yb-1">
              <rect x="44" y="36" width="66" height="28" rx="4" fill="var(--accent-subtle)" stroke="var(--accent)" stroke-width="1.5" />
              <text x="50" y="53" class="visual-badge">VEH 0.96</text>
            </g>
            <g class="yolo-box yb-2">
              <rect x="190" y="36" width="76" height="28" rx="4" fill="var(--bg-elevated)" stroke="var(--signal-teal)" stroke-width="1.5" />
              <text x="197" y="53" class="visual-label">FLOW: MOD</text>
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
              <text x="132" y="44" class="visual-badge">ZONE A · 21.5°C</text>
            </g>
            <text x="20" y="18" class="visual-label">3D FLOOR PLAN</text>
          </svg>
          <div class="sandbox-bar">
            <span class="sandbox-readout">Interactive 3D zone telemetry &amp; control</span>
            <span class="visual-badge">Three.js + Svelte</span>
          </div>
        `;
      default:
        return `
          <svg class="visual-svg" viewBox="0 0 320 96" aria-hidden="true">
            <rect class="trace-node" x="20" y="26" width="74" height="42" rx="7" />
            <text x="30" y="51" class="visual-label">WHISPER</text>
            <path class="trace-edge" d="M 94 47 L 126 47" />
            <path class="trace-packet" d="M 94 47 L 126 47" />
            <rect class="trace-node node-accent" x="126" y="26" width="76" height="42" rx="7" />
            <text x="135" y="51" class="visual-badge">NLP &gt;85%</text>
            <path class="trace-edge" d="M 202 47 L 234 47" />
            <path class="trace-packet" d="M 202 47 L 234 47" />
            <rect class="trace-node" x="234" y="26" width="68" height="42" rx="7" />
            <text x="243" y="51" class="visual-label">VLM ~80%</text>
          </svg>
          <div class="sandbox-bar">
            <span class="sandbox-readout">Semifinalist · Whisper + NLP + VLM air defence</span>
            <span class="visual-badge">DSTA TIL-AI</span>
          </div>
        `;
    }
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
            <span class="project-category">${escapeHtml(p.categoryLabel)}</span>
            <span class="project-year">· ${escapeHtml(p.year)}</span>
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
                <p class="arch-text">${escapeHtml(p.architecture)}</p>
              </div>
            </div>
          </div>

          <div class="stack-tags">
            ${p.stack.map((t) => `<span class="stack-tag">${escapeHtml(t)}</span>`).join("")}
          </div>
        </div>

        <div class="project-visual">
          ${getProjectVisual(p.id)}
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
        bezelTitle: "INTERACTIVE ENGINEERING PROFILE · GRAB TRUST, IDENTITY & SAFETY",
        bezelStatus: "JAN 2026 TO MAR 2026",
        paneLabel: "REAL-TIME FRAUD DETECTION & GOLANG RUNTIME CONTROLS",
        paneBadge: "Golang · Feature Flags · PB-Scale",
        readout: "Chapter 02 / 04",
        story:
          "At Grab in the Trust, Identity, and Safety division, I engineered scalable Golang backend services for real-time fraud detection on petabyte-scale data infrastructure, implementing dynamic runtime feature flags, rate limiting, and high-coverage unit test suites.",
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
        bezelTitle: "INTERACTIVE ENGINEERING PROFILE · EDUCATION, HACKATHONS & COURT LIFE",
        bezelStatus: "GLASGOW · SIT · SINGAPORE",
        paneLabel: "HONOURS COMPUTER SCIENCE, HACKATHONS & LIFE OUTSIDE CODE",
        paneBadge: "BSc (Hons) CS · 3x Awards",
        readout: "Chapter 04 / 04",
        story:
          "I graduated with a BSc (Hons) in Computer Science (Second Upper Class) from the University of Glasgow and Singapore Institute of Technology, placing at NUS LifeHack, AISG, and DSTA BrainHack. Away from the terminal, you will find me playing basketball, on the pickleball court, or thrifting for vintage pieces.",
        bar1Label: "National Hackathons & Applied Prototypes",
        bar1Val: "3x Award Winner / Finalist",
        bar1Width: "93%",
        bar2Label: "Off-Court Energy (Basketball, Pickleball, Thrift)",
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
      user: "Step #01 USER_INPUT · 12ms · 420 prompt tok",
      planner: "Step #02 PLANNER · 640ms · 1,840 output tok",
      mcp: "Step #03 CALL_MCP_TOOL · 310ms · exit=0 (OK)",
      subagent: "Step #04 INVOKE_SUBAGENT · 1.2s · branch=research",
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
          scale: 0.24,
          color: "var(--signal-green)",
          label: "CONTEXT SATURATION: 48k / 200k TOKENS",
          readout: "48k / 200k · 42% Cached",
        },
        turn8: {
          scale: 0.71,
          color: "var(--accent)",
          label: "CONTEXT SATURATION: 142k / 200k TOKENS",
          readout: "142k / 200k · 71% Cached",
        },
        turn14: {
          scale: 0.98,
          color: "var(--signal-amber)",
          label: "CONTEXT SATURATION: 196k / 200k (AUTO-COMPACT)",
          readout: "196k / 200k · Compaction triggered!",
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
            fBar.style.setProperty("--token-scale", String(cfg.scale));
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
          title: "INTERACTIVE CONFORMAL PREDICTION BAND (90% ACI)",
          readout: "PICP: 0.904 · ECE: 0.018 · Tight interval",
        },
        "95": {
          scale: 1.0,
          title: "INTERACTIVE CONFORMAL PREDICTION BAND (95% ACI)",
          readout: "PICP: 0.952 · ECE: 0.012 · McMaster -> Oxford",
        },
        "99": {
          scale: 1.38,
          title: "INTERACTIVE CONFORMAL PREDICTION BAND (99% ACI)",
          readout: "PICP: 0.989 · ECE: 0.009 · Conservative safety band",
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
      user: "Step #01 USER_INPUT · 12ms · 420 prompt tok",
      planner: "Step #02 PLANNER · 640ms · 1,840 output tok",
      mcp: "Step #03 CALL_MCP_TOOL · 310ms · exit=0 (OK)",
      subagent: "Step #04 INVOKE_SUBAGENT · 1.2s · branch=research",
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
        scale: 0.24,
        color: "var(--signal-green)",
        label: "CONTEXT WINDOW: 48k / 200k TOKENS",
        rpc: "Connect-RPC · 42% Cached",
        readout: "48k / 200k · Fresh session",
      },
      turn8: {
        scale: 0.71,
        color: "var(--accent)",
        label: "CONTEXT WINDOW: 142k / 200k TOKENS",
        rpc: "Connect-RPC · 71% Cached",
        readout: "142k / 200k · Healthy window",
      },
      turn14: {
        scale: 0.98,
        color: "var(--signal-amber)",
        label: "CONTEXT WINDOW: 196k / 200k (AUTO-COMPACT)",
        rpc: "Connect-RPC · 86% Cached",
        readout: "196k / 200k · Compaction threshold!",
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
            bar.style.setProperty("--token-scale", String(cfg.scale));
            bar.setAttribute("fill", cfg.color);
          }
          if (barLabel) barLabel.textContent = cfg.label;
          if (rpcStatus) rpcStatus.textContent = cfg.rpc;
          if (readout) readout.textContent = cfg.readout;
        });
      });
    }

    const prepData = {
      linter: "Linter: 0 hallucinated URLs or names",
      nbd: "Stage 1: 18:00 SGT Next-Business-Day brief",
      t1h: "Stage 2: Stateless 60-min T-1h window check",
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
        readout: "PICP: 0.904 · ECE: 0.018 · Tight band",
      },
      "95": {
        scale: 1.0,
        title: "95% ADAPTIVE CONFORMAL INTERVAL (ACI)",
        readout: "PICP: 0.952 · ECE: 0.012 · Optimal band",
      },
      "99": {
        scale: 1.38,
        title: "99% ADAPTIVE CONFORMAL INTERVAL (ACI)",
        readout: "PICP: 0.989 · ECE: 0.009 · Conservative",
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

  /* Apple-Style Scroll-Driven 3D Hero Stage Physics */
  function initHeroScrollPhysics() {
    const heroStage = document.getElementById("hero-stage");
    const deck = document.getElementById("hero-hardware-deck");
    const wordmark = document.getElementById("hero-wordmark");
    if (!heroStage || !deck || !wordmark) return;

    let ticking = false;

    function updateScrollPhysics() {
      const scrollY = window.scrollY || window.pageYOffset;
      const heroHeight = Math.max(heroStage.offsetHeight, 500);
      const progress = Math.min(Math.max(scrollY / (heroHeight * 0.65), 0), 1);

      const tilt = (1 - progress) * 14;
      const deckScale = 0.96 + progress * 0.04;
      const deckY = -progress * 14;
      const wordmarkY = progress * 28;
      const wordmarkScale = 1 - progress * 0.05;

      deck.style.setProperty("--deck-tilt", `${tilt.toFixed(2)}deg`);
      deck.style.setProperty("--deck-scale", deckScale.toFixed(3));
      deck.style.setProperty("--deck-y", `${deckY.toFixed(1)}px`);
      wordmark.style.setProperty("--wordmark-y", `${wordmarkY.toFixed(1)}px`);
      wordmark.style.setProperty("--wordmark-scale", wordmarkScale.toFixed(3));
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
        sub: "Google Cloud & AI Engineer, Grab TIS, A*STAR Research, Glasgow & SIT",
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
        sub: "Google, Grab (Trust, Identity & Safety), A*STAR, University of Glasgow & SIT",
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
  });
})();
