import React from 'react';
import PageBanner from './PageBanner';
import HireDevelopers from './HireDevelopers';
import StatsSection from './StatsSection';

interface HireDevelopersPageProps {
  page?: any;
  homeAcf?: any;
}

const HireDevelopersPage = ({ page, homeAcf }: HireDevelopersPageProps) => {
  const acf = page?.acf || {};
  const home = homeAcf || {};
  const pageTitle = page?.title?.rendered || "Hire Developers";
  const pageContent = page?.content?.rendered;

  return (
    <>
      <PageBanner 
        title={pageTitle}
        image="https://storetransform.com/wp-content/uploads/2023/03/hire-devlpr.jpg"
      />
      
      <section className="sec-padd">
        <div className="container">
          <div className="row-inner">
            <div className="col-100 tx-center mx-60">
              {pageContent ? (
                <div dangerouslySetInnerHTML={{ __html: pageContent }} />
              ) : (
                <>
                  <h2 className="title-h2 mb-30">Build Your Dream Team</h2>
                  <p className="mb-50">
                    Scale your business with our dedicated developers. Whether you need a WordPress wizard, 
                    a Shopify specialist, or a full-stack engineer, we have the talent you need to succeed.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <HireDevelopers 
        title={acf['hire_developers_heading_new'] || home['hire_developers_heading_new'] || undefined}
        description={acf['hire_developers_sub_text_new'] || home['hire_developers_sub_text_new'] || undefined}
        items={acf['hire_developers_box_icon_technology_new'] || home['hire_developers_box_icon_technology_new'] || undefined}
      />
      
      <StatsSection 
        title={acf['title_join'] || home['title_join'] || undefined}
        description={acf['sub_content_join'] || home['sub_content_join'] || undefined}
        stats={acf['right_side_repeaer'] || home['right_side_repeaer'] || undefined}
      />
    </>
  );
};

export default HireDevelopersPage;
