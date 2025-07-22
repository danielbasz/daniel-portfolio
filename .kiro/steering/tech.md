# Technology Stack

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