import React from 'react';
import Image from 'next/image';

interface IntroSectionProps {
  title?: string;
  content?: string;
  image?: string;
}

const IntroSection = ({
  title = 'Transform Your Business with.. <span class="tx-org">Our Tailored Services</span>',
  content = `<p><span style="font-weight: 400">At Store Transform, we provide more than just digital services—we provide a competitive edge through the power of AI. We are a leading provider of AI-powered 360-degree digital solutions, from web design and development to marketing. By integrating AI into every aspect of our work, we deliver tailored strategies that are not only built to meet your unique needs but are also optimized for maximum performance.</span></p>
<p><span style="font-weight: 400">With years of experience working with leading brands, our holistic, AI-driven approach creates impactful online presences that drive sales and enhance brand visibility with unmatched efficiency. From stunning AI-optimized website designs to comprehensive AI marketing strategies that predict trends, we provide everything you need to succeed.</span></p>`,
  image = "https://storetransform.com/wp-content/uploads/2025/12/Group-1.webp"
}: IntroSectionProps) => {
  return (
    <section className="ms-sec-busnes2 sec-padd all-src-sec2 ed_section" style={{ padding: '80px 0', backgroundColor: '#fff' }}>
      <div className="container">
        {/* Added dynamic flex-direction and alignment */}
        <div className="row-inner ms-busnes-inner ms-src-part2 tab-rws br-flex al-center" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>
          
          {/* Content Column */}
          <div className="col-50 ms-bsnes1 sp-100" style={{ flex: '1', minWidth: '320px' }}>
            <h2 
              className="intro-title" 
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '700', lineHeight: '1.2', marginBottom: '24px' }}
              dangerouslySetInnerHTML={{ __html: title }}
            ></h2>
            
            <div 
              className="intro-content" 
              style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#444', marginBottom: '30px' }}
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </div>

          {/* Image Column */}
          <div className="col-50 ms-bsnes2 sp-100" style={{ flex: '1', minWidth: '320px', position: 'relative' }}>
            <div className="image-wrapper" style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
              <Image 
                src={image} 
                alt="Intro Image" 
                width={700} 
                height={500} 
                className="mx-100" 
                priority
                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntroSection;