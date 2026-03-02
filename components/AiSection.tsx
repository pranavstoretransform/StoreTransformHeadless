import React from 'react';

interface AiModel {
  logo?: string;
}

interface AiSectionProps {
  title?: string;
  description?: string;
  models?: AiModel[];
}

const AiSection = ({
  title = "AI Models We Work",
  description = "Our team of experts is dedicated to building innovative products that solve real-world problems. By partnering with us, you gain a competitive edge with solutions that are scalable, reliable, and built to evolve with your business.",
  models = []
}: AiSectionProps) => {
  const defaultModels = [
    { logo: "https://storetransform.com/wp-content/uploads/2025/09/image-72.png" },
    { logo: "https://storetransform.com/wp-content/uploads/2025/09/image-71.png" },
    { logo: "https://storetransform.com/wp-content/uploads/2025/09/image-70.png" },
    { logo: "https://storetransform.com/wp-content/uploads/2025/09/image-69.png" },
    { logo: "https://storetransform.com/wp-content/uploads/2025/09/Frame-403.png" },
    { logo: "https://storetransform.com/wp-content/uploads/2025/09/image-67.png" },
    { logo: "https://storetransform.com/wp-content/uploads/2025/09/image-64.png" },
    { logo: "https://storetransform.com/wp-content/uploads/2025/09/image-63.png" },
    { logo: "https://storetransform.com/wp-content/uploads/2025/09/image-62.png" },
    { logo: "https://storetransform.com/wp-content/uploads/2025/09/image-61.png" },
    { logo: "https://storetransform.com/wp-content/uploads/2025/09/image-60.png" },
    { logo: "https://storetransform.com/wp-content/uploads/2025/09/image-59.png" },
    { logo: "https://storetransform.com/wp-content/uploads/2025/09/image-58-1.png" }
  ];

  const displayModels = models && models.length > 0 ? models : defaultModels;
  // Duplicate for infinite scroll
  const marqueeModels = [...displayModels, ...displayModels];

  return (
    <div className="ai-section">
      <div className="container hm-joinst2 mx-60 tx-center pb-10 wd-100">
        <h2 className="ai-title">{title}</h2>
        <div className="ai-content">
          <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
      </div>
      <div className="logo-marquee">
        <div className="logo-marquee-track">
          {marqueeModels.map((model, index) => (
            <div className="logo-item" key={index}>
              {model.logo && typeof model.logo === 'string' && (
                <img src={model.logo} alt="AI Model" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiSection;
