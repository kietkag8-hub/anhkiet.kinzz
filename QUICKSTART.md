# 🚀 Quick Start Guide

Get your portfolio up and running in just 5 minutes!

## ⚙️ Prerequisites

Make sure you have:
- [Node.js](https://nodejs.org/) (v16+)
- npm or yarn
- A code editor (VS Code recommended)
- Git (optional, for version control)

## 5️⃣ Quick Setup Steps

### Step 1: Install Dependencies (1 min)
```bash
npm install
```

### Step 2: Start Development Server (30 sec)
```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Step 3: Customize Your Info (2 min)

Edit these files with your information:

**Hero Section** - `src/components/Hero.jsx`:
```javascript
<span className="gradient-text block">
    Your Name
</span>
```

**About Section** - `src/components/About.jsx`:
- Update your bio
- Change the emoji avatar

**Skills** - `src/components/Skills.jsx`:
- Add your actual skills
- Update proficiency levels

**Projects** - `src/components/Projects.jsx`:
- Replace placeholder projects
- Add real project links

**Contact** - `src/components/Contact.jsx`:
- Update email, phone, location
- Update social media links

### Step 4: Build for Production (30 sec)
```bash
npm run build
```

### Step 5: Deploy (1 min)

Choose your platform:

**GitHub Pages:**
```bash
npm run deploy
```

**Vercel:**
```bash
vercel
```

**Netlify:**
```bash
netlify deploy
```

---

## 📁 Project Structure

```
anhkiet.kinzz/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── utils/               # Utility functions
│   │   ├── helpers.js       # Helper functions
│   │   ├── hooks.js         # Custom React hooks
│   │   └── constants.js     # Configuration
│   ├── styles/              # Global styles
│   │   └── global.css
│   ├── App.jsx              # Main App component
│   └── main.jsx             # Entry point
├── index.html               # HTML template
├── package.json             # Dependencies
├── tailwind.config.js       # Tailwind CSS config
├── vite.config.js          # Vite config
├── postcss.config.js       # PostCSS config
├── .prettierrc              # Code formatting
├── jsconfig.json           # JS config
├── README.md               # Project info
├── DEPLOYMENT.md           # Deployment guide
├── CUSTOMIZATION.md        # Customization guide
└── .gitignore              # Git ignore file
```

---

## 🎯 Common Tasks

### Update Your Name
1. Open `src/components/Navbar.jsx`
2. Find: `<div className="text-2xl font-bold gradient-text">Anh Kiệt.</div>`
3. Replace with your name

### Change Color Scheme
1. Edit `tailwind.config.js`
2. Update colors in `accent` object
3. Restart dev server

### Add a New Project
1. Edit `src/components/Projects.jsx`
2. Add to `projects` array:
```javascript
{
    id: 7,
    title: 'Your Project',
    description: 'Description',
    image: '🎨',
    tags: ['React', 'Tailwind'],
    category: 'Full-Stack',
    link: '#',
    github: '#',
}
```

### Update Skills
1. Edit `src/components/Skills.jsx`
2. Modify `skillCategories` array
3. Add/remove skills with levels (0-100)

### Add Social Links
Edit `src/components/Contact.jsx` and `src/components/Footer.jsx`:
```javascript
{ name: 'GitHub', url: 'https://github.com/YOUR_USERNAME' }
```

---

## 🐛 Troubleshooting

### Port 3000 already in use
```bash
# Use different port
npm run dev -- --port 3001
```

### CSS not loading
```bash
# Rebuild Tailwind
npm run dev
```

### Build errors
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
npm run build
```

### Hot reload not working
```bash
# Restart dev server
# Press Ctrl+C, then run:
npm run dev
```

---

## 📊 Performance Tips

✅ **Optimize Images:**
- Use WebP format
- Compress before uploading
- Use appropriate sizes

✅ **Minimize Bundle Size:**
- Vite handles tree-shaking automatically
- Remove unused dependencies
- Lazy load components if needed

✅ **Enable Caching:**
- Use service workers
- Cache static assets
- Leverage browser caching

---

## 🔍 Development Best Practices

1. **Keep components small** - Each component should do one thing
2. **Use meaningful names** - Make code self-documenting
3. **Comment complex logic** - Explain why, not what
4. **Test on mobile** - Check responsiveness early
5. **Use browser DevTools** - Inspect and debug easily

---

## 📚 Learning Resources

- [React Docs](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev/)
- [Web.dev](https://web.dev/) - Web best practices

---

## ✨ Next Steps

1. ✅ Customize your information
2. ✅ Add your real projects
3. ✅ Update skills section
4. ✅ Add social links
5. ✅ Test on different devices
6. ✅ Deploy to the web

---

## 💡 Pro Tips

- Use browser DevTools to test responsive design
- Enable Fast Refresh in Vite for instant updates
- Use VS Code extensions like Prettier and ESLint
- Keep your component tree organized
- Use semantic HTML for accessibility
- Test performance with Lighthouse

---

## 🆘 Need Help?

- Check **README.md** for detailed info
- Read **CUSTOMIZATION.md** for advanced changes
- Review **DEPLOYMENT.md** for deployment options
- Check component files - they're well-commented!

---

## 🎉 You're All Set!

Your portfolio is ready to shine! 

**Next:** Customize it with your amazing content and deploy it to the world! 🚀

Happy coding! 💻✨
