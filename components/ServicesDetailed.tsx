'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ServiceDetailItem {
  image_service_new?: string;
  heading_service_new?: string;
  sub_text_sevice_new?: string;
}

interface ServicesDetailedProps {
  title?: string;
  description?: string;
  services?: ServiceDetailItem[];
}

const ServicesDetailed = ({
  title = "Our Work",
  description = "We transform innovative ideas into powerful digital realities. Explore our work to see how we've helped businesses achieve their vision through our work.",
  services = []
}: ServicesDetailedProps) => {
  const defaultServices: ServiceDetailItem[] = [
    {
      image_service_new: "https://storetransform.com/wp-content/uploads/2025/12/worksss.webp",
      heading_service_new: "Health & Wellness Chatbot",
      sub_text_sevice_new: "Developed Echo AI, a custom AI-powered chatbot that provides mental health consultation and peace. We leveraged AI to deliver empathetic, personalized conversations; the result is an increase in user engagement and improved mental wellness scores."
    },
    {
      image_service_new: "https://storetransform.com/wp-content/uploads/2025/12/works.webp",
      heading_service_new: "Aviation Consultancy Industry",
      sub_text_sevice_new: "Led the WordPress development for Seven Collective, crafting a dynamic and responsive website that effectively showcases their innovative consultancy services. Implemented SEO best practices and optimized site performance to drive business growth."
    },
    {
      image_service_new: "https://storetransform.com/wp-content/uploads/2025/12/workss.webp",
      heading_service_new: "Personal Care Industry",
      sub_text_sevice_new: "Executed a comprehensive Shopify development project for Better Man Labs, focusing on a user-friendly online store. Implemented custom features and optimized the site for performance, resulting in enhanced customer engagement and increased sales."
    },
    {
      image_service_new: "https://storetransform.com/wp-content/uploads/2025/12/sb-works.webp",
      heading_service_new: "Home Decor Industry",
      sub_text_sevice_new: "Implemented comprehensive SEO strategies for the Superior Brand website. Conducted thorough competitor analysis and keyword research to identify opportunities, resulting in a significant boost in organic traffic and improved search visibility."
    }
  ];

  const displayServices = services && services.length > 0 ? services : defaultServices;

  return (
    <section className="hm-sec-service sec-padd hm2-sec-service ed_section">
      <div className="container rowss">
        <div className="row-inner hm-servic1-inner">
          <div className="tx-center hm-serce wd-100 mx-60 tx-center tx-20">
            <h2>{title}</h2>
            <p className="fw-18" dangerouslySetInnerHTML={{ __html: description }}></p>
          </div>
        </div>

        {/* Swiper integration for mobile slider, grid on desktop via breakpoints */}
        <div className="row-inner hm-servic-inner hm2-servic2-inner mobile-services-slider">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            className="services-detailed-swiper"
          >
            {displayServices.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="hm-srvc_box wd-100">
                  <div className="hm-serc-ig">
                    {item.image_service_new && (
                      <Image
                        src={item.image_service_new}
                        alt={item.heading_service_new || 'Service Image'}
                        width={500}
                        height={300}
                        className="mx-100"
                        style={{ width: '100%', height: 'auto' }}
                      />
                    )}
                  </div>
                  <div className="hm-src-tx wd-100">
                    <h4 className="title-h5">{item.heading_service_new}</h4>
                    <p dangerouslySetInnerHTML={{ __html: item.sub_text_sevice_new || '' }}></p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailed;
