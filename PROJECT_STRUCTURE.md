# 📁 Project Structure & Architecture

## Complete Directory Tree

```
anhkiet.kinzz/
│
├── 📄 Configuration Files
│   ├── package.json                 # Dependencies & scripts
│   ├── vite.config.js              # Vite configuration
│   ├── tailwind.config.js          # Tailwind CSS config
│   ├── postcss.config.js           # PostCSS setup
│   ├── jsconfig.json               # JavaScript compiler config
│   ├── .prettierrc                 # Code formatter config
│   ├── .gitignore                  # Git ignore rules
│   └── .env.example                # Environment variables template
│
├── 📂 Source Files (src/)
│   ├── main.jsx                    # React entry point
│   ├── App.jsx                     # Main App component
│   │
│   ├── 📂 components/              # React components
│   │   ├── Navbar.jsx              # Navigation bar with mobile menu
│   │   ├── Hero.jsx                # Hero section (landing)
│   │   ├── About.jsx               # About me section
│   │   ├── Skills.jsx              # Technical skills display
│   │   ├── Projects.jsx            # Portfolio projects showcase
│   │   ├── Contact.jsx             # Contact form & info
│   │   └── Footer.jsx              # Footer section
│   │
│   ├── 📂 utils/                   # Utility functions
│   │   ├── helpers.js              # General helper functions
│   │   ├── hooks.js                # Custom React hooks
│   │   └── constants.js            # Configuration constants
│   │
│   └── 📂 styles/                  # Global styles
│       └── global.css              # Global CSS with animations
│
├── 📄 HTML & Assets
│   └── index.html                  # HTML template
│
├── 📂 GitHub Configuration
│   └── 📂 .github/
│       └── 📂 workflows/
│           └── deploy.yml          # GitHub Pages deployment workflow
│
└── 📄 Documentation
    ├── README.md                   # Project overview
    ├── QUICKSTART.md              # Quick setup guide
    ├── CUSTOMIZATION.md           # How to customize
    ├── DEPLOYMENT.md              # Deployment options
    └── PROJECT_STRUCTURE.md       # This file
```

---

## File Descriptions

### Core Files

#### `package.json`
Manages project dependencies and npm scripts.
- Dependencies: React, Framer Motion, Tailwind CSS, Lucide Icons
- Scripts: dev, build, preview, deploy

#### `vite.config.js`
Vite configuration for development and production builds.
- Configures React plugin
- Sets up port 3000
- Configures base path for deployments

#### `tailwind.config.js`
Tailwind CSS configuration with custom theme.
- Custom colors (accent palette)
- Custom fonts
- Custom animations
- Extended utilities

#### `index.html`
HTML entry point with meta tags and fonts.
- Google Fonts import
- Meta tags for SEO
- Cursor custom elements
- React root mount point

### React Components

#### `src/App.jsx`
Main application component that orchestrates all sections.
- Includes custom cursor effect
- Renders all major sections
- Sets up event listeners

#### `src/components/`
Individual section components using Framer Motion.

**Navbar.jsx**
- Fixed navigation bar
- Mobile hamburger menu
- Smooth scroll links
- State management for mobile menu

**Hero.jsx**
- Landing section with animations
- Call-to-action buttons
- Animated background elements
- Scroll indicator

**About.jsx**
- Personal introduction
- Skills cards
- Statistics display
- Professional highlights

**Skills.jsx**
- Animated progress bars
- Skill categories
- Proficiency levels
- Additional expertise tags

**Projects.jsx**
- Project cards with hover effects
- Project filtering (optional)
- Links to GitHub & live demos
- Technology tags

**Contact.jsx**
- Contact form with validation
- Multiple contact methods
- Social media links
- Call-to-action section

**Footer.jsx**
- Quick navigation links
- Newsletter signup
- Social links
- Copyright info

### Utility Files

#### `src/utils/helpers.js`
Reusable JavaScript helper functions.
- Smooth scroll
- Intersection observer
- Debounce/throttle
- Email validation
- And more...

#### `src/utils/hooks.js`
Custom React hooks for common functionality.
- useScrollPosition - Track scroll
- useInView - Check visibility
- useLocalStorage - Persist state
- useDarkMode - Theme toggle
- And more...

#### `src/utils/constants.js`
Configuration constants and data.
- Color schemes
- Breakpoints
- Navigation items
- Skills data
- Animation variants
- Messages and endpoints

### Styles

#### `src/styles/global.css`
Global CSS with animations and utilities.
- Tailwind imports
- Custom animations (@keyframes)
- Utility classes (.gradient-text, .glass-effect, etc.)
- Scrollbar styling
- Button styles
- Responsive utilities

---

## Component Hierarchy

```
App
├── Navbar
│   └── Mobile Menu (conditional)
├── Hero
│   ├── Badge
│   ├── MainHeading
│   ├── Subtitle
│   ├── CTAButtons
│   ├── ScrollIndicator
│   └── FloatingElements
├── About
│   ├── SectionTitle
│   ├── ContentGrid
│   │   ├── VisualCard
│   │   └── TextContent
│   │       └── StatsGrid
│   └── SkillsGrid
├── Skills
│   ├── SectionTitle
│   └── SkillCategoriesGrid
│       └── SkillBars
├── Projects
│   ├── SectionTitle
│   ├── ProjectsGrid
│   │   └── ProjectCard (multiple)
│   │       ├── ImageSection
│   │       ├── ActionButtons
│   │       └── ContentSection
│   └── ViewAllButton
├── Contact
│   ├── SectionTitle
│   ├── ContentGrid
│   │   ├── ContactForm
│   │   └── ContactInfo
│   │       ├── InfoCards
│   │       └── SocialLinks
│   └── CtaSection
└── Footer
    ├── ContentGrid
    │   ├── BrandSection
    │   ├── QuickLinks
    │   ├── SocialLinks
    │   └── Newsletter
    ├── Divider
    └── BottomFooter
        ├── Copyright
        ├── MadeWithLove
        └── BackToTopButton
```

---

## Data Flow

```
App.jsx
  ├─→ useEffect (cursor setup)
  │
  ├─→ Navbar
  │    └─→ useState (mobile menu)
  │    └─→ useEffect (scroll listener)
  │
  ├─→ Hero
  │    └─→ Framer Motion animations
  │
  ├─→ About
  │    ├─→ whileInView (scroll animation)
  │    └─→ Motion divs (layout animations)
  │
  ├─→ Skills
  │    ├─→ whileInView (entry animation)
  │    └─→ SkillBar (progress animation)
  │         └─→ whileInView (width animation)
  │
  ├─→ Projects
  │    ├─→ useState (hoveredProject)
  │    └─→ ProjectCard
  │         └─→ onHoverStart/End (hover state)
  │
  ├─→ Contact
  │    ├─→ useState (form data, submit status)
  │    └─→ handleSubmit (form submission)
  │
  └─→ Footer
       ├─→ getCurrentYear()
       └─→ scrollToTop (onClick)
```

---

## Styling Architecture

### Layer 1: Global Styles
- Tailwind imports (@import)
- CSS reset and base styles
- Custom keyframe animations

### Layer 2: Utility Classes
- `.gradient-text` - Text gradient
- `.glass-effect` - Glassmorphism
- `.neon-glow` - Glowing effects
- `.btn-primary` / `.btn-secondary` - Button styles

### Layer 3: Component Styles
- Tailwind classes in JSX
- Framer Motion inline styles
- Conditional styling

### Layer 4: Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), etc.
- Responsive utilities in global.css and Tailwind

---

## Animation System

### Framer Motion Variants
- `container` - Stagger children animations
- `item` - Individual item animation
- `fadeIn` - Simple fade animation
- `slideInLeft/Right` - Slide animations
- `slideUp` - Vertical slide
- `scaleUp` - Scale animation

### CSS Animations
- `fadeUp` - Fade and slide up
- `slideIn` - Slide from left
- `glow-pulse` - Glowing effect
- `float-slow` - Floating motion
- `rotate-slow` - Rotation
- `blob` - Morph animation

### Interaction States
- Hover effects (whileHover)
- Tap effects (whileTap)
- Scroll triggers (whileInView)
- Focus states (accessibility)

---

## Performance Optimizations

1. **Code Splitting**
   - Vite handles automatic splitting
   - Components loaded on demand

2. **Lazy Loading**
   - Images lazy-loaded within viewport
   - Intersection Observer usage

3. **Caching**
   - Long-term caching for assets
   - Browser cache headers

4. **Bundle Size**
   - Tree-shaking unused code
   - Minification in production
   - CSS purging with Tailwind

5. **Runtime Optimization**
   - Debounced scroll events
   - Throttled resize events
   - Memoized components (React.memo)

---

## Responsive Breakpoints

```
Mobile      < 640px   (xm)
Tablet      640-1024px (sm-md)
Desktop     > 1024px  (lg+)
```

Each component is optimized for all sizes with responsive classes.

---

## Deployment Structure

```
dist/                    # Production build output
├── index.html
├── assets/
│   ├── index-xxxxx.js   # Bundled JavaScript
│   └── index-xxxxx.css  # Bundled CSS
└── others...
```

Ready for deployment to:
- GitHub Pages
- Vercel
- Netlify
- Custom servers

---

## Development Workflow

```
npm install              # Install dependencies
↓
npm run dev              # Start dev server (localhost:3000)
↓
Edit components          # Make changes
↓
Hot reload               # Auto refresh
↓
npm run build            # Build for production
↓
npm run deploy           # Deploy to hosting
```

---

## Configuration Files Overview

### vite.config.js
```javascript
- Framework: React
- Port: 3000
- Base URL: / (change for subpaths)
```

### tailwind.config.js
```javascript
- Colors: Custom accent palette
- Fonts: System and Google Fonts
- Animations: Custom keyframes
```

### postcss.config.js
```javascript
- Plugins: Tailwind, Autoprefixer
```

### jsconfig.json
```javascript
- Target: ES2020
- Module: ESNext
- JSX: React JSX
```

---

## Adding New Features

### Adding a New Section
1. Create component in `src/components/NewSection.jsx`
2. Import in `App.jsx`
3. Add to component list
4. Update navigation in Navbar

### Adding New Styles
1. Add to `src/styles/global.css`
2. Or use Tailwind classes directly
3. Import if using external stylesheets

### Adding Utilities
1. Add functions to `src/utils/helpers.js`
2. Or create new file in `src/utils/`
3. Import where needed

### Using API Data
1. Use `useFetch` hook from `src/utils/hooks.js`
2. Or `useAsync` for custom API calls
3. Handle loading and error states

---

## Best Practices

✅ **Do:**
- Keep components small and focused
- Use meaningful variable names
- Comment complex logic
- Follow single responsibility principle
- Use constants for configuration
- Optimize images
- Test responsiveness
- Monitor performance

❌ **Don't:**
- Create giant components
- Hardcode values
- Skip accessibility
- Overuse animations
- Ignore performance
- Leave console errors
- Neglect mobile testing

---

## Troubleshooting

### Files Won't Update
- Clear browser cache
- Restart dev server
- Check for errors in console

### Styles Not Applying
- Ensure Tailwind config is correct
- Check class names spelling
- Rebuild if using custom CSS

### Components Not Rendering
- Check import statements
- Verify component export
- Look for syntax errors

### Build Errors
- Check Node.js version
- Clear node_modules & reinstall
- Review error messages carefully

---

## Quick Reference

| Task | Command |
|------|---------|
| Start dev | `npm run dev` |
| Build | `npm run build` |
| Deploy | `npm run deploy` |
| Preview build | `npm run preview` |
| Install deps | `npm install` |

---

This structure is designed to be:
- **Scalable** - Easy to add new sections and components
- **Maintainable** - Clear organization and naming
- **Performant** - Optimized animations and code splitting
- **Accessible** - Semantic HTML and ARIA labels
- **Responsive** - Mobile-first design approach

Happy developing! 🚀
