# Contributing to MonoLab UI

Thanks for helping improve MonoLab UI! This short guide explains the minimal, practical steps contributors need to follow so contributions are consistent and easy to review.

Keep it simple — this file only covers what's necessary.

## Quick checklist

- [ ] Fork the repo and create a feature branch from `main` (use a descriptive branch name).
- [ ] Make small, focused commits with clear messages.
- [ ] Run lint and type checks locally before opening a PR.
- [ ] Add or update docs/examples when you change UI behavior.
- [ ] Open a PR and describe what you changed and why.

## Local setup (fast)

1. Clone and install:

```bash
git clone <repo-url>
cd monolabui
npm install
# or `pnpm install` / `yarn`
```

2. Run the web app locally (the most common workflow):

```bash
cd apps/web
npm run dev
```

Open http://localhost:3000 to preview.

## Linting & type checks

Run these before submitting a PR to avoid noise in reviews:

```bash
cd apps/web
npm run lint
npm run check-types
```

Fix issues reported by ESLint/TypeScript. If you are unsure about a rule, mention it in the PR.

## Formatting

We use Prettier and ESLint. Files are expected to be formatted. Run your editor's format or:

```bash
# formatting is generally handled by your editor or pre-commit hooks
# but you can run project tooling if present
npm run format
```

(If there is no `format` script, rely on your editor's Prettier integration.)

## Making changes to components

If you add or update a UI component or its preview:

1. Keep interactive previews as client components.
   - Add them under `apps/web/components/ComponentPreviews/...` with `"use client"` at the top.
2. Add variants in `apps/web/lib/componentsRegistry/variants/<component>.tsx`.
   - Each variant should export an object with `id`, `name`, `preview` (React node), and `code` (string example).
   - `code` should be a backtick-delimited template string (no stray Markdown fences). Keep the code string valid and copyable.
3. Ensure the registry imports and exposes your new variant array so the site will list it.
4. Keep the preview isolated (small, minimal state) and avoid touching global styles.

If you need to change layout or shared styles, explain why in the PR and keep changes minimal.

## Tests

This repository may not contain a full test suite for all components. If you add logic that can be unit-tested, include tests and show they pass.

## Commit messages & PRs

- Use clear, present-tense commit messages (e.g., "Add checkbox error preview").
- Keep commits focused — one logical change per commit helps reviewers.
- In the PR description include: what changed, why, and any manual QA steps.

## Issues & reporting bugs

When filing an issue, include:

- A clear title and short description
- Steps to reproduce (or a minimal reproduction link)
- Browser and OS if relevant
- Screenshots or error logs (if available)

## Code of conduct

Be respectful in comments, PRs, and issues. If you need to have a difficult conversation, do so politely and openly.

## Questions

If you're unsure where to make a change, open an issue or ask in the PR — maintainers will help guide you.

Thanks for contributing — we appreciate your help making MonoLab UI better! ✨
