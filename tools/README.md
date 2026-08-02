# tools

Build-time helpers. Nothing here ships in the Vite bundle.

## og-card.html → public/og.png

Source for the Open Graph / Twitter share card referenced by `og:image` and
`twitter:image` in `index.html`. Edit the HTML, then re-render at exactly
1200×630 (the size declared in the `og:image:width` / `og:image:height` tags).

```bash
# serve the repo so the mascot image resolves (file:// is blocked in Chromium)
python -m http.server 8899 --bind 127.0.0.1

# in another shell
npx playwright screenshot \
  --viewport-size=1240,700 \
  --selector=.card \
  http://127.0.0.1:8899/tools/og-card.html \
  public/og.png
```

Keep the headline and subline in sync with `src/components/Hero.tsx` and the
static fallback in `index.html`.

Caches are aggressive: after deploying a new card, re-scrape the URL in the
Facebook Sharing Debugger and post a fresh link in Slack/Discord to confirm.
