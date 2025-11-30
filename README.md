# 🚀 TaskFlow - Task Management Landing Page

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)](https://your-deployment-url.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.9-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

A modern, responsive landing page for TaskFlow - a productivity and task management application built with Next.js and Tailwind CSS.

## 🌐 Live Demo

**🔗 [View Live Application](https://auto-bot-wa-assignment-by-sujal.vercel.app/)**

## 🌟 Features

- **Smooth Scrolling Navigation**: Implemented smooth scroll behavior with hash-based routing for all navigation links
- **Responsive Design**: Fully responsive layout that works seamlessly across desktop, tablet, and mobile devices
- **Modern UI Components**: Built with Radix UI primitives and custom-styled components
- **Interactive Elements**: Hover effects, animations, and transitions for enhanced user experience
- **Section Navigation**: Easy navigation to Features, Pricing, and Testimonials sections with visual feedback
- **Mobile Menu**: Collapsible mobile navigation with smooth animations

## 🚀 Technologies Used

### Core Framework
- **Next.js 16.0.3** - React framework for production
- **React 19.2.0** - JavaScript library for building user interfaces
- **TypeScript 5** - Typed superset of JavaScript

### Styling
- **Tailwind CSS 4.1.9** - Utility-first CSS framework
- **Tailwind Merge** - Utility for merging Tailwind CSS classes
- **Tailwindcss Animate** - Animation utilities for Tailwind CSS
- **Class Variance Authority** - Component variant management
- **PostCSS** - CSS transformation tool

### UI Components & Libraries
- **Radix UI** - Unstyled, accessible UI components:
  - Accordion, Alert Dialog, Avatar
  - Checkbox, Collapsible, Context Menu
  - Dialog, Dropdown Menu, Hover Card
  - Navigation Menu, Popover, Progress
  - Radio Group, Scroll Area, Select
  - Separator, Slider, Switch, Tabs
  - Toast, Toggle, Tooltip
- **Lucide React** - Beautiful & consistent icon library
- **Embla Carousel** - Lightweight carousel library
- **Vaul** - Drawer component for React
- **Sonner** - Toast notification library

### Form Handling
- **React Hook Form 7.60.0** - Performant forms with easy validation
- **Zod 3.25.76** - TypeScript-first schema validation
- **@hookform/resolvers** - Validation resolvers for React Hook Form
- **Input OTP** - One-time password input component

### Data Visualization
- **Recharts 2.15.4** - Composable charting library

### Additional Features
- **Next Themes** - Theme management for Next.js
- **React Resizable Panels** - Resizable panel layouts
- **Date-fns** - Modern JavaScript date utility library
- **React Day Picker** - Flexible date picker component
- **CMDK** - Command menu component
- **Vercel Analytics** - Analytics for Vercel deployments

## 📁 Project Structure

```
AutoBotWA Assignment/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx            # Root layout component
│   └── page.tsx              # Home page with section routing
├── components/
│   ├── ui/                   # Reusable UI components (Radix-based)
│   ├── header.tsx            # Navigation header with smooth scroll
│   ├── hero.tsx              # Hero section
│   ├── features.tsx          # Features section
│   ├── testimonials.tsx      # Testimonials section
│   ├── pricing.tsx           # Pricing plans section
│   ├── footer.tsx            # Footer component
│   └── theme-provider.tsx    # Theme context provider
├── hooks/
│   ├── use-mobile.ts         # Mobile detection hook
│   └── use-toast.ts          # Toast notifications hook
├── lib/
│   └── utils.ts              # Utility functions
├── public/                   # Static assets
├── styles/
│   └── globals.css           # Additional global styles
├── components.json           # Shadcn UI configuration
├── next.config.mjs           # Next.js configuration
├── postcss.config.mjs        # PostCSS configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Project dependencies
```

## 🎯 Key Implementations

### 1. Smooth Scrolling with Hash Routing
- Clicking navigation links smoothly scrolls to the target section
- URL updates with hash (#features, #pricing, #testimonials)
- Implemented using `scrollIntoView()` with smooth behavior
- Hash routing updates browser history using `window.history.pushState()`

### 2. Section IDs
All major sections have unique IDs for navigation:
- `#features` - Features section
- `#pricing` - Pricing plans section
- `#testimonials` - Customer testimonials section

### 3. Responsive Navigation
- Desktop: Horizontal navigation bar with hover effects
- Mobile: Collapsible hamburger menu
- Cursor pointer effects on all clickable elements
- Auto-close mobile menu after navigation

### 4. Modern Design Patterns
- Gradient backgrounds and text effects
- Glassmorphism effects (backdrop blur)
- Hover animations and transitions
- Card-based layouts with shadow effects
- Floating elements for visual interest

## 🛠️ Installation & Setup

**Clone the repository**
```bash
git clone https://github.com/VasaraSujal/AutoBotWA-Assignment.git
cd "AutoBotWA Assignment"
```

**Install dependencies**
```bash
npm install
# or
pnpm install
# or
yarn install
```

**Run the development server**
```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

**Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization

### Colors
The project uses a blue-based color scheme. To customize:
- Edit Tailwind configuration in `tailwind.config.ts`
- Modify color classes in component files

### Content
Update content in the respective component files:
- `components/hero.tsx` - Hero section content
- `components/features.tsx` - Feature descriptions
- `components/pricing.tsx` - Pricing plans and features
- `components/testimonials.tsx` - Customer testimonials

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Technical Highlights

1. **Client-Side Rendering**: Components use `"use client"` directive for interactive features
2. **TypeScript**: Full type safety across the application
3. **Modern CSS**: Tailwind CSS v4 with modern utility classes
4. **Accessibility**: Radix UI components ensure ARIA compliance
5. **Performance**: Optimized with Next.js 16 features

## 📄 License

This project is private and not licensed for public use.

## 👨‍💻 Author

**Sujal Vasara**
- GitHub: [@VasaraSujal](https://github.com/VasaraSujal)

---

Made with ❤️ for productivity and task management
