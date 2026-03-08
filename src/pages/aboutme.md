---
layout: '../layouts/CaseStudy.astro'
---
# About this Project

This project is a personal site for Jake Culp, a product designer based in Philadelphia, Pennsylvania.

## Tech Stack

- **Astro** for framework and static site generation.
- **Tailwind CSS** for utility-first styling.
- **Fraunces**, **Public Sans**, and **Geist** (with variable fonts) for typography.
- Custom layouts and components for flexible page building.

## File Overview

- `src/components/Hero.astro` &mdash; Main site header section.
- `src/layouts/BaseLayout.astro` &mdash; General app shell (navigation, footer, layout).
- `src/layouts/CaseStudy.astro` &mdash; Specialized layout used for case studies/about.
- `src/pages/about.astro` &mdash; About page.

## Notes

- All styles and font imports are handled directly in layouts or components for modularity.
- Page metadata such as `<title>` is dynamically set via layout props.
- Main navigation and footer are reusable components.

## Author

Designed and built by **Jake Culp**.