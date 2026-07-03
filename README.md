# Signal Walk

**Field instrument for signal awareness.**

Take Signal Walk for a walk, capture nearby activity, and export the data.

This repository hosts the public website for Signal Walk, an Android app for observing the nearby wireless environment (Bluetooth, Wi-Fi, location, and sensor information available through Android) in organized, exportable sessions.

**Live site:** https://sig-int-wad.github.io/signalwalkpublic/

- [Privacy Policy](https://sig-int-wad.github.io/signalwalkpublic/privacy/)
- [Responsible Use](https://sig-int-wad.github.io/signalwalkpublic/responsible-use/)

## What's in this repository

Static HTML and CSS only — no build step, no frameworks, no analytics, no tracking, no remote fonts.

```
index.html              Home page
privacy/index.html      Privacy policy
responsible-use/index.html   Responsible-use guidance
style.css               Shared stylesheet
feature-graphic.png     Banner image
icon-512.png            App icon / favicon
```

This is the **public website only**. It does not contain the Signal Walk Android application source code.

## Local preview

Serve the folder with any static file server, for example:

```sh
npx serve .
```

Then open `http://localhost:3000/`.
