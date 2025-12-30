# Cozy Innovations Website - Project Structure

## Technology Stack

✅ **React 18** - Modern UI framework for building interactive components
✅ **Vite** - Fast build tool and development server
✅ **React Router** - Client-side routing for navigation
✅ **GitHub Actions** - Automated CI/CD and deployment to GitHub Pages
✅ **No Backend Required** - Static site with images stored locally

## Project Structure

```
cozy-innovations-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment config
├── public/                      # Static assets (images, etc.)
│   └── images/                 # Place product/gallery images here
├── src/
│   ├── components/             # Reusable components
│   │   ├── Navbar.jsx          # Navigation bar with dropdown menus
│   │   ├── Navbar.css
│   │   ├── Footer.jsx          # Footer with links and contact info
│   │   └── Footer.css
│   ├── pages/                  # Page components
│   │   ├── Home.jsx            # Homepage with hero and services
│   │   ├── Home.css
│   │   ├── Products.jsx        # Products listing page
│   │   ├── Products.css
│   │   ├── ProductCategory.jsx # Individual product/service pages
│   │   ├── ProductCategory.css
│   │   ├── Galleries.jsx       # Portfolio/gallery page
│   │   ├── Galleries.css
│   │   ├── Contact.jsx         # Contact form page
│   │   └── Contact.css
│   ├── App.jsx                 # Main app component with routing
│   ├── App.css
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles
├── .gitignore
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
└── README.md                   # Project documentation
```

## Features Implemented

### 1. **Homepage** (`/`)
- Hero section with company branding
- Services overview grid
- Locations section
- Call-to-action section

### 2. **Products Page** (`/products`)
- Grid layout of all product/service categories
- Links to individual category pages

### 3. **Product Categories** (`/products/:category`)
- Individual pages for each service:
  - Recliner
  - Customized Sofa
  - Car Seats
  - Home Theater
  - Construction
  - Renovation
  - Interior Designing
  - ACP, Fundermax
  - Glazing

### 4. **Galleries Page** (`/galleries`)
- Portfolio showcase (ready for images)
- Gallery cards for different project types

### 5. **Contact Page** (`/contact`)
- Contact information display
- Quote request form
- Form validation

## Navigation Structure

- **Home** - Landing page
- **Products** (Dropdown)
  - Recliner
  - Customized Sofa
  - Car Seats
  - Home Theater
- **Services** (Dropdown)
  - Construction
  - Renovation
  - Interior Designing
  - ACP, Fundermax
  - Glazing
- **Galleries** - Portfolio showcase
- **Contact Us** - Contact form

## Deployment

### GitHub Pages Setup

1. **Repository Settings:**
   - Go to repository Settings → Pages
   - Source: GitHub Actions

2. **Deployment:**
   - Push to `main` branch
   - GitHub Actions automatically builds and deploys
   - Site will be available at: `https://[username].github.io/cozy-innovations-website/`

3. **Custom Domain (Optional):**
   - Add `CNAME` file in `public/` folder
   - Configure DNS settings

## Adding Images

1. Place images in `public/images/` directory
2. Reference them in components: `/images/your-image.jpg`
3. Recommended structure:
   ```
   public/images/
   ├── hero/
   ├── products/
   ├── galleries/
   └── logo/
   ```

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

## Next Steps

1. **Add Images:**
   - Replace placeholder icons with actual product images
   - Add gallery images
   - Add company logo

2. **Customize Content:**
   - Update service descriptions
   - Add real project details
   - Customize color scheme if needed

3. **Form Integration:**
   - Currently uses mailto: link
   - Can integrate with form services (Formspree, Netlify Forms, etc.)

4. **SEO Optimization:**
   - Add meta tags
   - Add Open Graph tags
   - Add structured data

5. **Analytics:**
   - Add Google Analytics
   - Add Facebook Pixel (if needed)

