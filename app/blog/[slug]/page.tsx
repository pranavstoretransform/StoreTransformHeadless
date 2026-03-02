import React from 'react';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/api';
import PageBanner from '@/components/PageBanner';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  return {
    title: post.title.rendered,
    description: post.excerpt.rendered.replace(/<[^>]*>?/gm, ''), // Strip HTML tags
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return (
    <>
      <PageBanner 
        title={post.title.rendered}
        image={featuredImage || 'https://storetransform.com/wp-content/uploads/2022/12/blog-banner.jpg'}
      />
      
      <section className="blog-single-sec sec-padd">
        <div className="container">
          <div className="row-inner">
            <div className="col-100 mx-80">
              <div 
                className="blog-content" 
                dangerouslySetInnerHTML={{ __html: post.content.rendered }} 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
