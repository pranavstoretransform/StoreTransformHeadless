import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface MissionItem {
  heading: string;
  content: string;
  image: string;
}

interface OurMissionProps {
  image?: string;
  content?: string;
  button?: {
    title: string;
    url: string;
    target: string;
  };
  items?: MissionItem[];
}

const OurMission = ({ image, content, button, items }: OurMissionProps) => {
  return (
    <section className="sec-padd our-mission-sec">
      <div className="container">
        {/* Main Mission Content */}
        <div className="row-inner br-flex al-center mb-50">
          <div className="col-50 sp-100">
            {image && (
              <Image 
                src={image} 
                width={600} 
                height={400} 
                alt="Our Mission"
                style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
              />
            )}
          </div>
          <div className="col-50 sp-100 pd-l-50">
            <h2 className="mb-20">Our Mission</h2>
            {content && <div dangerouslySetInnerHTML={{ __html: content }} className="mb-30" />}
            {button && button.url && (
              <Link href={button.url} className="btn-main" target={button.target || '_self'}>
                {button.title}
              </Link>
            )}
          </div>
        </div>

        {/* Mission Repeater Items */}
        {items && items.length > 0 && (
          <div className="row-inner br-flex top-gap-50">
            {items.map((item, index) => (
              <div key={index} className="col-50 sp-100 mb-30">
                <div className="mission-card" style={{ padding: '30px', background: '#f9f9f9', borderRadius: '10px', height: '100%' }}>
                  <div className="icon mb-20">
                    {item.image && (
                      <Image 
                        src={item.image} 
                        width={60} 
                        height={60} 
                        alt={item.heading}
                      />
                    )}
                  </div>
                  <h3>{item.heading}</h3>
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default OurMission;
