# Headless Conversion Plan for StoreTransform.com

## Overview
We will convert `https://storetransform.com/` into a headless architecture using **Next.js** (Frontend) and **WordPress + ACF** (Backend), following the workflow outlined in `figma-acf-nextjs-guide 1 1.md`.

## Architecture

### Frontend (Next.js)
- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS (for rapid development and matching the modern look)
- **Data Fetching**: REST API (or GraphQL if WPGraphQL is installed)
- **Component Strategy**: Atomic Design (Atoms -> Molecules -> Organisms/Sections)

### Backend (WordPress)
- **Data Source**: Existing WordPress instance (or a new one).
- **Content Modeling**: ACF Flexible Content for page building.
- **API**: WP REST API (core) + ACF to REST API plugin.

## Phase 1: Component Breakdown (Based on Site Analysis)
We will map the existing site sections to React components:

1.  **Layout**
    *   `Header`: Navigation, Logo, CTA ("Get a Quote"?)
    *   `Footer`: Links, Socials, Copyright, Newsletter

2.  **Page Sections (ACF Flexible Content Layouts)**
    *   `HeroSection`: Title, Subtitle, CTA, Background Image/Video.
    *   `ServicesGrid`: Grid of service cards (Web Dev, SEO, etc.).
    *   `AboutSection`: Text + Image (Left/Right layout).
    *   `Testimonials`: Carousel/Grid of client feedback.
    *   `LogoCloud`: "Trusted By" client logos.
    *   `ContactForm`: Form integration (using Contact Form 7 API or similar).
    *   `CallToAction`: Full-width banner for conversion.

## Phase 2: Implementation Steps

1.  **Initialize Next.js Project**
    *   Setup `create-next-app` with Tailwind CSS.
    *   Configure font (Inter or similar sans-serif).

2.  **Develop Components (Mock Data First)**
    *   Create static versions of the components to match the design.
    *   Use `props` for all dynamic content.

3.  **WordPress Integration**
    *   Define ACF Field Groups in WordPress (User action required).
    *   Fetch data in Next.js using `fetch()`.
    *   Map ACF layouts to React components using a `SectionRenderer` (or `AcfSections.jsx`).

## Progress Update
- [x] Initialized Next.js project
- [x] Imported WordPress CSS files
- [x] Created all core components matching original HTML structure:
  - Header (with mobile menu toggle)
  - HeroSection
  - IntroSection
  - ServicesGrid & ServicesDetailed
  - HireDevelopers
  - WhyChooseUs
  - StatsSection
  - AiSection
  - Testimonials
  - BlogSection
  - Footer
- [x] Assembled components in `page.tsx` and `layout.tsx`

## Immediate Next Steps
1.  **ACF Integration**: Setup the logic to fetch content from WordPress via REST API.
2.  **Swiper Integration**: The Hero and Testimonials sections use Swiper classes. We need to install `swiper` React package and initialize these sliders to make them functional.
3.  **Dynamic Data**: Replace static content in components with props fed by the API data.
