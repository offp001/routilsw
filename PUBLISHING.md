# Publish RoUtils Website with GitHub Pages

The website should live in a separate repository named `routilsw`; do not copy these files over the RoUtils application repository.

## 1. Create the repository

1. Sign in to GitHub as `offp001`.
2. Open https://github.com/new.
3. Set the repository name to `routilsw`.
4. Choose Public if you use GitHub Free and want the simplest public Pages setup.
5. Create the empty repository. Do not create a README if you plan to push this folder as-is.

## 2. Upload the website files

### Using GitHub Desktop

1. Open GitHub Desktop and choose **File → Add Local Repository** if the folder is already a Git repository, or **File → New Repository** and point it at the extracted `routilsw-site` folder.
2. Publish the repository to GitHub under `offp001/routilsw`.
3. Commit and push future changes when you edit the site.

### Using Git in a terminal

Extract the ZIP and open a terminal inside the extracted `routilsw-site` folder. Run:

```bash
git init
git add .
git commit -m "Create RoUtils website"
git branch -M main
git remote add origin https://github.com/offp001/routilsw.git
git push -u origin main
```

If Git says that `origin` already exists, run `git remote set-url origin https://github.com/offp001/routilsw.git` and push again. If the GitHub repository already contains a README or other commits, fetch/pull or create an empty repository to avoid unrelated-history conflicts.

## 3. Enable GitHub Pages

This ZIP includes `.github/workflows/pages.yml`, which publishes the site with GitHub Actions.

1. Open `https://github.com/offp001/routilsw`.
2. Choose **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open the **Actions** tab and check the `Deploy GitHub Pages` workflow. It should run after the first push.
5. When the job succeeds, the Pages screen will display the website link. The usual project URL is `https://offp001.github.io/routilsw/`.

Publishing can take a few minutes. If the deployment fails, open the workflow run and read the failing step. Do not put API keys, passwords or other secrets in a public website repository.

## 4. How updates work

Edit `index.html`, `styles.css` or `script.js`, then commit and push to `main`. The workflow deploys the update automatically. The download button reads the latest release metadata from `offp001/routils`; it does not upload a new application release for you. To make a real binary download available, publish a GitHub Release for the application and attach the Windows executable or installer.

## 5. Optional custom website domain

You can keep the free `offp001.github.io/routilsw/` address. If you later buy a domain, open **Settings → Pages → Custom domain**, enter the exact domain, then configure the DNS records required by GitHub Pages at your registrar. Turn on **Enforce HTTPS** when GitHub makes it available. Verify the domain with GitHub before pointing it at Pages to reduce takeover risk.

Official guides:

- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
