import React from "react";
import Link from "next/link";
import Image from "next/image";

interface HireItem {
  hire_developers_icon_image_new?: string;
  hire_developers_heading_new?: string;
  hire_developers_link_url_new?: {
    title?: string;
    url?: string;
    target?: string;
  };
}

interface HireDevelopersProps {
  title?: string;
  description?: string;
  items?: HireItem[];
}

const HireDevelopers = ({
  title,
  description,
  items = []
}: HireDevelopersProps) => {
  return (
    <section className="hire-section">
      <div className="hire-container">
        <div className="hire-header">
          {title && <h2>{title}</h2>}

          {description && (
            <p
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
          )}
        </div>

        <div className="hire-grid">
          {items.map((item, index) => {
            const image = item?.hire_developers_icon_image_new;
            const heading = item?.hire_developers_heading_new;
            const link = item?.hire_developers_link_url_new?.url || "#";
            const target = item?.hire_developers_link_url_new?.target || "_self";

            return (
              <Link
                href={link}
                target={target}
                key={index}
                className="hire-card"
                aria-label={heading}
              >
                {image && (
                  <div className="hire-icon">
                    <Image
                      src={image}
                      alt={heading || "Expert"}
                      width={120}
                      height={120}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain"
                      }}
                    />
                  </div>
                )}

                {heading && <h5>{heading}</h5>}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HireDevelopers;