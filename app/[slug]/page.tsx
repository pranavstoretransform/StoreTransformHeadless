import React from 'react';
import { notFound } from 'next/navigation';
import { getPageBySlug, getAllPages, getHomePageData } from '@/lib/api';
import AboutUs from '@/components/AboutUs';
import ContactUs from '@/components/ContactUs';
import ServicesPage from '@/components/ServicesPage';
import HireDevelopersPage from '@/components/HireDevelopersPage';
import PortfolioPage from '@/components/PortfolioPage';
import TeamPage from '@/components/TeamPage';
import BlogPage from '@/components/BlogPage';
import OurValues from '@/components/OurValues';
import OurCulture from '@/components/OurCulture';
import CareerPage from '@/components/CareerPage';
import PageBanner from '@/components/PageBanner';

export async function generateStaticParams() {
  const pages = await getAllPages();
  return pages.map((page: any) => ({
    slug: page.slug,
  }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = await getPageBySlug(slug);

  if (!page) {
    notFound();
  }

  // Handle specific pages
  if (slug === 'about-us') {
    return <AboutUs data={page.acf} />;
  }

  if (slug === 'contact-us') {
    return <ContactUs />;
  }

  const homeData = await getHomePageData();
  const homeAcf = homeData?.acf || {};

  const serviceSlugs = [
    'our-services',
    'web-design',
    'ui-ux-design',
    'custom-web-design-services',
    'landing-page-design-services',
    'web-development-services',
    'shopify-development-services',
    'magento-development-services',
    'wordpress-development-services',
    'digital-marketing',
    'ppc-advertising',
    'social-media-optimization',
    'search-engine-optimization'
  ];

  if (serviceSlugs.includes(slug)) {
    // Pass slug to ServicesPage to handle conditional rendering (like TabsSection)
    return <ServicesPage page={{ ...page, slug }} homeAcf={homeAcf} />;
  }

  const hireSlugs = [
    'hire-developers',
    'hire-shopify-developer',
    'hire-magento-developer',
    'hire-wordpress-developer'
  ];

  if (hireSlugs.includes(slug)) {
    return <HireDevelopersPage page={page} homeAcf={homeAcf} />;
  }

  if (slug === 'our-portfolio') {
    return <PortfolioPage homeAcf={homeAcf} />;
  }

  if (slug === 'our-team') {
    return <TeamPage homeAcf={homeAcf} />;
  }

  if (slug === 'blog') {
    return <BlogPage />;
  }

  if (slug === 'our-values') {
    return <OurValues homeAcf={homeAcf} />;
  }

  if (slug === 'our-culture') {
    return <OurCulture homeAcf={homeAcf} />;
  }

  if (slug === 'career') {
    return <CareerPage />;
  }

  // Generic Page Fallback (for pages like Privacy Policy, Terms, etc.)
  return (
    <div className="generic-page">
        <section className="page-header sec-padd bg-black">
            <div className="container">
                <div className="row-inner">
                    <div className="col-100 tx-center">
                        <h1 className="tx-white">{page.title.rendered}</h1>
                    </div>
                </div>
            </div>
        </section>
        <section className="page-content sec-padd">
            <div className="container">
                <div className="row-inner">
                    <div className="col-100">
                         <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}
