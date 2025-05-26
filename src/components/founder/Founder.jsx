import React from 'react';
import './Founder.css';
import Footer from '../footer/Footer';
import NavigationBar from '../navigation/NavigationBar';

const Founder = () => {
  return (
    <div>
       <NavigationBar />
    <div className="founder-page">

      <div className="team-banner">
        <div className="banner-overlay"></div>
        <img src="/images/founder-top.jpg" alt="Leadership team" className="banner-image" />
      </div>


      <div className="hero-section">
        <div className="container">
          <div className="quote-container">
            
            <p className="hero-quote">
              We do not claim to be a Non-Profit Organisation but strongly believe that quality training & affordable cost can truly co-exist with fair profit margins. With our journey of more than two decades, we have been able to create and sustain a social enterprise model in the area of training.
            </p>
         
          </div>
          
          <div className="founder-profile">
            <div className="founder-image-container">
              <img src="images/circle-image.jpg" alt="Praveen Arya" className="founder-image" />
            </div>
            <h2 className="founder-name">Praveen Arya</h2>
            <p className="founder-title">Founder</p>
          </div>
        </div>
      </div>
      
      <div className="core-values-section">
        <div className="container">
          <h2 className="section-title">Core Values</h2>
          <div className="divider"></div>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon integrity"></div>
              <h3 className="value-title">Integrity</h3>
              <p className="value-description">
                Organization believes in being fair, honest, transparent & ethical at every level.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon accountability"></div>
              <h3 className="value-title">Accountability</h3>
              <p className="value-description">
                Understanding the importance of youth being trained & skilled to earn their livelihood and contribute to the overall national growth.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon quality"></div>
              <h3 className="value-title">Quality</h3>
              <p className="value-description">
                Total commitment to ensure quality training to youth and services to all our clients.
              </p>
            </div>
            
            <div className="value-card">
              <div className="value-icon ethics"></div>
              <h3 className="value-title">Moral & Ethics</h3>
              <p className="value-description">
                Organization strongly aligns itself with morality and ethics in overall working and dealings with team members, trainees, clients as well as associates.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="foundation-section">
        <div className="container">
          <h2 className="section-title">Our Foundation</h2>
          <div className="divider"></div>
          
          <div className="foundation-content">
            <p className="foundation-text">
              F-TEC foundation was laid down by establishing the First Training Centre launched on 16th February, 1995 with an idea that quality IT training can be imparted at an affordable cost, so that there should not be a digital divide in the 21st Century. The First Centre in Delhi was inaugurated by then Education Minister of Delhi, Dr. Sahib Singh Verma.
            </p>
            
            <div className="foundation-stats">
              <div className="stat-item">
                <span className="stat-number">1995</span>
                <span className="stat-label">Established</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">20+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Students Trained</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
              
            
            
          </div>
        
    <Footer />
    </div>
    
  );
};

export default Founder;