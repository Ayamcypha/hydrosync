# HydroSync - Plumbing & HVAC Website

A modern, performant website for a plumbing and HVAC service company built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion. Inspired by The Waterworks but built as a portfolio showcase project.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **CMS**: Sanity.io (Headless)
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Deployment**: Vercel

## ✨ Features

### Core Features
- **Mega Menu Navigation** - Complex service hierarchy with keyboard accessibility
- **Dynamic Service Pages** - 30+ service pages with dynamic routing
- **Multi-step Booking Form** - Validated with Zod, animated transitions
- **Contact Form** - Server-ready with validation
- **Reviews Carousel** - Auto-play, touch/swipe, keyboard navigation
- **Blog System** - MDX-ready with categories and search
- **FAQ Accordions** - Animated, accessible, categorized
- **Coupon System** - Featured offers with copy-to-clipboard
- **Service Area Lookup** - ZIP code validation

### Design & UX
- **Design System** - Consistent colors, spacing, typography
- **Dark Mode Ready** - CSS variables for theming
- **Framer Motion Throughout** - Page transitions, micro-interactions, scroll animations
- **Accessibility (WCAG AA)** - Semantic HTML, ARIA labels, keyboard nav, focus management
- **Responsive Design** - Mobile-first, breakpoints at 640/768/1024/1280/1536

### Performance & SEO
- **Next.js Image Optimization** - Automatic WebP/AVIF, responsive sizes
- **Static Generation** - `generateStaticParams` for service pages
- **Metadata API** - Dynamic SEO per page
- **Sitemap & Robots** - Auto-generated
- **JSON-LD Structured Data** - LocalBusiness, Service, Review schemas
- **Core Web Vitals Optimized** - LCP, CLS, FID

### Portfolio Highlights
- Complex mega menu with 4-level hierarchy
- 40+ page routes with dynamic params
- Advanced Framer Motion patterns
- Type-safe forms with Zod validation
- Sanity schema design for complex content
- Component composition patterns
- Performance optimization techniques

## 📁 Project Structure

```
hydrosync/
├── sanity/                 # Sanity CMS configuration
│   ├── schemas/           # Content schemas (20+ types)
│   ├── sanity.config.ts   # Studio config
│   └── package.json
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── services/      # Dynamic service routes
│   │   │   ├── hvac/      # Heating, Cooling, Air Quality
│   │   │   ├── plumbing/  # All plumbing services
│   │   │   ├── sewer-drains/
│   │   │   └── commercial/
│   │   ├── schedule/      # Booking form
│   │   ├── contact/       # Contact form
│   │   ├── about/         # Company page
│   │   ├── blog/          # Blog listing & posts
│   │   ├── reviews/       # Testimonials
│   │   ├── faq/           # FAQ accordions
│   │   ├── service-area/  # Coverage map & ZIP lookup
│   │   ├── financing/     # Financing options
│   │   ├── coupons/       # Promotions
│   │   └── careers/       # Job listings & apprenticeships
│   ├── components/
│   │   ├── ui/            # Primitive components (Button, Card, Input, etc.)
│   │   ├── layout/        # Header, Footer, MegaMenu
│   │   ├── sections/      # Page sections (Hero, ServiceGrid, etc.)
│   │   ├── forms/         # BookingForm, ContactForm
│   │   └── service/       # Service-specific components
│   ├── lib/
│   │   ├── sanity.ts      # Sanity client & queries
│   │   ├── types.ts       # TypeScript interfaces
│   │   ├── utils.ts       # Helper functions
│   │   └── design-system.ts # Design tokens
│   └── hooks/             # Custom React hooks
├── public/                # Static assets
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🛠 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Sanity.io account (free tier works)

### Installation

```bash
# Clone and install dependencies
cd hydrosync
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Sanity credentials

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Sanity Studio Setup

```bash
cd sanity
npm install
npm run dev
```

Studio runs at [http://localhost:3333](http://localhost:3333)

Deploy studio:
```bash
npm run deploy
```

## 📝 Content Management

### Sanity Schemas Included
- `siteSettings` - Global config (phone, address, hours, social)
- `serviceCategory` - Top-level categories (HVAC, Plumbing, etc.)
- `service` - Individual services with sub-services
- `subService` - Granular service pages
- `page` - Flexible page builder with sections
- `blogPost` - Rich text with custom blocks
- `review` - Testimonials with ratings
- `teamMember` - Staff profiles
- `serviceArea` - Cities & ZIP codes
- `coupon` - Promotions with codes
- `faq` - Categorized FAQs

### Page Builder Sections
- Hero with trust badges
- Service Grid
- Why Choose Us
- Trust Signals
- CTA Sections
- Reviews Carousel
- Content Blocks
- Team Grid
- FAQ Accordions
- Coupons Display
- Service Area Map
- Blog Posts Feed

## 🎨 Customization

### Design Tokens
Edit `src/lib/design-system.ts` for:
- Color palette
- Typography
- Spacing scale
- Border radius
- Shadows
- Transitions
- Breakpoints

### Components
All UI components in `src/components/ui/` are customizable:
- Button variants (primary, secondary, outline, ghost, destructive)
- Card variants (default, outlined, elevated)
- Form inputs with validation states
- Badge variants
- Avatar with fallbacks

## 📦 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import in Vercel
3. Add environment variables
4. Deploy

```bash
# Build command
npm run build

# Output directory
.next
```

### Environment Variables for Production
```
NEXT_PUBLIC_SANITY_PROJECT_ID=xxx
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=xxx
```

## 🧪 Testing & Quality

```bash
# Type checking
npm run typecheck

# Linting
npm run lint

# Build verification
npm run build
```

## 📊 Performance Targets

- **Lighthouse Score**: 95+ across all categories
- **LCP**: < 2.5s
- **CLS**: < 0.1
- **FID**: < 100ms
- **Bundle Size**: < 150KB JS (gzipped)

## ♿ Accessibility

- Semantic HTML5 structure
- ARIA labels & roles
- Keyboard navigation throughout
- Focus management in modals/menus
- Color contrast ratios (WCAG AA)
- Screen reader optimized
- Reduced motion support

## 🔧 Scripts

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "typecheck": "tsc --noEmit",
  "sanity:dev": "cd sanity && sanity dev",
  "sanity:build": "cd sanity && sanity build",
  "sanity:deploy": "cd sanity && sanity deploy"
}
```

## 📚 Learning Outcomes

This project demonstrates:

1. **Next.js App Router Mastery** - Dynamic routes, layouts, metadata, server components
2. **Complex State Management** - Mega menu, multi-step forms, carousels
3. **Animation Engineering** - Framer Motion patterns, performance optimization
4. **TypeScript Architecture** - Strict typing, discriminated unions, generics
5. **Headless CMS Design** - Schema modeling, content relationships, preview mode
6. **Design System Implementation** - Tokens, components, composition
7. **Performance Optimization** - Images, fonts, bundle analysis, caching
8. **Accessibility Engineering** - WCAG compliance, testing strategies
9. **SEO Engineering** - Structured data, sitemaps, meta optimization
10. **Component Composition** - Reusable, composable, maintainable

## 🤝 Contributing

This is a portfolio project, but feel free to fork and customize!

## 📄 License

MIT License - Use freely for learning and portfolio purposes.

## 🙏 Acknowledgments

- Design inspired by [The Waterworks](https://thewaterworks.com/)
- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- CMS by [Sanity.io](https://www.sanity.io/)
- Deployment by [Vercel](https://vercel.com/)