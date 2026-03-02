import React from 'react';
import ServicesGrid from './ServicesGrid';
import WhyChooseUs from './WhyChooseUs';
import StatsSection from './StatsSection';
import Testimonials from './Testimonials';
import TabsSection from './TabsSection';

interface ServicesPageProps {
  page: any;
  homeAcf?: any;
}

const ServicesPage = ({ page, homeAcf }: ServicesPageProps) => {
  const acf = page?.acf || {};
  const home = homeAcf || {};
  const isLandingPage = page?.slug === 'landing-page-design-services';

  return (
    <div className="services-page">
      {/* Page Header */}
      <section className="page-header sec-padd bg-black">
        <div className="container">
          <div className="row-inner">
            <div className="col-100 tx-center">
              <h1 className="tx-white">{page?.title?.rendered || 'Our Services'}</h1>
              {page?.content?.rendered && (
                <div className="tx-white mt-20" dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid (reusing Home Page data if available) */}
      <ServicesGrid 
        title={acf['custom_web_design__our_process_heading'] || home['custom_web_design__our_process_heading'] || undefined}
        description={acf['custom_contents'] || home['custom_contents'] || undefined}
        services={acf['custom_web_design_our_process_box'] || home['custom_web_design_our_process_box'] || undefined}
      />

      {/* Tabs Section (Only for Landing Page Design or if specifically requested) */}
      {isLandingPage && (
        <TabsSection 
          title={acf['process_tabs_title'] || "Our Innovative Process"}
          description={acf['process_tabs_description'] || "We follow a structured approach to deliver high-quality results."}
          tabs={acf['process_tabs_repeater'] || undefined}
        />
      )}

      {/* Why Choose Us */}
      <WhyChooseUs 
        title={acf['why_choose_us_heading'] || home['why_choose_us_heading'] || undefined}
        description={acf['why_choose_us_content'] || home['why_choose_us_content'] || undefined}
        image={acf['why_choose_us_image'] || home['why_choose_us_image'] || undefined}
        items={acf['why_choose_us_repeater'] || home['why_choose_us_repeater'] || undefined}
      />

      {/* Stats Section */}
      <StatsSection 
        title={acf['title_join'] || home['title_join'] || undefined}
        description={acf['sub_content_join'] || home['sub_content_join'] || undefined}
        stats={acf['right_side_repeaer'] || home['right_side_repeaer'] || undefined}
      />

      {/* Testimonials */}
      <Testimonials 
        title={acf['review_heading'] || home['review_heading'] || undefined}
        description={acf['sub_heading_newww'] || home['sub_heading_newww'] || undefined} // Check key names
        reviews={acf['review_repeater'] || home['review_repeater'] || undefined}
      />
    </div>
  );
};

export default ServicesPage;