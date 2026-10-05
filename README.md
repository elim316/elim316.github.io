# Elias Lim · Personal Portfolio (`elim316.github.io`)

Live site: [https://elim316.github.io/](https://elim316.github.io/)

## Architecture

This portfolio is a zero-dependency static web application hosted on GitHub Pages (`index.html`, `styles.css`, `app.js`, and `projects.json`). It requires no build step, bundler, or Node.js runtime to deploy.

---

## How to Add or Update Projects (Without Jetski or Local Setup)

The portfolio uses a two-layer scalable architecture so new work appears automatically or can be curated in under two minutes from any browser.

### Option 1 · Zero-Code Automatic GitHub Discovery

When you create a new public repository under `github.com/elim316`:

1. Set a clear Repository Description in the GitHub repository settings (About panel).
2. Add 2 to 4 GitHub Topics (for example: `agent`, `mcp`, `llm` for Agentic & DevTools; `pytorch`, `vision`, `ml` for ML & Research; or `golang`, `react`, `terraform` for Full-Stack & Cloud).

When visitors open `https://elim316.github.io/`, `initScalableProjects()` in `app.js` queries the public GitHub API (`https://api.github.com/users/elim316/repos`, cached in `sessionStorage`), detects any public non-fork repository not yet listed in `projects.json`, updates the live repository count badge, assigns the matching category filter, and procedurally generates an animated three-node SVG pipeline from the repository's language and topics.

To hide a specific public repository from automatic discovery, add its repository name to `config.excludedRepos` in `projects.json`.

---

### Option 2 · Curated Entry in `projects.json` (Directly in GitHub Web UI)

If you want custom architecture notes, custom stack tags, or specific ordering without cloning the repository:

1. Open [`projects.json`](https://github.com/elim316/elim316.github.io/blob/main/projects.json) on GitHub and click the Pencil icon (Edit this file).
2. Add a new object to the `projects` array:

```json
{
  "id": "my-new-service",
  "title": "Distributed Event Router",
  "category": "fullstack",
  "categoryLabel": "Full-Stack & Cloud",
  "year": "2026",
  "summary": "High-throughput event routing service built in Golang and deployed on Cloud Run.",
  "architecture": "Uses Private Service Connect and Pub/Sub dead-letter queues with automated Terraform provisioning.",
  "stack": ["Golang", "Cloud Run", "Pub/Sub", "Terraform"],
  "visualNodes": ["INGRESS", "GO ROUTER", "PUB/SUB"],
  "readout": "Zero-trust event pipeline · <15ms p95",
  "repoUrl": "https://github.com/elim316/my-new-service"
}
```

3. Click Commit changes. GitHub Pages will publish the updated portfolio in approximately 30 seconds.

Field reference:
- `category`: `"agentic"`, `"fullstack"`, or `"ml"`.
- `visualNodes` (optional): Array of 3 short labels (up to 11 characters each) rendered inside the animated SVG diagram. If omitted, the first 3 items in `stack` are used automatically.
- `readout` (optional): Short status text displayed below the SVG diagram.
