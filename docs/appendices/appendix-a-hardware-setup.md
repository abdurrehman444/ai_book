---
sidebar_position: 1
description: Detailed hardware list, setup instructions, software environment configuration
---

# Appendix A: Hardware Setup and Lab Architecture

## Learning Objectives

By the end of this appendix, you should be able to:
- Set up the required hardware stack for Physical AI applications
- Configure software environments for ROS 2, Isaac Sim, and related tools
- Understand the architecture of a Physical AI lab

## Introduction

This appendix provides detailed information about the hardware requirements and setup procedures for implementing the concepts covered in this textbook. The recommended hardware stack is designed to support both simulation and real-world deployment of humanoid robots.

## Required Hardware Components

### Workstation Requirements

For simulation and training:
- **GPU**: NVIDIA RTX 4070 Ti, RTX 4080, RTX 4090 or higher
- **CPU**: Multi-core processor (Intel i7/i9 or AMD Ryzen 7/9)
- **RAM**: 32GB or more
- **Storage**: Fast SSD with at least 1TB capacity
- **OS**: Ubuntu 22.04 LTS recommended

### Edge Computing Device

For real-world deployment:
- **NVIDIA Jetson**: Jetson Orin Nano or Jetson Orin NX
- **Alternative**: Jetson AGX Orin for higher performance requirements

### Sensors and Peripherals

For perception capabilities:
- **Depth Camera**: Intel RealSense D435i or equivalent
- **IMU**: Inertial Measurement Unit for orientation sensing
- **Microphone Array**: For voice command processing
- **Additional Sensors**: LiDAR, force/torque sensors as needed

## Software Environment Configuration

### Ubuntu Setup

Detailed instructions for configuring Ubuntu for robotics development:

```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install basic development tools
sudo apt install build-essential cmake git python3-pip python3-dev -y
```

### ROS 2 Installation

Instructions for installing ROS 2 Humble Hawksbill:

```bash
# Set locale
locale  # check for UTF-8
sudo locale-gen en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
export LANG=en_US.UTF-8

# Add ROS 2 apt repository
sudo apt install software-properties-common
sudo add-apt-repository universe

# Add the ROS 2 GPG key and repository
sudo apt update && sudo apt install curl -y
sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg

echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(. /etc/os-release && echo $UBUNTU_CODENAME) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null

# Install ROS 2 packages
sudo apt update
sudo apt install ros-humble-desktop-full
sudo apt install python3-rosdep2
sudo rosdep init
rosdep update
```

### NVIDIA Isaac Sim Setup

Instructions for setting up Isaac Sim on Ubuntu:

1. Install NVIDIA drivers compatible with Isaac Sim
2. Install Isaac Sim from NVIDIA Omniverse
3. Configure GPU acceleration

### Additional Tools

- **Docker**: For containerized development
- **Git**: For version control
- **VS Code**: With robotics extensions
- **Additional libraries**: NumPy, SciPy, OpenCV, etc.

## Lab Architecture

### Network Configuration

Recommendations for networking in a Physical AI lab:
- Dedicated network for robot communication
- Quality of Service (QoS) settings for real-time communication
- Secure communication protocols

### Safety Considerations

- Emergency stop systems
- Physical barriers during testing
- Proper ventilation for equipment

## Troubleshooting Common Issues

### Hardware Compatibility

### Software Installation Problems

### Performance Optimization

## References and Further Reading

- ROS 2 Installation Guide: https://docs.ros.org/en/humble/Installation.html
- NVIDIA Isaac Sim Installation: https://docs.omniverse.nvidia.com/isaacsim/
- Ubuntu Robotics Setup: https://emanual.robotis.com/docs/en/platform/turtlebot3/simulation/#gazebo-simulation