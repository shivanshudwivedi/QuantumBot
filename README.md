# QuantumBot

QuantumBot is a comprehensive project that leverages Firebase Cloud Functions and Firestore to handle chat messages. This project is designed to be scalable and easily deployable using Firebase, and includes detailed instructions on how to set up and use the system.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview
QuantumBot is a cloud-based application designed to handle chat messages. It uses Firebase Cloud Functions to process requests and Firestore as the database to store messages. This setup ensures scalability, reliability, and ease of deployment.

## Features
- **Serverless Architecture**: Leveraging Firebase Cloud Functions for backend logic.
- **Real-time Database**: Using Firestore to store and retrieve chat messages.
- **Logging**: Built-in logging with Firebase functions for debugging and monitoring.
- **Linting**: ESLint configured for maintaining code quality.

## Installation

### Prerequisites
- **Node.js** (version 18 or later)
- **Firebase CLI**: Install via npm
  ```bash
  npm install -g firebase-tools

## Steps to run the service 

- **Clone the repo**
  ```bash
  git clone https://github.com/your-username/quantumbot.git
  cd quantumbot
  ```
- **Navigate to fucntions directory & install dependencies**
  ```bash
  cd functions
  npm install
  ```
-  **Setup firebase**
  ```bash
  firebase login
  firebase init
  ```
- **To run locally**
  ```bash
  npm run serve
  ```
- **To deploy to firebase**
  ```bash
  npm run deploy
  ```

## Project Structure


### Root Directory

- **.gitignore**: Specifies files and directories that should be ignored by Git. This is crucial for excluding sensitive information and dependencies from being tracked in version control.
- **firebase.json**: Firebase configuration file. It defines the Firebase settings, including which services are used, emulators configuration, and deployment options.
- **README.md**: The main documentation file for the project. It provides an overview, installation instructions, usage guidelines, and other essential information about the project.

### functions Directory

This directory contains all the Firebase Cloud Functions code and related configurations.

- **functions/api/**: This folder contains individual function modules, each encapsulating a specific functionality.

  - **addMessage.js**: This file defines the `addMessage` function, which is a Firebase Cloud Function designed to handle incoming requests to add chat messages. It validates input data, constructs the message object, and stores it in Firestore.

- **functions/index.js**: The entry point for the Firebase Cloud Functions. It imports and initializes individual functions from the `api` directory and other modules as needed. This file ensures that all functions are properly exported and available for Firebase to handle.

- **functions/package.json**: This file contains the dependencies and scripts for the Cloud Functions. It specifies which Node.js packages are required, and includes scripts for linting, serving, deploying, and running other tasks related to the Cloud Functions.

- **functions/.eslintrc.js**: Configuration file for ESLint, a static code analysis tool. It enforces coding standards and helps in maintaining code quality by defining rules and settings for linting JavaScript code in the project.

### Explanation of Key Files

- **addMessage.js**: This function handles HTTP requests to add new messages to the chat. It uses the Firebase Admin SDK to interact with Firestore and ensures that required fields (`text` and `userId`) are present. If the validation passes, it adds the message to the Firestore database and logs the operation. If there's an error, it logs the error and throws an appropriate HTTP error.

- **index.js**: This is the main file where all individual Cloud Functions are brought together. It ensures that each function is correctly initialized and exported for Firebase to handle. Typically, it requires each function module and attaches them to the exports object.

- **package.json**: Contains metadata about the project and its dependencies. It lists all npm packages needed for the project to run, as well as scripts for various tasks like `lint`, `serve`, `deploy`, and `logs`. This file is essential for managing the project's dependencies and automating common tasks.

- **.eslintrc.js**: Defines the ESLint configuration for the project. It specifies the environment, parser options, extends standard configurations (like `eslint:recommended` and `google`), and custom rules to enforce consistent coding standards and help catch errors early in the development process.

Understanding this structure is crucial for navigating the project and contributing effectively. Each part of the structure serves a specific purpose and helps in maintaining a clean and organized codebase.

## Developer Contact

Feel free to reach out for recommendations at shitanshri@gmail.com
