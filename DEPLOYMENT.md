# 📘 Deployment Guide

## Quick Deployment Options

### 1️⃣ GitHub Pages (Recommended for Beginners)

**Advantages:**
- Free hosting
- Easy setup
- Automatic updates with git push

**Steps:**

1. **Create GitHub Repository**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/anhkiet.kinzz.git
git push -u origin main
```

2. **Update `vite.config.js`**
```javascript
export default defineConfig({
  base: '/anhkiet.kinzz/', // Change to your repo name
  plugins: [react()],
})
```

3. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

4. **Update `package.json`**
```json
{
  "homepage": "https://YOUR_USERNAME.github.io/anhkiet.kinzz",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "npm run build && npx gh-pages -d dist"
  }
}
```

5. **Deploy**
```bash
npm run deploy
```

Access your site at: `https://YOUR_USERNAME.github.io/anhkiet.kinzz`

---

### 2️⃣ Vercel (Recommended for Performance)

**Advantages:**
- Superior performance
- Automatic optimizations
- Edge functions support
- Preview deployments

**Steps:**

1. **Push code to GitHub**

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Project**
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click "Deploy"

Access your site at: `https://YOUR_PROJECT.vercel.app`

---

### 3️⃣ Netlify

**Advantages:**
- Excellent performance
- Built-in forms
- Analytics
- Netlify CMS compatible

**Steps:**

1. **Install Netlify CLI**
```bash
npm i -g netlify-cli
```

2. **Deploy**
```bash
npm run build
netlify deploy --prod --dir=dist
```

Or connect GitHub:
- Go to [netlify.com](https://netlify.com)
- Click "New site from Git"
- Select your GitHub repository
- Configure build settings
- Deploy

Access your site at: `https://YOUR_SITE.netlify.app`

---

### 4️⃣ Custom VPS (Advanced)

**Steps:**

1. **Build project**
```bash
npm run build
```

2. **Transfer files to server**
```bash
scp -r dist/* user@your-server:/var/www/your-site/
```

3. **Configure Nginx**
```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        root /var/www/your-site;
        try_files $uri $uri/ /index.html;
    }
}
```

4. **Enable HTTPS** (Let's Encrypt)
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

---

## ✅ Pre-Deployment Checklist

- [ ] Update all personal information (name, email, links)
- [ ] Add real project images and descriptions
- [ ] Update skills and experience
- [ ] Test on multiple devices
- [ ] Check SEO meta tags in index.html
- [ ] Verify all links work correctly
- [ ] Test contact form
- [ ] Optimize images for web
- [ ] Check lighthouse score
- [ ] Set up custom domain (if not using default)
- [ ] Enable HTTPS
- [ ] Configure analytics (Google Analytics)

---

## 🔍 SEO Optimization

### Update Meta Tags (`index.html`)
```html
<title>Anh Kiệt - Premium Portfolio</title>
<meta name="description" content="Frontend developer and UI/UX designer...">
<meta name="keywords" content="developer, designer, portfolio">
<meta property="og:title" content="Anh Kiệt - Portfolio">
<meta property="og:description" content="...">
<meta property="og:image" content="https://your-domain.com/preview.png">
```

### Add Google Analytics
```html
<!-- In index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

## 📊 Performance Tips

1. **Image Optimization**
   - Use WebP format
   - Add srcset for responsive images
   - Lazy load images

2. **Code Splitting**
   - Vite handles this automatically
   - Components are code-split by default

3. **Caching**
   - Vercel/Netlify handle caching
   - Set proper cache headers for custom servers

4. **Monitoring**
   - Use Lighthouse in Chrome DevTools
   - Check PageSpeed Insights
   - Monitor Core Web Vitals

---

## 🚨 Troubleshooting

### Issue: CSS not loading
**Solution:** Check base path in vite.config.js

### Issue: Routes not working
**Solution:** Ensure HTML fallback is configured

### Issue: Images not showing
**Solution:** Check image paths and ensure they're in public folder

### Issue: Slow loading
**Solution:** 
- Optimize images
- Enable compression
- Check network tab in DevTools

---

## 📞 Support

For deployment issues:
- Check official docs of your hosting platform
- Review CLI error messages carefully
- Check GitHub Issues
- Consult ChatGPT or Stack Overflow

Happy deploying! 🚀
