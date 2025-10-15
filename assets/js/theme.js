// Dark mode toggle functionality - Based on minimal-dark-theme
const LOCAL_STORAGE_KEY = 'mreleden-dark-mode';

// Apply dark mode class immediately on page load
(function() {
  const storage = localStorage.getItem(LOCAL_STORAGE_KEY);
  const isDark = storage !== null ? JSON.parse(storage) : true; // Default to dark mode
  if (isDark) {
    document.documentElement.classList.add('theme-dark');
  }
})();

function isDarkMode() {
  const storage = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (storage !== null) {
    return JSON.parse(storage);
  }
  // Default to dark mode if no preference is stored
  return true;
}

function toggleDarkMode() {
  document
      .getElementsByTagName('html')[0]
      .classList
      .toggle('theme-dark');
  const flippedDarkMode = !isDarkMode();
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(flippedDarkMode));
  updateToggleButton();
  return flippedDarkMode;
}

function updateToggleButton() {
  const button = document.getElementById('theme-toggle');
  if (button) {
    button.textContent = isDarkMode() ? '☀️' : '🌙';
    button.title = isDarkMode() ? 'Switch to light mode' : 'Switch to dark mode';
  }
}

// Initialize button on page load
document.addEventListener('DOMContentLoaded', function() {
  updateToggleButton();
});
