'use client';

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
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

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const displayPosts =
    posts.length > 0
      ? posts
      : [
        {
          id: 1,
          date: '2026-01-25T00:00:00',
          slug: 'ppc-advertising-run-high-roi-ppc-campaigns-to-reduce-costs',
          link: '/ppc-advertising-run-high-roi-ppc-campaigns-to-reduce-costs/',
          title: {
            rendered:
              'PPC Advertising in 2026: Run High-ROI PPC Campaigns to Reduce Costs and Maximize ROI'
          },
          excerpt: {
            rendered:
              'PPC advertising remains one of the most effective ways to drive traffic, generate leads, and increase conversions in 2026...'
          },
          _embedded: {
            'wp:featuredmedia': [
              {
                source_url:
                  'https://storetransform.com/wp-content/uploads/2026/02/Storetransform-blog-image-3.png',
                alt_text: 'PPC Advertising in 2026'
              }
            ]
          }
        }
      ];

  return (
    <section className="st-blog-section">
      <div className="container">
        <div className="st-blog-heading">
          <h2>{title}</h2>
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>

        <div className="st-blog-slider">

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: {
                slidesPerView: 2
              },
              1024: {
                slidesPerView: 3
              }
            }}
          >

            {displayPosts.map((post) => {

              const image =
                post._embedded &&
                  post._embedded['wp:featuredmedia'] &&
                  post._embedded['wp:featuredmedia'][0]
                  ? post._embedded['wp:featuredmedia'][0].source_url
                  : 'https://storetransform.com/wp-content/uploads/2026/02/Storetransform-blog-image-3.png';

              const alt =
                post._embedded &&
                  post._embedded['wp:featuredmedia'] &&
                  post._embedded['wp:featuredmedia'][0]
                  ? post._embedded['wp:featuredmedia'][0].alt_text
                  : post.title.rendered;

              return (
                <SwiperSlide key={post.id}>

                  <div className="st-blog-card">

                    <Link href={post.slug ? `/${post.slug}` : '#'} className="st-blog-image-wrapper">

                      <img
                        src={image}
                        alt={alt}
                        className="st-blog-image"
                      />

                      <div className="st-blog-hover">

                        <h4
                          dangerouslySetInnerHTML={{
                            __html: post.title.rendered
                          }}
                        />

                        <div
                          className="st-blog-hover-text"
                          dangerouslySetInnerHTML={{
                            __html: post.excerpt.rendered
                          }}
                        />

                      </div>

                    </Link>

                    <div className="st-blog-date">
                      <p>{formatDate(post.date)}</p>
                    </div>

                  </div>

                </SwiperSlide>
              );
            })}

          </Swiper>

        </div>

      </div>
    </section>
  );
};

export default BlogSection;