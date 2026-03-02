import React from 'react';
import PageBanner from './PageBanner';

const CareerPage = () => {
  const jobs = [
    {
      title: "Senior WordPress Developer",
      type: "Full Time",
      location: "Remote / Ahmedabad",
      description: "We are looking for an experienced WordPress developer to join our team."
    },
    {
      title: "Shopify Developer",
      type: "Full Time",
      location: "Remote / Ahmedabad",
      description: "Join our e-commerce team and build amazing Shopify stores."
    },
    {
      title: "UI/UX Designer",
      type: "Full Time",
      location: "Ahmedabad",
      description: "Create beautiful and intuitive user interfaces for our clients."
    }
  ];

  return (
    <>
      <PageBanner 
        title="Join Our Team" 
        image="https://storetransform.com/wp-content/uploads/2022/06/Careers-Banner.jpg"
      />
      
      <section className="sec-padd">
        <div className="container">
          <div className="row-inner">
            <div className="col-100 tx-center mx-60">
              <h2 className="title-h2 mb-30">Build Your Career With Us</h2>
              <p className="mb-50">
                We are always looking for talented individuals to join our growing team. 
                If you are passionate about technology and want to make a difference, we want to hear from you.
              </p>
            </div>
          </div>
          
          <div className="row-inner">
            <div className="col-100">
              <div className="job-list">
                {jobs.map((job, index) => (
                  <div className="job-item bg-light pd-30 br-10 mb-20" key={index}>
                    <div className="row-inner align-center">
                      <div className="col-70 sp-100">
                        <h3 className="title-h4 mb-10">{job.title}</h3>
                        <div className="meta mb-15">
                          <span className="mr-20"><i className="fa fa-briefcase mr-5 cl-gray"></i> {job.type}</span>
                          <span><i className="fa fa-map-marker mr-5 cl-gray"></i> {job.location}</span>
                        </div>
                        <p className="mb-0">{job.description}</p>
                      </div>
                      <div className="col-30 sp-100 tx-right sp-tx-left sp-mt-20">
                        <a href="mailto:hr@storetransform.com" className="bt-btn">Apply Now</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerPage;
