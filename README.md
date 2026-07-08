# Reanna Černi — personal site

A simple, single-page personal site. Plain HTML/CSS/JS — no build step, no dependencies.

## Files

- `index.html` — all page content and structure
- `styles.css` — layout, typography, color palette
- `script.js` — subtle scroll fade-in only
- `public/reanna.jpg` — headshot (see below)

## Run locally

From this folder, start any static server, e.g.:

```
python3 -m http.server 5174
```

Then open `http://localhost:5174`.

## Placeholders to replace

- `public/reanna.jpg` — headshot photo (portrait, ~4:5 ratio)
- Email — `reanna@example.com` in the Connect section and JSON-LD
- LinkedIn — `https://www.linkedin.com/in/reanna-placeholder` in the Connect section, JSON-LD, and og tags
- Domain — `https://reannacerni.com/` used in canonical/OG tags, JSON-LD, and `sitemap.xml` / `robots.txt` — update once the real domain is live

## Update your photo

Replace `public/reanna.jpg` with your own image (same filename). Recommended: portrait orientation, roughly 4:5.

## Deploy

Push this folder to a GitHub repo connected to Cloudflare Pages (or GitHub Pages). No build command is needed — this is a static site.
