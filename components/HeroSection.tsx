// 'use client';

// import React from 'react';
// import Image from 'next/image';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// interface HeroProps {
//   welcome_text?: string;
//   tranceform_your_text?: string;
//   tranceform_your_sub_text?: string;
//   banner_button?: {
//     title: string;
//     url: string;
//   };
//   background_image_section_1?: string;
// }

// const HeroSection = ({
//   welcome_text = "Welcome to Store Transform",
//   tranceform_your_text = "Driving Innovation with <span class=\"tx-org\"><br/>Agile AI-Enhanced</span> Digital Solutions",
//   tranceform_your_sub_text = "Unleash Your Brand’s Full Potential with <span class=\"tx-org\">360° Services All Under One Roof</span> - Let’s Soar to New Heights Together",
//   banner_button = { title: "Get Instant Assistance", url: "#" },
//   background_image_section_1 = "https://storetransform.com/wp-content/uploads/2025/12/United-st.gif"
// }: HeroProps) => {
//   return (
//     <section className="hm-slider bl-overlay bg-1930 home2-baner ed_section">
//       <div className="container-fluid">
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           spaceBetween={0}
//           slidesPerView={1}
//           navigation={{
//             nextEl: '.swiper-button-next',
//             prevEl: '.swiper-button-prev',
//           }}
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 5000 }}
//           loop={true}
//           className="hm-swiper"
//         >
//           <SwiperSlide>
//             <div 
//               className="swiper-slide-content"
//               style={{ 
//                 position: 'relative',
//                 height: 'calc(100vh - 90px)',
//                 width: '100%',
//               }}
//             >
//               <Image
//                 src={background_image_section_1}
//                 alt="Hero Background"
//                 fill
//                 priority
//                 style={{ objectFit: 'cover' }}
//                 className="hero-bg-image"
//               />
//               <div
//                 className="hero-overlay"
//                 style={{
//                   position: 'absolute',
//                   inset: 0,
//                   background: 'rgba(0, 0, 0, 0.5)',
//                 }}
//               />
//               <div
//                 className="hm-bnrtx wht"
//                 style={{
//                   position: 'absolute',
//                   inset: 0,
//                   display: 'flex',
//                   flexDirection: 'column',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   textAlign: 'center',
//                   color: '#fff',
//                   padding: '0 20px',
//                   zIndex: 1,
//                 }}
//               >
//                 <div className="hm-bnr1 sp-100">
//                   <h3 className="title-h5">{welcome_text}</h3>
//                   <h1 
//                     className="title-h2" 
//                     dangerouslySetInnerHTML={{ __html: tranceform_your_text }}
//                   />
//                   <h3 
//                     className="title-h4 tx-wht"
//                     dangerouslySetInnerHTML={{ __html: tranceform_your_sub_text }}
//                   />
//                   <div className="buton">
//                     <a href={banner_button.url} className="bt-btn chat-boat-btn"><span>{banner_button.title}</span></a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
          
//           <div className="swiper-button-next"></div>
//           <div className="swiper-button-prev"></div>
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


//banners section Homepage
 
"use client";
 
export default function HeroSection() {

  return (
<section className="hero-wrapper">
<div className="hero-bg">
<div className="hero-overlay"></div>
 
        <div className="hero-content">
<p className="hero-welcome">

            Welcome to Store Transform
</p>
 
          <h1 className="hero-heading">

            Driving Innovation with
<br />
<span>Agile AI-Enhanced</span> Digital Solutions
</h1>
 
          <p className="hero-subtext">

            Unleash Your Brand’s Full Potential with{" "}
<span>360° Services All Under One Roof</span> – Let’s Soar to

            New Heights Together
</p>
 
          <a href="#" className="bt-btn chat-boat-btn">

            Get Instant Assistance
</a>
</div>
</div>
 
      <style jsx>{`

        /* Exact banner height (header = 90px approx) */

        .hero-wrapper {

          height: calc(100vh - 90px);

          width: 100%;

        }
 
        .hero-bg {

          position: relative;

          height: 70%;

          width: 100%;

          background-image: url("https://storetransform.com/wp-content/uploads/2025/12/United-st.gif");

          background-size: cover;

          background-position: center;

          background-repeat: no-repeat;

        }
 
        /* Exact overlay darkness */

        .hero-overlay {

          position: absolute;

          inset: 0;

          background: rgba(0, 0, 0, 0.50);

        }
 
        .hero-heading{

          color: #fff;

        }
 
        .hero-content {

          position: absolute;

          inset: 0;

          display: flex;

          flex-direction: column;

          justify-content: center;

          align-items: center;

          text-align: center;

          color: white;

          padding: 0 20px;

        }
 
        .hero-welcome {

          font-size: 18px;

          font-weight: 500;

          margin-bottom: 18px;

          letter-spacing: 0.5px;

        }
 
        /* Exact main heading size */

        .hero-heading {

          font-size: 56px;

          font-weight: 700;

          line-height: 1.2;

          margin-bottom: 22px;

        }
 
        .hero-heading span {

          color: #ff4b2b;

        }
 
        /* Exact sub text */

        .hero-subtext {

          font-size: 20px;

          max-width: 900px;

          line-height: 1.6;

          margin-bottom: 38px;

        }
 
        .hero-subtext span {

          color: #ff4b2b;

        }
 
        .hero-btn {

          background: #ff4b2b;

          padding: 14px 36px;

          border-radius: 6px;

          font-size: 18px;

          font-weight: 500;

          color: white;

          text-decoration: none;

          transition: 0.3s ease;

        }
 
        .hero-btn:hover {

          background: #e63e1f;

        }
 
        /* Responsive */

        @media (max-width: 992px) {

          .hero-heading {

            font-size: 40px;

          }

        }
 
        @media (max-width: 768px) {

          .hero-heading {

            font-size: 30px;

          }
 
          .hero-subtext {

            font-size: 16px;

          }

        }

      `}</style>
</section>

  );

}
 