# Keylogger Awareness & Prevention Portal

A modern, educational Next.js application that teaches students about keyloggers in cybersecurity: what they are, how they work, how to detect them, and how to prevent them. The site is responsive, accessible, and includes interactive demos to reinforce learning.

## Overview

CyberSafe Education's Keylogger Awareness & Prevention Portal is a content-rich and interactive learning website. It covers keylogger concepts with animations, demonstrations, real-world case studies, and legal implications. It’s designed for clarity, performance, and accessibility across devices.

## Live Preview

- Local development: http://localhost:3000
- Production: Add your deployed URL here (e.g., [https://edu-keylogger.vercel.app](https://edu-keylogger.vercel.app/))

## Features

- Educational content
  - What keyloggers are, types, how they work, detection indicators, and protection strategies
  - Real-world case studies and legal considerations
- Interactive learning
  - Animated hero canvas visualization
  - Safe interactive demo simulating keystroke capture
  - Automated simulated keylogger terminal feed showing data transmission workflow
- Rich resources
  - Resources hub with Guides, Tools, Courses, and Articles tabs
  - Footer resource links to Security Blog, Guides & Tutorials, Security Tools, and Glossary
  - Downloadable Cybersecurity Checklist page
- Site pages
  - Home, About, Contact (with simulated form handling), Privacy, Terms, Topics, Blog, Guides, Tools, Glossary, Security Checklist
- Responsive UI/UX
  - Mobile-first layouts with adaptive grids and navigation
  - Sticky header, mobile menu, and context-aware section highlighting
- Theme support
  - Light/Dark theme toggle with persistence (next-themes)
- Animations and micro-interactions
  - Framer Motion transitions throughout
  - Hover/press visual feedback using shadcn/ui design tokens
- Accessibility
  - Semantic HTML, keyboard-accessible controls, aria labels via UI components
- Performance and SEO
  - App Router (Next.js), route-level code splitting
  - PWA manifest file (custom icons optional)
- Build and deploy ready
  - Works with npm install and npm run build
  - Simple deployment to Vercel

## Tech Stack

- Framework: Next.js (App Router, TypeScript, Server/Client Components)
- Styling: Tailwind CSS + tailwindcss-animate
- UI Library: shadcn/ui components
- Icons: lucide-react
- Theming: next-themes
- Animations: framer-motion
- State: React hooks (useState, useEffect)
- Utilities: cn() helper in lib/utils

## Architecture

- App Router structure using server-first components, with client components where interactivity is needed
- Co-located routes under the app/ directory
- Reusable UI components under components/ with focused responsibilities
- Tailwind design tokens driven by CSS variables to support themes
- No server-side environment variables required for core functionality

## Project Structure

\`\`\`
app/
  layout.tsx
  globals.css
  loading.tsx
  manifest.ts
  page.tsx
  about/page.tsx
  contact/page.tsx
  privacy/page.tsx
  terms/page.tsx
  topics/page.tsx
  blog/
    page.tsx
    loading.tsx
  guides/
    page.tsx
  tools/
    page.tsx
  glossary/
    page.tsx
    loading.tsx
  resources/
    security-checklist/page.tsx
components/
  hero-animation.tsx
  keylogger-demo.tsx
  interactive-demo.tsx
  detection-card.tsx
  prevention-card.tsx
  types-of-keyloggers.tsx
  real-world-cases.tsx
  legal-implications.tsx
  theme-provider.tsx
  ui/
    input.tsx
    textarea.tsx
    sheet.tsx
hooks/
  use-mobile.ts
  use-toast.ts
lib/
  utils.ts
tailwind.config.ts
next.config.mjs
package.json
tsconfig.json
README.md
\`\`\`

## Getting Started

Prerequisites
- Node.js v18.17+ (or v20+ recommended)
- npm v9+ (or pnpm/yarn)

Installation
- Install dependencies:
  - npm install

Development
- Run the development server:
  - npm run dev
- Open http://localhost:3000

Build
- Create a production build:
  - npm run build

Start (after build)
- Run the production server:
  - npm start

## Available Scripts

- dev: Start dev server at http://localhost:3000
- build: Production build
- start: Run production server
- (Optional) lint: If you add ESLint, include a lint script

## Pages and Routes

- / — Home: hero, what/why, types, how they work, interactive demo, detection, prevention, cases, legal, resources, CTA
- /about — About CyberSafe Education: mission, story, team, values, CTA
- /contact — Contact page with simulated form submission, contact info, and FAQ
- /privacy — Privacy Policy
- /terms — Terms of Service
- /topics — Curated cybersecurity topics and learning paths
- /blog — Security Blog listing with featured and recent articles (stub detail routes placeholder)
- /guides — Guides & Tutorials hub with categories and featured content
- /tools — Security tools hub with categories and featured tool
- /glossary — Searchable cybersecurity glossary with categories and download CTA
- /resources/security-checklist — Downloadable Cybersecurity Checklist + categorized best practices

Note: Where article/tool/guide detail pages are linked as examples (e.g., /blog/[slug]), they can be implemented later using the App Router’s nested routes.

## Key Components

- components/hero-animation.tsx: Canvas-based animated hero visualization
- components/keylogger-demo.tsx: Simulated terminal showing keystroke capture and data exfiltration
- components/interactive-demo.tsx: Safe keystroke capture demo (local only)
- components/types-of-keyloggers.tsx: Tabbed exploration of hardware/software/mobile keyloggers
- components/real-world-cases.tsx: Case study cards with impact summaries
- components/legal-implications.tsx: Legal contexts (personal, workplace, criminal, law enforcement)
- components/ui/*: Form inputs and Sheet built on shadcn/ui and Radix primitives
- components/theme-provider.tsx: next-themes provider (light/dark)

## Styling and UX

- Tailwind CSS with theme tokens (CSS vars) for consistent light/dark theming
- shadcn/ui primitives for accessible, consistent UI
- Motion:
  - Framer Motion transitions for sections, cards, and micro-interactions
  - Subtle hover/active effects for clarity and delight
- Mobile Responsiveness:
  - Adaptive grids, stacked layouts, and mobile-first navigation
  - Sticky header with mobile menu and section-aware highlighting

## Accessibility

- Semantic HTML in headers, main, and footers
- shadcn/ui and Radix components for correct ARIA attributes
- Visible focus states, sufficient color contrast, and screen-reader labels
- Avoids content shifts by handling client-only code after mount

## SEO and PWA

- app/manifest.ts configured with app name, colors, and icons (add your icon PNGs at public root as per manifest)
- Descriptive titles and meta descriptions via layout metadata
- Clean, meaningful route paths

## Deployment

Vercel (recommended)
- Install Vercel CLI
  - npm install -g vercel
- Login:
  - vercel login
- From project root:
  - vercel
- Or use the Vercel dashboard to import the Git repository and deploy.

Custom Domains
- Add your domain in Project Settings → Domains after the first deploy.

## Troubleshooting

- Theme toggle not switching:
  - next-themes only runs on client; ensure UI waits for mount (already implemented). If you add new theme-dependent UI, follow the same pattern.
- Unexpected token or JSX errors:
  - Ensure all components are valid TSX and correctly marked "use client" where hooks are used.
- Missing icons in manifest:
  - Add icon files named icon-192x192.png and icon-512x512.png at project root (public/) or update manifest paths accordingly.
- Broken links for detail pages:
  - Some “Read more” links are stubs for future content. Create nested routes under /blog, /guides, /tools if needed.

## Contributing

- Fork the repository and create feature branches
- Follow the existing component patterns and naming conventions
- Keep components small, accessible, and reusable
- Submit a pull request with a clear description and screenshots (if UI)

## License

Licensed under the Apache License, Version 2.0 — you are free to use, modify, and distribute with attribution and inclusion of the license text.

## Acknowledgments

- Next.js App Router for modern routing patterns
- Tailwind CSS and shadcn/ui for design system and accessible primitives
- lucide-react for icons
- framer-motion for animations
