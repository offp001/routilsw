# RoUtils Website

A responsive static website for the RoUtils desktop utility project. It uses plain HTML, CSS and JavaScript and is designed to be published as a separate repository named `routilsw` with GitHub Pages.

## Files

- `index.html` — landing page, feature directory and docs
- `styles.css` — layout, retro visual system, responsive styles and light/dark themes
- `script.js` — theme switcher, mobile navigation and latest GitHub release lookup
- `assets/` — RoUtils app icon and logo
- `.github/workflows/pages.yml` — GitHub Pages deployment workflow
- `PUBLISHING.md` — how to publish the site
- `EMAIL_SETUP.md` — how to set up a domain-based project email

## Links currently configured

- Source: https://github.com/offp001/routils
- Releases: https://github.com/offp001/routils/releases/latest
- Discord: https://discord.com/invite/849VtrYhm2

Edit `index.html` if any project links or the official Discord invite change. The download button checks the latest GitHub release through the public Releases API and chooses a suitable `.exe`, `.msi` or `.zip` asset when available. If the release has no downloadable asset, it points to the latest release page instead.

## Preview locally

Open `index.html` in a browser. For a local HTTP preview, run `python -m http.server 8000` in this folder and open `http://localhost:8000`.

The app screenshot from the source README is hosted as a GitHub user attachment and is loaded from that URL; a local logo fallback appears if it cannot load. Google Fonts are optional; system font fallbacks are included.
