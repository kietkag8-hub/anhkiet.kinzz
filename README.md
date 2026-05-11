# 🚀 Premium Portfolio - Anh Kiệt

A stunning, modern, and fully responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Perfect for showcasing your work, skills, and connecting with clients.

## ✨ Features

- **Beautiful Design**: Glassmorphism + Neumorphism + Soft UI
- **Smooth Animations**: Powered by Framer Motion
- **Fully Responsive**: Mobile, tablet, and desktop optimized
- **Modern Tech Stack**: React, Tailwind CSS, Vite
- **Interactive Elements**: Hover effects, scroll animations, custom cursor
- **Dark Mode**: Premium dark theme with gradient accents
- **Performance Optimized**: Fast loading, optimized images
- **SEO Friendly**: Semantic HTML, meta tags

## 🎯 Sections

1. **Navbar** - Sticky navigation with smooth scroll links
2. **Hero** - Eye-catching introduction with animated background
3. **About** - Personal introduction with stats and expertise highlights
4. **Skills** - Technical and design skills with animated progress bars
5. **Projects** - Portfolio showcase with hover effects and project details
6. **Contact** - Contact form and social links
7. **Footer** - Footer with quick links and newsletter signup

## 🛠️ Tech Stack

- **Framework**: React 18+ with Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Package Manager**: npm/yarn

## 📦 Installation

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd anhkiet.kinzz
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Set up environment variables**
```bash
# Create .env file (optional)
cp .env.example .env
```

4. **Start development server**
```bash
npm run dev
# or
yarn dev
```

The development server will start on `http://localhost:3000`

## 🚀 Build & Deployment

### Build for Production
```bash
npm run build
# or
yarn build
```

### Preview Build
```bash
npm run preview
# or
yarn preview
```

### Deploy to GitHub Pages

1. **Update `vite.config.js`** with your repository name:
```javascript
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
})
```

2. **Add deploy script to `package.json`**:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

3. **Deploy**:
```bash
npm run deploy
```

### Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy
```

## 🎨 Customization

### Color Scheme
Edit colors in `tailwind.config.js`:
```javascript
colors: {
  accent: {
    blue: '#00d4ff',
    purple: '#b537f2',
    pink: '#ff006e',
    cyan: '#00f0ff',
  }
}
```

### Font Customization
Modify font imports in `index.html` and `tailwind.config.js`

### Content Updates
- **Hero**: Edit `src/components/Hero.jsx`
- **About**: Edit `src/components/About.jsx`
- **Skills**: Edit `src/components/Skills.jsx`
- **Projects**: Edit `src/components/Projects.jsx`
- **Contact**: Edit `src/components/Contact.jsx`

### Add Your Own Projects
Update the `projects` array in `src/components/Projects.jsx`:
```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Description',
    image: '🎨',
    tags: ['Tech1', 'Tech2'],
    category: 'Category',
    link: '#',
    github: '#',
  },
  // ... more projects
]
```

## 📱 Responsive Design

The portfolio is fully responsive:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎬 Animations

- Smooth scroll behavior
- Parallax scrolling
- Hover animations on buttons and cards
- Scroll reveal animations
- Custom cursor effect (desktop)
- Floating and rotating elements
- Staggered animations for lists

## 📊 Performance

- Optimized bundle size
- Lazy loading for images
- Efficient animation rendering
- CSS optimizations with Tailwind
- Fast initial load time

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Focus states on interactive elements
- Color contrast compliance

## 🔒 Security

- No sensitive data in frontend
- Secure form submissions
- CSP headers ready
- No external dependencies with vulnerabilities

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Anh Kiệt**
- Email: hello@example.com
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 Notes

- Update personal information before deploying
- Add your actual social media links
- Replace placeholder images with your real projects
- Configure your email for the contact form
- Update meta tags for SEO

---

Made with ❤️ from Vietnam. Happy coding! 🚀