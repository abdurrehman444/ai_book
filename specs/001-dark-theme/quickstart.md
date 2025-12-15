# Quickstart: Dark Color Theme

## Overview
This guide explains how to implement and use the dark color theme in the book project.

## Implementation Steps

### 1. Set up CSS Variables
First, define your CSS custom properties for both light and dark themes:

```css
:root {
  /* Light theme variables */
  --background-color: #ffffff;
  --text-color: #333333;
  --accent-color: #007acc;
  --border-color: #e0e0e0;
  --code-background: #f4f4f4;
  --code-text: #333333;
}

[data-theme="dark"] {
  /* Dark theme variables */
  --background-color: #1e1e1e;
  --text-color: #e0e0e0;
  --accent-color: #4da6ff;
  --border-color: #444444;
  --code-background: #2d2d2d;
  --code-text: #dcdcdc;
}
```

### 2. Apply CSS Variables
Update your existing CSS to use the variables instead of hardcoded colors:

```css
body {
  background-color: var(--background-color);
  color: var(--text-color);
}

.textbook-content {
  background-color: var(--background-color);
  color: var(--text-color);
  border: 1px solid var(--border-color);
}
```

### 3. Implement Theme Toggle JavaScript
Add JavaScript to handle theme switching and persistence:

```javascript
// Get the current theme from localStorage or system preference
function getCurrentTheme() {
  return localStorage.getItem('theme') ||
         (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
}

// Apply the theme to the document
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

// Toggle between themes
function toggleTheme() {
  const current = getCurrentTheme();
  const newTheme = current === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
  applyTheme(getCurrentTheme());
});
```

### 4. Add Theme Toggle UI
Create a UI element for users to toggle the theme:

```html
<button id="theme-toggle" aria-label="Toggle dark mode">
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
  </svg>
</button>
```

### 5. Initialize the Theme Toggle
Connect the UI element to the JavaScript functionality:

```javascript
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
```

## Testing
- Verify all text maintains proper contrast ratios in both themes
- Test theme persistence across browser sessions
- Ensure the toggle works on all pages of the book project
- Validate that system preference is respected when no user preference is set