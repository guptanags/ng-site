# Deployment Guide

## Option 1: GitHub Pages (Free)

### 1. Create GitHub Repository
```bash
# In your site directory
git init
git add .
git commit -m "Initial commit"
```

Create a new repo on GitHub (e.g., `nagendra-personal-site`) and push:
```bash
git remote add origin https://github.com/YOUR_USERNAME/nagendra-personal-site.git
git branch -M main
git push -u origin main
```

### 2. Configure for GitHub Pages
Update `next.config.ts`:
```typescript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'assets.aceternity.com' },
    ],
  },
};
```

### 3. Build and Deploy
```bash
npm run build
# This creates an 'out' folder
```

### 4. Enable GitHub Pages
- Go to repo Settings → Pages
- Source: Deploy from a branch
- Branch: main, folder: / (root)
- Save

### 5. Auto-deploy with GitHub Actions
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

## Option 2: Vercel (Free Tier - Recommended)

### 1. Install Vercel CLI
```bash
npm i -g vercel
```

### 2. Deploy
```bash
# In your site directory
vercel
# Follow prompts, choose defaults
```

### 3. Auto-deploy
Connect your GitHub repo to Vercel for automatic deployments on every push.

## Option 3: Netlify (Free Tier)

### 1. Build locally
```bash
npm run build
```

### 2. Drag & Drop
- Go to [netlify.com](https://netlify.com)
- Drag your `out` folder to deploy
- Or connect GitHub repo for auto-deploy

## Environment Variables

For the contact form to work, set these in your hosting platform:

```bash
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=587
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
CONTACT_TO_EMAIL=you@yourdomain.com
CONTACT_FROM_EMAIL=website@yourdomain.com
```

## Custom Domain

1. Buy domain (Namecheap, GoDaddy, etc.)
2. Point DNS to your hosting provider
3. Configure in hosting platform settings

## Recommended: Vercel
- Free tier: 100GB bandwidth/month
- Automatic deployments
- Edge functions for API routes
- Better Next.js support than static export
