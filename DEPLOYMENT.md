# Deployment Guide

## GitHub Pages Deployment

### Option 1: Using GitHub Actions (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/cozy-innovations-website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository Settings
   - Navigate to Pages section
   - Under "Source", select "GitHub Actions"

3. **Update base path (if needed):**
   - If your repository name is NOT `cozy-innovations-website`, update `vite.config.js`:
   ```js
   base: '/your-repo-name/',
   ```

4. **Deploy:**
   - The GitHub Action will automatically build and deploy on every push to `main`
   - Your site will be available at: `https://yourusername.github.io/your-repo-name/`

### Option 2: Manual Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder:**
   - Use GitHub Pages, Netlify, Vercel, or any static hosting service
   - Upload the contents of the `dist` folder

## Custom Domain Setup

1. **Add CNAME file:**
   - Create `public/CNAME` file with your domain:
   ```
   yourdomain.com
   ```

2. **Update DNS:**
   - Add CNAME record pointing to `yourusername.github.io`

3. **Update Vite config:**
   - Change `base: '/'` in `vite.config.js` (already set)

## Alternative Hosting Options

### Netlify
- Connect your GitHub repository
- Build command: `npm run build`
- Publish directory: `dist`
- Auto-deploys on push

### Vercel
- Connect your GitHub repository
- Framework preset: Vite
- Auto-detects build settings

### Cloudflare Pages
- Connect your GitHub repository
- Build command: `npm run build`
- Build output directory: `dist`

