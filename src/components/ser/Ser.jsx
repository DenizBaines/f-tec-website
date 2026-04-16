import React from 'react';
import './Ser.css';
import Footer from '../footer/Footer';
import NavigationBar from '../navigation/NavigationBar';

const Achieve = () => {
  // Achievement data
  const achievements = [
    {
      id: 1,
      title: "DIGITAL MARKETING",
      description: "F-TEC has developed an independent vertical working closely with F-TEC Skill Academy to provide 360 Degree Social Media Solutions with FB Marketing, Twitter Handle, LinkedIn Profile, Blogs and overall integrated Social Marketing Management across platforms.",
      color: "blue"
    },
    {
      id: 2,
      title: "BRAND MANAGEMENT & PROMOTIONS",
      description: "Merging its own experience onboard the organization, F-TEC has developed solution for promotion and management considering the brand as a live entity. A dedicated professional team closely works with companies and organizations to provide variety of services for management of the brand.",
      color: "teal"
    },
    {
      id: 3,
      title: "IMAGE CONSULTING",
      description: "Carve a niche with image consulting as another objective of F-TEC for this specialized soft skill development training initiatives. With the belief that leaders in themselves are brands and they conciously need to manage same to drive the organization. We help individuals in leadership roles to manage individual brand to sync with the brand image of the organization.",
      color: "green"
    },
    {
      id: 4,
      title: "CYBER SECURITY SOLUTIONS",
      description: "We are currently living in a digital age where organizations are driven by technology resulting in enhanced efficency and faster information and data flows. However, this digitalization has a huge challenge in terms of data security for which F-TEC has developed a pool of cyber security experts of international repute with in-depth exposure to develop solutions for organizations to ensure data security on all their digital platforms.",
      color: "green"
    },
    
  ];

  return (
    <div>
    
    <div className="ser-achieve-container">
      <NavigationBar />
      {/* Hero Banner */}
      <div className="ser-hero-banner">
        <img 
          src="/images/our-services.jpg" 
          alt="Trophy with golden stars"
          className="ser-hero-image"
        />
      </div>

      {/* Main Content */}
      <div className="ser-achieve-content">
        <h1 className="ser-achieve-title">OUR SERVICES</h1>
        {/*  
        <div className="divider">
          <hr className="divider-line" />
          <span className="diamond">◈</span>
          <hr className="divider-line" />
        </div>
        */}
        
        <p className="ser-achieve-intro">
        Since 1995, the F-TEC journey has been an evolving story of a social enterprise 
        model with many achievements & milestones as a training company.
        </p>
        
        {/* Achievement Cards */}
        <div className="ser-achievement-grid">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id} 
              className={`achievement-card ${achievement.color}`}
            >
              <h2 className="ser-card-title">{achievement.title}</h2>
              <p className="ser-card-description">
                {achievement.description.split('\n').map((text, i) => (
                  <React.Fragment key={i}>
                    {text}
                    {i < achievement.description.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default Achieve;