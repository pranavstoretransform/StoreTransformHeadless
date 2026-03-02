import React from 'react';
import PageBanner from './PageBanner';

const ContactUs = () => {
  return (
    <>
      <PageBanner 
        title="Contact Us" 
        image="https://storetransform.com/wp-content/uploads/2022/12/contact-banner.jpg" // Fallback image
      />
      
      <section className="contact-us-sec sec-padd">
        <div className="container">
          <div className="row-inner">
            {/* Contact Info */}
            <div className="col-40 sp-100">
              <div className="contact-info-box">
                <h2 className="title-h3 mb-30">Get in Touch</h2>
                <p className="mb-30">Have a project in mind? We'd love to hear from you. Let's talk about how we can help you achieve your goals.</p>
                
                <div className="info-item mb-20">
                  <h4 className="title-h5">India Office</h4>
                  <p>408 4th Floor, Lilamani Corporate Heights, Opp Ramapir Tekro BRTS Stop, Nava Vadaj, Ahmedabad – 380013 Gujarat, India.</p>
                </div>
                
                <div className="info-item mb-20">
                  <h4 className="title-h5">Canada Office</h4>
                  <p>10 Baffin Crescent, Brampton ON L7A 4K6, Canada</p>
                </div>
                
                <div className="info-item mb-20">
                  <h4 className="title-h5">Contact Details</h4>
                  <p className="mb-10"><a href="mailto:hr@storetransform.com"><i className="fa fa-envelope mr-10"></i> hr@storetransform.com</a></p>
                  <p><a href="tel:+919512039025"><i className="fa fa-phone mr-10"></i> +91 95120 39025</a></p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-60 sp-100">
              <div className="contact-form-box bg-light pd-40 br-10">
                <h3 className="title-h3 mb-30">Send us a Message</h3>
                <form className="contact-form">
                  <div className="row-inner">
                    <div className="col-50 sp-100 mb-20">
                      <input type="text" placeholder="Your Name" className="form-control wd-100 pd-15" />
                    </div>
                    <div className="col-50 sp-100 mb-20">
                      <input type="email" placeholder="Your Email" className="form-control wd-100 pd-15" />
                    </div>
                    <div className="col-100 mb-20">
                      <input type="text" placeholder="Subject" className="form-control wd-100 pd-15" />
                    </div>
                    <div className="col-100 mb-20">
                      <textarea placeholder="Your Message" rows={5} className="form-control wd-100 pd-15"></textarea>
                    </div>
                    <div className="col-100">
                      <button type="submit" className="bt-btn">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-sec">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.187884849306!2d72.5638763154238!3d23.053534220963594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f555555555%3A0x5555555555555555!2sLilamani%20Corporate%20Heights!5e0!3m2!1sen!2sin!4v1652782555555!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default ContactUs;
