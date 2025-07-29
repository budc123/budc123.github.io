  const toggleButton = document.getElementById('darkModeToggle');
  const iconMoon = document.getElementById('iconMoon');
  const iconSun = document.getElementById('iconSun');

  function setDarkMode(isDark) {
    document.body.classList.toggle('dark-mode', isDark);
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
    iconMoon.style.display = isDark ? 'none' : 'inline';
    iconSun.style.display = isDark ? 'inline' : 'none';
  }

  // Init
  const saved = localStorage.getItem('darkMode');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = saved === 'enabled' || (!saved && prefersDark);
  setDarkMode(isDark);

  // Toggle on click
  toggleButton.addEventListener('click', () => {
    const nowDark = !document.body.classList.contains('dark-mode');
    setDarkMode(nowDark);
  });

  const defaultSection = 'home';

  function updateActiveElements() {
    const hash = window.location.hash.slice(1) || defaultSection;

    // Remove 'active' from all targetable elements
    document.querySelectorAll('.active').forEach(el => el.classList.remove('active'));

    // Add 'active' to matching sections
    document.querySelectorAll(`.page-section[id="${hash}"]`).forEach(el => el.classList.add('active'));

    // Add 'active' to matching nav links
    document.querySelectorAll(`.nav-link[href="#${hash}"]`).forEach(el => el.classList.add('active'));

    // Optional: handle other elements like sidebars or icons
   // document.querySelectorAll(`[data-active-id="${hash}"]`).forEach(el => el.classList.add('active'));
  }

  window.addEventListener('DOMContentLoaded', updateActiveElements);
  window.addEventListener('hashchange', updateActiveElements);

    function checkOrientation() {
    const warning = document.getElementById('orientation-warning');
    if (window.innerHeight > window.innerWidth) {
      warning.style.display = 'block';
      document.body.style.overflow = 'hidden';
    } else {
      warning.style.display = 'none';
      document.body.style.overflow = '';
    }
  }

  window.addEventListener('load', checkOrientation);
  window.addEventListener('resize', checkOrientation);
  window.addEventListener('orientationchange', checkOrientation);