// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        {
          type: 'doc',
          id: 'intro',
          label: 'Physical AI & Humanoid Robotics: Introduction'
        }
      ],
    },
    {
      type: 'category',
      label: 'Module 1: The Robotic Nervous System (ROS 2)',
      items: [
        'modules/module-1-ros2/chapter-1-1-introduction-ros2',
        'modules/module-1-ros2/chapter-1-2-building-ros2-packages',
      ],
    },
    {
      type: 'category',
      label: 'Module 2: The Digital Twin (Gazebo & Unity)',
      items: [
        'modules/module-2-digital-twin/chapter-2-1-gazebo-simulation',
        'modules/module-2-digital-twin/chapter-2-2-unity-visualization',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: The AI-Robot Brain (NVIDIA Isaac)',
      items: [
        'modules/module-3-ai-brain/chapter-3-1-isaac-sim-synthetic-data',
        'modules/module-3-ai-brain/chapter-3-2-isaac-ros-navigation',
      ],
    },
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action (VLA)',
      items: [
        'modules/module-4-vla/chapter-4-1-voice-to-action-whisper',
        'modules/module-4-vla/chapter-4-2-cognitive-planning-llms',
      ],
    },
    {
      type: 'category',
      label: 'Module 5: Capstone Project - The Autonomous Humanoid',
      items: [
        'modules/module-5-capstone/chapter-5-1-perception-planning-control',
        'modules/module-5-capstone/chapter-5-2-sim-to-real-deployment',
      ],
    },
    {
      type: 'category',
      label: 'Appendices',
      items: [
        'appendices/appendix-a-hardware-setup',
        'appendices/appendix-b-assessment-guidelines',
      ],
    },
  ],
};

export default sidebars;
