const darkMode = () => {
  const themeToggleButtons = document.querySelectorAll('#theme-toggle');

  // State
  const readTheme = localStorage.getItem('theme');

  // On Mount
  readTheme && document.body.classList.add(readTheme);

  // Handlers
  const handleThemeToggle = () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
      localStorage.setItem('theme', 'light-mode');
    } else {
      localStorage.removeItem('theme');
      document.body.removeAttribute('class');
    }
  };

  // Events
  themeToggleButtons.forEach(btn => btn.addEventListener('click', handleThemeToggle));
};

export default darkMode;