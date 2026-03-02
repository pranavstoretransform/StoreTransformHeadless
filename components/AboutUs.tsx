import React from 'react';
import PageBanner from './PageBanner';
import StatsSection from './StatsSection';
import WorkApproach from './WorkApproach';
import OurMission from './OurMission';

interface AboutUsData {
  banner_image?: string;
  banner_heading?: string;
  banner_sub_heading?: string;
  count_repeater?: any[];
  count_button?: any;
  left_side_repeater?: any[];
  join_store_transform_heading?: string;
  join_store_transform_sub_heading?: string;
  repeater_sec_4?: any[];
  our_mission_image_?: string;
  our_mission_content?: string;
  our_mission_btn?: any;
  our_mission_repeater?: any[];
}

const AboutUs = ({ data }: { data: AboutUsData }) => {
  const acf = data || {};

  return (
    <>
      <PageBanner 
        image={acf.banner_image || 'https://storetransform.com/wp-content/uploads/2022/12/about-banner.jpg'}
        title={acf.banner_heading || 'About Us'}
        subtitle={acf.banner_sub_heading}
      />
      
      {/* Stats Section - using left_side_repeater as it seemed to have the data in our inspection */}
      <StatsSection 
        title={acf.join_store_transform_heading}
        description={acf.join_store_transform_sub_heading}
        stats={acf.left_side_repeater || acf.count_repeater}
      />
      
      {/* Work Approach Section */}
      <WorkApproach items={acf.repeater_sec_4 || []} />
      
      {/* Our Mission Section */}
      <OurMission 
        image={acf.our_mission_image_}
        content={acf.our_mission_content}
        button={acf.our_mission_btn}
        items={acf.our_mission_repeater}
      />
    </>
  );
};

export default AboutUs;
