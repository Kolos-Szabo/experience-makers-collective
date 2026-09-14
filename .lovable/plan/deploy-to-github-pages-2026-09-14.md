# Deploy to GitHub Pages

## Why the current workflow fails

1. **Wrong package manager** — `.github/workflows/deploy.yml` runs `npm ci`, which needs `package-lock.json`. The project uses Bun (`bun.lock`), so the install step fails immediately.
2. **No static output** — the site builds as a server-rendered app by default. GitHub Pages can only serve static files, so the build must be switched to pre-render every page to plain HTML at build time. This site is all public content, so static pre-rendering is safe.

## Changes

### 1. Make the site build as static pages

- Update `vite.config.ts`: enable pre-rendering with an explicit list of all 23 pages (home, contact, cum-invatam, despre, galerie, impact, resurse, siguranta, transparenta, experiențe index + 6 experience detail pages, implica-te index + 4 sub-pages, 4 legal pages), with automatic route discovery turned off.
- Upgrade `@lovable.dev/vite-tanstack-config` from 2.15.0 to ≥ 2.20.0 (required — older versions silently skip pre-rendering).
- Add support for a base path so assets load correctly under `https://<user>.github.io/<repo>/`: read `process.env.BASE_PATH` in `vite.config.ts` and pass it as Vite's `base`.
- Verify locally that the build writes one `index.html` per page into the static output and exits cleanly (no hanging timers).

### 2. Rewrite the GitHub Actions workflow

Replace `.github/workflows/deploy.yml`:

```text
on: push to main / manual trigger
steps:
  checkout
  setup Bun (oven-sh/setup-bun)
  bun install --frozen-lockfile
  bun run build   with BASE_PATH=/<repo-name>/  (repo name taken automatically from GITHUB_REPOSITORY)
  upload ./dist as the Pages artifact
  deploy to GitHub Pages
```

### 3. Enable GitHub Pages

One manual step only you can do in the repo on GitHub: **Settings → Pages → Source: GitHub Actions**. I'll note this in the handoff; after that, every push to `main` deploys automatically.

## Notes / limits

- All forms already open the visitor's own email app (mailto), and contact/donation actions are phone links — nothing on the site needs a live server, so the static version keeps full functionality.
- The Lovable preview keeps working as before; this only affects the GitHub deployment.

## Technical details

- Files changed: `vite.config.ts`, `.github/workflows/deploy.yml`, `package.json` (+ lockfile via `bun add -d @lovable.dev/vite-tanstack-config@^2.20.0`).
- Verification: run the build, confirm 23 HTML files in the output, then check the Actions run after push.
