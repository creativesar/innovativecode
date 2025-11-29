# Project Name: InnovativeCode – Digital Marketing & Web Development Website

## 1. Executive Summary
InnovativeCode is a premium digital agency specializing in high-end web development and data-driven digital marketing. The goal of this project is to build a state-of-the-art, fully responsive website that serves as the primary sales channel. The site will feature advanced animations, a modern design system, and an integrated Agentic AI assistant to engage visitors and capture leads.

## 2. Tech Stack Specification
- **Framework**: Next.js 16+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (v4)
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Animations**:
  - **Framer Motion**: For component-level micro-interactions, page transitions, and layout animations.
  - **GSAP (GreenSock)**: For complex scroll-triggered animations, parallax effects, and hero section reveals.
- **AI Integration**: Custom Agentic AI widget connected to a backend API (mocked initially, extensible to LLM providers).
- **Deployment**: Vercel (Edge Network).

## 3. Core Requirements
- **Responsive Design**: Flawless rendering on mobile, tablet, and desktop.
- **Performance**: Lighthouse score of 90+ for Performance, Accessibility, Best Practices, and SEO.
- **SEO**: Dynamic metadata, sitemap.xml, and semantic HTML structure.
- **Interactivity**: Smooth scrolling, hover effects, and meaningful motion to guide user attention.
- **Lead Generation**: Accessible contact forms and AI chat widget on every page.

## 4. Functional Specifications

### 4.1 Navigation & Layout
- **Navbar**: Sticky, glassmorphism effect. Contains links to Home, About, Services, Portfolio, Blog, Contact. Mobile menu with smooth transition.
- **Footer**: Grid layout with company info, quick links, social media icons, and newsletter signup form.
- **Layout Wrapper**: Handles smooth page transitions using Framer Motion `AnimatePresence`.

### 4.2 Home Page
- **Hero Section**: Full-screen immersive experience. GSAP animation for headline reveal and background elements. Primary CTA ("Get a Quote") and Secondary CTA ("View Work").
- **About Us Preview**: Brief introduction to the agency ("Who We Are").
- **What We Do**: High-level summary of core competencies.
- **Stats Counter**: Animated counters for:
  - Clients Served
  - Projects Completed
  - Client Ratings/Satisfaction
- **Services Overview**: 3-column grid highlighting key services (Marketing, Dev, Branding) with hover lift effects.
- **Portfolio Preview**: Horizontal scroll or carousel of top 3 recent projects.
- **Testimonials**: Auto-playing slider with client feedback.
- **Consulting/Pricing Estimator**: Interactive section where clients can select options to get a rough budget estimate.
- **Contact Us**: Embedded contact form or prominent link to contact page.
- **Final CTA**: High-contrast section encouraging contact.

### 4.3 About Page
- **Brand Story**: Narrative text with floating imagery.
- **Mission & Vision**: Icon-based value propositions.
- **Team Section**: Grid of team member cards with social links (optional/placeholder).

### 4.4 Services Page
- **Detailed Service Breakdown**:
  - **Digital Marketing**: SEO, PPC, Social Media Management.
  - **Web Development**: Custom Sites, E-commerce, Web Apps.
  - **Branding**: Logo Design, Identity Systems.
- **Interactive Elements**: Accordions for FAQs or detailed process steps.

### 4.5 Portfolio Page
- **Projects Grid**: Masonry or standard grid layout.
- **Filtering**: Filter by category (Web, Marketing, App).
- **Project Detail (Dynamic Route)**:
  - Hero image/video.
  - Challenge, Solution, Result text sections.
  - Gallery of screenshots.
  - "Next Project" navigation.

### 4.6 Blog Page
- **Blog Listing**: Grid of article cards with thumbnail, title, excerpt, date, and reading time.
- **Article View (Dynamic Route)**: Markdown rendering for content. Related articles sidebar or bottom section.

### 4.7 Contact Page
- **Contact Form**: Fields for Name, Email, Subject, Message. Client-side validation (Zod).
- **Contact Info**: Address, Phone, Email with click-to-copy or mailto links.
- **Map**: Embedded Google Map (optional).

### 4.8 Agentic AI Assistant
- **Floating Widget**: Fixed position (bottom-right). Expands on click.
- **Chat Interface**: Message history, typing indicators, user input field.
- **Capabilities**:
  - Greet users based on time of day.
  - Answer FAQs about services and pricing.
  - Collect lead information (Name, Email, Project Need) conversationally.
  - Submit leads to backend API.

## 5. Data & Content Management
- **Content**: Hardcoded initially for static pages; Markdown/MDX for Blog and Portfolio.
- **Leads**: Submitted via API route. Initially stored in-memory or logged; extensible to database (PostgreSQL/Supabase).

## 6. Design System
- **Typography**: Modern sans-serif (e.g., Inter, Geist) for readability and tech feel.
- **Color Palette**: Deep blues/blacks for background (Dark Mode default), vibrant accents (Purple/Blue gradients) for CTAs and highlights.
- **Spacing**: Consistent 4px grid system (Tailwind defaults).

## 7. Success Criteria
- All pages implemented and responsive.
- AI widget functional and captures leads.
- Animations run smoothly (60fps) without layout shift.
- Build succeeds without linting errors.