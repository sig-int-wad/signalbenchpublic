# Signal Walk public website rewrite

Field instrument for signal awareness.

This package contains a complete static copy of the rewritten Signal Walk public site:

- `index.html` — product landing page
- `early-access/index.html` — highlighted Early Access signup page
- `privacy/index.html` — privacy policy
- `responsible-use/index.html` — responsible-use guidance
- `style.css` — shared responsive styles
- `assets/site.js` — mobile navigation and screenshot lightbox
- `icon-512.png` and `feature-graphic.png` — current public brand assets
- `screenshots/` — current public screenshots, included only so the package previews correctly
- `robots.txt` and `sitemap.xml` — crawl and indexing support for the production domain


## Contact addresses included

- `support@signalwalk.com` — Play Store support and user questions
- `privacy@signalwalk.com` — privacy questions and requests
- `security@signalwalk.com` — vulnerability reports
- `hello@signalwalk.com` — general contact
- `developer@signalwalk.com` — developer identity and technical ownership

## Screenshot note

This repair pass did not replace or re-verify the screenshots in `screenshots/`. Review all six captures before launch if you need a final screenshot signoff.

## Repository use

The files in this repository are the public site. Serve the site from the repository root or publish it through the existing GitHub Pages setup for `signalwalk.com`.

## Local preview

From the site root:

```bash
python -m http.server 8000
```

Open `http://localhost:8000/`.

## Before publishing

1. Replace every screenshot with a current Signal Walk build.
2. Confirm the banner and icon match the final Play Store assets.
3. Verify the Privacy Policy against the final signed release build and Google Play Data safety answers.
4. Test navigation, screenshot lightboxes, keyboard focus, and mobile layouts.
5. Verify Cloudflare Email Routing destinations for every published mailbox alias.
