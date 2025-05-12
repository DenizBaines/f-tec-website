import React from 'react';
import './UpperNavigation.css';

const UpperNavigation = () => {
  return (
    <div className="upper-navigation">
      <div className="container">
        <div className="contact-info">
          <span><i className="fa fa-envelope"></i> info@f-tec.edu</span>
          <span><i className="fa fa-phone"></i> +1 234 567 890</span>
        </div>
        <div className="social-media">
          <a href="faceboo.com" aria-label="Facebook"><i className="fa fa-facebook"></i></a>
          <a href="x.com" aria-label="Twitter"><i className="fa fa-twitter"></i></a>
          <a href="linkedin.com" aria-label="LinkedIn"><i className="fa fa-linkedin"></i></a>
        </div>
      </div>
    </div>
  );
};

export default UpperNavigation;