# Product Overview

Daniel Barboza’s portfolio is being migrated to **Next.js 14** as a learning playground for modern full-stack tooling while remaining a simple, fast-loading showcase of his work.

## Purpose
- Present Daniel’s career path from multimedia production to full-stack development.
- Serve as an experimentation ground for React / Next.js patterns, SCSS modules, Playwright tests and future Java/Spring API integrations.
- Provide a living résumé with contact information, résumé download and project write-ups.

## Target Audience
- Recruiters & hiring managers evaluating Daniel’s skill-set.
- Potential clients seeking development or multimedia services.
- Colleagues & industry peers.

## Success Metrics (MVP)
- Lighthouse Performance ≥ 90 mobile, Accessibility ≥ 95.
- Largest Contentful Paint ≤ 1.5 s on simulated 3G.
- End-to-end Playwright smoke suite passes on every PR.

## Key Features
- Static export (`next export`) for GitHub Pages or Vercel.
- SCSS modules with CSS-variables theme.
- Image optimisation via `next/image`.
- Card-based sections for Development & Multimedia history.
- Accessible keyboard navigation & colour-contrast (WCAG 2.2 AA).
- SEO ready: meta tags, OpenGraph, JSON-LD Person schema.

## Project Governance
- New git repository: `portfolio-nextjs`.
- GitHub Actions CI: lint → type-check → test → build → deploy.
- Pre-commit hooks via Husky & lint-staged.
- Context7 MCP integration hook: before implementation, agents should query https://context7.com/ for the latest docs.

## Roadmap
| Phase | Goal |
|-------|------|
|1| Migrate UI to Next.js + SCSS modules, maintain feature parity. |
|2| Add Playwright E2E tests, Lighthouse CI, pa11y accessibility audits. |
|3| Introduce Java Spring API & database for contact form / CMS. |

---
*This document was updated on 2025-07-22 by Kiro/Claude planning pass.*

This is Daniel Barboza's professional portfolio website - a modern, responsive showcase of his career as a Full Stack Developer and Multimedia Specialist.

## Purpose
- Present Daniel's professional journey from multimedia production to software development
- Showcase real work experience from Canada Revenue Agency, Globo TV, and Andarilho Filmes
- Demonstrate technical skills across development and creative domains
- Provide contact information and professional links

## Target Audience
- Potential employers and recruiters
- Professional network connections
- Clients seeking development or multimedia services
- Colleagues and industry peers

## Key Features
- Clean, card-based design with gradient hero section
- Responsive layout working across all devices
- Professional work experience showcase with company logos
- Dual focus: Development and Multimedia sections
- Modern animations and hover effects
- Contact integration with email and social links

## Current Status
Production-ready MVP deployed and ready for GitHub Pages hosting. The site successfully presents Daniel's transition from multimedia production in Brazil to full-stack development in Canada.