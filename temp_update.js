const fs = require('fs');
const path = require('path');

const tsxPath = path.join(__dirname, 'components', 'ServicesDetailed.tsx');
let tsxContent = fs.readFileSync(tsxPath, 'utf8');

const tsxReplacement = `  return (
    <section className="services-detailed-section ed_section">
      <div className="services-detailed-container">
        <div className="services-detailed-header">
          <h2>{title}</h2>
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>

        {/* Desktop Grid */}
        <div className="services-detailed-grid">
          {displayServices.map((item, index) => (
            <div className="services-detailed-card" key={index}>
              <div className="img-wrapper">
                {item.image_service_new && (
                  <Image 
                    src={item.image_service_new} 
                    alt={item.heading_service_new || 'Service Image'} 
                    width={500} 
                    height={300}
                    style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                  />
                )}
              </div>
              <div className="text-wrapper">
                <h4>{item.heading_service_new}</h4>
                <p dangerouslySetInnerHTML={{ __html: item.sub_text_sevice_new || '' }}></p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="services-detailed-mobile-slider">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="services-detailed-swiper"
          >
            {displayServices.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="services-detailed-card">
                  <div className="img-wrapper">
                    {item.image_service_new && (
                      <Image 
                        src={item.image_service_new} 
                        alt={item.heading_service_new || 'Service Image'} 
                        width={500} 
                        height={300}
                        style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                      />
                    )}
                  </div>
                  <div className="text-wrapper">
                    <h4>{item.heading_service_new}</h4>
                    <p dangerouslySetInnerHTML={{ __html: item.sub_text_sevice_new || '' }}></p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );`;

tsxContent = tsxContent.replace(/return \([\s\S]*?\);/, tsxReplacement);
fs.writeFileSync(tsxPath, tsxContent, 'utf8');

const cssPath = path.join(__dirname, 'app', 'globals.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

const cssToAppend = `
/* ===== ServicesDetailed.tsx ===== */
.services-detailed-section {
  padding: 80px 0;
  background-color: #ffffff;
}

.services-detailed-container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
}

.services-detailed-header {
  text-align: center;
  margin-bottom: 50px;
}

.services-detailed-header h2 {
  font-size: 36px;
  font-weight: 700;
  color: #111;
  margin-bottom: 15px;
}

.services-detailed-header p {
  font-size: 16px;
  color: #444;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
}

.services-detailed-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}

.services-detailed-card {
  background: #ffffff;
  border-radius: 16px;
  border: 1px solid #eaeaea;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.04);
  display: flex;
  align-items: center;
  padding: 24px;
  gap: 24px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
}

.services-detailed-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
}

.services-detailed-card .img-wrapper {
  flex: 0 0 45%;
  max-width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.services-detailed-card .img-wrapper img {
  width: 100%;
  height: auto;
  object-fit: contain;
  max-height: 180px;
}

.services-detailed-card .text-wrapper {
  flex: 0 0 55%;
  max-width: 55%;
}

.services-detailed-card h4 {
  font-size: 18px;
  font-weight: 600;
  color: #111;
  margin: 0 0 12px 0;
  line-height: 1.3;
}

.services-detailed-card p {
  font-size: 14px;
  color: #555;
  line-height: 1.6;
  margin: 0;
}

.services-detailed-mobile-slider {
  display: none;
}

@media (max-width: 992px) {
  .services-detailed-grid {
    display: none;
  }
  .services-detailed-mobile-slider {
    display: block;
    width: 100%;
    margin: 0 auto;
  }
  
  .services-detailed-card {
    flex-direction: column;
    text-align: center;
    padding: 24px 20px;
  }
  
  .services-detailed-card .img-wrapper,
  .services-detailed-card .text-wrapper {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .services-detailed-card .img-wrapper {
    margin-bottom: 20px;
  }

  /* Reset swiper padding for dots */
  .services-detailed-swiper {
    padding-bottom: 40px;
  }
  
  .swiper-pagination-bullet-active {
    background: #111;
  }
}
/* ===== ServicesDetailed.tsx END ===== */
`;

if (!cssContent.includes('.services-detailed-section')) {
  fs.writeFileSync(cssPath, cssContent + '\n' + cssToAppend, 'utf8');
}
console.log('done');
