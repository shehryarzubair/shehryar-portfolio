# Shehryar Zubair — Portfolio

A responsive personal portfolio built with Next.js, React and TypeScript. Showcases full stack and WordPress development experience, selected projects, technical skills and contact links.

## Run locally

Use Node.js 22 LTS and npm.

```sh
npm ci
npm run dev
```

Open the URL printed by the development server (usually http://localhost:3000).
No environment variables are required.

## Checks and formatting

```sh
npm run format
npm run format:check
npm run typecheck
npm run build
```

Run `npm start` after building to serve the production version.
The build uses `next/font/google` and needs access to Google Fonts.

For format-on-save in VS Code, install the recommended Prettier extension. Workspace settings are included in `.vscode/`.

## Project structure

```text
app/
  page.tsx                 Page composition
  layout.tsx               Fonts and metadata
  globals.css              Shared styles and responsive layouts
  data/                    Projects, experience, technologies and contact details
  components/
    sections/              Individual page sections
    ui/                    Shared icons and interactive components
```

Update `app/data/` to change project details, skill lists, experience and contact links.
Section introductions and other display copy live in `app/components/sections/`.

Commit `package-lock.json` for reproducible installs. Dependencies, generated build files and local environment files are excluded by `.gitignore`.
