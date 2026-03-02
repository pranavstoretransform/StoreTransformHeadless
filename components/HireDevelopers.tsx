'use client';
 
import Link from 'next/link';
 
export default function HireDevelopers() {
 
  const items = [
    {
      icon: "https://storetransform.com/wp-content/uploads/2025/12/Frame-404-e1758104761909.webp",
      title: "Ai Expert",
      url: "/contact-us/"
    },
    {
      icon: "https://storetransform.com/wp-content/uploads/2025/12/st-wodpres.webp",
      title: "WordPress Expert",
      url: "/hire-wordpress-developer/"
    },
    {
      icon: "https://storetransform.com/wp-content/uploads/2025/12/shopify.webp",
      title: "Shopify Expert",
      url: "/hire-shopify-developer/"
    },
    {
      icon: "https://storetransform.com/wp-content/uploads/2025/12/st-mageto.webp",
      title: "Magento Expert",
      url: "/hire-magento-developer/"
    },
    {
      icon: "https://storetransform.com/wp-content/uploads/2025/12/seo1.webp",
      title: "SEO Expert",
      url: "/search-engine-optimization/"
    },
    {
      icon: "https://storetransform.com/wp-content/uploads/2025/12/ppc.webp",
      title: "PPC Expert",
      url: "/ppc-advertising/"
    }
  ];
 
  return (
    <section className="hire-section">
      <div className="hire-container">
 
        <div className="hire-header">
          <h2>Hire Our Experts</h2>
          <p>
            Our team is a collective of specialized minds, each a leader in their field.
            We bring deep knowledge and proven expertise to every project, ensuring your success.
          </p>
        </div>
 
        <div className="hire-grid">
          {items.map((item, index) => (
            <Link href={item.url} key={index} className="hire-card">
              <img src={item.icon} alt={item.title} />
              <h5>{item.title}</h5>
            </Link>
          ))}
        </div>
 
      </div>
    </section>
  );
}