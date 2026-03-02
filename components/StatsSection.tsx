import React from 'react';
import Link from 'next/link';

interface StatItem {
  number: string | number;
  text: string;
}

interface StatsSectionProps {
  title?: string;
  description?: string;
  stats?: StatItem[];
}

const StatsSection = ({
  title = "Numbers Speak for Themselves!",
  description = "With a proven track record and a team of experts, we are the architects of your digital success. We harness the power of AI to supercharge our services, helping businesses achieve unprecedented growth—and now it&#8217;s your turn to witness the magic.",
  stats = []
}: StatsSectionProps) => {
  const defaultStats = [
    { number: "13", text: "Years of Experience" },
    { number: "52", text: "Team Members" },
    { number: "32", text: "Countries Served" },
    { number: "1358", text: "Projects Delivered" }
  ];

  const displayStats = stats && stats.length > 0 ? stats : defaultStats;

  return (
    <section className="home2-joinst sec-padd bg-1930 bl-overlay ed_section">
      <div className="container rowss">
        <div className="row-inner hm-joinst-inner br-grid">
          <div className="hm-joinst2 mx-60 tx-center pb-10 wd-100">
            <h2>{title}</h2>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          </div>
          <div className="hm-joinst1 wd-100">
            <div className="hm-jns-inner hv-org br-grid4">
              {displayStats.map((stat, index) => (
                <div className="hm-jns-bx wd-100" key={index}>
                  <div className="ct-spflex">
                    <div className="counter">{stat.number}</div><span>+</span>
                  </div>
                  <p className="tx-18">{stat.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row-inner">
          <div className="wd-100">
            <div className="buton tx-center">
              <Link href="/contact-us/" className="bt-btn">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
