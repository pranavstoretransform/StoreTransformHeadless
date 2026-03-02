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
    <section className="cwd-sec-orprocess sec-padd">
      <div className="container rowss">
        <div className="row-inner cwd-orprocess-inner1">
          <div className="tx-center hm-wpek1 wd-100">
            <h2>{title}</h2>
            <div className="fw-18" dangerouslySetInnerHTML={{ __html: description }}></div>
          </div>
        </div>
        <div className="row-inner cwd-orprocess-inner2 br-grid3 ig-bt">
          {displayServices.map((item, index) => {
            const raw = item.custom_web_design_our_process_text_content || '';
            const match = raw.match(/<a[^>]*href=["']([^"']+)["'][^>]*>(.*?)<\/a>/i);
            const contentHtml = match ? raw.replace(match[0], '').trim() : raw;
            const linkHref = match ? match[1] : undefined;
            const linkText = match ? match[2] : undefined;
            return (
              <div className="wd-100 box-cust" key={index}>
                <h4>{item.custom_web_design_our_process_heading}</h4>
                <p className="service-desc" dangerouslySetInnerHTML={{ __html: contentHtml }}></p>
                {linkHref && (
                  <a className="read-more" href={linkHref}>
                    {linkText || 'Read More'}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .cwd-sec-orprocess.sec-padd {
          padding: 80px 0;
          background: #fff;
        }

        .rowss {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .tx-center {
          text-align: center;
        }

        .cwd-sec-orprocess h2 {
          font-size: 42px;
          line-height: 1.2;
          font-weight: 800;
          color: #111;
          margin: 0 0 12px;
        }

        .fw-18 {
          font-size: 18px;
          color: #555;
          max-width: 860px;
          margin: 0 auto 40px;
        }

        .cwd-orprocess-inner2 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          align-items: stretch;
        }

        .box-cust {
          position: relative;
          background: #ffffff;
          border-radius: 14px;
          padding: 26px 28px;
          box-shadow: 0 12px 26px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(17, 17, 17, 0.06);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .box-cust::before {
          content: "";
          position: absolute;
          left: 0;
          top: 20px;
          bottom: 20px;
          width: 8px;
          border-radius: 12px;
          background: linear-gradient(180deg, #ff6a5f 0%, #ff4b3e 100%);
          box-shadow: 0 8px 16px rgba(255, 75, 62, 0.25);
        }

        .box-cust:nth-child(even)::before {
          background: #111;
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .box-cust h4 {
          margin: 0 0 12px;
          font-size: 24px;
          font-weight: 800;
          color: #111;
        }

        .box-cust p {
          margin: 0;
          font-size: 16px;
          line-height: 1.7;
          color: #333;
        }

        .service-desc {
          flex: 1;
        }

        .read-more {
          display: inline-block;
          margin-top: 16px;
          color: #ff4b3e;
          font-weight: 600;
          text-decoration: none;
        }

        .read-more:hover {
          text-decoration: underline;
        }

        @media (max-width: 1024px) {
          .cwd-orprocess-inner2 {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .cwd-orprocess-inner2 {
            grid-template-columns: 1fr;
          }
          .cwd-sec-orprocess h2 {
            font-size: 34px;
          }
          .fw-18 {
            font-size: 16px;
            margin-bottom: 28px;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesGrid;
