# React Vite Library Boilerplate

## Educational Purpose

This project was created primarily for **educational and learning purposes**.  
While it is well-structured and could technically be used in production, it is **not intended for commercialization**.  
The main goal is to explore and demonstrate best practices, patterns, and technologies in software development.

## Description

**React Vite Library Boilerplate** is a production-ready starting point for publishing React libraries with TypeScript and Vite. It is not a UI kit or a framework — it is the foundation you clone once and stop rebuilding from scratch every time you want to ship a reusable hook, component, or utility to npm.

**The problem it solves:** every React + TypeScript library project starts with the same repetitive decisions — how to configure Vite in library mode, how to generate `.d.ts` type declarations without breaking path aliases, how to output both ESM and UMD formats, how to document with Storybook, and how to wire up linting and formatting so they block bad code before it reaches the registry. This boilerplate answers all of those decisions upfront, with a consistent and lightweight setup that scales without introducing unnecessary complexity.

**What it includes:**

- **Vite 7** in library mode — dual ESM + CJS output, externalized React, and optimized builds out of the box.
- **React 19 + TypeScript 5** — strict typing enforced throughout; no `any`, explicit return types required, consistent type imports.
- **vite-plugin-dts** for automatic `.d.ts` generation with path alias resolution — no post-build scripts needed.
- **CSS Modules with BEM** naming convention — scoped class names that never collide with the consumer's styles. The build emits a single stylesheet that the consumer imports explicitly (`import "your-library/styles.css"`), giving full control over CSS ordering and SSR behavior.
- **Storybook 9** with `autodocs` — every exported item ships with visual documentation and interactive controls.
- **Centralized type system** — all TypeScript interfaces live in `src/types/`, split by concern (props, app types, asset declarations).
- **Jest 30 + Testing Library** — full test suite with `ts-jest`, `jest-environment-jsdom`, `@testing-library/react`, and `@testing-library/user-event`. Coverage threshold enforced at 70% across branches, functions, lines, and statements.
- **ESLint 9 + Prettier + Husky + lint-staged** — pre-commit hooks block commits with linting errors and auto-format staged files.
- **Example exports** — a `Button` component, a `truncate` helper, and a `useToggle` hook, each with their own Storybook story, to demonstrate the expected structure for components, helpers, and hooks.

**How to use it:**

1. Clone the repository and install dependencies (see [Getting Started](#getting-started)).
2. Rename the library in `package.json` (`name`, `main`, `module`, `exports`) and in `vite.config.ts` (`LIB_NAME`).
3. Replace the example `Button`, `truncate`, and `useToggle` with your own exports — the folder structure, build pipeline, type conventions, and tooling stay exactly as they are.

> **Peer dependencies.** `react` is required for any consumer. `react-dom` is declared in `peerDependenciesMeta` as **optional**, so headless consumers (e.g. someone importing only `useToggle`) won't get install-time warnings. Anything that renders to the DOM (the `Button` component, for example) still needs `react-dom` at runtime — make this explicit in your library's own README when you ship a fork.

> **React 19 floor.** Peer ranges are intentionally aggressive (`>=19.0.0`). Consumers on React 18 must downgrade peer ranges in their fork.

## Technologies Used

1. React JS
2. TypeScript
3. Vite
4. HTML5
5. CSS3
6. Docker
7. Nginx

## Libraries Used

### PeerDependencies

```
"react": ">=19.0.0"
"react-dom": ">=19.0.0"
```

### DevDependencies

```
"@eslint/js": "^9.0.0"
"@semantic-release/changelog": "^6.0.3"
"@semantic-release/git": "^10.0.1"
"@storybook/addon-links": "^9.1.6"
"@storybook/react": "^9.1.6"
"@storybook/react-vite": "^9.1.10"
"@testing-library/dom": "^10.4.0"
"@testing-library/jest-dom": "^6.6.3"
"@testing-library/react": "^16.0.1"
"@testing-library/user-event": "^14.5.2"
"@types/jest": "^30.0.0"
"@types/node": "^22.0.0"
"@types/react": "^19.2.14"
"@types/react-dom": "^19.2.3"
"@vitejs/plugin-react": "^5.0.2"
"eslint": "^9.0.0"
"eslint-config-prettier": "^9.0.0"
"eslint-plugin-prettier": "^5.5.5"
"eslint-plugin-react-hooks": "^5.0.0"
"eslint-plugin-storybook": "^9.1.6"
"globals": "^15.0.0"
"husky": "^9.1.7"
"jest": "^30.3.0"
"jest-environment-jsdom": "^30.3.0"
"lint-staged": "^15.2.10"
"prettier": "^3.4.2"
"semantic-release": "^25.0.3"
"storybook": "^9.1.6"
"ts-jest": "^29.4.6"
"typescript": "^5.4.5"
"typescript-eslint": "^8.0.0"
"vite": "^7.1.6"
"vite-plugin-dts": "^4.0.0"
```

## Getting Started

With the project understood, you can now set it up locally.

1. Clone the repository.
2. Navigate to the project folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the Storybook playground to explore the example component, helper, and hook:

   ```bash
   npm run storybook
   ```

   Storybook will be available at `http://localhost:6006`. Storybook is the only local playground — there is no separate Vite dev sandbox, since this is a library, not an app.

### Pre-Commit for Development

The repo wires Husky and lint-staged into a `pre-commit` hook that runs automatically before every commit. Only staged files are processed, keeping the check fast. The pipeline blocks the commit if any error cannot be auto-fixed, so no malformed or unformatted code ever reaches the repository.

**ESLint** is configured with TypeScript strict rules:

- Explicit return types required
- No `any` type allowed
- Consistent type imports
- No unused variables

**Prettier** handles automatic code formatting:

- 2 spaces indentation
- Semicolons required
- Double quotes
- Trailing commas (ES5)

**Husky + lint-staged** run on every commit and:

- Run ESLint with `--fix` on staged `.ts` and `.tsx` files
- Format `.ts`, `.tsx`, `.css`, `.json`, and `.md` files with Prettier
- Block commits with linting errors that cannot be auto-fixed

You can also run the same checks manually:

| Command                | Description                      |
| ---------------------- | -------------------------------- |
| `npm run lint`         | Check for linting errors         |
| `npm run lint:fix`     | Fix linting errors               |
| `npm run lint:all`     | Fix linting errors (src + tests) |
| `npm run format`       | Format code with Prettier        |
| `npm run format:check` | Check code formatting            |
| `npm run format:all`   | Format code (src + tests)        |

## Project Structure

Once the project is running, this is the layout you will be working with.

```
react-vite-library-boilerplate/
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
├── jest.config.js
├── package.json
├── tsconfig.app.json
├── tsconfig.base.json
├── tsconfig.json
├── tsconfig.storybook.json
├── tsconfig.test.json
└── vite.config.ts
```

| Path                      | Description                                                                                                                                                                                                             |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `.storybook/`             | Storybook configuration — framework setup and global decorators/preview                                                                                                                                                 |
| `__tests__/`              | Jest test infrastructure — global setup and module mocks (CSS, static assets)                                                                                                                                           |
| `public/`                 | Static assets available for Storybook to reference; not bundled into the library                                                                                                                                        |
| `src/components/`         | React components — each in its own folder with styles, story, and implementation                                                                                                                                        |
| `src/helpers/`            | Pure utility functions — each in its own folder with story and implementation                                                                                                                                           |
| `src/hooks/`              | Custom React hooks — each in its own folder with story and implementation                                                                                                                                               |
| `src/styles/`             | Shared global CSS — can be imported from Storybook's preview if you need site-wide styles; not exported by the library                                                                                                  |
| `src/types/`              | Centralized TypeScript types — split by concern (props, app types, hook types, asset declarations)                                                                                                                      |
| `src/index.css`           | Optional root stylesheet kept for Storybook preview use; not part of the library's public API                                                                                                                           |
| `src/index.ts`            | Library public API — re-exports every component, helper, and hook that consumers receive                                                                                                                                |
| `eslint.config.js`        | ESLint v9 flat config — TypeScript-aware rules for `src/`, `__tests__/`, and `.storybook/`                                                                                                                              |
| `jest.config.js`          | Jest configuration — ts-jest transform, jsdom environment, path aliases, coverage thresholds                                                                                                                            |
| `tsconfig.base.json`      | Shared TypeScript compiler options inherited by all other tsconfigs                                                                                                                                                     |
| `tsconfig.app.json`       | TypeScript config for `src/` — used by Vite and `vite-plugin-dts` for type generation                                                                                                                                   |
| `tsconfig.json`           | Root tsconfig — references `app`, `test`, and `storybook` configs for editor support                                                                                                                                    |
| `tsconfig.storybook.json` | TypeScript config scoped to `.storybook/` — used by ESLint parser for story config files                                                                                                                                |
| `tsconfig.test.json`      | TypeScript config for `src/` and `__tests__/` — used by ts-jest                                                                                                                                                         |
| `vite.config.ts`          | Vite config in library mode — dual ESM + CJS output, path aliases, and `vite-plugin-dts` for type generation. CSS is emitted as a single `dist/react-vite-library-boilerplate.css` that the consumer imports explicitly |

## Architecture & Design Patterns

The structure above is shaped by the following design decisions.

### Library mode build

Vite is configured in library mode rather than application mode. The build produces two output formats from a single entry point (`src/index.ts`): **ESM** for modern bundlers and **CJS** for Node `require()` and SSR consumers. React and ReactDOM are externalized — they are never bundled into the output — so the consumer's own React version is always used and the package stays lightweight.

> **Note on `exports` ordering.** Inside every conditional block of `package.json`'s `exports` map, the `"types"` key MUST be the first entry. TypeScript's `moduleResolution: "node16"` / `"bundler"` silently falls back to resolving types from the JS entry if `"types"` is not first, yielding `any` for downstream consumers. Keep this invariant when adding new subpath exports.

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

CSS is **not** auto-injected. The build emits a single `dist/react-vite-library-boilerplate.css` containing the styles of every exported component, and the consumer imports it explicitly once in their app entry:

```ts
import { Button } from "your-library";
import "your-library/styles.css";
```

This is intentional. Auto-injecting CSS via a `<style>` tag (e.g. with `vite-plugin-css-injected-by-js`) gives a marginally simpler DX but causes problems in real consumers: FOUC on SSR (Next.js, Remix), incompatibility with strict CSP `style-src` policies, no way to control cascade order, and no opportunity for the consumer's bundler to extract/critical-path the CSS. An explicit import is the same pattern that almost every published React library follows (MUI, Mantine, react-toastify, …).

The `"./styles.css"` subpath is declared in `package.json`'s `exports` map, so the import works regardless of the consumer's bundler.

### TypeScript project references

Four tsconfig files serve distinct compilation contexts, all extending a shared `tsconfig.base.json`:

| Config                    | Used by                               |
| ------------------------- | ------------------------------------- |
| `tsconfig.app.json`       | Vite build + `vite-plugin-dts`        |
| `tsconfig.test.json`      | ts-jest                               |
| `tsconfig.storybook.json` | ESLint parser for `.storybook/` files |
| `tsconfig.json`           | Editor (references the three above)   |

Splitting configs prevents test types (`jest`, `@testing-library/jest-dom`) from leaking into the compiled library output, and prevents Vite-specific types (`vite/client`) from affecting the test environment.

## Testing

The first gate before publishing is the test suite.

1. Navigate to the project folder.
2. Run the full suite:

   ```bash
   npm test
   ```

Additional test commands:

| Command                 | Description             |
| ----------------------- | ----------------------- |
| `npm run test:watch`    | Run tests in watch mode |
| `npm run test:ci`       | Run tests in CI mode    |
| `npm run test:coverage` | Run tests with coverage |

Coverage thresholds are enforced at 70% across branches, functions, lines, and statements. The coverage report is generated by:

```bash
npm run test:coverage
```

## Security Audit

Once tests pass, audit the dependency tree before producing a build.

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

## Build

With tests green and the audit clean, produce the publishable artifacts.

```bash
npm run build
```

This runs Vite in library mode and `vite-plugin-dts` in a single step, producing inside `dist/`:

- **ESM bundle** — for modern bundlers and `import` consumers.
- **CJS bundle** — for Node `require()` and SSR consumers.
- **Type declarations** (`.d.ts`) — with full path alias resolution.
- **Stylesheet** — `react-vite-library-boilerplate.css`, exposed via the `"./styles.css"` subpath in `exports`. The consumer is responsible for importing it once in their app entry.

`prepack` and `prepublishOnly` are wired so that `npm pack` always rebuilds `dist/` fresh, and `npm publish` additionally runs `lint` and `test:ci` before producing the publishable tarball — stale or broken builds cannot reach the registry.

To build the Storybook static site (used by the production Docker image):

```bash
npm run build-storybook
```

## Continuous Integration

The repository ships with a **GitHub Actions** pipeline defined in [`.github/workflows/ci.yml`](.github/workflows/ci.yml). It runs automatically on every `push` and `pull_request` targeting the `main` branch. On `push` to `main`, the same workflow continues with a release job that publishes the package to **npm** and creates a matching **GitHub Release** via [semantic-release](https://github.com/semantic-release/semantic-release).

### Pipeline overview

```
                      ┌─── PR or push to main ───┐
                      ▼                          ▼
┌──────────────────────┐  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│   lint-and-audit     │─▶│     testing      │─▶│      build       │─▶│   build-docker   │
│ eslint · tsc · audit │  │    jest --ci     │  │   vite build     │  │  dev + prod img  │
└──────────────────────┘  └──────────────────┘  └──────────────────┘  └──────────────────┘
                                                                              │
                                                            (only on push to main)
                                                                              ▼
                                                                  ┌──────────────────────┐
                                                                  │       release        │
                                                                  │ semantic-release:    │
                                                                  │ tag · npm · GH Rel.  │
                                                                  └──────────────────────┘
```

Jobs run sequentially via `needs:`, so a failure short-circuits the rest of the pipeline. Concurrency is configured so that PR runs cancel earlier in-progress runs for the same branch, while pushes to `main` always run to completion.

### Validation jobs (run on every PR and push)

1. **`lint-and-audit`** — `npm run lint` (ESLint), `npm run type-check` (`tsc -p tsconfig.app.json --noEmit`), and `npm audit --omit=dev --audit-level=high` to fail only on high-severity vulnerabilities reaching production dependencies.
2. **`testing`** — `npm run test:ci` (Jest with `--ci` and `jsdom`). Coverage thresholds are enforced at 70% across branches, functions, lines, and statements.
3. **`build`** — smoke test that `vite build` produces a clean `dist/` (ESM + CJS bundles, `.d.ts` declarations, and the standalone `react-vite-library-boilerplate.css`).
4. **`build-docker`** — builds both `Dockerfile.development` and `Dockerfile.production` images so container regressions are caught before merging.

### Release job (only on push to `main`)

5. **`release`** — runs `npx semantic-release`. It analyzes commits since the last tag, decides the next SemVer version using [Conventional Commits](#commit-conventions), updates `CHANGELOG.md` and `package.json` (+ `package-lock.json`), runs `npm publish`, creates the matching `vX.Y.Z` git tag plus a GitHub Release with auto-generated notes, and commits the bump back to `main` with `chore(release): X.Y.Z [skip ci]` to prevent infinite loops. If no commits since the last tag warrant a release, the job exits quietly.

   A preliminary `Check NPM_TOKEN` step gates the rest of the job: if the secret is missing, all subsequent steps are skipped with a warning instead of failing — useful for forks that don't intend to publish.

### Commit conventions

Commits landing on `main` must follow [Conventional Commits](https://www.conventionalcommits.org/) so the pipeline can compute the next version and group the changelog entries.

| Commit prefix                                                      | Version bump | Example                             |
| ------------------------------------------------------------------ | ------------ | ----------------------------------- |
| `feat:` / `feat(scope):`                                           | **MINOR**    | `feat(hooks): add useDebounce`      |
| `fix:` / `fix(scope):`                                             | **PATCH**    | `fix: handle null ref in useToggle` |
| `perf:`                                                            | **PATCH**    | `perf: memoize Button class names`  |
| `docs:`, `refactor:`, `chore:`, `ci:`, `test:`, `style:`, `build:` | **none**     | `chore: bump devDeps`               |
| `feat!:` / `fix!:` or `BREAKING CHANGE:` in the body               | **MAJOR**    | `feat!: drop React 18 support`      |

When a push contains multiple commits, the highest applicable bump wins (a single `feat:` among many `fix:` triggers a MINOR bump). If you squash-merge PRs, configure the repo to use the PR title as the squash commit message and write the **PR title** following the convention.

> **First-release behavior.** semantic-release reads the latest git tag as the baseline. If the repo has no semver tags yet, it defaults to publishing `1.0.0` on the first qualifying commit — regardless of what `version` says in `package.json`. To start from a different baseline (e.g. `0.1.0`), tag the initial commit manually before the first push: `git tag v0.1.0 && git push --tags`.

### Skipping a release

To push a change to `main` without producing a release (job renames, README typos, etc.), append `[skip release]` to the commit message. The validation jobs (lint, test, build, docker) still run; only `release` is skipped.

```bash
git commit -m "ci: rename build job for clarity [skip release]"
```

To skip **everything** including validation, use GitHub's standard `[skip ci]` marker instead — this is also what semantic-release uses on its own bump commits to prevent infinite loops.

### Manual escape hatches

- **Smoke-test the publishable tarball locally** — `npm pack` triggers `prepack` → `build` and produces a `.tgz` you can inspect. `prepublishOnly` (`lint && test:ci && build`) runs locally on a manual `npm publish` as a final safety net.

### Where the build outputs live

| Output                                      | Location                                                                                |
| ------------------------------------------- | --------------------------------------------------------------------------------------- |
| Validation logs (lint, tests, audit, build) | **Actions** tab on GitHub                                                               |
| Published package per version               | npm registry (`npm view react-vite-library-boilerplate`)                                |
| Version history & release notes             | [`CHANGELOG.md`](CHANGELOG.md) + **Releases** page                                      |
| Git tags per version                        | `git tag` / **Tags** page on GitHub                                                     |
| Docker images                               | Ephemeral, inside the runner (CI only builds them as a smoke test; they are not pushed) |

### Repository setup required for releases

For the release job to push tags, publish to npm, and create the GitHub Release, the repository needs:

1. **Settings → Actions → General → Workflow permissions**: set to _Read and write permissions_. Without this, semantic-release cannot push the version bump or create the GitHub Release.
2. **`NPM_TOKEN` secret**: an npm **automation token** created at npmjs.com → _Access Tokens_ → _Automation_. Without it, the release job skips with a warning.
3. **Branch protection on `main`** (if enabled): allow the `github-actions[bot]` to bypass any PR requirement, otherwise the release commit (`chore(release): vX.Y.Z`) will be rejected.

`GITHUB_TOKEN` is provided automatically by GitHub Actions — no manual setup required.

### Running the same checks locally

```bash
# lint-and-audit
npm run lint
npm run type-check
npm audit --omit=dev --audit-level=high

# testing
npm run test:ci

# build
npm run build

# build-docker
docker build -f Dockerfile.development -t app:dev .
docker build -f Dockerfile.production -t app:prod .
```

## Production

Production deployments serve the compiled Storybook documentation site. Before deploying, make sure you have completed the local checklist (or let [Continuous Integration](#continuous-integration) do it for you):

1. [Testing](#testing) — full suite green, coverage thresholds met.
2. [Security Audit](#security-audit) — `npm audit` and `npm run doctor` clean.
3. [Build](#build) — library and Storybook artifacts produced.

Two Docker setups are included — one for local development with hot reload and one for production serving the compiled Storybook via nginx.

### Development (Docker)

Starts the Storybook dev server inside a container with the project files mounted as a volume, so changes on the host are reflected immediately (polling-based HMR):

```bash
docker compose -f dev.docker-compose.yml up --build
```

Storybook will be available at `http://localhost:6006`.

### Deploy (Docker + nginx)

Builds the Storybook static site and serves it with nginx using a multi-stage Docker image:

```bash
docker compose -f prod.docker-compose.yml up --build
```

Storybook will be available at `http://localhost:6006`.

**What happens under the hood:**

1. **Builder stage** — installs dependencies and runs `npm run build-storybook`, producing the static site in `storybook-static/`.
2. **Runner stage** — copies the static output into an `nginx:stable-alpine` image and applies the custom nginx config.

**nginx features:**

- Listens on port `8080` internally (mapped to `6006` on the host).
- Gzip compression for JS, CSS, JSON, SVG, and plain text.
- Long-lived cache (`max-age=31536000, immutable`) for hashed static assets; no-cache for `index.html`.
- Security headers: `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`.
- Runs as a non-root user (`appuser`).
- Health check: `wget` hits `http://localhost:8080` every 30 seconds.

## Known Issues

- `brace-expansion` moderate advisory ([GHSA-jxxr-4gwj-5jf2](https://github.com/advisories/GHSA-jxxr-4gwj-5jf2)) — surfaced by `npm audit` as a transitive devDependency (shrinkwrapped inside the `npm` CLI, pulled in by `@semantic-release/npm`). It is **not bundled** into the published library tarball, and CI runs `npm audit --omit=dev --audit-level=high`, so this moderate finding does not fail the pipeline. It will clear automatically once the npm CLI team releases a patched version — the caret range in `@semantic-release/npm` will pick it up on the next `npm update`, with no action required from the `semantic-release` maintainers ([semantic-release#4132](https://github.com/semantic-release/semantic-release/issues/4132)).

## Portfolio Link

[`https://www.diegolibonati.com.ar/#/project/react-vite-library-boilerplate`](https://www.diegolibonati.com.ar/#/project/react-vite-library-boilerplate)
