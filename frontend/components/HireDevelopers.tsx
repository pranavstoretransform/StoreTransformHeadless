import React from 'react';
import Link from 'next/link';

interface HireItem {
  hire_developers_icon_image_new?: string;
  hire_developers_heading_new?: string;
  hire_developers_link_url_new?: {
    title: string;
    url: string;
    target: string;
  };
}

interface HireDevelopersProps {
  title?: string;
  description?: string;
  items?: HireItem[];
}

const HireDevelopers = ({
  title = "Hire Our Experts",
  description = "Our team is a collective of specialized minds, each a leader in their field. We bring deep knowledge and proven expertise to every project, ensuring your success.",
  items = []
}: HireDevelopersProps) => {
  const defaultItems = [
    {
      hire_developers_icon_image_new: "https://storetransform.com/wp-content/uploads/2025/12/Frame-404-e1758104761909.webp",
      hire_developers_heading_new: "Ai Expert",
      hire_developers_link_url_new: { title: "", url: "/contact-us/", target: "" }
    },
    {
      hire_developers_icon_image_new: "https://storetransform.com/wp-content/uploads/2025/12/st-wodpres.webp",
      hire_developers_heading_new: "WordPress Expert",
      hire_developers_link_url_new: { title: "", url: "/hire-wordpress-developer/", target: "" }
    },
    {
      hire_developers_icon_image_new: "https://storetransform.com/wp-content/uploads/2025/12/shopify.webp",
      hire_developers_heading_new: "Shopify Expert",
      hire_developers_link_url_new: { title: "", url: "/hire-shopify-developer/", target: "" }
    },
    {
      hire_developers_icon_image_new: "https://storetransform.com/wp-content/uploads/2025/12/st-mageto.webp",
      hire_developers_heading_new: "Magento Expert",
      hire_developers_link_url_new: { title: "", url: "/hire-magento-developer/", target: "" }
    },
    {
      hire_developers_icon_image_new: "https://storetransform.com/wp-content/uploads/2025/12/seo1.webp",
      hire_developers_heading_new: "SEO Expert",
      hire_developers_link_url_new: { title: "", url: "/search-engine-optimization/", target: "" }
    },
    {
      hire_developers_icon_image_new: "https://storetransform.com/wp-content/uploads/2025/12/ppc.webp",
      hire_developers_heading_new: "PPC Expert",
      hire_developers_link_url_new: { title: "", url: "/ppc-advertising/", target: "" }
    }
  ];

  const displayItems = items && items.length > 0 ? items : defaultItems;

  return (
    <section className="hrd-sec-webdeveloper sec-padd home2-webdeveloper ed_section bg-black">
      <div className="container rowss">
        <div className="row-inner hrd-wbdevelper-inner1 wht">
          <div className="hrd-wbdevltx3 wd-100 mx-60 tx-center tx-20">
            <h2>{title}</h2>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
          </div>
        </div>

        <div className="row-inner hrd-wbdevelper-inner2 br-grid3">
          {displayItems.map((item, index) => (
            <div className="hrd-webrbx wd-100" key={index}>
              <Link href={item.hire_developers_link_url_new?.url || '#'} aria-label={item.hire_developers_heading_new}>
                <div className="hrd-webig">
                  {item.hire_developers_icon_image_new && typeof item.hire_developers_icon_image_new === 'string' && (
                    <img src={item.hire_developers_icon_image_new} className="mx-100" alt={item.hire_developers_heading_new} />
                  )}
                  <h5>{item.hire_developers_heading_new}</h5>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HireDevelopers;
