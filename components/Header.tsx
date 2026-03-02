'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenus, setActiveSubmenus] = useState<string[]>([]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Toggle body class if needed for locking scroll, similar to original behavior
    if (!isMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  };

  const toggleSubmenu = (id: string) => {
    if (activeSubmenus.includes(id)) {
      setActiveSubmenus(activeSubmenus.filter(item => item !== id));
    } else {
      setActiveSubmenus([...activeSubmenus, id]);
    }
  };

  return (
    <header id="masthead" className="site-header has-logo has-menu">
      <div className="container">
        <div className="site-branding">
          <div className="site-logo">
            <span className="custom-logo-link">
              <img 
                width="201" 
                height="90" 
                src="https://storetransform.com/wp-content/uploads/2022/06/store-logo.png" 
                className="custom-logo" 
                alt="Store Transform" 
                decoding="async" 
              />
            </span>
          </div>
          {/* <h1 className="screen-reader-text">Store Transform - Web design &amp; Development Agency</h1> */}
        </div>

        <nav id="site-navigation" className={`primary-navigation ${isMenuOpen ? 'toggled' : ''}`} aria-label="Primary menu">
          <div className="menu-button-container">
            <button 
              id="primary-mobile-menu" 
              className="button" 
              aria-controls="primary-menu-list" 
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="dropdown-icon open">Menu
                <svg className="svg-icon" width="24" height="24" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.5 6H19.5V7.5H4.5V6ZM4.5 12H19.5V13.5H4.5V12ZM19.5 18H4.5V19.5H19.5V18Z" fill="currentColor"/></svg>
              </span>
              <span className="dropdown-icon close">Close
                <svg className="svg-icon" width="24" height="24" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 10.9394L5.53033 4.46973L4.46967 5.53039L10.9393 12.0001L4.46967 18.4697L5.53033 19.5304L12 13.0607L18.4697 19.5304L19.5303 18.4697L13.0607 12.0001L19.5303 5.53039L18.4697 4.46973L12 10.9394Z" fill="currentColor"/></svg>
              </span>
            </button>
          </div>
          
          <div className="primary-menu-container">
            <ul id="primary-menu-list" className="menu-wrapper">
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-7410 current_page_item menu-item-7587">
                <Link href="/" aria-current="page">Home</Link>
              </li>
              <li className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3024 ${activeSubmenus.includes('3024') ? 'active' : ''}`}>
                <Link href="/about-us/">About Us</Link>
                <button className="sub-menu-toggle" aria-expanded={activeSubmenus.includes('3024')} onClick={() => toggleSubmenu('3024')}>
                  <span className="icon-plus"><svg className="svg-icon" width="18" height="18" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z" fill="currentColor"/></svg></span>
                  <span className="icon-minus"><svg className="svg-icon" width="18" height="18" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6 11h12v2H6z" fill="currentColor"/></svg></span>
                  <span className="screen-reader-text">Open menu</span>
                </button>
                <ul className="sub-menu">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3076"><Link href="/our-team/">Our Team</Link></li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3078"><Link href="/our-values/">Our Values</Link></li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3079"><Link href="/our-culture/">Our Culture</Link></li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6723"><Link href="/career/">Join Our Team</Link></li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3080"><Link href="/our-portfolio/">Our Portfolio</Link></li>
                </ul>
              </li>
              <li className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-6462 ${activeSubmenus.includes('6462') ? 'active' : ''}`}>
                <Link href="/our-services/">Our Services</Link>
                <button className="sub-menu-toggle" aria-expanded={activeSubmenus.includes('6462')} onClick={() => toggleSubmenu('6462')}>
                  <span className="icon-plus"><svg className="svg-icon" width="18" height="18" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z" fill="currentColor"/></svg></span>
                  <span className="icon-minus"><svg className="svg-icon" width="18" height="18" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6 11h12v2H6z" fill="currentColor"/></svg></span>
                  <span className="screen-reader-text">Open menu</span>
                </button>
                <ul className="sub-menu">
                  <li className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3029 ${activeSubmenus.includes('3029') ? 'active' : ''}`}>
                    <Link href="/web-design/">Web Design Service</Link>
                    <button className="sub-menu-toggle" aria-expanded={activeSubmenus.includes('3029')} onClick={() => toggleSubmenu('3029')}>
                      <span className="icon-plus"><svg className="svg-icon" width="18" height="18" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z" fill="currentColor"/></svg></span>
                      <span className="icon-minus"><svg className="svg-icon" width="18" height="18" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6 11h12v2H6z" fill="currentColor"/></svg></span>
                      <span className="screen-reader-text">Open menu</span>
                    </button>
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3033"><Link href="/ui-ux-design/">UI/UX Design</Link></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3032"><Link href="/custom-web-design-services/">Custom Web Design</Link></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3073"><Link href="/landing-page-design-services/">Landing Page Design</Link></li>
                    </ul>
                  </li>
                  <li className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3030 ${activeSubmenus.includes('3030') ? 'active' : ''}`}>
                    <Link href="/web-development-services/">Web Development</Link>
                    <button className="sub-menu-toggle" aria-expanded={activeSubmenus.includes('3030')} onClick={() => toggleSubmenu('3030')}>
                      <span className="icon-plus"><svg className="svg-icon" width="18" height="18" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z" fill="currentColor"/></svg></span>
                      <span className="icon-minus"><svg className="svg-icon" width="18" height="18" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6 11h12v2H6z" fill="currentColor"/></svg></span>
                      <span className="screen-reader-text">Open menu</span>
                    </button>
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3037"><Link href="/shopify-development-services/">Shopify Development</Link></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3035"><Link href="/magento-development-services/">Magento Development</Link></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3036"><Link href="/wordpress-development-services/">WordPress Development</Link></li>
                    </ul>
                  </li>
                  <li className={`menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3031 ${activeSubmenus.includes('3031') ? 'active' : ''}`}>
                    <Link href="/digital-marketing/">Digital Marketing</Link>
                    <button className="sub-menu-toggle" aria-expanded={activeSubmenus.includes('3031')} onClick={() => toggleSubmenu('3031')}>
                      <span className="icon-plus"><svg className="svg-icon" width="18" height="18" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z" fill="currentColor"/></svg></span>
                      <span className="icon-minus"><svg className="svg-icon" width="18" height="18" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6 11h12v2H6z" fill="currentColor"/></svg></span>
                      <span className="screen-reader-text">Open menu</span>
                    </button>
                    <ul className="sub-menu">
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3074"><Link href="/ppc-advertising/">PPC Management Service</Link></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3393"><Link href="/social-media-optimization/">Social Media Optimization</Link></li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3075"><Link href="/search-engine-optimization/">Search Engine Optimization</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-3026 ${activeSubmenus.includes('3026') ? 'active' : ''}`}>
                <Link href="/hire-developers/">Hire Developers</Link>
                <button className="sub-menu-toggle" aria-expanded={activeSubmenus.includes('3026')} onClick={() => toggleSubmenu('3026')}>
                  <span className="icon-plus"><svg className="svg-icon" width="18" height="18" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M18 11.2h-5.2V6h-1.6v5.2H6v1.6h5.2V18h1.6v-5.2H18z" fill="currentColor"/></svg></span>
                  <span className="icon-minus"><svg className="svg-icon" width="18" height="18" aria-hidden="true" role="img" focusable="false" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6 11h12v2H6z" fill="currentColor"/></svg></span>
                  <span className="screen-reader-text">Open menu</span>
                </button>
                <ul className="sub-menu">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3039"><Link href="/hire-shopify-developer/">Hire Shopify Developer</Link></li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3041"><Link href="/hire-magento-developer/">Hire Magento Developer</Link></li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3040"><Link href="/hire-wordpress-developer/">Hire WordPress Developer</Link></li>
                </ul>
              </li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3027"><Link href="/blog/">Blog</Link></li>
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3028"><Link href="/contact-us/">Contact Us</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
