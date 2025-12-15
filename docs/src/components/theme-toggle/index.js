import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// Theme toggle component that will be added to the navbar
export default function ThemeToggle() {
  return (
    <div className="navbar__item">
      <button
        id="theme-toggle"
        className={clsx('button button--secondary button--sm', styles.themeToggle)}
        aria-label="Toggle dark mode"
        title="Toggle dark mode"
      >
        {/* Icon will be added by JavaScript */}
      </button>
    </div>
  );
}