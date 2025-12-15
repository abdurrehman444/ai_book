import React from 'react';
import NavbarItem from '@theme/NavbarItem';
import { useThemeContext } from '@docusaurus/theme-common';

function ThemeToggleNavbarItem({
  mobile = false,
  'aria-label': ariaLabel,
  ...props
}) {
  const { isDarkTheme, setLightTheme, setDarkTheme } = useThemeContext();

  const toggle = () => {
    if (isDarkTheme) {
      setLightTheme();
      localStorage.setItem('theme', 'light');
    } else {
      setDarkTheme();
      localStorage.setItem('theme', 'dark');
    }
  };

  // Use the same styling as the default docusaurus theme toggle
  return (
    <div className="navbar__item">
      <button
        className="clean-btn navbar__toggle"
        type="button"
        id="theme-toggle"
        onClick={toggle}
        aria-label={isDarkTheme ? 'Switch to light theme' : 'Switch to dark theme'}
      >
        {isDarkTheme ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z"
              fill="currentColor"
            />
            <path
              d="M12 2V4M12 20V22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M2 12H4M20 12H22M6.34 17.66L4.93 19.07M19.07 4.93L17.66 6.34"
              stroke="currentColor"
            />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.32031 11.6847C3.24706 11.6847 3.1767 11.6747 3.10879 11.6562C2.97433 11.6206 2.81735 11.5289 2.69879 11.3812C2.45733 11.0889 2.52879 10.6206 2.82109 10.3792L3.78006 9.59121C4.07235 9.34975 4.54066 9.42121 4.78212 9.71351L5.5701 10.6725C5.81156 10.9648 5.74 11.4331 5.44771 11.6745C5.3798 11.7289 5.30518 11.7692 5.22731 11.6847C5.06256 11.5062 4.83406 11.6847 4.65562 11.6847H3.32031ZM9.21994 4.78212C9.4614 4.48983 9.92971 4.41837 10.1712 4.66662L11.0296 5.44121C11.2703 5.68069 11.29 6.05938 11.0796 6.31938L10.3199 7.21938C10.1095 7.47938 9.73086 7.49887 9.49034 7.25938L8.63194 6.48479C8.39142 6.2453 8.41091 5.86667 8.67091 5.65621L9.56412 4.88479C9.70558 4.76719 9.21994 4.78212 9.21994 4.78212ZM20.8211 13.6206C20.5288 13.3792 20.4573 12.9109 20.6988 12.6694L21.6578 11.8814C21.8992 11.6399 22.3675 11.7114 22.609 12.0037L23.397 12.9627C23.6384 13.255 23.567 13.7233 23.2747 13.9647C23.1968 14.0289 23.112 14.0792 23.0273 13.6206C22.8489 12.6847 21.7573 13.6206 20.8211 13.6206ZM14.7821 20.8211C14.4898 20.5796 14.4184 20.1113 14.6598 19.8698L15.4478 19.0114C15.6873 18.7707 16.066 18.7512 16.2764 18.9616L17.1764 19.7213C17.3868 19.9317 17.4063 20.3103 17.1668 20.5508L16.3892 21.4092C16.1497 21.6497 15.7711 21.6302 15.5306 21.3907L14.756 20.5323C14.6384 20.3908 14.7821 20.8211 14.7821 20.8211ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"
              fill="currentColor"
            />
          </svg>
        )}
      </button>
    </div>
  );
}

export default React.memo(ThemeToggleNavbarItem);