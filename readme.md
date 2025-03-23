
<div align="center">

[![Contributors][contributors-shield]](https://github.com/Cemus/create-vite-project/graphs/contributors)
[![Forks][forks-shield]](https://github.com/Cemus/create-vite-project/network/members)
[![Stargazers][stars-shield]](https://github.com/Cemus/create-vite-project/stargazers)
[![Issues][issues-shield]](https://github.com/Cemus/create-vite-project/issues)
[![License][license-shield]](https://github.com/Cemus/create-vite-project/blob/main/LICENSE)
[![LinkedIn][linkedin-shield]](https://www.linkedin.com/in/kevin-lionnet/)

</div>


# Create Vite Project CLI

This project is a Command Line Interface (CLI) tool that quickly creates a Vite project with or without TypeScript. It generates a basic project with a ready-to-use file structure, allowing you to start development with Vite without the default template, which can be unnecessary for smaller projects.

## Features

- Creates a Vite project with a minimal configuration.
- Option to initialize a project with TypeScript.
- Automatically installs necessary dependencies.
- Provides a ready-to-use project structure to kickstart development quickly.

## Installation

### Install globally via npm

```bash
npm install -g create-vite-project-cli
```

## Usage

```bash
npx create-project <project-name> [--ts]
```

### Example

Without TypeScript:

```bash
npx create-project my awesome project
```

With TypeScript:

```bash
npx create-project my awesome project --ts
```

## Uninstallation

### Remove the global installation

```bash
npm uninstall -g create-vite-project-cli
```
