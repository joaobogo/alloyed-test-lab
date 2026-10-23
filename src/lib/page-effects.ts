// Reveal-on-scroll, count-up, pointer tilt and lead-source capture (ported from the original layout).
export function runPageEffects() {
const init = () => {
      // Reveal-on-scroll and decorative count-up. All content exists in HTML before this runs.
      const io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (!e.isIntersecting) continue;
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.1 }
      );
      document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

      const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (!reduce) {
        const cio = new IntersectionObserver((entries) => {
          for (const e of entries) {
            if (!e.isIntersecting) continue;
            const el = e.target as HTMLElement;
            cio.unobserve(el);
            const end = parseFloat(el.dataset.count || '0');
            const dec = parseInt(el.dataset.decimals || '0', 10);
            const suffix = el.dataset.suffix || '';
            const t0 = performance.now();
            const dur = 1100;
            const tick = (t: number) => {
              const p = Math.min(1, (t - t0) / dur);
              const v = end * (1 - Math.pow(1 - p, 3));
              el.textContent = v.toFixed(dec) + suffix;
              if (p < 1) requestAnimationFrame(tick);
              else el.textContent = end.toFixed(dec) + suffix;
            };
            requestAnimationFrame(tick);
          }
        }, { threshold: 0.5 });
        document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => cio.observe(el));
      }

      // Pointer tilt for .tilt elements (desktop only).
      if (matchMedia('(hover: hover) and (pointer: fine)').matches && !reduce) {
        document.querySelectorAll<HTMLElement>('.tilt').forEach((el) => {
          const parent = el.parentElement!;
          parent.addEventListener('pointermove', (e) => {
            const r = el.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
            el.style.setProperty('--ry', `${x * 10}deg`); el.style.setProperty('--rx', `${-y * 8}deg`);
          });
          parent.addEventListener('pointerleave', () => { el.style.setProperty('--ry', '0deg'); el.style.setProperty('--rx', '0deg'); });
        });
      }

      // Capture lead source once per session for the contact form hidden fields.
      try {
        const p = new URLSearchParams(location.search);
        const keys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'gclid', 'li_fat_id', 'fbclid'];
        const found: Record<string, string> = {};
        keys.forEach((k) => { const v = p.get(k); if (v) found[k] = v; });
        if (Object.keys(found).length) sessionStorage.setItem('alloyed-src', JSON.stringify({ ...found, landing: location.pathname, referrer: document.referrer }));
        else if (!sessionStorage.getItem('alloyed-src')) sessionStorage.setItem('alloyed-src', JSON.stringify({ landing: location.pathname, referrer: document.referrer }));
      } catch {}
      };
      
  init();
}
