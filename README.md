# CCI — Static Training Website

This is a simple static site for a computer training center (CCI).

## What I created ✅
- `index.html`, `courses.html`, `course-python.html`, `course-ccc.html`, `course-olevel.html`, `about.html`, `contact.html`
- `assets/css/styles.css`, `assets/js/main.js`, `assets/images/logo.svg`

## Preview locally
- Option 1 (quick): Open `index.html` in your browser.
- Option 2 (recommended): Run a local server from the `cci` folder.
  - Python 3: `python -m http.server 8000` then open `http://localhost:8000`
  - VS Code: Install *Live Server* extension and click "Go Live".

## Customize
- Edit the HTML files in the root to change course text.
- Change colors in `assets/css/styles.css` (CSS variables at the top).
- Form submits open your mail client. Replace `info@cci.example.com` with your email or wire up a backend.

## Deploy to GitHub Pages
This project is ready for GitHub Pages.

Quick publish (recommended):
1. Push this repository to GitHub (e.g., `origin/main`).
2. The included GitHub Actions workflow (`.github/workflows/deploy-pages.yml`) will automatically deploy the `main` branch to GitHub Pages. The first run may take a minute.
3. Visit `https://<your-username>.github.io/<your-repo>/` after the workflow completes. If you want a custom domain, add a `CNAME` file and configure DNS.

Notes:
- A `.nojekyll` file is included to bypass Jekyll processing.
- Ensure your repository's default branch is `main` (or update the workflow trigger accordingly).

Enjoy! 🚀
