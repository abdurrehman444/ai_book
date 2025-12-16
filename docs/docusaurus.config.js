// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'Embodied Intelligence in the Real World',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-physical-ai-textbook-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'your-organization', // Usually your GitHub org/user name.
  projectName: 'physical-ai-textbook', // Usually your repo name.

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/your-organization/physical-ai-textbook/edit/main/',
          routeBasePath: '/docs', // Serve docs at /docs to avoid conflicts with home page
          path: '.', // Look for docs in the current directory
          exclude: [
            'node_modules/**/*.{md,mdx}',
            '_template_chapter.md',  // Template file with placeholder values
            '_content_validation.md',  // Content validation guidelines, not a doc page
          ], // Exclude node_modules and template files to avoid MDX compilation errors
        },
        blog: false, // Disable blog for textbook
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  scripts: [
    {
      src: '/js/theme-toggle.js',
      async: true,
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Physical AI & Humanoid Robotics',
        logo: {
          alt: 'Physical AI & Humanoid Robotics Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/docs/intro',
            label: 'Textbook',
            position: 'left',
          },
          {
            href: 'https://github.com/your-organization/physical-ai-textbook',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Textbook Modules',
            items: [
              {
                label: 'Module 1: The Robotic Nervous System (ROS 2)',
                to: '/docs/modules/module-1-ros2/intro',
              },
              {
                label: 'Module 2: The Digital Twin (Gazebo & Unity)',
                to: '/docs/modules/module-2-digital-twin/intro',
              },
              {
                label: 'Module 3: The AI-Robot Brain (NVIDIA Isaac)',
                to: '/docs/modules/module-3-ai-brain/intro',
              },
              {
                label: 'Module 4: Vision-Language-Action (VLA)',
                to: '/docs/modules/module-4-vla/intro',
              },
              {
                label: 'Module 5: Capstone Project',
                to: '/docs/modules/module-5-capstone/intro',
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                label: 'Appendix A: Hardware Setup',
                to: '/docs/appendices/appendix-a-hardware-setup',
              },
              {
                label: 'Appendix B: Assessment Guidelines',
                to: '/docs/appendices/appendix-b-assessment-guidelines',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/your-organization/physical-ai-textbook',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Textbook. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'python', 'json', 'yaml', 'docker', 'csharp', 'java', 'cpp'],
      },
    }),
};

export default config;
