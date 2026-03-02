# Complete Guide: Figma → ACF Flexible Content → Next.js Headless WordPress

A comprehensive workflow for converting design files into reusable flexible content blocks that power a headless WordPress + Next.js application.

---

## Overview

This workflow bridges design and development in three main phases:

1. **Design Translation**: Convert Figma designs into HTML/CSS/JS structure
2. **WordPress Setup**: Create ACF Flexible Content fields and export/import as JSON
3. **Next.js Integration**: Build dynamic components and pages that consume REST API data

---

## Phase 1: Design Translation (Figma to HTML/CSS/JS)

### Step 1.1: Analyze the Design File

**What to do:**
- Open your Figma (or similar design tool) file
- Identify all unique layout patterns and sections
- Document each component's:
  - Layout structure (columns, grid, flex)
  - Typography (fonts, sizes, weights)
  - Colors and backgrounds
  - Spacing and padding
  - Interactive elements (buttons, forms, sliders)
  - Responsive breakpoints

**Deliverable:**
A design breakdown document listing all unique sections/components

**Example sections to identify:**
- Hero section with background image and CTA
- Feature blocks in a grid layout
- Testimonials carousel
- Contact form
- FAQ accordion
- Image + text combinations
- Call-to-action banners

### Step 1.2: Generate Initial HTML/CSS/JS Using AI

**What to do:**
1. Use an AI tool (Claude, ChatGPT, etc.) to generate a basic HTML/CSS/JavaScript structure
2. Provide the AI with:
   - Your design specifications from Step 1.1
   - Desired styling approach (Tailwind, custom CSS, etc.)
   - JavaScript framework preference (vanilla JS, Alpine.js, etc.)
3. Request semantic HTML5 markup that's clean and maintainable

**AI Prompt Template:**
```
Generate a production-ready HTML/CSS/JavaScript structure for the following sections:

[List your sections and their specifications]

Requirements:
- Use semantic HTML5
- Style with [Tailwind CSS / custom CSS]
- Keep JavaScript minimal and vanilla
- Ensure responsive design (mobile, tablet, desktop)
- Make the code suitable for backend integration
- Each section should be a reusable component
```

**Deliverable:**
Clean HTML file with embedded CSS and JavaScript

### Step 1.3: Refine and Test the HTML Structure

**What to do:**
1. Test the generated HTML in a browser
2. Adjust responsive breakpoints
3. Verify all interactive elements work as expected
4. Ensure accessibility (ARIA labels, semantic HTML)
5. Optimize CSS and remove unused styles

**Deliverable:**
Production-ready HTML/CSS/JS file ready for WordPress integration

---

## Phase 2: WordPress & ACF Setup

### Step 2.1: Plan Your ACF Flexible Content Structure

**What to do:**
1. Map each unique section from your design to an ACF Flexible Content layout
2. For each layout, identify:
   - Field names and types (text, textarea, WYSIWYG, image, repeater, etc.)
   - Required vs optional fields
   - Default values
   - Help text for content editors

**Example structure:**

```
Flexible Content: Page Sections
├── Hero Section
│   ├── Title (Text)
│   ├── Subtitle (Textarea)
│   ├── Background Image (Image)
│   ├── CTA Button (Group)
│   │   ├── Button Text (Text)
│   │   └── Button Link (URL)
│   └── Text Color (Select: light/dark)
│
├── Feature Blocks
│   ├── Section Title (Text)
│   ├── Features (Repeater)
│   │   ├── Feature Image (Image)
│   │   ├── Feature Title (Text)
│   │   └── Feature Description (Textarea)
│   └── Layout (Select: 2-column/3-column/4-column)
│
├── Testimonials
│   ├── Section Title (Text)
│   ├── Testimonials (Repeater)
│   │   ├── Quote (Textarea)
│   │   ├── Author Name (Text)
│   │   ├── Author Title (Text)
│   │   └── Author Image (Image)
│   └── Autoplay (True/False)
│
└── Contact Form
    ├── Form Title (Text)
    ├── Form Fields (Repeater)
    │   ├── Field Label (Text)
    │   ├── Field Type (Select: text/email/textarea/select)
    │   └── Required (True/False)
    └── Submit Button Text (Text)
```

**Deliverable:**
Detailed ACF field structure document

### Step 2.2: Create ACF Flexible Content Fields in WordPress

**What to do:**
1. Install Advanced Custom Fields Pro plugin (if not already installed)
2. Go to WordPress Admin → ACF → Add Field Group
3. Create a new Field Group named "Page Content" or similar
4. Add a Flexible Content field named `sections` or `page_sections`
5. For each layout identified in Step 2.1:
   - Add a new layout
   - Name it (e.g., "hero_section", "feature_blocks")
   - Add all required fields with proper settings
6. Set the location rule to apply to Pages (or custom post types)
7. Save the field group

**Key ACF Settings:**
- **Flexible Content Field Settings:**
  - Button Label: "Add Section"
  - Minimum Layouts: 0 (optional)
  - Maximum Layouts: Leave empty (unlimited)
  
- **Field Settings:**
  - Ensure `Tabs` are set to "All" or specific tab for organization
  - Set `Instructions` for editors
  - Add `Placeholder` text where helpful
  - Set `Required` for essential fields

**Deliverable:**
ACF Field Group created and configured in WordPress

### Step 2.3: Create a JSON Export Template

**What to do:**
1. In ACF, go to Tools → Export
2. Select your field group
3. Export as JSON
4. Save the JSON file locally

This JSON will serve as your configuration template for:
- Version control
- Easy re-import if needed
- Documentation

**Deliverable:**
`acf-field-groups.json` file

### Step 2.4: Create WordPress Template Files (Optional but Recommended)

**What to do:**
If you want to render these sections in WordPress before migrating to Next.js:

1. Create a template file: `template-flexible.php`
2. Loop through flexible content sections
3. Create display templates for each section type

**Example template:**
```php
<?php
// template-flexible.php
if ( have_posts() ) {
    while ( have_posts() ) {
        the_post();
        
        if ( have_rows( 'sections' ) ) {
            while ( have_rows( 'sections' ) ) {
                the_row();
                
                $layout = get_row_layout();
                
                // Load the appropriate template
                get_template_part( "template-parts/sections/{$layout}" );
            }
        }
    }
}
```

**Deliverable:**
WordPress template structure ready for content rendering

---

## Phase 3: Next.js Setup & Integration

### Step 3.1: Set Up Next.js Project Structure

**What to do:**
1. Create a new Next.js project:
   ```bash
   npx create-next-app@latest --typescript --tailwind
   ```

2. Create the following folder structure:
   ```
   src/
   ├── components/
   │   ├── sections/
   │   │   ├── HeroSection.jsx
   │   │   ├── FeatureBlocks.jsx
   │   │   ├── Testimonials.jsx
   │   │   └── ContactForm.jsx
   │   ├── AcfSections.jsx (main flexible content renderer)
   │   └── ...
   ├── lib/
   │   ├── wordpress.js (API helper)
   │   └── types.ts
   ├── pages/
   │   ├── [[...slug]].js (dynamic pages)
   │   └── api/
   └── styles/
   ```

3. Install required dependencies:
   ```bash
   npm install axios swr next-image-export-optimizer
   ```

**Deliverable:**
Next.js project structure ready for component development

### Step 3.2: Create WordPress API Helper

**What to do:**
1. Create `lib/wordpress.js`:

```javascript
// lib/wordpress.js
const WORDPRESS_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://your-wordpress-site.com';

export async function getPage(slug) {
  try {
    const response = await fetch(`${WORDPRESS_URL}/wp-json/wp/v2/pages?slug=${slug}&_embed`);
    const pages = await response.json();
    
    if (!pages.length) {
      return null;
    }
    
    return pages[0];
  } catch (error) {
    console.error('Error fetching page:', error);
    return null;
  }
}

export async function getAllPages() {
  try {
    const response = await fetch(`${WORDPRESS_URL}/wp-json/wp/v2/pages?per_page=100`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching pages:', error);
    return [];
  }
}

export async function getPageSections(pageId) {
  try {
    const response = await fetch(
      `${WORDPRESS_URL}/wp-json/wp/v2/pages/${pageId}?_embed=acf`
    );
    const page = await response.json();
    
    // ACF data is in the acf field
    return page.acf?.sections || [];
  } catch (error) {
    console.error('Error fetching page sections:', error);
    return [];
  }
}
```

**Deliverable:**
WordPress API helper functions configured

### Step 3.3: Create Section Components

**What to do:**
1. Create individual section components in `src/components/sections/`

**Example: HeroSection.jsx**
```jsx
// components/sections/HeroSection.jsx
import Image from 'next/image';

export default function HeroSection({ data }) {
  const {
    title,
    subtitle,
    background_image,
    cta_button,
    text_color
  } = data;

  return (
    <section className={`hero ${text_color === 'dark' ? 'text-gray-900' : 'text-white'}`}>
      {background_image && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={background_image.url}
            alt="Hero background"
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        {title && <h1 className="text-5xl font-bold mb-4">{title}</h1>}
        {subtitle && <p className="text-xl mb-8">{subtitle}</p>}
        
        {cta_button && (
          <a
            href={cta_button.button_link}
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
          >
            {cta_button.button_text}
          </a>
        )}
      </div>
    </section>
  );
}
```

**Example: FeatureBlocks.jsx**
```jsx
// components/sections/FeatureBlocks.jsx
import Image from 'next/image';

export default function FeatureBlocks({ data }) {
  const { section_title, features, layout } = data;
  const gridClass = {
    '2-column': 'grid-cols-1 md:grid-cols-2',
    '3-column': 'grid-cols-1 md:grid-cols-3',
    '4-column': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }[layout] || 'grid-cols-1 md:grid-cols-3';

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {section_title && (
          <h2 className="text-4xl font-bold text-center mb-12">
            {section_title}
          </h2>
        )}

        <div className={`grid ${gridClass} gap-8`}>
          {features?.map((feature, index) => (
            <div key={index} className="text-center">
              {feature.feature_image && (
                <div className="relative w-full h-64 mb-4">
                  <Image
                    src={feature.feature_image.url}
                    alt={feature.feature_title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">
                {feature.feature_title}
              </h3>
              <p className="text-gray-600">
                {feature.feature_description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

**Deliverable:**
Individual section components for each ACF layout

### Step 3.4: Create the AcfSections Master Component

**What to do:**
1. Create `src/components/AcfSections.jsx` - the main component that routes to individual sections:

```jsx
// components/AcfSections.jsx
import HeroSection from './sections/HeroSection';
import FeatureBlocks from './sections/FeatureBlocks';
import Testimonials from './sections/Testimonials';
import ContactForm from './sections/ContactForm';

const COMPONENT_MAP = {
  hero_section: HeroSection,
  feature_blocks: FeatureBlocks,
  testimonials: Testimonials,
  contact_form: ContactForm,
  // Add more as needed
};

export default function AcfSections({ sections = [] }) {
  return (
    <>
      {sections.map((section, index) => {
        const Component = COMPONENT_MAP[section.acf_fc_layout];
        
        if (!Component) {
          console.warn(`No component found for layout: ${section.acf_fc_layout}`);
          return null;
        }

        return (
          <Component
            key={`${section.acf_fc_layout}-${index}`}
            data={section}
          />
        );
      })}
    </>
  );
}
```

**Deliverable:**
Master AcfSections component that routes to individual section components

### Step 3.5: Create Dynamic Page Routes

**What to do:**
1. Create `src/pages/[[...slug]].js` for dynamic routing:

```jsx
// pages/[[...slug]].js
import { getPage, getAllPages } from '../lib/wordpress';
import AcfSections from '../components/AcfSections';

export default function Page({ page, sections }) {
  if (!page) {
    return <div>Page not found</div>;
  }

  return (
    <main>
      <AcfSections sections={sections} />
    </main>
  );
}

export async function getStaticProps({ params }) {
  const slug = params?.slug?.join('/') || '';
  
  const page = await getPage(slug || 'home');
  
  if (!page) {
    return {
      notFound: true,
      revalidate: 3600, // ISR: revalidate every hour
    };
  }

  // Fetch sections with ACF data
  const response = await fetch(
    `${process.env.WORDPRESS_URL}/wp-json/wp/v2/pages/${page.id}`
  );
  const pageData = await response.json();
  const sections = pageData.acf?.sections || [];

  return {
    props: {
      page,
      sections,
    },
    revalidate: 3600, // ISR
  };
}

export async function getStaticPaths() {
  const pages = await getAllPages();

  const paths = pages.map((page) => ({
    params: {
      slug: page.slug === 'home' ? [] : page.slug.split('/'),
    },
  }));

  return {
    paths,
    fallback: 'blocking', // ISR: build pages on-demand
  };
}
```

**Deliverable:**
Dynamic routing system that fetches page data from WordPress REST API

### Step 3.6: Configure Environment Variables

**What to do:**
1. Create `.env.local` file in your Next.js project root:

```bash
# .env.local
NEXT_PUBLIC_WORDPRESS_URL=https://your-wordpress-site.com
```

2. Configure API endpoints in WordPress:
   - Ensure REST API is enabled
   - Test the API: `https://your-site.com/wp-json/wp/v2/pages`

**Deliverable:**
Environment configuration ready for WordPress integration

### Step 3.7: Testing & Deployment

**What to do:**
1. Start the development server:
   ```bash
   npm run dev
   ```

2. Test dynamic routes:
   - Visit `http://localhost:3000`
   - Visit `http://localhost:3000/about` (if about page exists)

3. Verify API calls:
   - Check browser DevTools Network tab
   - Ensure ACF data is fetched correctly

4. Deploy:
   ```bash
   npm run build
   npm run export (for static export) OR deploy to Vercel/Netlify
   ```

**Deliverable:**
Production-ready Next.js application connected to WordPress REST API

---

## Summary Checklist

### Phase 1: Design
- [ ] Analyze Figma design and identify all sections
- [ ] Generate HTML/CSS/JS using AI
- [ ] Refine and test the HTML structure

### Phase 2: WordPress
- [ ] Plan ACF Flexible Content structure
- [ ] Create ACF field groups in WordPress
- [ ] Export ACF configuration as JSON
- [ ] (Optional) Create WordPress display templates

### Phase 3: Next.js
- [ ] Set up Next.js project with proper folder structure
- [ ] Create WordPress API helper functions
- [ ] Build individual section components
- [ ] Create AcfSections master component
- [ ] Set up dynamic page routes
- [ ] Configure environment variables
- [ ] Test and deploy

---

## Key Benefits of This Workflow

✅ **Design to Development**: Seamless translation from Figma to code
✅ **Reusable Sections**: Build once, use across any page
✅ **Editor-Friendly**: Content editors work in WordPress ACF interface
✅ **Flexible Rendering**: Same data renders in WordPress or Next.js
✅ **Maintainable**: Clear separation of concerns
✅ **Scalable**: Add new sections without restructuring
✅ **Type-Safe**: Can extend with TypeScript for better DX

---

## Troubleshooting

### ACF Data Not Showing in Next.js
- Ensure ACF data is returned in REST API
- Check: `Settings → REST API` in ACF Pro
- Verify page has actual content in flexible sections

### Images Not Loading
- Ensure WordPress image URLs are absolute
- Check CORS settings if hosted separately
- Use Next.js Image optimization

### Styling Issues
- Verify CSS classes match between HTML and components
- Check Tailwind configuration
- Ensure responsive breakpoints are consistent

---

## Next Steps

1. **Version Control**: Store ACF JSON exports in git
2. **Documentation**: Document each section's fields and requirements
3. **Automation**: Consider using headless WordPress plugins (e.g., WP Engine)
4. **Performance**: Implement ISR (Incremental Static Regeneration)
5. **SEO**: Add meta tags and structured data in Next.js
6. **Analytics**: Integrate tracking with page and section data

