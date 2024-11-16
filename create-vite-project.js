#!/usr/bin/env node

const { Command } = require("commander");
const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const program = new Command();

program
  .name("create-project")
  .description("CLI to create a Vite project")
  .option("--ts", "Initialize with TypeScript")
  .argument("<project-name>", "Project name");

program.parse(process.argv);

const options = program.opts();
const projectName = program.args.join(" ").trim();

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

if (!projectName) {
  console.error("Error : You need to name your project!");
  process.exit(1);
}

const projectPath = path.join(process.cwd(), projectName);
if (fs.existsSync(projectPath)) {
  console.error("The folder already exists!");
  process.exit(1);
}

fs.mkdirSync(projectPath);
process.chdir(projectPath);

const packageContent = {
  name: projectName.split(" ").join("-"),
  version: "1.0.0",
  type: "module",
  devDependencies: {
    vite: "^5.4.11",
  },
  scripts: {
    dev: "vite --open --clearScreen false",
    build: "vite build",
    preview: "vite preview",
  },
};

const htmlContent = `<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <script type='module' src='${
      options.ts ? "script.ts" : "script.js"
    }' defer></script>
    <link rel='stylesheet' href='style.css' />
    <title>${projectName.charAt(0).toUpperCase() + projectName.slice(1)}</title>
</head>
<body>
    
</body>
</html>`;

const cssContent = `body {
    margin: 0;
    box-sizing: border-box;
}`;

if (options.ts) {
  fs.mkdirSync("src");

  packageContent.devDependencies = {
    vite: "^5.4.11",
    typescript: "^5.0.0",
    "@types/node": "^22.9.0",
  };

  const tsConfigContent = {
    compilerOptions: {
      target: "es6",
      module: "esnext",
      moduleResolution: "node",
      strict: true,
      esModuleInterop: true,
      skipLibCheck: true,
      forceConsistentCasingInFileNames: true,
      outDir: "./dist",
      rootDir: "./src",
      resolveJsonModule: true,
      isolatedModules: true,
      strictNullChecks: true,
      lib: ["es2020", "DOM"],
      skipDefaultLibCheck: true,
    },
    include: ["src/**/*.ts"],
    exclude: ["node_modules", "dist"],
  };

  fs.writeFileSync("tsconfig.json", JSON.stringify(tsConfigContent, null, 2));

  process.chdir("./src");

  fs.writeFileSync("index.html", htmlContent);
  fs.writeFileSync("style.css", cssContent);
  fs.writeFileSync("script.ts", "");

  process.chdir("../");

  const viteConfigContent = `import { defineConfig } from 'vite';
  export default defineConfig({
    root: './src',
    server: {
      open: true,
    },
  });`;

  fs.writeFileSync("vite.config.ts", viteConfigContent);
} else {
  fs.writeFileSync("index.html", htmlContent);
  fs.writeFileSync("style.css", cssContent);
  fs.writeFileSync("script.js", "");
}

fs.writeFileSync("package.json", JSON.stringify(packageContent, null, 2));

fs.writeFileSync(".gitignore", "node_modules/");

console.log("");
console.log("Files successfully created!");
console.log("");
console.log("Installing dependencies...");

try {
  execSync("npm install", { stdio: "inherit" });

  console.log("Dependencies installed.");
  console.log("");
  console.log("Updating dependencies..");
  console.log("");

  execSync("npm update", { stdio: "inherit" });

  console.log("Dependencies upgraded.");
  console.log("");
  console.log("Starting server...");

  execSync("npm run dev", { stdio: "inherit" });
} catch (err) {
  console.error("Error during the server initialization...", err.message);
}

readline.close();
