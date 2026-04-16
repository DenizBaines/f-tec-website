import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaYoutube
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-section">
          <h3>QUICK LINKS</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/journey">Journey</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/ser">Services</Link></li>
            <li><Link to="/formed">Enquire Us</Link></li>
            <li><Link to="/achieve">Achievements</Link></li>
            <li><Link to="/career">Career</Link></li>
            <li><Link to="/partners">Our Partners</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>CONTACT US</h3>
          <div className="contact-info">
            <p className="company-name">F-TEC SKILL DEVELOPMENT</p>
            <p>AB-6, Safdarjung Enclave,</p>
            <p>New Delhi 110029</p>
            <p>Call : 011-40517335, 41094328</p>
            <p>Email : <a href="mailto:mailus@f-tec.net.in">mailus@f-tec.net.in</a></p>
          </div>
        </div>

        <div className="footer-section">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/FTECOnline/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://x.com/FTECOnline" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="https://in.linkedin.com/company/f-tec-skill-development" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="https://www.youtube.com/channel/UCMYv2pK1iJUPHd7MfKE1BuA" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>ALL RIGHTS RESERVED BY F-TEC</p>
      </div>
    </footer>
  );
};

export default Footer;