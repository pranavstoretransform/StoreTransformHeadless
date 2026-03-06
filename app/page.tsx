import HeroSection from '@/components/HeroSection';
import IntroSection from '@/components/IntroSection';
import ServicesGrid from '@/components/ServicesGrid';
import HireDevelopers from '@/components/HireDevelopers';
import WhyChooseUs from '@/components/WhyChooseUs';
import StatsSection from '@/components/StatsSection';
import AiSection from '@/components/AiSection';
import ServicesDetailed from '@/components/ServicesDetailed';
import ServicesImageSection from '@/components/ServicesImageSection';
import Testimonials from '@/components/Testimonials';
import BlogSection from '@/components/BlogSection';
import { getHomePageData, getLatestPosts } from '@/lib/api';

export default async function Home() {
  let acf: any = {};
  let posts: any[] = [];

  try {
    const pageData = await getHomePageData();
    acf = pageData.acf || {};
  } catch (error) {
    console.error("Error fetching home page data:", error);
  }

  try {
    posts = await getLatestPosts();
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  return (
    <>
      <HeroSection
        welcome_text={acf['welcome_text']}
        tranceform_your_text={acf['tranceform_your_text']}
        tranceform_your_sub_text={acf['tranceform_your_sub_text']}
        banner_button={acf['banner_button']}
        background_image_section_1={acf['background_image_section_1']}
      />
      <IntroSection
        title={acf['right_side_heading_new']}
        content={acf['right_side_content_text']}
        image={acf['right_side_image_new']}
      />
      <ServicesGrid
        title={acf['custom_web_design__our_process_heading']}
        description={acf['custom_contents']}
        services={acf['custom_web_design_our_process_box']}
      />
      <HireDevelopers
        title={acf['hire_developers_heading_new']}
        description={acf['hire_developers_sub_text_new']}
        items={acf['hire_developers_box_icon_technology_new']}
      />
      <WhyChooseUs
        title={acf['why_choose_us_heading']}
        description={acf['why_choose_us_content']}
        image={acf['why_choose_us_image']}
        items={acf['why_choose_us_repeater']}
      />
      <StatsSection
        title={acf['title_join']}
        description={acf['sub_content_join']}
        stats={acf['right_side_repeaer']}
      />
      <AiSection
        title={acf['ai_title']}
        description={acf['ai_content']}
        models={acf['ai_models']}
      />
      <ServicesDetailed
        title={acf['service_we_provide_heading_new']}
        description={acf['service_we_provide_sub_heading_new']}
        services={acf['service_we_provide_repeater_new']}
      />
      <ServicesImageSection
        image={acf['services_image_section']}
      />
      <Testimonials
        title={acf['review_heading']}
        description={acf['sub_heading_newww']}
        reviews={acf['review_repeater']}
      />
      <BlogSection
        title={acf['title_blog_section']}
        description={acf['content_blog_section']}
        posts={posts}
      />
    </>
  );
}
