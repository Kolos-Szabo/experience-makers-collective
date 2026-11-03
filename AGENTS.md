<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the centralized photo collection in gallery data; gallery-media supplies responsive derivatives while lightbox uses original CDN pointers, preserving original page images.
- Serve the full gallery at /galerie-foto and retain /galerie as a compatibility page for existing published links; prerender both for GitHub Pages.
