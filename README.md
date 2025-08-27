This is a Nagendra Gupta personal site. Add blog posts as Markdown and they will appear on the Insights page and the latest three on the home page.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Content structure

1) Posts go in `content/posts/*.md` with frontmatter:

```
---
title: "Post title"
date: "2025-08-24" # ISO date string
summary: "Short summary shown on cards"
tags: [strategy, innovation]
draft: false
---

Your markdown content...
```

2) The About page links to `public/profile.pdf`. Replace that file with your own.

3) Pages:
- `/` Home (shows 3 latest posts)
- `/insights` (all posts)
- `/insights/[slug]` (post detail)
- `/about`, `/services`, `/speaking`, `/contact`

### Contact form email setup

1) Create a `.env.local` file in `site/` with:

```
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=587
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
CONTACT_TO_EMAIL=you@yourdomain.com
CONTACT_FROM_EMAIL=website@yourdomain.com
```

2) Start the dev server and test the Contact form. In production, set the same env vars on your host (e.g., Vercel/Netlify).

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
