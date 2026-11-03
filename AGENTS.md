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

# Project rules

- This is the Alloyed marketing site, ported from an Astro repo; page copy and data live in `src/data` (site.ts, content/*.json) so content edits never touch page code.
- Shared page building blocks live in `src/components/site/` as named exports; routes stay thin and compose them.
- Every route's head() uses `pageHead()` from `src/lib/seo.ts` so title, description, canonical, OG and JSON-LD stay consistent.
- Brand palette (ink/brand/ember/mint) and utilities (btn-*, card, eyebrow, container-x) are defined once in `src/styles.css`; reuse them instead of ad hoc colors.
- Ported page/component files carry // @ts-nocheck and run the original vanilla DOM scripts inside useEffect; tighten types file by file when editing them.
- Site imagery lives in `public/img/<folder>/` under the exact names in `src/data/visuals.ts`; `src/data/visual-files.ts` lists what exists (regenerate it when files change) so missing slots fall back to typography.
- Animated components live in `src/components/motion/`, take an optional `reducedMotion` prop (defaults to the system setting), use only transform/opacity and pause off-screen; `/studio` (noindex) previews them and the image gallery.
- Netlify hosting: `netlify.toml` builds with `vite build`; nitro auto-detects Netlify (static `dist/` + server function), while Lovable builds still target Cloudflare, so keep the build preset-free.
