import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="colophon" className="site-footer">
      <section className="site-footer home2-footers">
        <div className="foot-in">
          <div className="footer-inner">
            <div className="custom-footer-content ftr-logos tx-wht">
              <div className="ftr-size-logo">
                <img src="https://storetransform.com/wp-content/uploads/2023/06/store-logo.png" className="mx-100" alt="Logo" />
              </div>
              <p>Transforming businesses with innovative, AI-powered IT solutions development, design, and marketing. Our expertise drives growth, enhances user experiences, and fosters seamless technological integration, all to deliver real, measurable success.</p>
            </div>

            <div className="custom-footer-content ftr-services">
              <div className="widget">
                <h3 className="widget-title">Our Services</h3>
                <div className="menu-services-container">
                  <ul id="menu-services" className="menu">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6208"><Link href="/wordpress-development-services/">WordPress Development</Link></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6209"><Link href="/shopify-development-services/">Shopify Development</Link></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6210"><Link href="/magento-development-services/">Magento Development</Link></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6211"><Link href="/digital-marketing/">Digital Marketing</Link></li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6212"><Link href="/search-engine-optimization/">SEO Services</Link></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="custom-footer-content wht ftr-follows">
              <div className="widget">
                <h3 className="widget-title">Contact us</h3>
                <ul className="menu">
                  <li><a href="mailto:hr@storetransform.com"><i className="fa fa-envelope" aria-hidden="true"></i> hr@storetransform.com</a></li>
                  <li><a href="tel:+919512039025"><i className="fa fa-phone" aria-hidden="true"></i>+91 95120 39025</a></li>
                </ul>

                <h5>Follow us</h5>
                <ul className="social-icon">
                  <li><a href="https://linkedin.com/company/storetransform" target="_blank" rel="noopener noreferrer"><i className="fa fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                  <li><a href="https://www.instagram.com/storetransform/" target="_blank" rel="noopener noreferrer"><i className="fa fa fa-instagram" aria-hidden="true"></i></a></li>
                  <li><a href="https://twitter.com/StoreTransform/" target="_blank" rel="noopener noreferrer"><i className="fa fa fa-twitter-square" aria-hidden="true"></i></a></li>
                  <li><a href="https://www.facebook.com/storetransform/" target="_blank" rel="noopener noreferrer"><i className="fa fa fa-facebook-square" aria-hidden="true"></i></a></li>
                  <li><a href="https://www.pinterest.com/storetransform/" target="_blank" rel="noopener noreferrer"><i className="fa fa fa-pinterest-square" aria-hidden="true"></i></a></li>
                  <li><a href="https://www.youtube.com/channel/UCAcRpbnjR-LXJn35WU2i__Q" target="_blank" rel="noopener noreferrer"><i className="fa fa fa-youtube-play" aria-hidden="true"></i></a></li>
                </ul>
              </div>
            </div>

            <div className="custom-footer-content ftr-address">
              <div id="sidebar">
                <div id="custom_html-3" className="widget_text widget widget_custom_html">
                  <h3 className="widget-title">Address</h3>
                  <div className="textwidget custom-html-widget">
                    <h4 className="title-h5">India Office</h4>
                    <ul className="ul-ctc3 menu">
                      <li>Address: 408 4th Floor, Lilamani Corporate Heights, Opp Ramapir Tekro BRTS Stop, Nava Vadaj, Ahmedabad – 380013 Gujarat, India.</li>
                    </ul>
                    <br/>
                    <h4 className="title-h5">Canada Office</h4>
                    <ul className="ul-ctc3 menu">
                      <li>Address: 10 Baffin Crescent, Brampton ON L7A 4K6, Canada</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="site-info">
          <div className="powered-by">
            <p>Copyright 2026 © Store Transform. All rights Reserveds</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
