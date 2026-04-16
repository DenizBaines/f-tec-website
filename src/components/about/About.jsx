import React from 'react';

import './About.css';
import NavigationBar from '../navigation/NavigationBar';
import Footer from '../footer/Footer';
//import Achieve from '../achieve/Achieve';

const About = () => {
  return (
    <div>
      <NavigationBar />
    <div className="about-container">
    
      <div className="hero-image">
        <img src="/images/about/about.png" alt="F-TEC Campus Overview" />
        
      </div>

      {/* About Section */}
      <div className="about-section">
        <div className="image-container">
          <img src="/images/about/story.jpg" alt="Students at F-TEC" />
        </div>
        <div className="content-container">
          <h2>ABOUT F-TEC</h2>
          <p>
            F-TEC Skill Development is an initiative of Foresight Edutech Private Limited, a NSDC partner Company. F-TEC as a training organisation was set-up in 1995 to cater to the demands of IT skilled workforce, which over the time evolved as a training & Multi-Skilling company working extensively to support Skill India Mission.  F-TEC is currently imparting trainings in more than 15 Sectors & operating in more than 10 Indian States.
          </p>
          <p>
            Presently F-TEC operates on Student Fee model, wherein programs are designed as per industry requirements. IT-ITES, Banking & Finance, Modern Office Management are offered through network of F-TEC Skill Development, and highly specialised programs in Data Analytics, Digital Marketing & Cyber Security under F-TEC Skill Academy.
          </p>
          <p>
            On the other side there is network of centres wherein government sponsors the fee for NSQF at school level, PMKVY centres, PMKK (Pradhan Mantri Kaushal Kendra) and different State Skill Mission.
          </p>
          <p>F-TEC Skill Development model is about Foresight Society on the core principles of social enterprise wherein, grassroots projects for marginalised communities are taken care off by Foresight Society of Human Resource & Development.</p>
        </div>
      </div>

      {/* First Strip Image */}
      <div className="strip-image">
        <img src="/images/about/nation.jpg" alt="F-TEC Campus Panorama" />
      </div>

      {/* Vision and Mission Section */}
      <div className="vision-mission-section">
        <div className="vm-content">
          <div className="vm-item">
            <h2>Our Vision</h2>
            <p>
              Empowering youth with employable skills, blended with life skills which are aligned with highest degree of values & ethics to build a future generation who are skillful & lead a self-reliant life with dignity to make this world a better place.
            </p>
          </div>
          <div className="vm-item">
            <h2>Our Mission</h2>
            <p>
             Skilling youth to create a skilled workforce to ensure that India can take the advantage of her demographic dividends and establishing a direct linkage with livelihood opportunities post successful training. 
            </p>
          </div>
        </div>
        <div className="vm-image">
          <img src="/images/about/vision.png" alt="F-TEC Innovation Lab" />
        </div>
      </div>
      
      {/* Second Strip Image */}
      <div className="strip-image">
        <img src="/images/about/think.jpg" alt="F-TEC Facilities" />
      </div>

      {/* Video and Tour Section */}
      <div className="video-tour-section">
        <div className="video-container">
          <div className="video-thumbnail" onClick={() => window.open('https://youtu.be/1VROjEDld0I', '_blank')}>
            <img src="/images/about/thumbnail.png" alt="F-TEC Campus Tour Video" />
            <div className="play-button">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="45" fill="rgba(0,0,0,0.7)" />
                <polygon points="40,30 70,50 40,70" fill="white" />
              </svg>
            </div>
          </div>
        </div>
        <div className="tour-content">
          <h2>Take a Tour</h2>
          <p>
           F-TEC Skill Development is a Social Enterprise transforming the skills development, vocational training and corporate training landscape. There are 50+ training centers operated by F-TEC Skill Development with trained manpower. F-TEC Skill Development is a key training partner to the National Skills Development Corporation (NSDC), fulfilling skilling mandate and having trained over 4 Lacs youth in the country.
          </p>
        </div>
         
      </div>
      
    </div>

    <Footer />
    </div>
  );
};

export default About;