'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface TabItem {
  id: string;
  title: string;
  content: string;
  image?: string;
}

interface TabsSectionProps {
  title?: string;
  description?: string;
  tabs?: TabItem[];
}

const TabsSection = ({
  title = "Our Innovative Process",
  description = "We follow a structured approach to deliver high-quality results.",
  tabs = []
}: TabsSectionProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const defaultTabs: TabItem[] = [
    {
      id: "tab1",
      title: "Discovery",
      content: "<p>We start by understanding your business goals, target audience, and requirements. This phase involves deep research and strategic planning to ensure we build the right solution for you.</p>",
      image: "https://storetransform.com/wp-content/uploads/2024/05/lpo-tab-bg-1.png"
    },
    {
      id: "tab2",
      title: "Design",
      content: "<p>Our design team creates visually stunning and user-friendly interfaces. We focus on UX/UI best practices to ensure your users have a seamless experience across all devices.</p>",
      image: "https://storetransform.com/wp-content/uploads/2024/05/lpo-tab-bg-1.png"
    },
    {
      id: "tab3",
      title: "Development",
      content: "<p>We bring the designs to life using the latest technologies. Our developers write clean, efficient, and scalable code to ensure your website performs optimally.</p>",
      image: "https://storetransform.com/wp-content/uploads/2024/05/lpo-tab-bg-1.png"
    },
    {
      id: "tab4",
      title: "Launch",
      content: "<p>After rigorous testing, we launch your website. We ensure everything is configured correctly for a smooth go-live experience and provide post-launch support.</p>",
      image: "https://storetransform.com/wp-content/uploads/2024/05/lpo-tab-bg-1.png"
    }
  ];

  const displayTabs = tabs.length > 0 ? tabs : defaultTabs;

  return (
    <section className="lpd-sec-innovative sec-padd">
      <div className="container">
        <div className="row-inner">
          <div className="col-100 tx-center mb-50">
            <h2 className="title-h2">{title}</h2>
            {description && <p dangerouslySetInnerHTML={{ __html: description }} />}
          </div>
          
          <div className="col-100">
            {/* Tabs Navigation */}
            <ul className="tabs-nav br-flex al-center justify-center mb-30" style={{ gap: '20px', justifyContent: 'center' }}>
              {displayTabs.map((tab, index) => (
                <li 
                  key={tab.id} 
                  className={activeTab === index ? 'active' : ''}
                  onClick={() => setActiveTab(index)}
                  style={{ cursor: 'pointer', padding: '10px 20px', borderBottom: activeTab === index ? '2px solid #ff5638' : 'none' }}
                >
                  <span className="title-h5">{tab.title}</span>
                </li>
              ))}
            </ul>

            {/* Tabs Content */}
            <div className="tabs-content-cust">
              {displayTabs.map((tab, index) => (
                <div 
                  key={tab.id} 
                  id={tab.id} 
                  className={`tab-content ${activeTab === index ? 'active' : ''}`}
                  style={{ display: activeTab === index ? 'block' : 'none' }}
                >
                  <div className="row-inner br-flex al-center">
                    <div className="col-50 pr-30">
                      <h3 className="title-h3 mb-20">{tab.title}</h3>
                      <div dangerouslySetInnerHTML={{ __html: tab.content }} />
                    </div>
                    <div className="col-50">
                      {tab.image && (
                        <div className="tab-content-image">
                          <Image 
                            src={tab.image} 
                            alt={tab.title} 
                            width={600} 
                            height={400} 
                            style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabsSection;
