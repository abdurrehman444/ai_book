---
sidebar_position: 2
description: Step-by-step guide to creating ROS 2 packages, writing nodes using rclpy, managing launch files and parameters
---

# Chapter 1.2: Building ROS 2 Packages with Python

## Learning Objectives

By the end of this chapter, you should be able to:
- Create and structure ROS 2 packages properly
- Write nodes using the rclpy Python client library
- Manage parameters and launch files for ROS 2 applications

## Introduction

This chapter focuses on the practical aspects of building ROS 2 packages using Python. You'll learn how to structure your code following ROS 2 best practices and how to use the rclpy client library to interact with the ROS 2 middleware.

## Creating ROS 2 Packages

A ROS 2 package is the basic building block of a ROS-based system. This section covers how to create, structure, and manage packages.

### Package Structure

A standard ROS 2 package includes several important files and directories.

### Using colcon for Building

The colcon build system is used to compile and build ROS 2 packages.

## Writing Nodes with rclpy

The rclpy library provides Python bindings for ROS 2. This section covers how to write nodes that interact with the ROS 2 middleware.

### Basic Node Structure

### Publishers and Subscribers with rclpy

### Services and Actions in Python

## Parameters and Launch Files

ROS 2 provides mechanisms for configuring nodes at runtime through parameters and launch files.

### Parameter Management

### Launch Files

Launch files allow you to start multiple nodes with specific configurations.

## Practical Examples

This section provides practical examples of building ROS 2 packages with Python.

## Summary

This chapter covered the process of building ROS 2 packages using Python and the rclpy client library. You learned how to structure packages, write nodes, and manage configuration through parameters and launch files.

## Exercises

1. Create a ROS 2 package with a publisher and subscriber node
2. Implement a service server using rclpy
3. Create a launch file that starts multiple nodes with different parameters

## Assessment

Students should be able to create a complete ROS 2 package with multiple nodes that communicate using different communication patterns and are configured through launch files.

## References and Further Reading

- ROS 2 Python Client Library (rclpy): https://docs.ros.org/en/rolling/p/rclpy/
- Package Development: https://docs.ros.org/en/rolling/Tutorials/Beginner-Client-Libraries/Creating-Your-First-ROS2-Package.html