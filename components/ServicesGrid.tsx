'use client';
import React from 'react';

interface ServiceItem {
  custom_web_design_our_process_heading?: string;
  custom_web_design_our_process_text_content?: string;
}

interface ServicesGridProps {
  title?: string;
  description?: string;
  services?: ServiceItem[];
}

const ServicesGrid = ({
  title = "Services We Provide",
  description = "Ready to turn your vision into a reality? Explore our core services and see how we can help you innovate.",
  services = []
}: ServicesGridProps) => {
  // Default static services if no dynamic data provided
  // Structure matches the ACF field 'custom_web_design_our_process_box'
  const defaultServices: ServiceItem[] = [
    {
      custom_web_design_our_process_heading: "IT Consultation",
      custom_web_design_our_process_text_content: "Navigate the complex world of technology with our expert guidance. We help you create a clear, future-proof strategy that aligns with your business goals.\r\n\r\n<a href=\"/contact-us/\">Read More</a>"
    },
    {
      custom_web_design_our_process_heading: "Ai-Powered Services",
      custom_web_design_our_process_text_content: "Gain a competitive advantage with intelligent solutions. We leverage artificial intelligence to automate processes and turn your data into actionable insights.\r\n\r\n<a href=\"/contact-us/\">Read More</a>"
    },
    {
      custom_web_design_our_process_heading: "Web Development",
      custom_web_design_our_process_text_content: "Build a powerful and secure digital presence from the ground up. Our custom websites are designed for peak performance and seamless user engagement.\r\n\r\n<a href=\"/web-development-services/\">Read More</a>"
    },
    {
      custom_web_design_our_process_heading: "Digital Marketing",
      custom_web_design_our_process_text_content: "Amplify your brand and reach your audience in the digital space. We create data-driven strategies to boost your visibility and business growth.\r\n\r\n<a href=\"/digital-marketing/\">Read More</a>"
    },
    {
      custom_web_design_our_process_heading: "App Development",
      custom_web_design_our_process_text_content: "Bring your innovative ideas to life on mobile devices. We design and build custom applications for iOS and Android that are intuitive and highly functional.\r\n\r\n<a href=\"/contact-us/\">Read More</a>"
    },
    {
      custom_web_design_our_process_heading: "Ui Ux Design",
      custom_web_design_our_process_text_content: "Create a user-centric experience that is both beautiful and effective. We design captivating interfaces and smooth user journeys to drive conversion and loyalty.\r\n\r\n<a href=\"/ui-ux-design/\">Read More</a>"
    }
  ];

  const displayServices = services && services.length > 0 ? services : defaultServices;

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <h2>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: description }}></div>
        </div>
        <div className="services-grid">
          {displayServices.map((item, index) => {
            const raw = item.custom_web_design_our_process_text_content || '';
            const match = raw.match(/<a[^>]*href=["']([^"']+)["'][^>]*>(.*?)<\/a>/i);
            const contentHtml = match ? raw.replace(match[0], '').trim() : raw;
            const linkHref = match ? match[1] : undefined;
            const linkText = match ? match[2] : undefined;
            return (
              <div className="service-card" key={index}>
                <h4>{item.custom_web_design_our_process_heading}</h4>
                <p dangerouslySetInnerHTML={{ __html: contentHtml }}></p>
                {linkHref && (
                  <a className="service-read-more" href={linkHref}>
                    {linkText || 'Read More'}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
