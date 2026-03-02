import React from 'react';
import Image from 'next/image';

interface PageBannerProps {
  image?: string;
  title: string;
  subtitle?: string;
}

const PageBanner = ({ image, title, subtitle }: PageBannerProps) => {
  return (
    <section className="page-banner" style={{ position: 'relative', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <div className="overlay" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', zIndex: 1 }}></div>
      {image && (
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      )}
      <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center', color: '#fff' }}>
        <h1 className="title-h1" dangerouslySetInnerHTML={{ __html: title }} />
        {subtitle && <p className="title-h4" dangerouslySetInnerHTML={{ __html: subtitle }} style={{ marginTop: '10px' }} />}
      </div>
    </section>
  );
};

export default PageBanner;
