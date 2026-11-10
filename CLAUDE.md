# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start the Vite dev server
- `npm run build` — production build to `dist/`
- `npm run lint` — ESLint (flat config in `eslint.config.js`: JS recommended + react-hooks + react-refresh)
- `npm run preview` — serve the production build

There is no test runner configured.

## Architecture

NomBlog frontend: React 19 + Vite 8 + Tailwind CSS v4, plain JavaScript (`.jsx`), icons from `react-icons`. Currently a static UI build-out — no backend calls, no state management, all content (posts, authors, images) is hard-coded placeholder markup.

- **No router.** `src/App.jsx` renders whichever page is being worked on, wrapped in `Header`/`Footer`. To view a different page, swap the page component imported in `App.jsx`. Note `pages/Home.jsx` renders its own `Header`/`Footer`, while `App.jsx` also wraps pages in them — avoid doubling them when switching pages. `SignIn`/`SignUp` are standalone full-page layouts without the site header/footer.
- `src/pages/` — full page components; `src/components/` — shared pieces (`Header`, `Footer`, `BlogCard`).

## Styling conventions

- Tailwind v4 is wired via the `@tailwindcss/vite` plugin — there is no `tailwind.config.js`. Custom design tokens are defined in the `@theme` block of `src/index.css` and used as utilities:
  - `text-primary` (#F97415, brand orange) → e.g. `bg-text-primary`, `text-text-primary`
  - `text-secondary` (#0F172A, headings) → `text-text-secondary`
  - `p-color` (#64748B, body text) → `text-p-color`
  - `tag-bg` (orange at 10% alpha) → `bg-tag-bg`
  Add new shared colors there rather than repeating arbitrary hex values (some components still use arbitrary values like `bg-[#F1F5F9]`).
- Page content is constrained with `w-full max-w-330 mx-auto px-5`.

## Assets gotcha

Images are referenced by absolute dev paths like `src="/src/assets/logo.png"` instead of being imported. This works under `npm run dev` but will not be bundled by `vite build`, and paths are case-sensitive on non-Windows hosts (e.g. `Header.jsx` references `profile.png` while the file is `Profile.png`). Prefer `import logo from '../assets/logo.png'` for new code, or move files to `public/`.
