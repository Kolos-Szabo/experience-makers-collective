import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  // On GitHub Pages the site is served under /<repo-name>/ (Vite base). TanStack
  // Router needs the same basepath so every <Link> href is prefixed correctly.
  // Locally BASE_URL is "/" → basepath stays undefined.
  const base = import.meta.env.BASE_URL.replace(/\/+$/, "");
  const router = createRouter({
    routeTree,
    basepath: base === "" ? undefined : base,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
