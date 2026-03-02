import React from 'react';
import PageBanner from './PageBanner';
import StatsSection from './StatsSection';

interface OurValuesProps {
  homeAcf?: any;
}

const OurValues = ({ homeAcf }: OurValuesProps) => {
  const acf = homeAcf || {};
  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries to create new and better solutions.",
      icon: "fa-lightbulb-o"
    },
    {
      title: "Integrity",
      description: "We are honest, transparent, and ethical in everything we do.",
      icon: "fa-handshake-o"
    },
    {
      title: "Excellence",
      description: "We strive for perfection and deliver high-quality results.",
      icon: "fa-star-o"
    },
    {
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnership.",
      icon: "fa-users"
    },
    {
      title: "Customer Focus",
      description: "Our clients' success is our top priority.",
      icon: "fa-heart-o"
    },
    {
      title: "Growth",
      description: "We are committed to continuous learning and improvement.",
      icon: "fa-line-chart"
    }
  ];

  return (
    <>
      <PageBanner 
        title="Our Values" 
        image="https://storetransform.com/wp-content/uploads/2022/06/our-value.png"
      />
      
      <section className="sec-padd">
        <div className="container">
          <div className="row-inner">
            <div className="col-100 tx-center mx-60">
              <h2 className="title-h2 mb-30">What We Stand For</h2>
              <p className="mb-50">
                Our values define who we are and how we work. They guide our decisions and actions every day.
              </p>
            </div>
          </div>
          
          <div className="row-inner br-grid3">
            {values.map((value, index) => (
              <div className="col-33 mb-30" key={index}>
                <div className="value-item tx-center pd-30 bg-light br-10 h-100">
                  <div className="value-icon mb-20 tx-blue tx-40">
                    <i className={`fa ${value.icon}`}></i>
                  </div>
                  <h3 className="title-h4 mb-15">{value.title}</h3>
                  <p>{value.description}</p>
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

export default OurValues;
