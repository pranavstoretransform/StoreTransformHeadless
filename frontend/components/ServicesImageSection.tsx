import React from 'react';
import Image from 'next/image';

interface ServicesImageSectionProps {
  image?: string;
}

const ServicesImageSection = ({
  image = "https://storetransform.com/wp-content/uploads/2022/12/hm-teslt-_1_.webp"
}: ServicesImageSectionProps) => {
  return (
    <section className="hm-sec-cutmerig">
      <div className="container-fluid rowss">
        <div className="row-inner hm-custmerig-inner">
          <div className="hm-custmer-ig wd-100">
            <Image 
              src={image} 
              alt="Shakehands" 
              width={1920} 
              height={600} 
              className="mx-100" 
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesImageSection;
