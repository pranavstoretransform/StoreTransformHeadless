'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface TestimonialItem {
  review?: string;
  name?: string;
  destination?: string;
  image?: string;
}

interface TestimonialsProps {
  title?: string;
  description?: string;
  reviews?: TestimonialItem[];
}

const Testimonials = ({
  title = "What Our Clients Say",
  description = "Our happy clients are our greatest advocates - hear how we’ve transformed their success stories! Let me know if you'd like more options!",
  reviews = []
}: TestimonialsProps) => {
  const defaultReviews = [
    {
      review: "<p>Store Transform is an excellent development team. They are extremely creative with a great technical sensibility. They clearly understood our business goals or objectives, design a beautiful Magento Ecommerce store for us</p><p>I am very happy with their work and will definitely hire them for next job.</p>",
      name: "Robinson Walker"
    },
    {
      review: "<p>One of the best experiences I had with any Magento development team so far. Highly dedicated Store Transform team of experienced professionals that are committed to deliver the highest standards of services.</p><p>If you are looking for a genuine resource for your next project, look no further. All the very best.</p>",
      name: "Sebastian Clarke"
    },
    {
      review: "<p>Store Transform really took our Magento project to the next level with clever design &amp; on-point creativity. They clearly understood my targeted demographic, turned my site into rocking shopping experience !!! I really appreciate their skills to develop such a fabulous bug free website for our company.</p><p>I will look forward to work with him in a future on new projects.</p>",
      name: "Garcia Taylor"
    },
    {
      review: "<p>Working with Store transform team has been a complete pleasure. They posses enough skills to understand our core needs &amp; functionalities, created highly customized Magento Store for our e-commerce business.</p><p>I really look forward to continuing relationship with him, definitely recommend him for our new projects.</p>",
      name: "Francisco Wilson"
    },
    {
      review: "<p>Store Transform team exceeded all of my expectations. They not only perform required tasks quickly, but also does research, spends time in understanding our entire project, and suggesting us clever alternatives where needed.</p><p>Will rehire again for further work.</p>",
      name: "Zachary Moore"
    }
  ];

  const displayReviews = reviews && reviews.length > 0 ? reviews : defaultReviews;

  const formatReview = (content?: string) => {
    if (!content) return '';
    // If content has HTML tags, return as is
    if (/<[a-z][\s\S]*>/i.test(content)) return content;
    // Otherwise replace newlines with <br/>
    return content.replace(/\r\n/g, '<br/>').replace(/\n/g, '<br/>');
  };

  return (
    <section className="hm-sec-custmer1 ed_section">
      <div className="container rowss">
        <div className="row-inner hm-custmer-inner wht">
          <div className="tx-center hm-custmer wd-100">
            <h2>{title}</h2>
            <div dangerouslySetInnerHTML={{ __html: description }}></div>
          </div>
        </div>

        <div className="row-inner hm-testml-inner hm2">
          <div className="hm-testml sp-100">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              loop={true}
              className="hmtestimonial"
            >
              {displayReviews.map((review, index) => (
                <SwiperSlide className={`hm-testimnl${(index % 5) + 1}`} key={index}>
                  <div className="hm-cust-bx">
                    <div className="hm-testiml-tx">
                      <div dangerouslySetInnerHTML={{ __html: formatReview(review.review) }}></div>
                      <h5>{review.name}</h5>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
