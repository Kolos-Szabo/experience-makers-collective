# Fix GitHub Actions deployment

## Why it fails

The workflow at `.github/workflows/deploy.yml` cannot work for this project, for two independent reasons:

1. **Wrong package manager** — it runs `npm ci`, which requires a `package-lock.json`. This project only has `bun.lock` (Bun), so the very first step fails with "npm ci can only install with an existing package-lock.json".
2. **Wrong hosting target** — the site is a TanStack Start app built as a server (SSR) app targeting a Cloudflare-style worker. `npm run build` does not produce a plain static `./dist` folder that GitHub Pages can serve. Even if step 1 were fixed, the deployed site would be broken.

## Recommended fix

Remove the GitHub Actions workflow and deploy with Lovable instead — one click on **Publish**, no workflow needed, and the server-side rendering works out of the box.

### Steps

1. Delete `.github/workflows/deploy.yml` (stops the failing runs and the error emails).
2. Publish the site from the Lovable Publish button; the site goes live on the stable project URL.
3. (Optional) Connect a custom domain in Project Settings → Domains if you want your own address instead of the Lovable URL.

## Alternative (only if you specifically want GitHub Pages)

Rewrite the workflow to use Bun (`oven-sh/setup-bun`, `bun install`, `bun run build`) and reconfigure the app for fully static pre-rendering, plus set the router base path to the repository name. This is more fragile (every page must be pre-renderable, no server functions) and loses nothing by using Lovable Publish instead — so it is not recommended unless GitHub Pages hosting is a hard requirement.

## Technical details

- File removed: `.github/workflows/deploy.yml`
- No changes to app code, pages, or design.
