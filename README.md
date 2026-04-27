# React Ts Library Vite Boilerplate

## Educational Purpose

This project was created primarily for **educational and learning purposes**.  
While it is well-structured and could technically be used in production, it is **not intended for commercialization**.  
The main goal is to explore and demonstrate best practices, patterns, and technologies in software development.

## Getting Started

1. Clone the repository
2. Navigate to the project folder
3. Execute: `npm install`
4. Execute: `npm run storybook` to explore the example component, helper and hook

The Storybook playground will be available at `http://localhost:6006`

> To run the Vite dev sandbox instead: `npm run dev` → `http://localhost:5173`

## Description

**React Ts Library Vite Boilerplate** is a production-ready starting point for publishing React libraries with TypeScript and Vite. It is not a UI kit or a framework — it is the foundation you clone once and stop rebuilding from scratch every time you want to ship a reusable hook, component, or utility to npm.

**The problem it solves:** every React + TypeScript library project starts with the same repetitive decisions — how to configure Vite in library mode, how to generate `.d.ts` type declarations without breaking path aliases, how to output both ESM and UMD formats, how to document with Storybook, and how to wire up linting and formatting so they block bad code before it reaches the registry. This boilerplate answers all of those decisions upfront, with a consistent and lightweight setup that scales without introducing unnecessary complexity.

**What it includes:**

- **Vite 7** in library mode — dual ESM + UMD output, externalized React, and optimized builds out of the box.
- **React 19 + TypeScript 5** — strict typing enforced throughout; no `any`, explicit return types required, consistent type imports.
- **vite-plugin-dts** for automatic `.d.ts` generation with path alias resolution — no post-build scripts needed.
- **CSS Modules with BEM** naming convention — scoped class names that never collide with the consumer's styles. Styles are automatically injected into the JS bundle via `vite-plugin-css-injected-by-js`; no separate CSS import is required on the consumer side.
- **Storybook 9** with `autodocs` — every exported item ships with visual documentation and interactive controls.
- **Centralized type system** — all TypeScript interfaces live in `src/types/`, split by concern (props, app types, asset declarations).
- **Jest 30 + Testing Library** — full test suite with `ts-jest`, `jest-environment-jsdom`, `@testing-library/react`, and `@testing-library/user-event`. Coverage threshold enforced at 70% across branches, functions, lines, and statements.
- **ESLint 9 + Prettier + Husky + lint-staged** — pre-commit hooks block commits with linting errors and auto-format staged files.
- **Example exports** — a `Button` component, a `truncate` helper, and a `useToggle` hook, each with their own Storybook story, to demonstrate the expected structure for components, helpers, and hooks.

**How to use it:**

1. Clone the repository and install dependencies.
2. Rename the library in `package.json` (`name`, `main`, `module`) and in `vite.config.js` (`LIB_NAME`).
3. Replace the example `Button`, `truncate`, and `useToggle` with your own exports — the folder structure, build pipeline, type conventions, and tooling stay exactly as they are.

## Technologies Used

1. React JS
2. TypeScript
3. Vite
4. HTML5
5. CSS3

## Libraries Used

### PeerDependencies

```
"react": ">=19.0.0"
"react-dom": ">=19.0.0"
```

### DevDependencies

```
"@eslint/js": "^9.0.0"
"@storybook/addon-links": "^9.1.6"
"@storybook/react": "^9.1.6"
"@storybook/react-vite": "^9.1.10"
"@testing-library/dom": "^10.4.0"
"@testing-library/jest-dom": "^6.6.3"
"@testing-library/react": "^16.0.1"
"@testing-library/user-event": "^14.5.2"
"@types/jest": "^30.0.0"
"@types/react": "^19.2.14"
"@types/react-dom": "^19.2.3"
"@vitejs/plugin-react": "^5.0.2"
"eslint": "^9.0.0"
"eslint-config-prettier": "^9.0.0"
"eslint-plugin-prettier": "^5.5.5"
"eslint-plugin-react-hooks": "^5.0.0"
"eslint-plugin-react-refresh": "^0.4.7"
"eslint-plugin-storybook": "^9.1.6"
"globals": "^15.0.0"
"husky": "^9.1.7"
"jest": "^30.3.0"
"jest-environment-jsdom": "^30.3.0"
"lint-staged": "^15.2.10"
"prettier": "^3.4.2"
"storybook": "^9.1.6"
"ts-jest": "^29.4.6"
"typescript": "^5.4.5"
"typescript-eslint": "^8.0.0"
"vite": "^7.1.6"
"vite-plugin-css-injected-by-js": "^4.0.1"
"vite-plugin-dts": "^4.0.0"
```

## Available Scripts

| Command                   | Description                      |
| ------------------------- | -------------------------------- |
| `npm run dev`             | Start Vite dev sandbox           |
| `npm run build`           | Build library (JS + types)       |
| `npm run preview`         | Preview production build         |
| `npm run storybook`       | Start Storybook dev server       |
| `npm run build-storybook` | Build Storybook static site      |
| `npm run test`            | Run tests                        |
| `npm run test:watch`      | Run tests in watch mode          |
| `npm run test:ci`         | Run tests in CI mode             |
| `npm run test:coverage`   | Run tests with coverage          |
| `npm run lint`            | Check for linting errors         |
| `npm run lint:fix`        | Fix linting errors               |
| `npm run lint:all`        | Fix linting errors (src + tests) |
| `npm run format`          | Format code with Prettier        |
| `npm run format:check`    | Check code formatting            |
| `npm run format:all`      | Format code (src + tests)        |
| `npm run doctor`          | Run React Doctor health check    |

## Portfolio Link

[`https://www.diegolibonati.com.ar/#/project/react-ts-library-vite-boilerplate`](https://www.diegolibonati.com.ar/#/project/react-ts-library-vite-boilerplate)

## Testing

1. Navigate to the project folder
2. Execute: `npm test`

For coverage report:

```bash
npm run test:coverage
```

## Project Structure

```
react-ts-library-vite-boilerplate/
├── .storybook/
│   ├── main.ts
│   └── preview.ts
├── __tests__/
│   ├── __mocks__/
│   │   ├── file.mock.ts
│   │   └── style.mock.ts
│   └── jest.setup.ts
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   └── Button/
│   │       ├── Button.module.css
│   │       ├── Button.stories.tsx
│   │       └── Button.tsx
│   ├── helpers/
│   │   └── truncate/
│   │       ├── truncate.stories.tsx
│   │       └── truncate.ts
│   ├── hooks/
│   │   └── useToggle/
│   │       ├── useToggle.stories.tsx
│   │       └── useToggle.ts
│   ├── styles/
│   │   └── global.css
│   ├── types/
│   │   ├── app.ts
│   │   ├── assets.d.ts
│   │   ├── hooks.ts
│   │   └── props.ts
│   ├── index.css
│   └── index.ts
├── eslint.config.js
├── index.html
├── jest.config.js
├── package.json
├── tsconfig.app.json
├── tsconfig.base.json
├── tsconfig.json
├── tsconfig.storybook.json
├── tsconfig.test.json
└── vite.config.js
```

| Path                      | Description                                                                                                                                                                  |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.storybook/`             | Storybook configuration — framework setup and global decorators/preview                                                                                                      |
| `__tests__/`              | Jest test infrastructure — global setup and module mocks (CSS, static assets)                                                                                                |
| `public/`                 | Static assets served as-is by Vite dev server; not bundled into the library                                                                                                  |
| `src/components/`         | React components — each in its own folder with styles, story, and implementation                                                                                             |
| `src/helpers/`            | Pure utility functions — each in its own folder with story and implementation                                                                                                |
| `src/hooks/`              | Custom React hooks — each in its own folder with story and implementation                                                                                                    |
| `src/styles/`             | Shared global CSS — imported by the Vite dev sandbox only, not exported by the library                                                                                       |
| `src/types/`              | Centralized TypeScript types — split by concern (props, app types, hook types, asset declarations)                                                                           |
| `src/index.css`           | Root stylesheet for the Vite dev sandbox entry point                                                                                                                         |
| `src/index.ts`            | Library public API — re-exports every component, helper, and hook that consumers receive                                                                                     |
| `eslint.config.js`        | ESLint v9 flat config — TypeScript-aware rules for `src/`, `__tests__/`, and `.storybook/`                                                                                   |
| `index.html`              | Vite dev sandbox entry point — used only for local development, not shipped in the library                                                                                   |
| `jest.config.js`          | Jest configuration — ts-jest transform, jsdom environment, path aliases, coverage thresholds                                                                                 |
| `tsconfig.base.json`      | Shared TypeScript compiler options inherited by all other tsconfigs                                                                                                          |
| `tsconfig.app.json`       | TypeScript config for `src/` — used by Vite and `vite-plugin-dts` for type generation                                                                                        |
| `tsconfig.json`           | Root tsconfig — references `app`, `test`, and `storybook` configs for editor support                                                                                         |
| `tsconfig.storybook.json` | TypeScript config scoped to `.storybook/` — used by ESLint parser for story config files                                                                                     |
| `tsconfig.test.json`      | TypeScript config for `src/` and `__tests__/` — used by ts-jest                                                                                                              |
| `vite.config.js`          | Vite config in library mode — dual ESM + UMD output, path aliases, `vite-plugin-dts` for type generation, and `vite-plugin-css-injected-by-js` for automatic style injection |

## Architecture & Design Patterns

### Library mode build

Vite is configured in library mode rather than application mode. The build produces two output formats from a single entry point (`src/index.ts`): **ESM** for modern bundlers and **UMD** for legacy environments and CDN usage. React and ReactDOM are externalized — they are never bundled into the output — so the consumer's own React version is always used and the package stays lightweight.

Type declarations (`.d.ts` files) are generated automatically by `vite-plugin-dts` as part of the same `vite build` step, with full path alias resolution. No separate `tsc` pipeline is needed.

### Single public API surface (barrel export)

`src/index.ts` is the only file that consumers import from. Every component, helper, and hook that belongs to the public API is explicitly re-exported from this file. Anything not re-exported here is internal and invisible to the consumer, regardless of where it lives in the source tree. This gives full control over what ships in the package without relying on file-system conventions.

### Co-location

Each export owns a dedicated folder that contains everything related to it: the implementation, its Storybook story, and (for components) its stylesheet. Tests live in `__tests__/` mirroring the same folder structure. This keeps all context for a given export in one place, making it easy to add, remove, or understand any export in isolation.

```
src/components/Button/
├── Button.module.css   ← styles
├── Button.stories.tsx  ← documentation
└── Button.tsx          ← implementation
```

### Separation by export type

Exports are organized into three top-level categories under `src/`:

- `components/` — React components that render UI
- `helpers/` — pure functions with no React dependency
- `hooks/` — custom React hooks

This distinction makes the library's shape immediately clear and guides contributors on where new exports belong.

### Centralized type system

All TypeScript interfaces and types live in `src/types/`, split by concern:

- `props.ts` — component prop interfaces
- `hooks.ts` — hook return types and parameter types
- `app.ts` — shared domain types used across multiple exports
- `assets.d.ts` — ambient module declarations for static asset imports

Types are never defined inline next to usage. Keeping them centralized avoids circular imports and makes the type surface easy to audit before publishing.

### CSS Modules with BEM

Component styles use CSS Modules instead of plain CSS. Vite generates hashed class names at build time, so component styles never collide with the consumer's stylesheets regardless of what class names they use. Within each stylesheet, classes follow **BEM** (Block Element Modifier) naming to keep specificity flat and relationships explicit:

```css
.button {
} /* block */
.button--primary {
} /* modifier */
.button--disabled {
} /* modifier */
```

`vite-plugin-css-injected-by-js` inlines all CSS into the JS bundle at build time. When the consumer imports any component, the plugin automatically injects a `<style>` tag into the document — no separate `.css` import is needed:

```ts
// This is all the consumer needs — styles are applied automatically.
import { Button } from "your-library";
```

### TypeScript project references

Four tsconfig files serve distinct compilation contexts, all extending a shared `tsconfig.base.json`:

| Config                    | Used by                               |
| ------------------------- | ------------------------------------- |
| `tsconfig.app.json`       | Vite build + `vite-plugin-dts`        |
| `tsconfig.test.json`      | ts-jest                               |
| `tsconfig.storybook.json` | ESLint parser for `.storybook/` files |
| `tsconfig.json`           | Editor (references the three above)   |

Splitting configs prevents test types (`jest`, `@testing-library/jest-dom`) from leaking into the compiled library output, and prevents Vite-specific types (`vite/client`) from affecting the test environment.

### Pre-commit quality gates

Husky registers a `pre-commit` hook that runs `lint-staged` before every commit. Only staged files are processed, keeping the check fast. The pipeline for `.ts`/`.tsx` files runs ESLint with `--fix` followed by Prettier, blocking the commit if any error cannot be auto-fixed. This ensures that no malformed or unformatted code ever reaches the repository.

## Code Quality Tools

### ESLint

Configured with TypeScript strict rules:

- Explicit return types required
- No `any` type allowed
- Consistent type imports
- No unused variables

### Prettier

Automatic code formatting:

- 2 spaces indentation
- Semicolons required
- Double quotes
- Trailing commas (ES5)

### Husky + lint-staged

Pre-commit hooks that automatically:

- Run ESLint on staged `.ts` and `.tsx` files
- Format `.ts`, `.tsx`, `.css`, `.json` and `.md` files with Prettier
- Block commits with linting errors

## Security

### npm audit

Check for vulnerabilities in dependencies:

```bash
npm audit
```

### React Doctor

Run a health check on the project (security, performance, dead code, architecture):

```bash
npm run doctor
```

Use `--verbose` to see specific files and line numbers:

```bash
npm run doctor -- --verbose
```

## Known Issues

None at the moment.
