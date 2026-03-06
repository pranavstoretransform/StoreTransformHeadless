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

  ];

  const displayItems = items && items.length > 0 ? items : defaultItems;

  return (
    <section className="wd-sec-wexpert sec-padd bg-black">
      <div className="container rowss">
        <div className="row-inner wd-wexpert-inner wht br-flex">

          <div className="col-50 wd-wexpert2 sp-100">
            <img src={image} className="mx-100" alt="Why Choose Us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
