# Create Vite Project CLI

Ce projet est un outil en ligne de commande (CLI) qui permet de créer rapidement un projet Vite avec ou sans TypeScript. Il génère un projet de base avec une structure de fichiers prête à l'emploi pour commencer le développement avec Vite sans le template par défaut guère utile pour de petits projets.

## Fonctionnalités

- Crée un projet Vite avec une configuration minimale.
- Option pour initialiser un projet avec TypeScript.
- Installation automatique des dépendances nécessaires.
- Structure de projet prête à l'emploi pour démarrer rapidement le développement.

## Installation

### Cloner le dépôt

```bash
git clone https://github.com/ton-utilisateur/create-vite-project.git
cd create-vite-project
```

### Installer les dépendances du projet :

```bash
npm install
```

```bash
npm link
```

## Utilisation

```bash
node create-project <nom-du-projet> [--ts]
```

### Exemple

Sans TypeScript :

```bash
node create-project mon super projet
```

Avec TypeScript :

```bash
node create-project mon super projet --ts
```

### Désinstaller

```bash
npm unlink
```
