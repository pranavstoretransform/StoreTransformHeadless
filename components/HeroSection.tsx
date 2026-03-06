'use client';
import React from 'react';

interface HeroProps {
  welcome_text?: string;
  tranceform_your_text?: string;
  tranceform_your_sub_text?: string;
  banner_button?: {
    title: string;
    url: string;
  };
  background_image_section_1?: string;
}

const HeroSection = ({
  welcome_text = "Welcome to Store Transform",
  tranceform_your_text = "Driving Innovation with <br/> <span class=\"tx-org\">Agile AI-Enhanced</span> Digital Solutions",
  tranceform_your_sub_text = "Unleash Your Brand’s Full Potential with <span class=\"tx-org\">360° Services All Under One Roof</span> - Let’s Soar to New Heights Together",
  banner_button = { title: "Get Instant Assistance", url: "#" },
  background_image_section_1 = "https://storetransform.com/wp-content/uploads/2025/12/United-st.gif"
}: HeroProps) => {
  return (
    <section className="hero-wrapper">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${background_image_section_1})` }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="hero-welcome">
            {welcome_text}
          </p>

          <h1
            className="hero-heading"
            dangerouslySetInnerHTML={{ __html: tranceform_your_text }}
          >
          </h1>

          <p
            className="hero-subtext"
            dangerouslySetInnerHTML={{ __html: tranceform_your_sub_text }}
          >
          </p>

          <a href={banner_button?.url || "#"} className="bt-btn chat-boat-btn">
            {banner_button?.title || "Get Instant Assistance"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
