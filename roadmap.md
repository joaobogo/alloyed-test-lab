# Roadmap

## Done
- Homepage hero height reduced (1813px -> 789px at 1537x857); animated background now sits behind the content instead of stretching the page.
- FitFinder, Testimonials and Timeline sections restored on the homepage.

- Prompt pack: 90+ images, hero video, 10 animations wired into the site, /studio review page.

## Open (waiting on the user)
- Leadership headshots: need real photos (use the tool on /studio).
- Event pages have no images (not in the prompt pack).
- Contact form: no message storage or email yet (original used Netlify Forms). Needs a decision: store in Lovable Cloud and email you, or leave as-is.
- Google Tag Manager: consent banner works, but no container ID was carried over. Needs the GTM- ID.
- Old alloyed.io / sebpo.com redirects and Netlify security headers are not active on this host. Needs the redirect list before cutover.
- Git sync not connected yet. Connecting creates a new repository; joaobogo/Test-alloyed cannot be linked directly.

- [x] Netlify hosting config (netlify.toml); user must point Netlify at the Lovable-synced repo
