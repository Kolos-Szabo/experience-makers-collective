// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages serves the site under https://<user>.github.io/<repo>/ — the
// Actions workflow injects BASE_PATH=/<repo-name>/ so asset URLs resolve there.
// Locally (Lovable preview / dev) BASE_PATH is unset and the site stays at "/".
const basePath = process.env["BASE_PATH"] ?? "/";

const staticPages = [
  "/",
  "/contact",
  "/cum-invatam",
  "/despre",
  "/galerie",
  "/impact",
  "/resurse",
  "/siguranta",
  "/transparenta",
  "/experiente/",
  "/experiente/scufundari",
  "/experiente/escalada",
  "/experiente/tabere",
  "/experiente/natura",
  "/experiente/ateliere-educationale",
  "/experiente/experiente-speciale",
  "/implica-te/",
  "/implica-te/doneaza",
  "/implica-te/ofera-o-experienta",
  "/implica-te/parteneri",
  "/implica-te/voluntariat",
  "/legal/confidentialitate",
  "/legal/cookies",
  "/legal/gdpr",
  "/legal/protectia-copilului",
].map((path) => ({ path }));

export default defineConfig({
  vite: {
    base: basePath,
  },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // GitHub Pages can only host static files: render every page to HTML at
    // build time. Discovery stays off so `pages` below is the complete list.
    pages: staticPages,
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
