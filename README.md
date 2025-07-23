# Paranjay Khachar's Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## 🎨 Customization Guide

### 1. Personal Information
Update `src/config.ts` with your information:
- Name, designation, and description
- Domain name
- Social media links
- Contact information

### 2. Projects
Edit `src/components/project/_project-mock.ts` to add your projects:
- Replace placeholder projects with your actual work
- Add GitHub repository URLs
- Include live demo links
- Update tech stacks

### 3. GitHub Username
Update the GitHub username in `src/components/github-contributions.tsx` to show your contribution graph.

### 4. About Section
Customize `src/components/about-section.tsx` with your personal story and background.

### 5. Blog Posts
Create new blog posts in `src/content/posts/images/` directory. The existing blog structure supports:
- Markdown/MDX format
- Multi-language support
- Image assets
- SEO metadata

### 6. Redirects (Optional)
Add custom redirects in `next.config.mjs` for short links to your social profiles.

## 🛠 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX with Velite
- **Database**: Prisma
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📱 Features

- ✅ Responsive design
- ✅ Dark mode support
- ✅ Blog system with MDX
- ✅ Project showcase
- ✅ GitHub contributions display
- ✅ SEO optimized
- ✅ Multi-language support
- ✅ RSS feed

## 🚀 Deployment

Deploy easily with Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/your-repo)

## 📄 License

MIT License - feel free to use this for your own portfolio!

---

**Note**: This portfolio was customized from [Ayush Singh's template](https://github.com/ayush-that/ayush.top). All personal content has been removed and replaced with placeholder data for customization.
