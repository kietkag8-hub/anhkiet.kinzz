# 🎨 Customization Guide

## Table of Contents
1. [Personal Information](#personal-information)
2. [Color Scheme](#color-scheme)
3. [Typography](#typography)
4. [Content Updates](#content-updates)
5. [Adding New Sections](#adding-new-sections)
6. [Advanced Customization](#advanced-customization)

---

## Personal Information

Update your information in the following locations:

### Navbar & Hero
```javascript
// src/components/Navbar.jsx
<motion.div className="text-2xl font-bold gradient-text">
    Your Name.
</motion.div>

// src/components/Hero.jsx
<span className="gradient-text block text-5xl md:text-7xl font-bold">
    Your Name
</span>
<span className="block text-xl md:text-3xl mt-4 text-gray-300">
    Your Title
</span>
```

### Contact Information
```javascript
// src/components/Contact.jsx
const contactInfo = [
    {
        title: 'Email',
        content: 'your.email@example.com',
    },
    // ... update phone and location
];
```

### Social Links
```javascript
// src/components/Footer.jsx & Contact.jsx
const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/your-username' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/your-profile' },
    // ... update all social links
];
```

---

## Color Scheme

### Change Primary Colors

Edit `tailwind.config.js`:

```javascript
// Current gradient: Blue → Purple → Pink
colors: {
    accent: {
        blue: '#00d4ff',      // Cyan
        purple: '#b537f2',    // Purple
        pink: '#ff006e',      // Pink
        cyan: '#00f0ff',      // Bright Cyan
    }
}
```

### Alternative Color Schemes

**🌊 Ocean (Blue & Green)**
```javascript
accent: {
    blue: '#0088cc',
    purple: '#00cc88',
    pink: '#00ffaa',
    cyan: '#00ddff',
}
```

**🔥 Sunset (Orange & Red)**
```javascript
accent: {
    blue: '#ff6b35',
    purple: '#ff4757',
    pink: '#ff7979',
    cyan: '#ffa502',
}
```

**💜 Purple Dream**
```javascript
accent: {
    blue: '#667eea',
    purple: '#764ba2',
    pink: '#a855f7',
    cyan: '#c084fc',
}
```

**🌙 Dark & Gold**
```javascript
accent: {
    blue: '#f0ad4e',
    purple: '#d4a574',
    pink: '#c0827d',
    cyan: '#f1c40f',
}
```

### Update Global CSS Colors

Edit `src/styles/global.css`:

```css
/* Update gradient-text */
.gradient-text {
    background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 50%, #YOUR_COLOR3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Update button and hover effects */
.btn-primary {
    background: linear-gradient(135deg, #YOUR_COLOR1 0%, #YOUR_COLOR2 100%);
    box-shadow: 0 0 20px rgba(YOUR_R, YOUR_G, YOUR_B, 0.3);
}
```

---

## Typography

### Change Fonts

#### Primary Font (Body)
Edit `tailwind.config.js`:

```javascript
fontFamily: {
    sans: ["Your Font", "sans-serif"],
    display: ["Your Display Font", "sans-serif"],
}
```

#### Google Fonts Options

Update `index.html`:

```html
<!-- Option 1: Clean & Modern -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Sora:wght@600;700&display=swap" rel="stylesheet">

<!-- Option 2: Elegant & Professional -->
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;600;700&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">

<!-- Option 3: Tech & Modern -->
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Work+Sans:wght@600;700&display=swap" rel="stylesheet">

<!-- Option 4: Bold & Creative -->
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700&family=Bebas+Neue&display=swap" rel="stylesheet">
```

Then update `tailwind.config.js`:

```javascript
fontFamily: {
    sans: ["Poppins", "sans-serif"],
    display: ["Sora", "sans-serif"],
}
```

### Adjust Font Sizes

Edit `src/styles/global.css`:

```css
h1 {
    @apply text-5xl sm:text-6xl md:text-7xl lg:text-8xl;  /* Make bigger */
}

h2 {
    @apply text-2xl sm:text-3xl md:text-4xl;  /* Adjust as needed */
}

body {
    @apply text-base sm:text-lg;  /* Body font size */
}
```

---

## Content Updates

### About Section

```javascript
// src/components/About.jsx
<p className="text-gray-300 text-lg leading-relaxed">
    Your bio here...
</p>

// Statistics
const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '100%', label: 'Client Satisfaction' },
    // Add/update stats
];

// Skills cards
const skills = [
    {
        title: 'Your Skill 1',
        description: 'Description here',
    },
    // ... more skills
];
```

### Skills Section

```javascript
// src/components/Skills.jsx
const skillCategories = [
    {
        category: 'Frontend',
        skills: [
            { name: 'React', level: 95 },
            { name: 'TypeScript', level: 90 },
            // Update with your skills and levels
        ],
    },
    // Add more categories
];
```

### Projects Section

```javascript
// src/components/Projects.jsx
const projects = [
    {
        id: 1,
        title: 'Your Project Title',
        description: 'Project description',
        image: '🎨',  // Use emojis or replace with image path
        tags: ['Tech1', 'Tech2'],
        category: 'Category',
        link: 'https://project-link.com',
        github: 'https://github.com/your-repo',
    },
    // Add more projects
];
```

---

## Adding New Sections

### Create a New Component

```javascript
// src/components/Timeline.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
    return (
        <section id="timeline" className="section">
            <div className="container-max">
                <h2 className="gradient-text mb-16 text-center">
                    My Journey
                </h2>
                {/* Your content */}
            </div>
        </section>
    );
};

export default Timeline;
```

### Add to App.jsx

```javascript
// src/App.jsx
import Timeline from './components/Timeline';

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Timeline /> {/* Add here */}
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}
```

### Add to Navigation

```javascript
// src/components/Navbar.jsx
const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Timeline', href: '#timeline' }, // Add this
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];
```

---

## Advanced Customization

### Add Dark/Light Mode Toggle

Create a theme context:

```javascript
// src/context/ThemeContext.jsx
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(true);

    const toggleTheme = () => setIsDark(!isDark);

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
```

Use in components:

```javascript
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Component() {
    const { isDark } = useContext(ThemeContext);
    return <div className={isDark ? 'bg-dark-900' : 'bg-white'}>...</div>;
}
```

### Custom Animations

Add to `src/styles/global.css`:

```css
@keyframes customGlow {
    0%, 100% { box-shadow: 0 0 10px rgba(0, 212, 255, 0.3); }
    50% { box-shadow: 0 0 30px rgba(181, 55, 242, 0.6); }
}

.custom-glow {
    animation: customGlow 3s ease-in-out infinite;
}
```

### Add Parallax Scrolling

```javascript
import { useScroll, useTransform, motion } from 'framer-motion';

function ParallaxSection() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 100]);

    return <motion.div style={{ y }}>Content</motion.div>;
}
```

### Add Scroll-to-Top Button

```javascript
// src/components/ScrollToTop.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener('scroll', toggleVisibility);

    return isVisible && (
        <motion.button
            whileHover={{ scale: 1.1 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 btn-primary"
        >
            <ArrowUp size={24} />
        </motion.button>
    );
}
```

---

## Tips & Best Practices

✅ **Do:**
- Keep color scheme consistent across all sections
- Use the same typography for related content
- Test on multiple devices before deploying
- Optimize images before uploading
- Keep animations subtle and purposeful
- Update content regularly

❌ **Don't:**
- Use too many different colors
- Change fonts on every section
- Add animations to every element
- Use low-quality images
- Forget to update social links
- Leave placeholder text

---

## Need More Help?

- Check the component files in `src/components/`
- Review Framer Motion docs: https://www.framer.com/motion/
- Tailwind CSS docs: https://tailwindcss.com/docs
- Explore examples in the existing code

Happy customizing! 🎨✨
