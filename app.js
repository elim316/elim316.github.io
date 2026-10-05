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
        "Awarded 2nd Place Overall at NUS LifeHack 2025. Adaptive learning platform that keeps teachers in control of lesson design while personalising student revision with Knowledge Tracing.",
      architecture:
        "Full-stack Next.js and TypeScript web platform integrated with a Python and PyTorch Knowledge Tracing (kt_models) backend that models per-topic mastery and routes targeted revision materials.",
      stack: ["TypeScript", "Next.js", "Python", "PyTorch"],
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
        "Role-based web application in TypeScript and React supporting staff, caregivers, and volunteers with unified calendar views, signup workflows, and real-time event coverage tracking.",
      stack: ["TypeScript", "React", "Full-Stack Web"],
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
        "Published in IEEE Xplore. Applies uncertainty quantification and post-hoc explainability to deep learning models for battery state-of-health (SOH) estimation.",
      architecture:
        "Integrates Adaptive Conformal Inference (ACI), Prediction Interval Coverage Probability (PICP), Expected Calibration Error (ECE), and SHAP/LIME feature attributions into a CNN battery health pipeline.",
      stack: ["Python", "CNN", "Conformal Prediction", "SHAP / LIME"],
      repoUrl: "https://github.com/elim316/UQ-XAI-battery-analytics",
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
      title: "Operation Guardian (DSTA BrainHack 2024)",
      category: "ml",
      categoryLabel: "ML & Research",
      year: "2024",
      summary:
        "Multimodal defence pipeline built for TIL-AI 2024 to transcribe noisy spoken commands, extract target entities, and identify visual targets.",
      architecture:
        "Containerised three-stage pipeline in Docker integrating Automatic Speech Recognition (ASR), spaCy and NLTK entity extraction, and computer vision object detection.",
      stack: ["Python", "ASR", "spaCy / NLTK", "Computer Vision", "Docker"],
      repoUrl: "https://github.com/elim316/TIL-AI-brainhack2024-project-overview",
    },
  ];

  let activeFilter = "all";

  function escapeHtml(str) {
    return String(str || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function getProjectVisualSvg(id) {
    switch (id) {
      case "agent-tracer":
        return `
          <svg class="visual-svg" viewBox="0 0 320 110" aria-hidden="true">
            <text x="16" y="20" class="visual-label">USER</text>
            <text x="140" y="20" class="visual-label">AGENT</text>
            <text x="255" y="20" class="visual-label">MCP TOOLS</text>
            <path class="trace-edge" d="M 48 56 C 90 56, 105 42, 148 42" />
            <path class="trace-edge" d="M 172 42 C 215 42, 230 34, 272 34" />
            <path class="trace-edge" d="M 172 42 C 215 42, 230 78, 272 78" />
            <path class="trace-packet" d="M 48 56 C 90 56, 105 42, 148 42" />
            <path class="trace-packet" d="M 172 42 C 215 42, 230 34, 272 34" />
            <path class="trace-packet" d="M 172 42 C 215 42, 230 78, 272 78" />
            <circle class="trace-node" cx="38" cy="56" r="10" />
            <circle class="trace-node node-accent" cx="160" cy="42" r="12" />
            <rect class="trace-node node-accent" x="264" y="24" width="22" height="20" rx="5" />
            <rect class="trace-node" x="264" y="68" width="22" height="20" rx="5" />
            <text x="128" y="96" class="visual-badge">1.5s JSONL delta stream</text>
          </svg>
        `;
      case "jetski-harness":
        return `
          <svg class="visual-svg" viewBox="0 0 320 110" aria-hidden="true">
            <rect x="20" y="14" width="134" height="40" rx="6" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-width="1.2" />
            <rect x="164" y="14" width="136" height="40" rx="6" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-width="1.2" />
            <text x="30" y="31" class="visual-label">2x2 BENTO HARNESS</text>
            <text x="30" y="45" class="visual-badge">Connect-RPC Live</text>
            <text x="174" y="31" class="visual-label">SESSIONS: 3 ACTIVE</text>
            <circle cx="179" cy="42" r="3.5" fill="var(--signal-green)" />
            <circle cx="191" cy="42" r="3.5" fill="var(--signal-green)" />
            <circle cx="203" cy="42" r="3.5" fill="var(--signal-amber)" />
            <rect x="20" y="64" width="280" height="32" rx="6" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-width="1.2" />
            <text x="30" y="78" class="visual-label">CONTEXT WINDOW SATURATION (142k / 200k)</text>
            <rect x="30" y="84" width="260" height="5" rx="2.5" fill="var(--bg-subtle)" />
            <rect class="token-fill-bar" x="30" y="84" width="260" height="5" rx="2.5" fill="var(--accent)" />
          </svg>
        `;
      case "meeting-prep-agent":
        return `
          <svg class="visual-svg" viewBox="0 0 320 110" aria-hidden="true">
            <rect x="18" y="24" width="84" height="58" rx="7" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-width="1.2" />
            <text x="28" y="44" class="visual-label">STAGE 1</text>
            <text x="28" y="60" class="visual-badge">NBD Dossier</text>
            <path class="trace-edge" d="M 102 53 L 132 53" />
            <path class="trace-packet" d="M 102 53 L 132 53" />
            <g class="check-pill c1">
              <rect x="132" y="18" width="92" height="20" rx="5" fill="var(--bg-elevated)" stroke="var(--accent)" stroke-width="1.2" />
              <text x="142" y="31" class="visual-badge">&#10003; Citations</text>
            </g>
            <g class="check-pill c2">
              <rect x="132" y="43" width="92" height="20" rx="5" fill="var(--bg-elevated)" stroke="var(--accent)" stroke-width="1.2" />
              <text x="142" y="56" class="visual-badge">&#10003; 36/36 Checks</text>
            </g>
            <g class="check-pill c3">
              <rect x="132" y="68" width="92" height="20" rx="5" fill="var(--bg-elevated)" stroke="var(--accent)" stroke-width="1.2" />
              <text x="142" y="81" class="visual-badge">&#10003; T-1h Window</text>
            </g>
            <path class="trace-edge" d="M 224 53 L 246 53" />
            <rect class="trace-node node-accent" x="246" y="34" width="56" height="38" rx="7" />
            <text x="256" y="57" class="visual-label">BRIEF</text>
          </svg>
        `;
      case "eduverse":
        return `
          <svg class="visual-svg" viewBox="0 0 320 110" aria-hidden="true">
            <text x="24" y="22" class="visual-label">KNOWLEDGE TRACING MASTERY</text>
            <text x="218" y="22" class="visual-badge">2nd Place LifeHack</text>
            <line x1="24" y1="90" x2="296" y2="90" stroke="var(--border-strong)" stroke-width="1.2" />
            <rect class="kt-bar b1" x="44" y="52" width="36" height="38" rx="4" fill="var(--accent-subtle)" stroke="var(--accent)" stroke-width="1.2" />
            <rect class="kt-bar b2" x="108" y="42" width="36" height="48" rx="4" fill="var(--accent-subtle)" stroke="var(--accent)" stroke-width="1.2" />
            <rect class="kt-bar b3" x="172" y="34" width="36" height="56" rx="4" fill="var(--accent)" />
            <rect class="kt-bar b1" x="236" y="46" width="36" height="44" rx="4" fill="var(--accent-subtle)" stroke="var(--accent)" stroke-width="1.2" />
            <text x="48" y="103" class="visual-label">ALG</text>
            <text x="112" y="103" class="visual-label">SYS</text>
            <text x="176" y="103" class="visual-label">ML</text>
            <text x="240" y="103" class="visual-label">NET</text>
          </svg>
        `;
      case "mindsync":
        return `
          <svg class="visual-svg" viewBox="0 0 320 110" aria-hidden="true">
            <g class="fan-card fc-left">
              <rect x="64" y="24" width="82" height="66" rx="7" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-width="1.3" />
              <text x="74" y="44" class="visual-label">BRANCH A</text>
              <text x="74" y="60" class="visual-badge">14 Volunteers</text>
            </g>
            <g class="fan-card fc-right">
              <rect x="174" y="24" width="82" height="66" rx="7" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-width="1.3" />
              <text x="184" y="44" class="visual-label">BRANCH C</text>
              <text x="184" y="60" class="visual-badge">19 Volunteers</text>
            </g>
            <g class="fan-card fc-mid">
              <rect x="116" y="18" width="88" height="72" rx="8" fill="var(--bg-elevated)" stroke="var(--accent)" stroke-width="1.6" />
              <text x="128" y="40" class="visual-label">MINDS HUB</text>
              <text x="128" y="56" class="visual-badge">Synchronised</text>
              <rect x="128" y="66" width="64" height="6" rx="3" fill="var(--accent-subtle)" />
            </g>
          </svg>
        `;
      case "multi-cloud-serverless":
        return `
          <svg class="visual-svg" viewBox="0 0 320 110" aria-hidden="true">
            <rect class="trace-node" x="22" y="34" width="70" height="42" rx="7" />
            <text x="35" y="58" class="visual-label">VERCEL</text>
            <path class="trace-edge" d="M 92 55 L 130 55" />
            <path class="trace-packet" d="M 92 55 L 130 55" />
            <rect class="trace-node node-accent" x="130" y="28" width="76" height="54" rx="8" />
            <text x="141" y="52" class="visual-label">SUPABASE</text>
            <text x="141" y="66" class="visual-badge">Realtime</text>
            <path class="trace-edge" d="M 206 55 L 242 55" />
            <path class="trace-packet" d="M 206 55 L 242 55" />
            <rect class="trace-node" x="242" y="34" width="60" height="42" rx="7" />
            <text x="255" y="54" class="visual-label">AWS</text>
            <text x="250" y="67" class="visual-badge">IaC</text>
          </svg>
        `;
      case "uq-xai-battery":
        return `
          <svg class="visual-svg" viewBox="0 0 320 110" aria-hidden="true">
            <text x="22" y="20" class="visual-label">95% CONFORMAL PREDICTION INTERVAL (ACI)</text>
            <path class="ci-band" d="M 24 28 Q 110 38, 190 54 T 296 72 L 296 96 Q 190 80, 110 62 T 24 50 Z" fill="var(--accent)" />
            <path d="M 24 39 Q 110 50, 190 67 T 296 84" fill="none" stroke="var(--accent)" stroke-width="2.2" />
            <circle class="trace-node node-accent" cx="190" cy="67" r="4.5" />
            <text x="180" y="98" class="visual-badge">IEEE Xplore · SHAP + LIME</text>
          </svg>
        `;
      case "transport-gpt":
        return `
          <svg class="visual-svg" viewBox="0 0 320 110" aria-hidden="true">
            <line x1="20" y1="36" x2="300" y2="36" stroke="var(--border-strong)" stroke-dasharray="6 6" />
            <line x1="20" y1="76" x2="300" y2="76" stroke="var(--border-strong)" stroke-dasharray="6 6" />
            <g class="yolo-box yb-1">
              <rect x="44" y="42" width="66" height="28" rx="4" fill="var(--accent-subtle)" stroke="var(--accent)" stroke-width="1.5" />
              <text x="50" y="59" class="visual-badge">VEH 0.96</text>
            </g>
            <g class="yolo-box yb-2">
              <rect x="190" y="42" width="76" height="28" rx="4" fill="var(--bg-elevated)" stroke="var(--signal-teal)" stroke-width="1.5" />
              <text x="197" y="59" class="visual-label">FLOW: MOD</text>
            </g>
            <text x="22" y="22" class="visual-label">YOLOv3 STREAM &#8594; LANGCHAIN ADVISORY</text>
          </svg>
        `;
      case "panasonic-hvac":
        return `
          <svg class="visual-svg" viewBox="0 0 320 110" aria-hidden="true">
            <g class="iso-zone iz-bottom">
              <polygon points="160,44 244,72 160,100 76,72" fill="var(--bg-elevated)" stroke="var(--border-strong)" stroke-width="1.3" />
            </g>
            <g class="iso-zone iz-top">
              <polygon points="160,18 244,46 160,74 76,46" fill="var(--accent-subtle)" stroke="var(--accent)" stroke-width="1.5" />
              <text x="132" y="50" class="visual-badge">ZONE A · 21.5°C</text>
            </g>
            <text x="20" y="22" class="visual-label">3D FLOOR PLAN</text>
          </svg>
        `;
      default:
        return `
          <svg class="visual-svg" viewBox="0 0 320 110" aria-hidden="true">
            <rect class="trace-node" x="22" y="34" width="72" height="42" rx="7" />
            <text x="34" y="59" class="visual-label">ASR AUDIO</text>
            <path class="trace-edge" d="M 94 55 L 126 55" />
            <path class="trace-packet" d="M 94 55 L 126 55" />
            <rect class="trace-node node-accent" x="126" y="34" width="76" height="42" rx="7" />
            <text x="138" y="59" class="visual-badge">spaCy NER</text>
            <path class="trace-edge" d="M 202 55 L 234 55" />
            <path class="trace-packet" d="M 202 55 L 234 55" />
            <rect class="trace-node" x="234" y="34" width="66" height="42" rx="7" />
            <text x="244" y="59" class="visual-label">CV LOCK</text>
          </svg>
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
        <div class="project-visual">
          ${getProjectVisualSvg(p.id)}
        </div>
        <div class="project-body">
          <div>
            <div class="project-meta-line">
              <span class="project-category">${escapeHtml(p.categoryLabel)}</span>
              <span class="project-year">${escapeHtml(p.year)}</span>
            </div>
            <h3 class="project-title">
              <a href="${escapeHtml(p.repoUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(p.title)}</a>
            </h3>
            <p class="project-summary">${escapeHtml(p.summary)}</p>

            <div class="arch-drawer" id="drawer-${escapeHtml(p.id)}">
              <button
                type="button"
                class="arch-toggle-btn"
                data-drawer-target="drawer-${escapeHtml(p.id)}"
                aria-expanded="false"
              >
                <span>Technical architecture</span>
                <span class="arch-toggle-icon" aria-hidden="true">+</span>
              </button>
              <div class="arch-collapse">
                <div class="arch-collapse-inner">
                  <p class="arch-text">${escapeHtml(p.architecture)}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="project-footer">
            <div class="stack-tags">
              ${p.stack.map((t) => `<span class="stack-tag">${escapeHtml(t)}</span>`).join("")}
            </div>
            <a class="repo-link" href="${escapeHtml(p.repoUrl)}" target="_blank" rel="noopener noreferrer">
              <span>Repository</span>
              <span class="arrow-glyph" aria-hidden="true">&#8599;</span>
            </a>
          </div>
        </div>
      </article>
    `
      )
      .join("");

    attachCardInteractions();
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
        activeFilter = btn.getAttribute("data-filter") || "all";
        buttons.forEach((b) => {
          const isMatch = b.getAttribute("data-filter") === activeFilter;
          b.classList.toggle("active", isMatch);
          b.setAttribute("aria-selected", isMatch ? "true" : "false");
        });
        updateActiveFilterPill();
        renderProjects();
      });
    });

    window.addEventListener("resize", updateActiveFilterPill);
    requestAnimationFrame(updateActiveFilterPill);
  }

  function initNavDock() {
    const dock = document.getElementById("nav-dock");
    const indicator = document.getElementById("nav-pill-indicator");
    const links = document.querySelectorAll(".nav-link");

    function updateNavIndicator() {
      const activeLink = document.querySelector(".nav-link.active");
      syncSlidingPill(dock, indicator, activeLink);
    }

    links.forEach((link) => {
      link.addEventListener("click", () => {
        links.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
        updateNavIndicator();
      });
    });

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
              updateNavIndicator();
            }
          });
        },
        { rootMargin: "-25% 0px -55% 0px", threshold: 0.05 }
      );
      sections.forEach((s) => observer.observe(s));
    }

    window.addEventListener("resize", updateNavIndicator);
    requestAnimationFrame(updateNavIndicator);
  }

  function initScrollReveal() {
    const items = document.querySelectorAll(".reveal-on-scroll");
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    items.forEach((el) => observer.observe(el));
  }

  function initCopyEmail() {
    const btn = document.getElementById("copy-email-btn");
    const badge = document.getElementById("copy-email-badge");
    if (!btn || !badge) return;

    btn.addEventListener("click", async () => {
      const email = btn.getAttribute("data-email") || "eliaslim316@gmail.com";
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(email);
        }
        btn.classList.add("copied");
        badge.textContent = "Copied";
        setTimeout(() => {
          btn.classList.remove("copied");
          badge.textContent = "Copy";
        }, 2000);
      } catch (_) {
        window.location.href = `mailto:${email}`;
      }
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
      localStorage.setItem("eliaslim_site_theme", clean);
    } catch (_) {}
    const label = document.getElementById("theme-toggle-label");
    if (label) {
      label.textContent = clean === "dark" ? "Light" : "Dark";
    }
  }

  function initTheme() {
    let saved = null;
    try {
      saved = localStorage.getItem("eliaslim_site_theme");
    } catch (_) {}
    if (!saved) {
      const prefersDark =
        window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      saved = prefersDark ? "dark" : "light";
    }
    applyTheme(saved);

    const btn = document.getElementById("theme-toggle-btn");
    if (btn) {
      btn.addEventListener("click", () => {
        const cur = document.documentElement.getAttribute("data-theme");
        applyTheme(cur === "dark" ? "light" : "dark");
      });
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    updateFilterCounts();
    renderProjects();
    initFilters();
    initNavDock();
    initScrollReveal();
    initCopyEmail();
    initLocalClock();
  });
})();
