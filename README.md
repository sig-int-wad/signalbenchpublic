# Signal Walk public website rewrite

Field instrument for signal awareness.

This package contains a complete static copy of the rewritten Signal Walk public site:

- `index.html` — product landing page
- `privacy/index.html` — privacy policy
- `responsible-use/index.html` — responsible-use guidance
- `style.css` — shared responsive styles
- `assets/site.js` — mobile navigation and screenshot lightbox
- `icon-512.png` and `feature-graphic.png` — current public brand assets
- `screenshots/` — current public screenshots, included only so the package previews correctly
- `SCREENSHOT_UPDATE_CHECKLIST.md` — required image replacements before launch
- `IMPLEMENTATION_NOTES.md` — copy, legal, and release-review notes


## Contact addresses included

- `support@signalwalk.com` — Play Store support and user questions
- `privacy@signalwalk.com` — privacy questions and requests
- `security@signalwalk.com` — vulnerability reports
- `hello@signalwalk.com` — general contact
- `developer@signalwalk.com` — developer identity and technical ownership

## Important screenshot warning

The screenshots currently included in `screenshots/` came from the live public repository and still show legacy Signal Bench app screens. Replace all six screenshots with current Signal Walk captures before publishing this package.

## Apply to the public repository

Copy the package over the matching paths in `signalwalkpublic`. The filenames and directory structure match the current site.

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
5. Update the GitHub repository description if it still says Signal Bench.
