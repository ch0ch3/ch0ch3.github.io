# Zealous Laguna Auto Studio Website

## Project

Next.js static marketing website for Zealous Laguna Auto Studio.

## Current priority

1. Maintain the public production landing page.
2. Keep WhatsApp conversion paths reliable.
3. Validate desktop, tablet, and mobile after visual changes.
4. Add confirmed content incrementally.

## Canonical context

- Read PRODUCT.md for confirmed product, audience, services, and conversion goals.
- Read DESIGN.md before changing visual styling or components.
- Inspect existing files before modifying them.
- Do not invent missing business information.

## Required validation

After code changes, run:

- npm run lint
- npm run typecheck
- npm run build

For visual changes:

- Check desktop, tablet, and mobile.
- Check browser console.
- Check keyboard navigation.
- Check prefers-reduced-motion.
- Check for horizontal overflow.

## Constraints

- Preserve static export compatibility.
- Avoid unrelated refactors.
- Reuse existing components where practical.
- Do not add project dependencies.
- Do not modify package.json or package-lock.json.
- Do not apply forced npm audit fixes.
- Do not modify legacy-site/.
- Publish the static export through the repository's GitHub Pages workflow.
- Keep `public/CNAME` equal to `www.zealouslaguna.mx`.
- Never modify `legacy-site/`.
- Do not commit, push, merge, publish, or deploy unless the active user request explicitly authorizes it.

## Skills

- Use $gpt-taste for major layout and visual design work.
- Use $emil-design-eng only for purposeful motion or interaction details.
- Use $review-animations only to review motion.
- Use $impeccable audit before final visual approval.
- Use $impeccable polish only after the implemented scope is functionally complete.

## Skill constraints

- Do not add GSAP, Framer Motion, Motion, or other animation libraries.
- Use only the existing React, Tailwind CSS, and CSS capabilities.
- Do not add external fonts, images, or UI libraries to satisfy a skill recommendation.

## Skill authority

Skills may recommend changes, but they may not override the task scope, confirmed information, accessibility requirements, static-export constraints, or dependency restrictions.
