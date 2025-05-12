import React from 'react';
import './Privacy.css';

const Privacy = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-header">
        <h1>Privacy Policy</h1>
        <div className="header-decoration"></div>
      </div>
      
      <div className="privacy-content">
        <section className="policy-section">
          <p>
            Foresight Edutech Pvt Ltd (hereinafter referred to as 'F-TEC') respects the privacy of our users 
            (hereinafter referred to as 'your' or 'you') and has developed this privacy policy to
            demonstrate its commitment to protect your privacy and to protect your personnel data collected 
            and processed in connection with your use of the website mailus@f-tec.net.in
          </p>
          
          <p>
            We require and encourage you to read this privacy policy carefully and thoroughly, while using 
            our website or services or transacting business with us through our website. That by using our 
            website or any other application you are accepting the terms mentioned in this privacy policy.
          </p>
        </section>
        
        <section className="policy-section">
          <h2>What Information We Collect</h2>
          <div className="section-decoration"></div>
          
          <p>
            For a better experience while using our services, we may require you to provide us with certain 
            personally identifiable information, including but not limited to your name, email address, 
            phone number or some other details to help you with your experience.
          </p>
          
          <p>
            Whenever you use our website/services, we collect information that your browser sends to us that 
            is called data log. This data log may collect information including but not limited to your 
            computer's IP address, browser version, pages of our services that you visit, the time and date 
            of your visit and such other statistics.
          </p>
        </section>
        
        <section className="policy-section">
          <h2>How Do We Use The Information</h2>
          <div className="section-decoration"></div>
          
          <p>
            We may use the information we collect from you when you register, sign up for our newsletters, 
            respond to a survey or marketing communication, surf the website, or use certain other site 
            features. We may use the information you provide us in order to ensure we provide you with the 
            services you requested for. The information may be used to provide a variety of purposes 
            including but not limited:
          </p>
          
          <ul className="usage-list">
            <li>
              <span className="bullet-point"></span>
              To personalize your experience and allow us to deliver the type of content and services you 
              are most interested in and to send you the related information.
            </li>
            <li>
              <span className="bullet-point"></span>
              Respond to your comments, questions, requests and to better serve you in responding to your 
              customer service request.
            </li>
            <li>
              <span className="bullet-point"></span>
              To improve our website in order to serve you better.
            </li>
            <li>
              <span className="bullet-point"></span>
              To communicate with you regarding a promotion, survey, newsletters, offers, events or 
              other website features.
            </li>
            <li>
              <span className="bullet-point"></span>
              To monitor and analyze trends, usage and activities in connection with our services and 
              for marketing and advertisement purposes.
            </li>
          </ul>
        </section>
        
        <section className="policy-section">
          <h2>Data Protection</h2>
          <div className="section-decoration"></div>
          
          <p>
            We value your trust in providing us your personal information, thus we are striving to use 
            commercially acceptable means of protecting it. But remember that no method of transmission 
            over the internet, or method of electronic storage is 100% secure and reliable, and we cannot 
            guarantee its absolute security.
          </p>
        </section>
        
        <section className="policy-section">
          <h2>Third-Party Disclosure</h2>
          <div className="section-decoration"></div>
          
          <p>
            We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable 
            Information unless we provide users with advance notice. This does not include website hosting 
            partners and other parties who assist us in operating our website, conducting our business, 
            or serving our users, so long as those parties agree to keep this information confidential.
          </p>
        </section>
        
        <section className="policy-section">
          <h2>Contact Us</h2>
          <div className="section-decoration"></div>
          
          <p>
            If you have any questions or suggestions about our Privacy Policy, do not hesitate to 
            contact us at mailus@f-tec.net.in
          </p>
        </section>
      </div>
    </div>
  );
};

export default Privacy;