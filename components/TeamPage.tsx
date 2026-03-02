import React from 'react';
import PageBanner from './PageBanner';
import StatsSection from './StatsSection';

interface TeamPageProps {
  homeAcf?: any;
}

const TeamPage = ({ homeAcf }: TeamPageProps) => {
  const acf = homeAcf || {};
  const teamMembers = [
    {
      name: "John Doe",
      position: "CEO & Founder",
      image: "https://storetransform.com/wp-content/uploads/2022/12/team-1.jpg"
    },
    {
      name: "Jane Smith",
      position: "Head of Design",
      image: "https://storetransform.com/wp-content/uploads/2022/12/team-2.jpg"
    },
    {
      name: "Mike Johnson",
      position: "Lead Developer",
      image: "https://storetransform.com/wp-content/uploads/2022/12/team-3.jpg"
    },
    {
      name: "Sarah Williams",
      position: "Marketing Manager",
      image: "https://storetransform.com/wp-content/uploads/2022/12/team-4.jpg"
    }
  ];

  return (
    <>
      <PageBanner 
        title="Our Team" 
        image="https://storetransform.com/wp-content/uploads/2022/12/team-banner.jpg"
      />
      
      <section className="sec-padd">
        <div className="container">
          <div className="row-inner">
            <div className="col-100 tx-center mx-60">
              <h2 className="title-h2 mb-30">Meet The Experts</h2>
              <p className="mb-50">
                Our team is our greatest asset. We have gathered a group of talented individuals who are passionate about what they do.
              </p>
            </div>
          </div>
          
          <div className="row-inner br-grid4">
            {teamMembers.map((member, index) => (
              <div className="col-25 mb-30" key={index}>
                <div className="team-item tx-center">
                  <div className="team-img mb-20 br-10 overflow-hidden">
                    <img src={member.image} alt={member.name} className="wd-100" />
                  </div>
                  <div className="team-content">
                    <h4 className="title-h4 mb-5">{member.name}</h4>
                    <p className="cl-gray">{member.position}</p>
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

export default TeamPage;
