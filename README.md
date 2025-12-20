# Noah Crouse - Portfolio Website

A modern, interactive portfolio website built with Next.js 14+, TypeScript, and Tailwind CSS.

## 🎨 Features

- **Hero Section** - Animated landing with rotating role titles
- **About Section** - Professional bio with tech stack showcase
- **Projects Section** - Featured projects with detailed descriptions
- **Skills Section** - Technical skills with animated progress bars
- **Contact Section** - Working contact form with validation
- **Dark Mode** - Smooth dark/light mode toggle
- **Responsive Design** - Perfect experience on all devices
- **Smooth Animations** - Framer Motion powered animations
- **SEO Optimized** - Proper meta tags and structured data

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📝 Customization Guide

### 1. Personal Information

Update contact information in `components/Contact.tsx` and `components/Footer.tsx`:

```typescript
// Update email, GitHub, and LinkedIn links
const socialLinks = [
  { href: 'mailto:your-email@example.com', ... },
  { href: 'https://github.com/yourusername', ... },
  { href: 'https://linkedin.com/in/yourusername', ... },
];
```

### 2. Project Information

Edit `lib/projects.ts` to add your own projects:

```typescript
export const projects: Project[] = [
  {
    id: 'your-project',
    title: 'Your Project Title',
    tagline: 'One-line description',
    description: 'Detailed description...',
    features: ['Feature 1', 'Feature 2'],
    techStack: ['React', 'Node.js'],
    status: 'Live',
    links: {
      github: 'https://github.com/...',
      live: 'https://...',
    },
  },
];
```

### 3. About Section

Update bio text in `components/About.tsx`.

### 4. Skills & Tech Stack

Modify skills in `components/Skills.tsx` and tech stack in `lib/projects.ts`.

### 5. Colors & Theme

Customize colors in `app/globals.css`:

```css
:root {
  --accent: #3b82f6; /* Primary blue */
  --accent-secondary: #8b5cf6; /* Secondary purple */
}
```

## 🌐 Deployment to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repository
3. Vercel will auto-detect Next.js and deploy
4. Add custom domain `www.noahcrouse.com` in Project Settings → Domains

## 📦 Project Structure

```
noah-portfolio/
├── app/              # Next.js app directory
├── components/       # React components
├── lib/             # Data and utilities
└── public/          # Static assets
```

## 🛠️ Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Form Handling:** React Hook Form
- **Icons:** Lucide React

## 📋 TODO Before Launch

- [ ] Update placeholder text with your information
- [ ] Add actual email, GitHub, LinkedIn links
- [ ] Update project descriptions and links
- [ ] Add project screenshots to `public/images/`
- [ ] Add professional photo
- [ ] Test on mobile devices
- [ ] Deploy to Vercel
- [ ] Connect custom domain

---

Built with ❤️ using Next.js
