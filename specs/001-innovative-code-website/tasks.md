# Development Tasks: InnovativeCode Website

**Feature Branch**: `001-innovative-code-website` | **Date**: 2025-11-28 | **Spec**: C:/Users/Coders/Desktop/innovativecode/specs/001-innovative-code-website/spec.md
**Plan**: C:/Users/Coders/Desktop/innovativecode/specs/001-innovative-code-website/plan.md

**Note**: This task list is generated based on a high-level description provided to `/sp.tasks`. For a more granular and accurate task breakdown tied to user stories and technical design, please ensure `spec.md` and `plan.md` are fully updated with the detailed content previously provided.

## Phase 1: Project Setup and Core Technologies

- [x] T001 Initialize Next.js project with TypeScript in `apps/innovativecode-website`
- [x] T002 Install Tailwind CSS and configure `tailwind.config.ts` in `apps/innovativecode-website`
- [x] T003 Configure shadcn/ui components and add necessary `components.json` settings in `apps/innovativecode-website`
- [x] T004 Set up global CSS styles in `apps/innovativecode-website/src/app/globals.css`
- [x] T005 Install and configure Framer Motion for UI/component animations in `apps/innovativecode-website/package.json`
- [x] T006 Install GSAP and set up basic animation context (e.g., `gsap.context()`) in `apps/innovativecode-website/src/lib/animations.ts`

## Phase 2: Global Layout and Pages

- [x] T007 [P] Create global layout component in `apps/innovativecode-website/src/app/layout.tsx`
- [x] T008 [P] Implement Navbar component in `apps/innovativecode-website/src/components/navbar.tsx`
- [x] T009 [P] Implement Footer component in `apps/innovativecode-website/src/components/footer.tsx`
- [x] T010 Create Home page in `apps/innovativecode-website/src/app/(marketing)/page.tsx`
- [x] T011 Create About page in `apps/innovativecode-website/src/app/(marketing)/about/page.tsx`
- [x] T012 Create Services page in `apps/innovativecode-website/src/app/(marketing)/services/page.tsx`
- [x] T013 Create Portfolio (Projects) listing page in `apps/innovativecode-website/src/app/projects/page.tsx`
- [x] T014 Implement dynamic route for individual Portfolio projects in `apps/innovativecode-website/src/app/projects/[slug]/page.tsx`
- [x] T015 Create Blog listing page in `apps/innovativecode-website/src/app/blog/page.tsx`
- [x] T016 Implement dynamic route for individual Blog posts in `apps/innovativecode-website/src/app/blog/[slug]/page.tsx`
- [x] T017 Create Contact page with initial form structure in `apps/innovativecode-website/src/app/contact/page.tsx`

## Phase 3: Reusable Components and Content

- [x] T018 [P] Create general purpose Button component using shadcn/ui in `apps/innovativecode-website/src/components/ui/button.tsx`
- [x] T019 [P] Create Card component for portfolio/blog previews in `apps/innovativecode-website/src/components/card.tsx`
- [x] T020 [P] Implement Hero section component with animation placeholders in `apps/innovativecode-website/src/components/hero-section.tsx`
- [x] T020a [P] Implement Stats Counter component in `apps/innovativecode-website/src/components/stats-counter.tsx`
- [x] T020b [P] Implement Pricing/Budget Estimator component in `apps/innovativecode-website/src/components/pricing-estimator.tsx`
- [x] T021 [P] Develop Service section components to display services in `apps/innovativecode-website/src/components/service-section.tsx`
- [x] T022 Populate Home page with new sections (About, What We Do, Stats, Pricing, Contact).
- [x] T022a Populate About, Services, Portfolio, Blog, and Contact pages with initial content.

## Phase 4: AI Assistant and Forms Integration

- [x] T023 Implement Agentic AI assistant UI widget component in `apps/innovativecode-website/src/components/ai-assistant.tsx`
- [x] T024 Develop backend API routes for AI assistant interaction (e.g., `apps/innovativecode-website/src/app/api/ai/route.ts`)
- [x] T025 Integrate AI assistant backend with external AI service (e.g., Claude API)
- [x] T026 Create lead capture forms (e.g., Contact form, AI assistant lead form) with validation in `apps/innovativecode-website/src/components/forms/contact-form.tsx`
- [x] T027 Implement backend API routes for form submissions (e.g., `apps/innovativecode-website/src/app/api/submit-lead/route.ts`)
- [x] T028 Integrate form submissions with email service or CRM (e.g., Nodemailer, database storage)

## Phase 5: SEO, Performance, and Testing

- [x] T029 Apply SEO metadata to all pages (titles, descriptions) in `apps/innovativecode-website/src/app/**/layout.tsx`
- [x] T030 Generate `sitemap.xml` and `robots.txt` in `apps/innovativecode-website/public/`
- [x] T031 Integrate analytics (e.g., Google Analytics) tracking scripts
- [x] T032 Implement Framer Motion animations for components and page transitions (e.g., `apps/innovativecode-website/src/components/animated-div.tsx`)
- [x] T033 Implement GSAP scroll-based and hero animations (e.g., `apps/innovativecode-website/src/components/scroll-reveal.tsx`)
- [ ] T034 Conduct comprehensive testing for animations, responsiveness across devices, and loading speed.
- [ ] T035 Perform Lighthouse audits and optimize identified performance bottlenecks.

## Phase 6: Deployment

- [ ] T036 Configure Vercel deployment for the `apps/innovativecode-website` project.
- [ ] T037 Deploy website to Vercel.

## Dependencies

This task list assumes a largely sequential flow, with parallel opportunities within phases. A more granular dependency graph would be possible with a fully detailed `spec.md` and `plan.md`.

## Parallel Execution Examples (within phases)

**Phase 2:**
- `T007` (Global Layout), `T008` (Navbar), `T009` (Footer) can be worked on in parallel.

**Phase 3:**
- `T018` (Button), `T019` (Card), `T020` (Hero), `T021` (Service Sections) can be developed in parallel.

**Phase 4:**
- `T023` (AI Assistant UI) and `T026` (Lead Capture Forms) can begin in parallel with their respective backend integrations (`T024`, `T027`).

## Implementation Strategy

Implement in phases, focusing on delivering core functionality (Phase 2 & 3) before integrating advanced features like the AI assistant and complex animations (Phase 4 & 5). Performance and SEO will be addressed throughout development and critically reviewed in Phase 5. Continuous integration and testing are assumed. Manual updates for `spec.md` and `plan.md` are critical for future, more refined task generation.

