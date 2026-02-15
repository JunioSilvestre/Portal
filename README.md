# Portal

A modern, scalable web portal built with Next.js 14, Tailwind CSS, and Radix UI.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI, Lucide React
- **Animation:** Framer Motion
- **Forms:** React Hook Form + Zod
- **State Management:** React Context (Providers)
- **Tooling:** ESLint, Prettier, Husky, Commitlint

## Getting Started

1. **Install dependencies:**

```bash
npm install
# or
npm install --legacy-peer-deps
```

2. **Run development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

- `npm run dev`: Runs the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint.

## Git Workflow

This project enforces **Conventional Commits** using Husky and Commitlint.

- **Pre-commit hook:** Runs `lint-staged` (ESLint & Prettier) on staged files.
- **Pre-push hook:** Runs `npm run build` to ensure the project builds before pushing.
- **Commit Message Format:** `type(scope): subject`
  - Example: `feat(ui): add new button component`
  - Example: `fix(auth): resolve login error`

## Project Structure

- `src/app`: App Router pages and layouts.
- `src/components`: Reusable UI components.
- `src/lib`: Utility functions and helpers.
- `.github/workflows`: CI/CD configurations.
