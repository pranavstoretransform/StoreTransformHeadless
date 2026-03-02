# Reusable Prompts: Figma → ACF → Next.js Workflow

A collection of AI prompts optimized for each phase of the workflow. Copy, customize, and use these prompts with Claude, ChatGPT, or any AI tool.

---

## PHASE 1: DESIGN TRANSLATION PROMPTS

### Prompt 1.1: Initial Design Analysis & Structure Generation

**Use this when:**
- You have a Figma design file and want AI to analyze it
- You need a breakdown of all page sections and components

**Prompt:**

```
I have a design file (Figma/XD/Figma) with the following page structure:

[PASTE YOUR DESIGN DESCRIPTION OR SECTION NAMES HERE]

Example sections/components in the design:
1. Hero section - Full-width header with background image, title, subtitle, and CTA button
2. Feature blocks - 3-column grid showing feature icons, titles, and descriptions
3. Testimonials - Carousel showing customer quotes with author details
4. Contact form - Form with multiple input fields and submit button
5. FAQ section - Accordion-style expandable questions and answers

Please provide:
1. A detailed structural breakdown of each section
2. Key HTML elements needed for each component
3. Recommended CSS approach (Tailwind/custom CSS)
4. Any JavaScript interactivity required (carousels, accordions, form validation)
5. Responsive design considerations for each section

Format the response as a structured outline that can guide HTML/CSS/JS generation.
```

---

### Prompt 1.2: Generate Production HTML/CSS/JavaScript

**Use this when:**
- You have your design analysis complete
- You want AI to generate the actual HTML/CSS/JS code

**Prompt:**

```
Generate production-ready HTML with embedded CSS and JavaScript for a website with the following sections:

SECTION SPECIFICATIONS:
1. Hero Section
   - Background image (full-width)
   - Large headline (h1)
   - Subtitle paragraph
   - Two CTA buttons (primary and secondary)
   - Text overlay with semi-transparent dark background

2. Features Section
   - Section heading
   - 3-column grid layout
   - Each feature card includes:
     - Icon/illustration
     - Title
     - Description text
   - Responsive: 1 column on mobile, 2 on tablet, 3 on desktop

3. Testimonials Section
   - Section heading
   - Carousel of testimonial cards
   - Each card shows: quote, author name, author title, author photo
   - Previous/Next navigation buttons
   - Auto-rotate every 5 seconds

4. Contact Form
   - Form title
   - Input fields: Name (text), Email (email), Message (textarea)
   - Submit button with loading state
   - Success/error messages

REQUIREMENTS:
- Use semantic HTML5
- Style with Tailwind CSS (use @tailwind directives)
- JavaScript: vanilla JS only, minimal and functional
- Ensure mobile responsiveness (mobile-first approach)
- Include accessibility attributes (alt text, aria-labels)
- Add smooth transitions and hover states
- Make the code clean, commented, and easy to integrate with backends
- Each section should be a self-contained div with a unique ID
- Use data attributes for JavaScript targeting (data-section, data-component)

DELIVERABLE:
A single HTML file with:
- Complete semantic markup
- Embedded Tailwind CSS
- Vanilla JavaScript in <script> tags
- Comments explaining sections and functionality

Start with <!DOCTYPE html> and provide the complete working file.
```

---

### Prompt 1.3: Refine HTML for Backend Integration

**Use this when:**
- You have working HTML but need to adapt it for WordPress/database
- You want to replace static content with dynamic placeholders

**Prompt:**

```
I have an HTML file with static content that I need to adapt for WordPress integration.

Here's my current HTML structure:
https://storetransform.com/

Please refactor this code to:
1. Replace all hardcoded text with dynamic placeholders using this pattern: {{PLACEHOLDER_NAME}}
   
   Examples:
   - Static: <h1>Welcome to Our Site</h1>
   - Dynamic: <h1>{{page_title}}</h1>
   
   - Static: <img src="hero.jpg" alt="Hero">
   - Dynamic: <img src="{{hero_background_url}}" alt="{{hero_alt_text}}">

2. Identify all content areas that would be managed via ACF (Advanced Custom Fields):
   - List them as a structured ACF field plan
   - Group related fields together

3. Add semantic data attributes for easier component mapping:
   - data-section="[section_name]"
   - data-component="[component_name]"
   - data-field="[acf_field_name]"

4. Ensure the structure is clean for Next.js component conversion

Please return:
1. Refactored HTML with all placeholders
2. A mapping document showing which placeholder corresponds to which ACF field
3. Notes on any fields that should be repeaters vs simple fields
```

---

## PHASE 2: WORDPRESS & ACF SETUP PROMPTS

### Prompt 2.1: Design ACF Field Structure

**Use this when:**
- You have your HTML placeholders ready
- You need to design the complete ACF field structure

**Prompt:**

```
I'm setting up Advanced Custom Fields (ACF) for a WordPress site. Here's my page structure:

[PASTE YOUR SECTION NAMES AND PLACEHOLDERS HERE]

Based on the following content requirements:

Section 1: Hero
- Dynamic: page_title (text), subtitle (text), hero_background_url (image), hero_alt_text (text)
- CTA: button_text (text), button_url (url)

Section 2: Features
- Dynamic: section_title (text), features (repeating group)
  - Each feature: icon_url, title, description

Section 3: Testimonials
- Dynamic: section_title, testimonials (repeating), autoplay (true/false)

Section 4: Contact Form
- Dynamic: form_title, form_fields (repeating)

Please design a complete ACF Flexible Content field structure with:

1. Field group name and location rules
2. For each layout:
   - Exact field names (use snake_case)
   - Field types (Text, TextArea, WYSIWYG, Image, Repeater, Group, etc.)
   - Required vs Optional designation
   - Help text for content editors
   - Default values where applicable
   - Field validation rules

3. For repeater fields, specify:
   - Max number of items (if limited)
   - Field structure within repeater

4. Export-ready JSON structure (optional):
   - Show how this would appear in ACF JSON export format

Format as a detailed specification that I can use to create ACF fields manually or as a guide for ACF JSON creation.
```

---

### Prompt 2.2: Generate ACF JSON Export File

**Use this when:**
- You want AI to create the complete ACF JSON for you
- You're setting up ACF fields for the first time

**Prompt:**

```
Generate a complete ACF Flexible Content field group as a JSON export file.

FIELD GROUP DETAILS:
- Field Group Name: Page Content
- Field Group Key: group_page_content
- Location Rule: Post Type equals Page

LAYOUTS:

1. Hero Section (Layout Key: layout_hero)
   Fields:
   - title: Text (required)
   - subtitle: Text Area
   - background_image: Image
   - button_text: Text
   - button_link: URL
   - button_target: Select (New Tab / Same Tab)
   - text_color: Select (Light / Dark)

2. Feature Blocks (Layout Key: layout_features)
   Fields:
   - section_title: Text
   - features: Repeater
     - feature_image: Image
     - feature_title: Text (required)
     - feature_description: Text Area
     - feature_icon: Image
   - columns: Select (2 / 3 / 4)
   - background_color: Select (White / Light Gray / Dark)

3. Testimonials (Layout Key: layout_testimonials)
   Fields:
   - section_title: Text
   - testimonials: Repeater
     - quote: Text Area (required)
     - author_name: Text
     - author_title: Text
     - author_image: Image
     - rating: Number (1-5)
   - autoplay: True/False (default: true)
   - autoplay_speed: Number (milliseconds)

4. Contact Form (Layout Key: layout_contact)
   Fields:
   - form_title: Text
   - form_description: Text Area
   - form_fields: Repeater
     - label: Text (required)
     - name: Text (required, machine readable)
     - type: Select (text/email/tel/textarea/select/checkbox)
     - required: True/False
     - placeholder: Text
     - options: Text (for select fields, comma-separated)
   - submit_button_text: Text
   - success_message: Text Area

REQUIREMENTS:
- Output valid JSON following ACF's export format
- Include all necessary ACF configuration settings
- Use proper field keys and group keys
- Make it ready to import directly into WordPress

Output the complete JSON file that can be imported via ACF → Tools → Import
```

---

### Prompt 2.3: Create WordPress PHP Template

**Use this when:**
- You want to render flexible content sections in WordPress before migrating to Next.js
- You need PHP templates for each section

**Prompt:**

```
Generate PHP template files for rendering ACF Flexible Content sections in WordPress.

I have an ACF Flexible Content field called 'sections' with these layouts:
1. hero_section
2. feature_blocks
3. testimonials
4. contact_form

Please provide:

1. Main template file (template-flexible-content.php)
   - Loops through flexible content sections
   - Calls the appropriate template part for each section
   - Handles fallback if no template exists

2. Template parts for each section:
   - template-parts/sections/hero-section.php
   - template-parts/sections/feature-blocks.php
   - template-parts/sections/testimonials.php
   - template-parts/sections/contact-form.php

Each template should:
- Retrieve ACF field data using get_sub_field()
- Output semantic HTML matching the HTML structure
- Be properly escaped for security
- Include fallback content if fields are empty
- Have clear comments

Include best practices for:
- WordPress data sanitization
- ACF field retrieval
- Image handling with wp_get_attachment_image()
```

---

## PHASE 3: NEXT.JS INTEGRATION PROMPTS

### Prompt 3.1: Generate Next.js API Helper & Types

**Use this when:**
- You're starting the Next.js project
- You need to fetch WordPress REST API data

**Prompt:**

```
Generate a production-ready Next.js API helper and TypeScript type definitions for fetching WordPress data with ACF fields.

REQUIREMENTS:

1. Create lib/wordpress.ts with functions to:
   - Fetch a single page by slug
   - Fetch all pages (for static generation)
   - Fetch page with ACF section data
   - Fetch posts by category
   - Handle errors gracefully
   - Support caching/ISR

2. Create types/wordpress.ts with TypeScript interfaces for:
   - WordPress Page object
   - ACF Section data
   - Individual layout types:
     - HeroSectionData
     - FeatureBlocksData
     - TestimonialsData
     - ContactFormData
   - Repeater item types
   - Image object type

3. Environment configuration:
   - Show how to set NEXT_PUBLIC_WORDPRESS_URL
   - Add error handling for missing URL
   - Support both development and production URLs

4. REST API endpoints used:
   - /wp-json/wp/v2/pages
   - /wp-json/wp/v2/pages/{id}
   - Include _embed parameter for featured images
   - Show how ACF data is nested in response

5. Best practices to include:
   - Fetch error handling
   - TypeScript strict mode
   - Proper typing for API responses
   - Reusable fetch wrapper

Return complete, production-ready TypeScript code with proper exports and JSDoc comments.
```

---

### Prompt 3.2: Generate Section Components

**Use this when:**
- You're creating individual section components
- You have your TypeScript types ready

**Prompt:**

```
Generate production-ready Next.js/React components for rendering ACF Flexible Content sections.

COMPONENT REQUIREMENTS:

For each component (HeroSection, FeatureBlocks, Testimonials, ContactForm):

1. Component structure:
   - Accept typed props for section data (from TypeScript types)
   - Use Next.js Image component for all images
   - Include proper TypeScript interfaces

2. Styling:
   - Use Tailwind CSS utility classes
   - Responsive design with mobile-first approach
   - Match the HTML structure from Phase 1

3. Features:
   - Null checking for optional fields
   - Conditional rendering of sections
   - Accessibility attributes (alt text, aria-labels, semantic HTML)
   - Client-side interactivity where needed (carousels, accordions, forms)

4. Component examples:

HeroSection Component:
- Props: title, subtitle, background_image, button_text, button_link, text_color
- Render: Full-width hero with background image and CTA
- Features: Responsive image handling, text overlay contrast

FeatureBlocks Component:
- Props: section_title, features (array), columns (2/3/4)
- Render: Grid layout with feature cards
- Features: Dynamic column layout, image handling

Testimonials Component:
- Props: section_title, testimonials (array), autoplay, autoplay_speed
- Render: Carousel/slider of testimonials
- Features: Next/Previous buttons, auto-rotation, keyboard navigation

ContactForm Component:
- Props: form_title, form_fields (array), submit_button_text
- Render: Dynamic form based on form_fields
- Features: Form validation, submission handling, error messages

For each component:
- Export as default
- Add JSDoc comments
- Include TypeScript strict typing
- Show example usage

Return all components in separate code blocks or file structure.
```

---

### Prompt 3.3: Generate Master AcfSections Router Component

**Use this when:**
- You have all individual section components
- You need a master component to render flexible content

**Prompt:**

```
Generate the master AcfSections component for Next.js that routes ACF Flexible Content sections to their respective components.

REQUIREMENTS:

1. Component structure:
   - Accept array of ACF sections as prop
   - Map section.acf_fc_layout to the correct component
   - Handle unknown layout types gracefully

2. Component registry:
   - Define a map/dictionary of layout names to components
   - Make it easy to add new layouts
   - Include all section types: hero_section, feature_blocks, testimonials, contact_form

3. Error handling:
   - Log warning if layout component not found
   - Don't break page if a section fails
   - Optionally show debug info in development

4. TypeScript:
   - Strong typing for sections array
   - Props interface
   - Type-safe component rendering

5. Key features:
   - Unique key for each section
   - Clean rendering without wrapper divs
   - Support for section-level CSS classes or IDs
   - Optional section numbering or data attributes

The component should be simple, maintainable, and easy to extend with new section types.

Example usage:
<AcfSections sections={pageData.acf.sections} />
```

---

### Prompt 3.4: Generate Dynamic Page Route

**Use this when:**
- You're setting up Next.js dynamic routing
- You want to handle page generation from WordPress

**Prompt:**

```
Generate Next.js dynamic routing for pages fetched from WordPress REST API with ACF data.

REQUIREMENTS:

1. Create the route file [[...slug]].js or [...slug].js:
   - Handle all page slugs dynamically
   - Support nested routes (e.g., /about/team/members)
   - Handle home page (/)

2. getStaticProps function:
   - Fetch page by slug from WordPress
   - Fetch ACF section data
   - Return 404 if page doesn't exist
   - Implement ISR (revalidate: 3600)

3. getStaticPaths function:
   - Fetch all published pages
   - Generate paths for each page slug
   - Use fallback: 'blocking' for new pages

4. Page component:
   - Render page title/meta if needed
   - Pass sections to AcfSections component
   - Provide layout wrapper if needed

5. Error handling:
   - Handle missing pages (404)
   - Handle API errors gracefully
   - Show fallback UI

6. Performance:
   - Implement ISR with appropriate revalidate time
   - Use blocking fallback for new pages
   - Consider caching strategy

Include:
- TypeScript types
- Error boundary consideration
- Meta data handling for SEO
- Comments explaining each function

The route should work for:
- Home: http://localhost:3000/
- Single page: http://localhost:3000/about
- Nested: http://localhost:3000/about/team
- Not found: http://localhost:3000/non-existent (shows 404)
```

---

### Prompt 3.5: Setup Environment & Config

**Use this when:**
- You're configuring the Next.js project
- You need to set up environment variables and build configuration

**Prompt:**

```
Generate the complete configuration files for a Next.js + WordPress headless setup.

CREATE THESE FILES:

1. .env.local
   - NEXT_PUBLIC_WORDPRESS_URL
   - Any API keys needed
   - Comments explaining each variable

2. next.config.js
   - Image optimization settings
   - Rewrite rules if needed
   - Environment variable exposure
   - API route configuration

3. tsconfig.json (if using TypeScript)
   - Path aliases (@/components, @/lib, etc.)
   - Strict mode enabled
   - Proper module resolution

4. .gitignore
   - Exclude env files
   - Node modules
   - Build output
   - IDE settings

5. package.json scripts section
   - dev: development server
   - build: production build
   - start: production server
   - lint: code linting
   - type-check: TypeScript checking

6. README.md
   - Setup instructions
   - Environment variable documentation
   - How to add new sections
   - Troubleshooting guide

Include:
- Comments explaining configurations
- Best practices for headless WordPress
- Security considerations (env variable handling)
- Performance optimizations
```

---

### Prompt 3.6: Generate Complete Working Example

**Use this when:**
- You want a complete, working example
- You're setting up a new project from scratch

**Prompt:**

```
Generate a complete, working Next.js project example that demonstrates:

1. Full folder structure
2. WordPress API integration
3. TypeScript types
4. All section components
5. Dynamic routing
6. Static generation with ISR

DELIVERABLE:
A complete, production-ready example that shows:

- lib/wordpress.ts (API helper)
- lib/types.ts (TypeScript interfaces)
- components/AcfSections.jsx (Master router)
- components/sections/
  - HeroSection.jsx
  - FeatureBlocks.jsx
  - Testimonials.jsx
  - ContactForm.jsx
- pages/[[...slug]].js (Dynamic route)
- pages/_app.jsx (App wrapper)
- .env.local.example
- next.config.js
- package.json

The example should:
- Work out of the box with a WordPress site
- Use Next.js 13+ App Router or Pages Router (specify which)
- Be properly typed (TypeScript)
- Include comments explaining the flow
- Show best practices
- Be ready for deployment to Vercel

Include setup instructions and WordPress site requirements.
```

---

## ADDITIONAL UTILITY PROMPTS

### Prompt: Migrate Component to Next.js

**Use this when:**
- You have a working React component
- You want to optimize it for Next.js + WordPress

**Prompt:**

```
I have a React component and want to migrate it to Next.js with WordPress integration.

CURRENT COMPONENT:
[PASTE YOUR COMPONENT CODE]

Please refactor for Next.js by:
1. Adding TypeScript types
2. Using Next.js Image component for images
3. Making it accept ACF-structured data
4. Adding Tailwind CSS classes
5. Improving accessibility
6. Adding error boundaries/null checks
7. Optimizing for static generation

Ensure it:
- Works with the AcfSections router
- Accepts properly typed props
- Handles missing data gracefully
- Follows Next.js best practices
```

---

### Prompt: Debug API Integration Issue

**Use this when:**
- Your Next.js page isn't fetching WordPress data correctly
- You need help troubleshooting REST API calls

**Prompt:**

```
I'm having trouble fetching WordPress data in my Next.js app.

ISSUE DESCRIPTION:
[Describe your problem]

MY CODE:
[Paste the relevant code]

WORDPRESS SETUP:
- WordPress URL: [Your URL]
- ACF Plugin: [Installed? Pro or Free?]
- REST API: [Enabled? How do you know?]

WHAT I'VE TRIED:
[List what you've already attempted]

Please help me:
1. Diagnose the root cause
2. Provide the fix
3. Explain how to verify it works
4. Suggest preventive measures
```

---

### Prompt: Add New Section Type

**Use this when:**
- You need to add a new flexible content section
- You want to follow the same pattern consistently

**Prompt:**

```
I need to add a new section type to my Figma → ACF → Next.js workflow.

NEW SECTION: [Section Name]
PURPOSE: [What it does]

HTML STRUCTURE:
[Paste the HTML for this section from Phase 1]

Please provide:
1. ACF field structure (for manual creation)
2. ACF JSON (for this layout alone)
3. Next.js/React component
4. TypeScript interface
5. Integration steps

Make it follow the same pattern as my existing sections:
- Use same styling approach (Tailwind)
- Use same TypeScript conventions
- Include same accessibility features
- Match the same code style
```

---

## Best Practices for Using These Prompts

1. **Customize Before Using**: Replace [PLACEHOLDERS] with your actual content
2. **Provide Context**: The more details you give, the better the AI output
3. **Build Iteratively**: Use prompts in order (1.1 → 1.2 → 1.3 → 2.1, etc.)
4. **Review Output**: Always review AI-generated code before using in production
5. **Ask for Revisions**: If output isn't what you need, clarify and ask again
6. **Keep Prompts on File**: Save successful prompts for future projects
7. **Extend Gradually**: Test with one section before scaling to many

---

## Common Customization Examples

### If using Vue instead of React:
Add to any component prompt: "Generate this as a Vue 3 Single File Component (.vue)"

### If using different styling (not Tailwind):
Add to prompts: "Use CSS Modules instead of Tailwind CSS" or "Use Styled Components"

### If using GraphQL instead of REST:
Add to API helper prompt: "Use Apollo Client and GraphQL queries instead of REST API"

### If using different WordPress plugin:
Add to ACF prompts: "Use Pods or CMB2 instead of ACF" (though instructions may differ)

