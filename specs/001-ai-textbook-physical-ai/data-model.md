# Data Model: Physical AI & Humanoid Robotics Textbook

## Overview

This document defines the data models for the Physical AI & Humanoid Robotics textbook. Since this is a documentation project, the "data" consists of content entities and their relationships.

## Core Entities

### 1. Module

**Description**: A major section of the textbook that covers a specific aspect of Physical AI

**Attributes**:
- moduleId: Unique identifier for the module
- title: Title of the module (e.g., "The Robotic Nervous System (ROS 2)")
- description: Brief description of the module's content
- order: Sequential number in the 13-week course schedule
- duration: Estimated duration in weeks
- prerequisites: List of prerequisite modules or knowledge areas
- learningOutcomes: List of measurable learning outcomes for the module

**Relationships**:
- Contains multiple Chapters
- May depend on other Modules (prerequisites)
- Connected to Assessment Methods

### 2. Chapter

**Description**: A subsection within a module that focuses on a specific topic or concept

**Attributes**:
- chapterId: Unique identifier for the chapter
- title: Title of the chapter (e.g., "Introduction to ROS 2 Architecture")
- module: Reference to the parent module
- order: Sequential number within the module
- estimatedReadingTime: Estimated time to complete the chapter
- topics: List of key topics covered in the chapter
- learningObjectives: Specific learning objectives for the chapter

**Relationships**:
- Belongs to one Module
- Contains multiple Practical Exercises
- May reference other Chapters (cross-references)
- Connected to Assessment Methods

### 3. Practical Exercise

**Description**: A hands-on activity that allows students to apply theoretical concepts using the specified hardware and software tools

**Attributes**:
- exerciseId: Unique identifier for the exercise
- title: Title of the practical exercise
- chapter: Reference to the parent chapter
- difficulty: Level of difficulty (beginner, intermediate, advanced)
- estimatedCompletionTime: Estimated time to complete the exercise
- requiredHardware: List of required hardware components
- requiredSoftware: List of required software tools
- objectives: List of objectives the exercise aims to achieve
- steps: Detailed steps for completing the exercise
- expectedOutcome: Description of what the student should achieve

**Relationships**:
- Belongs to one Chapter
- Supports specific Learning Outcomes
- May depend on other Practical Exercises

### 4. Learning Outcome

**Description**: A measurable objective that students should achieve after completing a chapter or module

**Attributes**:
- outcomeId: Unique identifier for the learning outcome
- description: Clear description of the learning outcome
- module: Reference to the associated module
- chapter: Reference to the associated chapter (optional, if specific to a chapter)
- measurable: Whether the outcome is objectively measurable
- assessmentMethod: How the outcome will be assessed

**Relationships**:
- Associated with one Module (and optionally one Chapter)
- Achieved through Practical Exercises
- Validated by Assessment Methods

### 5. Assessment Method

**Description**: A technique to validate that students have achieved the intended learning outcomes

**Attributes**:
- assessmentId: Unique identifier for the assessment method
- title: Title of the assessment method
- type: Type of assessment (e.g., practical demonstration, written test, project submission)
- associatedLearningOutcomes: List of learning outcomes this assessment validates
- criteria: Specific criteria for successful completion
- audience: Target audience (students, educators, hackathon participants)

**Relationships**:
- Validates multiple Learning Outcomes
- Applied to Modules and Chapters
- Uses Practical Exercises as validation tools

## Content Validation Rules

### 1. Module Validation
- Each module must have a unique title
- Each module must have at least one chapter
- Module duration must align with the 13-week schedule
- All required learning outcomes must be addressed

### 2. Chapter Validation
- Each chapter must belong to exactly one module
- Chapter topics must align with the parent module's focus
- Each chapter must include at least one practical exercise
- All learning objectives must connect to measurable outcomes

### 3. Practical Exercise Validation
- Required hardware must match the specified hardware stack (RTX workstations, Ubuntu Linux, Jetson Orin, sensors)
- Exercises must follow the sim-to-real deployment pathway
- Difficulty level must match the target audience (advanced undergraduate/graduate students)
- Each exercise must have a clear expected outcome

### 4. Learning Outcome Validation
- Each learning outcome must be measurable and testable
- Outcomes must align with the success criteria defined in the specification
- All outcomes must be achievable through the provided content and exercises

## State Transitions

### Content Development States
1. **Draft**: Initial content creation
2. **Review**: Content reviewed by subject matter experts
3. **Validation**: Practical exercises tested with target hardware
4. **Published**: Content ready for student use
5. **Archived**: Content deprecated but maintained for reference

### Assessment States
1. **Proposed**: Assessment method suggested
2. **Validated**: Assessment method tested and proven effective
3. **Active**: Assessment method in use
4. **Retired**: Assessment method no longer in use

## Relationships Summary

```
Module 1 ---< Chapter 1 ---< Practical Exercise 1
  |                           |
  |                           v
  |                        Learning Outcome 1 ---< Assessment Method 1
  |
  v
Module 2 ---< Chapter 2 ---< Practical Exercise 2
  |
  v
Module 3 (AI-Robot Brain) ---< Chapter 3 ---< Practical Exercise 3
  |
  v
Module 4 (Vision-Language-Action) ---< Chapter 4 ---< Practical Exercise 4
  |
  v
Module 5 (Capstone) ---< Chapter 5 ---< Practical Exercise 5
```

The relationships ensure that each component builds upon previous knowledge while maintaining the integration required by the constitution's Module Integration Framework principle.