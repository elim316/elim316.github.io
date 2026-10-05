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

  function renderProjects() {
    const grid = document.getElementById("projects-grid");
    if (!grid) return;

    const filtered =
      activeFilter === "all"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === activeFilter);

    grid.innerHTML = filtered
      .map(
        (p) => `
      <article class="project-card" id="project-${escapeHtml(p.id)}">
        <div class="project-top">
          <div class="project-meta-line">
            <span class="project-category">${escapeHtml(p.categoryLabel)}</span>
            <span class="project-year">${escapeHtml(p.year)}</span>
          </div>
          <h3 class="project-title">
            <a href="${escapeHtml(p.repoUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(p.title)}</a>
          </h3>
          <p class="project-summary">${escapeHtml(p.summary)}</p>
          <details class="project-details">
            <summary>Technical architecture +</summary>
            <div class="project-details-body">
              <p>${escapeHtml(p.architecture)}</p>
            </div>
          </details>
        </div>
        <div class="project-bottom">
          <div class="stack-tags">
            ${p.stack.map((t) => `<span class="stack-tag">${escapeHtml(t)}</span>`).join("")}
          </div>
          <a class="repo-link" href="${escapeHtml(p.repoUrl)}" target="_blank" rel="noopener noreferrer">
            GitHub &#8599;
          </a>
        </div>
      </article>
    `
      )
      .join("");
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
      if (el) el.textContent = `(${counts[key]})`;
    });
  }

  function initFilters() {
    const buttons = document.querySelectorAll(".filter-btn");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        activeFilter = btn.getAttribute("data-filter") || "all";
        buttons.forEach((b) =>
          b.classList.toggle("active", b.getAttribute("data-filter") === activeFilter)
        );
        renderProjects();
      });
    });
  }

  function applyTheme(theme) {
    const clean = theme === "dark" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", clean);
    try {
      localStorage.setItem("eliaslim_site_theme", clean);
    } catch (_) {}
    const label = document.getElementById("theme-toggle-label");
    if (label) {
      label.textContent = clean === "dark" ? "Light mode" : "Dark mode";
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
    initFilters();
    renderProjects();
  });
})();
