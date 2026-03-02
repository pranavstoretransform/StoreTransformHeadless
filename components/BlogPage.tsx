import React from 'react';
import Link from 'next/link';
import PageBanner from './PageBanner';
import { getAllPosts } from '@/lib/api';

const BlogPage = async () => {
  const posts = await getAllPosts();

  return (
    <>
      <PageBanner 
        title="Our Blog" 
        image="https://storetransform.com/wp-content/uploads/2022/12/blog-banner.jpg"
      />
      
      <section className="blog-page-sec sec-padd">
        <div className="container">
          <div className="row-inner br-grid3">
            {posts && posts.map((post: any) => {
              const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
              const date = new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              });
              
              return (
                <div className="col-33 mb-30" key={post.id}>
                  <div className="blog-item">
                    {featuredImage && (
                      <div className="blog-img mb-20">
                        <Link href={`/blog/${post.slug}`}>
                          <img src={featuredImage} alt={post.title.rendered} className="wd-100" />
                        </Link>
                      </div>
                    )}
                    <div className="blog-content">
                      <div className="meta mb-10 tx-14 cl-gray">
                        <span><i className="fa fa-calendar mr-5"></i> {date}</span>
                      </div>
                      <h3 className="title-h4 mb-15">
                        <Link href={`/blog/${post.slug}`} dangerouslySetInnerHTML={{ __html: post.title.rendered }}></Link>
                      </h3>
                      <div className="excerpt mb-20" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered.substring(0, 100) + '...' }}></div>
                      <Link href={`/blog/${post.slug}`} className="read-more tx-blue tx-bold">Read More <i className="fa fa-arrow-right ml-5"></i></Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
