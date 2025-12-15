/**
 * Theme Toggle Functionality
 * Handles theme switching and persistence using localStorage
 */

// Get the current theme from localStorage or system preference
function getCurrentTheme() {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) {
    return storedTheme;
  }

  // If no stored preference, respect system preference
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }

  return 'light';
}

// Apply the theme to the document
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);

  // Update the toggle button icon to reflect current theme if it exists
  updateToggleButton(theme);
}

// Toggle between themes
function toggleTheme() {
  const current = getCurrentTheme();
  const newTheme = current === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
}

// Update the toggle button icon based on current theme
function updateToggleButton(theme) {
  // Look for any element with class 'theme-toggle' or id 'theme-toggle'
  const toggleButtons = document.querySelectorAll('.theme-toggle, #theme-toggle');
  toggleButtons.forEach(button => {
    // Clear existing content and add appropriate icon
    if (theme === 'dark') {
      // Sun icon for dark mode (indicating we can switch to light)
      button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
        </svg>
      `;
    } else {
      // Moon icon for light mode (indicating we can switch to dark)
      button.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.145-.68.277-1.029.393a.752.752 0 0 1-.81-.317c.002-.026-.003-.052-.004-.078a7.029 7.029 0 0 1-4.766-3.717.529.529 0 0 1-.003-.023.751.751 0 0 1 .826-.696z"/>
        </svg>
      `;
    }
  });
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
  const theme = getCurrentTheme();
  applyTheme(theme);

  // Add click listener to any theme toggle buttons that may exist
  const toggleButtons = document.querySelectorAll('.theme-toggle, #theme-toggle');
  toggleButtons.forEach(button => {
    button.addEventListener('click', toggleTheme);
  });
});

// Listen for system theme changes
if (window.matchMedia) {
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Only apply system preference if user hasn't set a preference
    if (!localStorage.getItem('theme')) {
      applyTheme(e.matches ? 'dark' : 'light');
    }
  });
}