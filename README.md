# InnovativeCode Website

This repository contains the codebase for the InnovativeCode official website, built with Next.js, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, GSAP, and featuring an Agentic AI assistant. The site is designed to showcase digital marketing and web development services, display portfolio projects, and generate leads.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Development Server](#running-the-development-server)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Deployment on Vercel](#deployment-on-vercel)
- [AI Assistant Configuration](#ai-assistant-configuration)
- [Lead Management](#lead-management)
- [SEO and Analytics](#seo-and-analytics)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Fully Responsive Design:** Optimized for all devices (mobile, tablet, desktop).
- **Modern UI/UX:** Clean, intuitive interface with consistent design components from `shadcn/ui`.
- **Smooth Animations:**
  - **Framer Motion:** For UI micro-animations and seamless page transitions.
  - **GSAP + ScrollTrigger:** For advanced scroll-based animations, parallax effects, and hero section reveals.
- **Agentic AI Assistant:**
  - Floating chat widget visible on every page.
  - Capable of greeting users, understanding intent, recommending services, providing simple project quotes, and capturing leads.
  - Integrates with a backend API route for AI responses and lead submission.
- **Service Showcase:** Dedicated pages for Digital Marketing and Web Development services.
- **Dynamic Portfolio:** Grid of projects with filtering capabilities and detailed case study pages.
- **SEO-Friendly Blog:** List of articles with markdown support (basic HTML rendering) and metadata for optimal search engine visibility.
- **Contact & Lead Generation:** A dedicated contact page with an inquiry form.
- **Performance Optimized:** Next.js Image Optimization, lazy-loading, and Lighthouse score focus.
- **Comprehensive SEO:** Metadata API integration for each page, dynamic sitemap generation, and `robots.txt` configuration (via `next.config.ts`).

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **UI Animations:** Framer Motion
- **Advanced Animations:** GSAP (GreenSock Animation Platform) + ScrollTrigger
- **Deployment:** Vercel

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- Node.js (v18.x or later)
- npm or Yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/innovativecode-website.git
    cd innovativecode-website
    ```
    *(Replace `your-username/innovativecode-website.git` with the actual repository URL)*

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

To run the project in development mode:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The application will hot-reload as you make changes.

## Environment Variables

Create a `.env.local` file in the root of your project to store environment-specific variables.

```
# Example environment variables (replace with your actual values)

# If integrating with a real AI service (e.g., OpenAI, Gemini, Claude)
# NEXT_PUBLIC_LLM_API_KEY=your_llm_api_key

# If integrating with a database for leads (e.g., Supabase, PostgreSQL)
# DATABASE_URL="postgresql://user:password@host:port/database"
# NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
# SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

**Important:** Never commit your `.env.local` file to version control.

## Project Structure

```
.
├── public/                # Static assets (images, favicons)
├── app/                   # Next.js App Router routes and API routes
│   ├── api/               # API routes
│   │   ├── chat/route.ts  # AI assistant endpoint
│   │   ├── contact/route.ts # Contact form submission endpoint
│   │   └── leads/route.ts # Lead capture endpoint
│   ├── (pages)/           # Grouped pages for routing
│   │   ├── about/page.tsx
│   │   ├── blog/
│   │   │   ├── [slug]/page.tsx
│   │   │   └── page.tsx
│   │   ├── contact/page.tsx
│   │   ├── portfolio/
│   │   │   ├── [slug]/page.tsx
│   │   │   └── page.tsx
│   │   └── services/
│   │       ├── [slug]/page.tsx
│   │       └── page.tsx
│   ├── favicon.ico
│   ├── globals.css        # Global Tailwind CSS styles
│   ├── layout.tsx         # Root layout for the application
│   ├── page.tsx           # Home page
│   └── sitemap.ts         # Dynamic sitemap generation
├── components/            # Reusable React components
│   ├── ui/                # shadcn/ui components (button, card, input, label, textarea)
│   ├── ChatWidget.tsx     # Agentic AI chat interface
│   ├── ContactForm.tsx    # Form for contact page
│   ├── Footer.tsx         # Global footer
│   ├── Hero.tsx           # Home page hero section
│   ├── Navbar.tsx         # Global navigation bar
│   ├── ProjectCard.tsx    # Card component for portfolio items
│   └── ServiceCard.tsx    # Card component for service listings
├── lib/                   # Utility functions and data
│   ├── data.ts            # Sample data for services, projects, blog posts
│   └── markdown.ts        # Basic markdown to HTML conversion utility
│   └── utils.ts           # General utilities (cn function)
├── next.config.ts         # Next.js configuration
├── package.json           # Project dependencies and scripts
├── postcss.config.js      # PostCSS configuration for Tailwind CSS
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── .eslintrc.mjs          # ESLint configuration
└── components.json        # shadcn/ui configuration
```

## Deployment on Vercel

This project is configured for easy deployment on Vercel.

1.  **Create a Vercel Account:** If you don't have one, sign up at [vercel.com](https://vercel.com/).
2.  **Connect Git Repository:** Import your Git repository (GitHub, GitLab, Bitbucket) into Vercel.
3.  **Configure Project:** Vercel will automatically detect Next.js. You may need to add your environment variables in the Vercel project settings under "Environment Variables".
4.  **Deploy:** Vercel will build and deploy your project automatically on every push to your main branch.

## AI Assistant Configuration

The Agentic AI assistant (`components/ChatWidget.tsx` and `app/api/chat/route.ts`) is designed to be highly customizable.

-   **Frontend (`components/ChatWidget.tsx`):** Handles UI, message display, and user interaction. It sends user messages to `/api/chat`.
-   **Backend (`app/api/chat/route.ts`):** This is where you would integrate your actual Large Language Model (LLM) provider.
    -   Currently, it includes a **mocked AI response** for demonstration.
    -   To integrate a real LLM (e.g., OpenAI, Google Gemini, Anthropic Claude), replace the mocked logic with API calls to your chosen provider. Remember to manage your API keys securely using environment variables (`NEXT_PUBLIC_LLM_API_KEY`).
    -   The `AI_PROMPT_TEMPLATE` within `app/api/chat/route.ts` defines the assistant's persona and capabilities. Customize this prompt to refine its behavior.

## Lead Management

The `app/api/leads/route.ts` handles lead capture from the AI assistant and the contact form.

-   **In-Memory Storage:** For demonstration purposes, leads are currently stored in a simple in-memory array. **This is not suitable for production.**
-   **Database Integration:** The file includes commented-out examples showing how to integrate with a real database like PostgreSQL (using Prisma) or Supabase.
    -   Uncomment and configure the relevant code to save leads persistently.
    -   Ensure your `DATABASE_URL` or Supabase environment variables are set correctly in `.env.local` and on your deployment platform (e.g., Vercel).

## SEO and Analytics

-   **Metadata:** Each page (`app/layout.tsx`, `app/*\/page.tsx`, `app/*\/[slug]/page.tsx`) includes a `metadata` export for comprehensive SEO, including title, description, keywords, Open Graph, and Twitter card data.
-   **Sitemap:** The `app/sitemap.ts` file dynamically generates your `sitemap.xml`, ensuring all public routes, services, projects, and blog posts are indexed by search engines. It updates `lastModified` on each build.
-   **Robots.txt:** Configured via `next.config.ts` (though not explicitly generated as a file, Next.js handles this).
-   **Analytics:** For production, you would integrate analytics tools (e.g., Google Analytics, Plausible) by adding their tracking scripts to `app/layout.tsx`.

## Contributing

Feel free to fork the repository, make improvements, and submit pull requests.

## License

[MIT License](LICENSE) <!-- You'll need to create a LICENSE file -->
