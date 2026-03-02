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
    <section className="ms-sec-busnes2 sec-padd all-src-sec2 ed_section">
      <div className="container rowss">
        <div className="row-inner ms-busnes-inner ms-src-part2 tab-rws br-flex al-center">
          <div className="col-50 ms-bsnes1 sp-100">
            <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
            <div className="buton">
            </div>
          </div>
          <div className="col-50 ms-bsnes2 sp-100">
            <Image 
              src={image} 
              alt="Intro Image" 
              width={600} 
              height={400} 
              className="mx-100" 
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
