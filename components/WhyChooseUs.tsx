import React from 'react';

interface WhyChooseItem {
  number?: string | number;
  text?: string;
  image?: string;
}

interface WhyChooseUsProps {
  title?: string;
  description?: string;
  image?: string;
  items?: WhyChooseItem[];
}

const WhyChooseUs = ({
  title = 'Why Choose <span class="tx-org"> Store Transform?</span>',
  description = `<p><span style="font-weight: 400">We’re your all-in-one business partner, offering a complete suite of services from design to development and marketing with the power of AI. We eliminate the hassle of juggling multiple agencies by providing a 360-degree solution under one roof. Our mission is to transform your business by building custom, innovative solutions that drive real, measurable success.</span></p>
  <p><span style="font-weight: 400">Our team of experts is dedicated to a results-driven approach. We leverage AI-powered services to enhance our strategies, creating smarter campaigns and more personalized user experiences. By partnering with us, you gain a team committed to your vision, focused on building a robust and scalable foundation for your business’s future.</span></p>
  <p><span style="font-weight: 400">We focus on helping you achieving business goals, ensuring our partnership is not just a service but a strategic advantage for your business. Let us handle the complexities so you can focus on what you do best: running your business.</span></p>`,
  image = "https://storetransform.com/wp-content/uploads/2025/12/whychooserighting.webp",
  items = []
}: 
  WhyChooseUsProps) => {
    const defaultItems: WhyChooseItem[] = [
      {
        number: "10+",
        text: "Years of Experience",
        image: "https://storetransform.com/wp-content/uploads/2025/12/year-exp.svg"
      },
      {
        number: "500+",
        text: "Projects Delivered",
        image: "https://storetransform.com/wp-content/uploads/2025/12/project-deliver.svg"
      },
      {
        number: "100%",
        text: "Client Satisfaction",
        image: "https://storetransform.com/wp-content/uploads/2025/12/client-satis.svg"
      },
      {
        number: "24/7",
        text: "Support Available",
        image: "https://storetransform.com/wp-content/uploads/2025/12/support.svg"
      }
    ];

  const displayItems = items && items.length > 0 ? items : defaultItems;

  return (
    <section className="wd-sec-wexpert sec-padd bg-black">
      <div className="container rowss">
        <div className="row-inner wd-wexpert-inner wht br-flex">
          <div className="col-50 wd-wexpert1 sp-100">
            <h2 dangerouslySetInnerHTML={{ __html: title }}></h2>
            <div dangerouslySetInnerHTML={{ __html: description }}></div>
            
            {displayItems && displayItems.length > 0 && (
              <div className="why-choose-list mt-30">
                <div className="row-inner br-grid2">
                  {displayItems.map((item, index) => (
                    <div className="col-50 mb-20" key={index}>
                      <div className="why-item br-flex align-center">
                        {item.image && (
                          <div className="why-icon mr-15">
                            <img src={item.image} alt={item.text || ''} style={{ maxWidth: '40px' }} />
                          </div>
                        )}
                        <div className="why-content">
                          {item.number && <span className="why-number tx-org tx-bold tx-20 block">{item.number}</span>}
                          {item.text && <span className="why-text">{item.text}</span>}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="col-50 wd-wexpert2 sp-100">
            <img src={image} className="mx-100" alt="Why Choose Us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
