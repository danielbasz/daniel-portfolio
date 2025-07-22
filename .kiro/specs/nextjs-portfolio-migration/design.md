# Design Document

## Overview

This design outlines the transformation of Daniel Barboza's vanilla HTML/CSS/JavaScript portfolio into a modern Next.js application. The migration will preserve all existing visual design and functionality while adding an education section and leveraging Next.js benefits including improved performance, SEO, and maintainability.

## Architecture

### Technology Stack
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript for type safety and better development experience
- **Styling**: CSS Modules or Styled Components (maintaining current design system)
- **Image Optimization**: Next.js Image component with automatic optimization
- **Deployment**: Static export compatible with Vercel, Netlify, or GitHub Pages

### Project Structure
```
portfolio-nextjs/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Main portfolio page
│   ├── globals.css             # Global styles (converted from styles.css)
│   └── components/
│       ├── Hero.tsx            # Hero section component
│       ├── Work.tsx            # Work experience section component
│       ├── Education.tsx       # Education section component
│       └── Footer.tsx          # Footer component
├── public/
│   └── assets/                 # All current assets moved here
├── lib/
│   ├── data.ts                 # Structured data for content
│   └── types.ts                # TypeScript type definitions
├── styles/
│   ├── components/             # Component-specific styles
│   └── globals.css             # Global styles
└── next.config.js              # Next.js configuration
```

## Components and Interfaces

### Core Components

#### 1. Layout Component (`app/layout.tsx`)
- Root layout with HTML structure
- Meta tags for SEO optimization
- Global styles import
- Font optimization

#### 2. Hero Component (`app/components/Hero.tsx`)
```typescript
interface HeroProps {
  name: string;
  title: string;
  bio: string;
  email: string;
  socialLinks: SocialLink[];
  profileImage: string;
}
```

#### 3. Work Component (`app/components/Work.tsx`)
```typescript
interface WorkProps {
  experiences: Experience[];
}
```

#### 4. Education Component (`app/components/Education.tsx`)
```typescript
interface EducationProps {
  experiences: Experience[];
}
```

#### Unified Experience Interface
```typescript
interface Experience {
  id: string;
  title: string; // Job title, degree name, etc.
  organization: string; // Company, institution, etc.
  period: string;
  location?: string;
  description: string;
  tags: string[]; // Technologies, skills, subjects, etc.
  logo?: string;
  status?: 'completed' | 'incomplete'; // For education
  type: 'work' | 'education';
}
```

#### 6. Footer Component (`app/components/Footer.tsx`)
```typescript
interface FooterProps {
  email: string;
  socialLinks: SocialLink[];
  year: number;
}
```

### Data Models

#### Core Types (`lib/types.ts`)
```typescript
export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface TechTag {
  name: string;
  category?: 'language' | 'framework' | 'tool' | 'skill';
}

export interface PortfolioData {
  personal: PersonalInfo;
  work: Experience[];
  education: Experience[];
}
```

## Data Models

### Education Section Structure
Based on Daniel's CV, the education section will include:

1. **Computer Programming Diploma** - Algonquin College (2021-2023)
   - Dean's Honours List recognition
   - Key subjects: Java OOP, Database Systems, Web Development
   
2. **B.A. Social Communication** - PUCPR (2005-2010)
   - Focus areas: Advertising, Marketing, Digital Media, Film Production
   
3. **B.A. Computer Science (Incomplete)** - PUCRJ (2002-2003)
   - Subjects: C Programming, Data Structures and Algorithms
   
4. **MITx Certification** - Python Programming (2016)
   - Online certification through edX.org

### Content Data Structure (`lib/data.ts`)
```typescript
export const portfolioData: PortfolioData = {
  personal: {
    name: "Daniel Porto",
    title: "Full Stack Software Developer & Multimedia Specialist",
    bio: "Passionate in bridging technology and art through code and creative media.",
    email: "danielbassporto@gmail.com",
    profileImage: "/assets/profile-picture.jpg"
  },
  education: [
    {
      id: "algonquin-diploma",
      degree: "Computer Programming Diploma",
      institution: "Algonquin College",
      period: "Sep 2021 - Sep 2023",
      location: "Ottawa, ON",
      details: ["Java OOP", "Database Systems", "Web Development", "Data Analysis", "Technical Writing"],
    },
    // ... other education items
  ]
  // ... other data
};
```

## Error Handling

### Image Loading
- Fallback images for missing assets
- Proper alt text for accessibility
- Loading states with skeleton components

### Data Validation
- TypeScript interfaces for compile-time checking
- Runtime validation for data integrity
- Graceful degradation for missing content

### Performance Monitoring
- Next.js built-in performance metrics
- Image optimization monitoring
- Core Web Vitals tracking

## Testing Strategy

### Component Testing
- Unit tests for each component using Jest and React Testing Library
- Props validation and rendering tests
- Accessibility testing with jest-axe

### Integration Testing
- Page-level rendering tests
- Navigation and interaction testing
- Responsive design testing

### Visual Regression Testing
- Screenshot comparison for design consistency
- Cross-browser compatibility testing

## Migration Strategy

### Phase 1: Project Setup
1. Initialize Next.js project with TypeScript
2. Configure styling approach (CSS Modules or Styled Components)
3. Set up project structure and basic configuration

### Phase 2: Content Migration
1. Convert HTML structure to React components
2. Migrate CSS styles to component-based approach
3. Create data structures and move content to structured format

### Phase 3: Education Section Implementation
1. Design education section component matching existing style
2. Implement responsive card layout for education items
3. Add proper styling and animations consistent with other sections

### Phase 4: Enhancement and Optimization
1. Implement Next.js Image optimization
2. Add SEO metadata and structured data
3. Optimize performance and bundle size
4. Add error boundaries and loading states

### Phase 5: Testing and Deployment
1. Comprehensive testing across devices and browsers
2. Performance optimization and Core Web Vitals improvement
3. Static export configuration for deployment
4. Documentation and deployment setup

## SEO and Performance Optimizations

### Meta Tags and Structured Data
```typescript
export const metadata: Metadata = {
  title: 'Daniel Porto - Full Stack Developer & Multimedia Specialist',
  description: 'Passionate in bridging technology and art through code and creative media.',
  keywords: ['Full Stack Developer', 'Multimedia Specialist', 'Java', 'Angular', 'React'],
  authors: [{ name: 'Daniel Porto' }],
  openGraph: {
    title: 'Daniel Porto - Developer Portfolio',
    description: 'Full Stack Software Developer & Multimedia Specialist',
    images: ['/assets/profile-picture.jpg'],
  }
}
```

### Image Optimization
- Next.js Image component with automatic optimization
- WebP format conversion where supported
- Responsive image sizing
- Lazy loading implementation

### Performance Features
- Static generation for optimal loading
- Code splitting by component
- CSS optimization and minification
- Bundle analysis and optimization

## Accessibility Considerations

### Semantic HTML
- Proper heading hierarchy (h1, h2, h3)
- ARIA labels for interactive elements
- Focus management for keyboard navigation

### Visual Design
- Sufficient color contrast ratios
- Scalable text and responsive design
- Alternative text for all images

### Interactive Elements
- Keyboard navigation support
- Focus indicators
- Screen reader compatibility

## Deployment Configuration

### Static Export Setup
```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true // For static hosting
  }
}

module.exports = nextConfig
```

### Build Process
1. `npm run build` - Generate optimized production build
2. `npm run export` - Create static files for deployment
3. Deploy `out/` directory to hosting platform

This design maintains the current portfolio's visual identity and functionality while providing a modern, maintainable codebase with improved performance and SEO capabilities.