# Quickstart Guide: Physical AI & Humanoid Robotics Textbook

## Overview

This guide provides a quick start for educators, students, and hackathon participants to begin using the Physical AI & Humanoid Robotics textbook. The textbook is structured as a 13-week course with 5 core modules and 2 appendices, designed to teach Physical AI concepts from ROS 2 fundamentals to sim-to-real deployment strategies.

## Prerequisites

### Hardware Requirements
- RTX enabled workstation for simulation and training
- Ubuntu Linux operating system (recommended: 20.04 or later)
- Optional: Jetson Orin edge device for inference (for hardware deployment exercises)
- Optional: Depth cameras, IMUs, and microphones for sensing exercises

### Software Requirements
- Node.js (v18 or later)
- Git for version control
- Docusaurus prerequisites (Node.js, npm/yarn)
- ROS 2 (Humble Hawksbill or later recommended)
- Gazebo simulation environment
- Unity (for visualization exercises, optional)
- NVIDIA Isaac Sim (for advanced simulation exercises)

## Getting Started for Different Audiences

### For Students
1. Start with Module 1, Chapter 1.1: Introduction to ROS 2 Architecture
2. Follow the 13-week schedule outlined in the textbook
3. Complete all practical exercises in sequence
4. Focus on understanding both theoretical concepts and practical implementation

### For Educators
1. Review the Assessment Guidelines in Appendix B to understand evaluation criteria
2. Examine Module 1 and Module 2 content to verify technical standards
3. Use the Hardware Setup guide in Appendix A for lab preparation
4. Customize the 13-week schedule based on your institution's needs

### For Hackathon Participants
1. Begin with Module 4 (Vision-Language-Action) for immediate practical applications
2. Use the Capstone Project as a reference for integrating multiple systems
3. Focus on the practical exercises that align with your hackathon project
4. Utilize the sim-to-real deployment strategies in Module 5 for hardware implementation

## Setting Up the Textbook Environment

### 1. Clone the Repository
```bash
git clone [repository-url]
cd [repository-name]
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Local Development Server
```bash
npm start
```

### 4. Navigate to Your First Module
Open your browser to `http://localhost:3000` and navigate to:
- `/modules/module-1-ros2/chapter-1-1-introduction-ros2` for students
- `/appendices/appendix-b-assessment-guidelines` for educators
- `/modules/module-5-capstone/chapter-5-1-perception-planning-control` for hackathon participants

## Key Learning Pathways

### Pathway 1: Complete Course (13 weeks)
Follow the sequential path through all 5 modules:
Module 1 → Module 2 → Module 3 → Module 4 → Module 5

### Pathway 2: Simulation Focus
Focus on simulation aspects:
Module 1 → Module 2 → Module 3 → Module 4

### Pathway 3: Hardware Deployment Focus
Emphasize real-world implementation:
Module 1 → Module 3 → Module 5

## Essential Resources

### Module-Specific Resources
- **Module 1 (ROS 2)**: ROS 2 documentation, rclpy tutorials
- **Module 2 (Digital Twin)**: Gazebo tutorials, URDF/SDF documentation
- **Module 3 (AI Brain)**: NVIDIA Isaac Sim documentation, Isaac ROS guides
- **Module 4 (VLA)**: OpenAI Whisper documentation, LLM integration guides
- **Module 5 (Capstone)**: Integration best practices, deployment strategies

### Assessment Resources
- Practical exercise rubrics in Appendix B
- Hardware setup guidelines in Appendix A
- Success criteria metrics (SC-001 through SC-007) defined in the specification

## Next Steps

1. Complete the first practical exercise in Module 1
2. Set up your development environment according to Appendix A
3. Join the community forum for additional support and discussions
4. Begin the 13-week journey to mastering Physical AI and humanoid robotics