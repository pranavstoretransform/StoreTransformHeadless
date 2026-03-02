import React from 'react';
import PageBanner from './PageBanner';
import StatsSection from './StatsSection';

interface PortfolioPageProps {
  homeAcf?: any;
}

const PortfolioPage = ({ homeAcf }: PortfolioPageProps) => {
  const acf = homeAcf || {};
  const projects = [
    { title: "E-Commerce Site", image: "https://storetransform.com/wp-content/uploads/2022/12/port-1.jpg" },
    { title: "Corporate Website", image: "https://storetransform.com/wp-content/uploads/2022/12/port-2.jpg" },
    { title: "Mobile App", image: "https://storetransform.com/wp-content/uploads/2022/12/port-3.jpg" },
    { title: "Web Application", image: "https://storetransform.com/wp-content/uploads/2022/12/port-4.jpg" },
    { title: "Branding", image: "https://storetransform.com/wp-content/uploads/2022/12/port-5.jpg" },
    { title: "SEO Campaign", image: "https://storetransform.com/wp-content/uploads/2022/12/port-6.jpg" },
  ];

  return (
    <>
      <PageBanner 
        title="Our Portfolio" 
        image="https://storetransform.com/wp-content/uploads/2022/12/portfolio-banner.jpg"
      />
      
      <section className="sec-padd">
        <div className="container">
          <div className="row-inner">
            <div className="col-100 tx-center mx-60">
              <h2 className="title-h2 mb-30">Our Latest Work</h2>
              <p className="mb-50">
                Check out some of our recent projects. We take pride in delivering high-quality solutions for our clients.
              </p>
            </div>
          </div>
          
          <div className="row-inner br-grid3">
            {projects.map((project, index) => (
              <div className="col-33 mb-30" key={index}>
                <div className="portfolio-item">
                  <div className="portfolio-img">
                    <img src={project.image} alt={project.title} className="wd-100" />
                  </div>
                  <div className="portfolio-content tx-center pd-20 bg-light">
                    <h4 className="title-h4">{project.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <StatsSection 
        title={acf['title_join']}
        description={acf['sub_content_join']}
        stats={acf['right_side_repeaer']}
      />
    </>
  );
};

export default PortfolioPage;
