'use client';

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface BlogPost {
  id: number;
  date: string;
  slug: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url: string; alt_text: string }>;
  };
}

interface BlogSectionProps {
  title?: string;
  description?: string;
  posts?: BlogPost[];
}

const BlogSection = ({
  title = "Our Blogs",
  description = "Explore our blog for innovative digital ideas and strategies to elevate your website and fuel your growth!",
  posts = []
}: BlogSectionProps) => {
  // Format date helper
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const displayPosts = posts.length > 0 ? posts : [
    {
      id: 1,
      date: '2026-01-25T00:00:00',
      slug: 'ppc-advertising-run-high-roi-ppc-campaigns-to-reduce-costs',
      link: '/ppc-advertising-run-high-roi-ppc-campaigns-to-reduce-costs/',
      title: { rendered: 'PPC Advertising in 2026: Run High-ROI PPC Campaigns to Reduce Costs and Maximize ROI' },
      excerpt: { rendered: 'PPC advertising remains one of the most effective ways to drive traffic, generate leads, and increase conversions in 2026...' },
      _embedded: {
        'wp:featuredmedia': [{ source_url: 'https://storetransform.com/wp-content/uploads/2026/02/Storetransform-blog-image-3.png', alt_text: 'PPC Advertising in 2026' }]
      }
    }
  ];

  return (
    <section className="blg-sec-blogcnt sec-padd ed_section">
      <div className="rowss container">
        <div className="row-inner">
          <div className="wd-100 tx-center">
            <h2>{title}</h2>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          </div>
        </div>

        {/* Swiper integration for mobile slider, grid on desktop via breakpoints */}
        <div className="row-inner hm-blogcnt-inner2 hm-blog-inner tx-wht mobile-blog-slider">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="blog-swiper"
          >
            {displayPosts.map((post) => (
              <SwiperSlide key={post.id}>
                <div className="blg-blogbox wd-100">
                  <Link href={post.slug ? `/${post.slug}` : '#'}>
                    {post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0] ? (
                      <img 
                        src={post._embedded['wp:featuredmedia'][0].source_url} 
                        alt={post._embedded['wp:featuredmedia'][0].alt_text || post.title.rendered} 
                        className="mx-100" 
                      />
                    ) : (
                      <img src="https://storetransform.com/wp-content/uploads/2026/02/Storetransform-blog-image-3.png" alt="Placeholder" className="mx-100" />
                    )}
                  </Link>
                  <div className="blg-dates">
                    <div className="dts">
                      <p>{formatDate(post.date)}</p>
                    </div>
                  </div>
                  <div className="blg-cnt-tx">
                    <Link href={post.slug ? `/${post.slug}` : '#'}>
                      <h5 dangerouslySetInnerHTML={{ __html: post.title.rendered }}></h5>
                    </Link>
                    <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
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

export default BlogSection;
