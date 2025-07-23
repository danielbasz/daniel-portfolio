# Technology Stack (Next.js edition)

## Core Technologies
- **Framework**: Next.js 14 (React 18, App Router).
- **Language**: JavaScript (ES2023) — optional gradual adoption of TypeScript.
- **Styling**: SCSS Modules + CSS Variables; PostCSS with Autoprefixer.
- **Testing**: Playwright 1.x for E2E; Jest/React Testing Library for unit tests (future).
- **Linting/Formatting**: ESLint, Stylelint, Prettier.
- **CI/CD**: GitHub Actions → lint → test → build (`next build && next export`) → deploy to `gh-pages`.

## Future Back-End
- Java Spring Boot micro-service to power contact form and persistent CMS data, deployed separately (phase 3).

## Key Next.js Benefits
- File-system routing and dynamic metadata.
- Built-in Image, Font, and Script optimisations.
- Automatic code-splitting & prefetching.

## Common Commands
```bash
# Dev server with SCSS modules
npm run dev      # next dev

# Static export for GitHub Pages
npm run build    # next build && next export

# Playwright tests
npx playwright test --reporter=line
```

## Performance & Accessibility Budgets
- LCP ≤ 1.5 s (mobile 3G).
- CLS ≤ 0.1.
- Lighthouse A11y ≥ 95.

## External Integrations
- **Context7 MCP hook**: CI script searches https://context7.com/ for relevant docs before running implementation scripts.

---
*Last updated 2025-07-22.*

## Core Technologies
- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Modern CSS with Grid, Flexbox, CSS custom properties
- **Build System**: None - static site using vanilla technologies
- **Deployment**: GitHub Pages ready

## Browser Support
- Chrome 60+
- Firefox 55+
- Safari 11+
- Edge 79+

## Key Libraries & Frameworks
- No external dependencies - pure vanilla implementation
- Uses modern web APIs (Intersection Observer, Performance API)
- CSS animations and transitions for smooth interactions

## Development Approach
- Mobile-first responsive design
- Progressive enhancement
- Semantic HTML structure
- Accessibility-focused development
- Performance optimized (lazy loading, debounced events)

## Common Commands
Since this is a static site with no build process:

```bash
# Local development - serve files locally
python -m http.server 8000
# or
npx serve .

# Deploy to GitHub Pages
git add .
git commit -m "Update portfolio"
git push origin main
```

## File Structure
- `index.html` - Main portfolio page
- `styles.css` - All styling and responsive design
- `script.js` - Interactive features and animations
- `assets/` - Images, logos, and media files
- `test-preview.html` - Development preview with placeholders

## Performance Considerations
- Optimized images in assets folder
- CSS and JS minification ready
- Lazy loading implementation for images
- Debounced scroll and resize handlers
- Minimal DOM manipulation for smooth animations