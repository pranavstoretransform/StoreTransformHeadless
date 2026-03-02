import React from 'react';
import PageBanner from './PageBanner';
import StatsSection from './StatsSection';

interface OurCultureProps {
  homeAcf?: any;
}

const OurCulture = ({ homeAcf }: OurCultureProps) => {
  const acf = homeAcf || {};
  return (
    <>
      <PageBanner 
        title="Our Culture" 
        image="https://storetransform.com/wp-content/uploads/2022/06/team.jpg"
      />
      
      <section className="sec-padd">
        <div className="container">
          <div className="row-inner">
            <div className="col-50 sp-100 pr-30">
              <h2 className="title-h2 mb-30">Work Hard, Play Hard</h2>
              <p className="mb-20">
                At Store Transform, we believe that a positive work environment leads to better results. 
                We foster a culture of creativity, collaboration, and continuous learning.
              </p>
              <p className="mb-20">
                We celebrate our successes and support each other through challenges. 
                Our team is like a family, and we take care of our own.
              </p>
              <ul className="check-list mt-30">
                <li className="mb-10"><i className="fa fa-check-circle mr-10 tx-blue"></i> Flexible Work Environment</li>
                <li className="mb-10"><i className="fa fa-check-circle mr-10 tx-blue"></i> Professional Development</li>
                <li className="mb-10"><i className="fa fa-check-circle mr-10 tx-blue"></i> Team Building Events</li>
                <li className="mb-10"><i className="fa fa-check-circle mr-10 tx-blue"></i> Health & Wellness Programs</li>
              </ul>
            </div>
            <div className="col-50 sp-100">
              <div className="culture-img br-10 overflow-hidden">
                <img src="https://storetransform.com/wp-content/uploads/2022/07/store-family.jpg" alt="Our Team Culture" className="wd-100" />
              </div>
            </div>
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

export default OurCulture;
