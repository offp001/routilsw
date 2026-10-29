(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const themeLabel = document.querySelector('.theme-label');
  const themeIcon = document.querySelector('.theme-icon');
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.nav');
  const screenshot = document.getElementById('readme-shot');
  const latestUrl = 'https://api.github.com/repos/offp001/routils/releases/latest';
  const releasePage = 'https://github.com/offp001/routils/releases/latest';
  const downloadButton = document.getElementById('download-button');
  const bottomDownload = document.getElementById('bottom-download');
  const docsDownload = document.getElementById('docs-download');
  const detail = document.getElementById('download-detail');
  const versionElements = [document.getElementById('hero-version'), document.getElementById('top-version')];

  let savedTheme = 'light';
  try {
    savedTheme = localStorage.getItem('routils-theme') || 'light';
  } catch (_) {}
  root.dataset.theme = savedTheme === 'dark' ? 'dark' : 'light';

  const setThemeLabel = () => {
    const dark = root.dataset.theme === 'dark';
    themeLabel.textContent = dark ? 'Dark mode' : 'Light mode';
    themeIcon.textContent = dark ? '☼' : '◐';
    themeButton.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    document.querySelector('meta[name="theme-color"]').content = dark ? '#17242a' : '#f2eddf';
  };
  setThemeLabel();
  themeButton.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem('routils-theme', root.dataset.theme);
    } catch (_) {}
    setThemeLabel();
  });

  menuButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.textContent = isOpen ? '×' : '☰';
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.textContent = '☰';
  }));
  if (screenshot) screenshot.addEventListener('error', () => {
    screenshot.style.display = 'none';
    const fallback = screenshot.parentElement.querySelector('.shot-fallback');
    if (fallback) fallback.style.display = 'flex';
  }, { once: true });

  const setReleaseLink = url => {
    [downloadButton, bottomDownload, docsDownload].forEach(link => {
      if (link) link.href = url;
    });
  };
  setReleaseLink(releasePage);
  fetch(latestUrl, { headers: { Accept: 'application/vnd.github+json' } })
    .then(response => {
      if (!response.ok) throw new Error('Release information unavailable');
      return response.json();
    })
    .then(release => {
      const tag = release.tag_name || release.name || 'Latest';
      versionElements.forEach(element => {
        if (!element) return;
        if (element.id === 'top-version') element.textContent = tag.toUpperCase() + ' ↗';
        else element.textContent = tag.replace(/^v/i, '');
      });
      let asset = null;
      const assets = Array.isArray(release.assets) ? release.assets : [];
      asset = assets.find(item => /routils.*\.exe$/i.test(item.name))
        || assets.find(item => /windows|win64|win-x64/i.test(item.name) && /\.(exe|zip|msi)$/i.test(item.name))
        || assets.find(item => /\.(exe|msi)$/i.test(item.name))
        || assets.find(item => /\.zip$/i.test(item.name));
      if (asset && asset.browser_download_url) {
        setReleaseLink(asset.browser_download_url);
        detail.textContent = tag + ' · ' + asset.name;
        downloadButton.setAttribute('aria-label', 'Download latest RoUtils release ' + tag);
        bottomDownload.setAttribute('aria-label', 'Download latest RoUtils release ' + tag);
      } else {
        detail.textContent = tag + ' · open release page';
        setReleaseLink(release.html_url || releasePage);
      }
    })
    .catch(() => {
      versionElements.forEach(element => {
        if (element && element.id === 'hero-version') element.textContent = '5.2.4';
      });
      detail.textContent = 'Latest release · GitHub';
    });

  const docLinks = Array.from(document.querySelectorAll('.docs-menu a'));
  const docSections = docLinks.map(link => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        docLinks.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id));
      });
    }, { rootMargin: '-20% 0px -65% 0px' });
    docSections.forEach(section => observer.observe(section));
  }
})();
