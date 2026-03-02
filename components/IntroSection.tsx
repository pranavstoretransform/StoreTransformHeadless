// import React from 'react';
// import Image from 'next/image';

// interface IntroSectionProps {
//   title?: string;
//   content?: string;
//   image?: string;
// }

// const IntroSection = ({
//   title = 'Transform Your Business with.. <span class="tx-org">Our Tailored Services</span>',
//   content = `<p><span style="font-weight: 400">At Store Transform, we provide more than just digital services—we provide a competitive edge through the power of AI. We are a leading provider of AI-powered 360-degree digital solutions, from web design and development to marketing. By integrating AI into every aspect of our work, we deliver tailored strategies that are not only built to meet your unique needs but are also optimized for maximum performance.</span></p>
// <p><span style="font-weight: 400">With years of experience working with leading brands, our holistic, AI-driven approach creates impactful online presences that drive sales and enhance brand visibility with unmatched efficiency. From stunning AI-optimized website designs to comprehensive AI marketing strategies that predict trends, we provide everything you need to succeed.</span></p>`,
//   image = "https://storetransform.com/wp-content/uploads/2025/12/Group-1.webp"
// }: IntroSectionProps) => {
//   return (
//     <section className="ms-sec-busnes2 sec-padd all-src-sec2 ed_section">
//       <div className="container rowss">
//         <div className="row-inner ms-busnes-inner ms-src-part2 tab-rws br-flex al-center">
//           <div className="col-50 ms-bsnes1 sp-100">
//             <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
//             <div dangerouslySetInnerHTML={{ __html: content }}></div>
//             <div className="buton">
//             </div>
//           </div>
//           <div className="col-50 ms-bsnes2 sp-100">
//             <Image 
//               src={image} 
//               alt="Intro Image" 
//               width={600} 
//               height={400} 
//               className="mx-100" 
//               style={{ width: '100%', height: 'auto' }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IntroSection;

//IntroSection.tsx
 
'use client';
 
export default function IntroSection() {
  return (
    <section className="services-section">
      <div className="services-container">
 
        {/* LEFT CONTENT */}
        <div className="services-left">
          <h2>
            Transform Your Business with..
            <br />
            <span>Our Tailored Services</span>
          </h2>
 
          <p>
            At Store Transform, we provide more than just digital services—we
            provide a competitive edge through the power of AI. We are a
            leading provider of AI-powered 360-degree digital solutions, from
            web design and development to marketing.
          </p>
 
          <p>
            With years of experience working with leading brands, our holistic,
            AI-driven approach creates impactful online presences that drive
            sales and enhance brand visibility with unmatched efficiency.
          </p>
        </div>
 
        {/* RIGHT IMAGES */}
        <div className="services-right">
 
          <div className="bottom-row">
            <img
              src="https://storetransform.com/wp-content/uploads/2025/12/Group-1.webp"
              alt="AI Marketing"
            />
          </div>
 
        </div>
      </div>
 
      <style jsx>{`
        .services-section {
          padding: 90px 0;
        }
 
        .services-container {
          width: 90%;
          max-width: 1300px;
          margin: auto;
          display: flex;
          gap: 70px;
          align-items: center;
        }
 
        .services-left {
          flex: 1;
        }
 
        .services-left h2 {
          font-size: 42px;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 25px;
        }
 
        .services-left h2 span {
          color: #ff4b2b;
        }
 
        .services-left p {
          font-size: 18px;
          line-height: 1.7;
          margin-bottom: 20px;
          color: #333;
        }
 
        .services-right {
          flex: 1;
        }
 
        .top-row {
          display: flex;
          gap: 25px;
          margin-bottom: 25px;
        }
 
        .top-row img {
          width: 100%;
          border-radius: 16px;
          object-fit: cover;
        }
 
        .bottom-row img {
          width: 100%;
          border-radius: 16px;
          object-fit: cover;
        }
 
        /* Responsive */
        @media (max-width: 992px) {
          .services-container {
            flex-direction: column-reverse;
          }
 
          .services-left h2 {
            font-size: 30px;
          }
 
          .top-row {
            flex-direction: column;
          }
        }
      `}</style>
    </section>
  );
}
 