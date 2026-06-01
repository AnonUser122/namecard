(function () {
  const storageKey = "liuqimeng-namecard-theme";
  const fallbackTheme = "light";
  const options = Array.from(document.querySelectorAll(".theme-option"));
  const knownThemes = new Set(options.map((button) => button.dataset.themeValue));

  function applyTheme(theme) {
    const nextTheme = knownThemes.has(theme) ? theme : fallbackTheme;
    document.body.dataset.theme = nextTheme;
    options.forEach((button) => {
      const active = button.dataset.themeValue === nextTheme;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  options.forEach((button) => {
    button.addEventListener("click", () => {
      const theme = button.dataset.themeValue;
      applyTheme(theme);
      localStorage.setItem(storageKey, theme);
    });
  });

  applyTheme(localStorage.getItem(storageKey) || fallbackTheme);
})();
