# Project Structure

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