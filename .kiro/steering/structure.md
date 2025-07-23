# Project Structure (Next.js migration)

## Repository Layout
```
portfolio-nextjs/
├── .github/workflows/ci.yml          # Lint, test, build, deploy
├── next.config.mjs                   # Next.js config (static export)
├── tsconfig.json                     # (Optional) TypeScript config
├── package.json                      # Scripts & deps
├── public/                           # Static assets served as-is
│   ├── images/                       # Optimised originals
│   └── favicons/
├── src/
│   ├── app/ or pages/                # Next.js routing (TBD 13/14 app router)
│   ├── components/                   # Reusable React components
│   ├── styles/                       # SCSS modules & globals
│   ├── data/                         # JSON/YAML driving content (projects, jobs)
│   └── hooks/ utils/                 # Helper functions
├── playwright.config.ts              # Playwright setup
└── README.md
```

## Content Data Flow
- Structured data lives in `src/data/*.yml` and is imported into React components to render cards.
- Allows easy content updates without touching JSX.

## Styling Architecture
- **SCSS Modules** for component-scoped styles: `Component.module.scss`.
- Global design-tokens in `styles/_variables.scss`, consumed via `:root` CSS variables for easy theming.

## Testing Scaffold
- **Playwright** E2E: navigation, contact links, accessibility snapshot.
- **Lighthouse CI**: budgets for performance/regression.
- **pa11y**: automated accessibility checks.

## Git Strategy
- Default branch `main` on new repo.
- Conventional Commits + Semantic Release (optional) for versioning.
- Pull Request template referencing Context7 docs lookup rule.

## Deployment Targets
- **Primary:** GitHub Pages (static) via `next export`.
- **Alternate:** Vercel for instant previews.

## Responsive Breakpoints (unchanged)
- Desktop: ≥ 1200 px
- Tablet: 768 – 1199 px
- Mobile: < 768 px

## Root Directory
```
portfolio-website/
├── index.html              # Main portfolio page
├── styles.css              # Complete styling and responsive design
├── script.js               # Interactive features and animations
├── test-preview.html       # Development preview with placeholder content
├── README.md               # Project documentation and status
├── .gitignore              # Git ignore rules
└── assets/                 # Media and image files
```

## Assets Organization
```
assets/
├── profile-picture.jpg     # Daniel's profile photo for hero section
├── cra-logo.png           # Canada Revenue Agency logo
├── globo-logo.jpg         # Globo TV company logo
├── andarilho-logo.png     # Andarilho Filmes logo
├── slate.webp             # Multimedia section header image
├── white-space-addition.jpg # Background texture
├── Daniel Barboza - CV.md  # Professional resume in markdown
└── Daniel Barboza - Cover Letter.md # Cover letter template
```

## Code Organization

### HTML Structure
- Semantic HTML5 structure with proper sectioning
- Hero section with gradient background and profile
- Development section showcasing technical work
- Multimedia section highlighting creative projects
- Footer with contact information and links

### CSS Architecture
- Mobile-first responsive design approach
- CSS Grid and Flexbox for layout
- CSS custom properties for consistent theming
- Modular component-based styling
- Smooth animations and hover effects

### JavaScript Features
- Intersection Observer for scroll animations
- Image loading optimization
- Smooth scrolling navigation
- Performance monitoring utilities
- Responsive event handling with debouncing

## Design Patterns
- **Card-based layout**: Consistent project presentation
- **Horizontal cards**: Used for work experience in both sections
- **Gradient hero**: Professional introduction with contact CTAs
- **Section headers**: Title + description + optional header image
- **Tech stack tags**: Visual representation of technologies used

## Content Structure
- **Hero**: Personal branding and contact information
- **Development**: Professional software development experience
- **Multimedia**: Creative and production work history
- **Footer**: Additional contact links and copyright

## Responsive Breakpoints
- Desktop: 1200px+ (full grid layout)
- Tablet: 768px-1199px (adjusted grid)
- Mobile: <768px (single column, stacked layout)