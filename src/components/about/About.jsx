import React from 'react';

import './About.css';
import NavigationBar from '../navigation/NavigationBar';
import Footer from '../footer/Footer';

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
          <h2>Our Story</h2>
          <p>
            Founded in 2010, F-TEC has grown to become one of the leading institutions in technology education and research. 
            Our commitment to excellence and innovation has shaped our journey from a small tech startup to a comprehensive 
            educational facility that serves students from around the globe.
          </p>
          <p>
            With over 500 expert faculty members and more than 10,000 students, we're dedicated to advancing technology 
            through education, research, and industry partnerships. Our campus combines state-of-the-art facilities with 
            a collaborative environment that nurtures creativity and critical thinking.
          </p>
          <p>
            At F-TEC, we believe that technology education should be accessible, practical, and forward-thinking. 
            Our curriculum is constantly evolving to meet the demands of the rapidly changing tech landscape, ensuring 
            that our graduates are well-prepared for the challenges of tomorrow.
          </p>
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
              To be the global leader in technology education, fostering innovation that transforms lives and societies. 
              We envision a world where technology serves humanity, and we are committed to educating the leaders who will 
              make this vision a reality.
            </p>
          </div>
          <div className="vm-item">
            <h2>Our Mission</h2>
            <p>
              To provide exceptional education and research opportunities in technology that empower students to become 
              innovative leaders and responsible global citizens. We strive to create an inclusive environment that celebrates 
              diversity, encourages collaboration, and promotes ethical practices in the development and application of technology.
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
            Experience F-TEC through our virtual campus tour. Get a glimpse of our modern facilities, 
            including our state-of-the-art labs, collaborative workspaces, and student amenities.
          </p>
          <p>
            Our campus is designed to foster creativity, collaboration, and innovation. From our 
            technology innovation centers to our recreational spaces, every aspect of F-TEC is 
            carefully crafted to provide an optimal environment for learning and growth.
          </p>
        
        </div>
      </div>
    </div>

    <Footer />
    </div>
  );
};

export default About;