import React from 'react';
import Image from 'next/image';

interface WorkItem {
  title: string;
  heading: string;
  text: string;
  image: string;
  select_div: string;
}

interface WorkApproachProps {
  items: WorkItem[];
}

const WorkApproach = ({ items }: WorkApproachProps) => {
  if (!items) return null;

  return (
    <section className="sec-padd work-approach-sec">
      <div className="container">
        {items.map((item, index) => (
          <div key={index} className="row-inner br-flex al-center mb-50" style={{ marginBottom: '50px' }}>
            {item.select_div === 'text' ? (
              <>
                <div className="col-50 sp-100 pd-r-50">
                  <span className="sub-title">{item.title}</span>
                  <h2 className="mb-20">{item.heading}</h2>
                  <div dangerouslySetInnerHTML={{ __html: item.text }} />
                </div>
                <div className="col-50 sp-100">
                  {item.image && (
                    <Image 
                      src={item.image} 
                      width={600} 
                      height={400} 
                      alt={item.heading}
                      style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                    />
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="col-50 sp-100">
                  {item.image && (
                    <Image 
                      src={item.image} 
                      width={600} 
                      height={400} 
                      alt={item.heading}
                      style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                    />
                  )}
                </div>
                <div className="col-50 sp-100 pd-l-50">
                  <span className="sub-title">{item.title}</span>
                  <h2 className="mb-20">{item.heading}</h2>
                  <div dangerouslySetInnerHTML={{ __html: item.text }} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkApproach;
