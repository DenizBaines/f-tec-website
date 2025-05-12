import React from 'react';
import './Achieve.css';

const Achieve = () => {
  // Achievement data
  const achievements = [
    {
      id: 1,
      title: "First of its Kind Social Franchise Model",
      description: "In the year 2000, F-TEC for the first time brought forward a social franchising concept which evolved as a sustainable model. The idea was to engage First Generation Entrepreneurs with complete support & know-how from F-TEC with a moderate franchisee fee, without bringing any other cost head for research & development, content development & centralised advertisement. It came out as a sustainable model, wherein, even after students pay a moderate fee, the franchises are able to generate a fair profit and good return on their investments.",
      color: "blue"
    },
    {
      id: 2,
      title: "The Week Magazine Cover Story",
      description: "Credit to its social franchising model & good returns on investments, F-TEC rapidly expanded its network of 5 centres in the year 2000 to 150 training centres in 2007. The Week, one of the leading magazines published an article on different IT & Professional Training brands, as well as reported F-TEC as having the largest number of training centres in Delhi-NCR region. It was because of its strength & values as a brand, that F-TEC achieved this milestone.",
      color: "teal"
    },
    {
      id: 3,
      title: "Corporate Training",
      description: "F-TEC also successfully ventured into corporate training post 2007, and conducted training programs for many organisations of which some of important corporate assignments were:\nHyderabad Police\nIndian Navy in Mumbai\nDRDO",
      color: "green"
    },
    {
      id: 4,
      title: "Imaan India Samman",
      description: "The Aavishkar Media Group in association with ABP News awarded F-TEC for Positive Social Change in India through its training & skill model. The award was conferred in the event organised at Air Force Auditorium, Subroto Park, New Delhi.",
      color: "green"
    },
    {
      id: 5,
      title: "IT Company to Multi-Skilling Company",
      description: "F-TEC started as an IT training company, transformed itself in the year 2010 into a multi-skilling training company and later went on to become a NSDC partner in 2014, implementing some of the premier projects under Skill India Mission.",
      color: "lime"
    },
    {
      id: 6,
      title: "Partnership with NSDC",
      description: "In India, Skilling Eco-System started evolving with new dimensions where National Skill Development Corporation (NSDC) emerged as central body to set the direction to make India the Skill Capital of the world. NSDC brought forward the idea of connecting training and Skilling companies on one platform through Authorised Training Partners framework so that training delivery can become uniform with outcome-based approach. Training Partner's accreditation process was set-up where select companies were appointed as Authorised Training Partner after a due-Diligence process. F-TEC added another milestone by becoming the Authorised Training Partner of National Skill Development Corporation (NSDC) in the year 2014.",
      color: "lime"
    }
  ];

  return (
    <div className="achieve-container">
      {/* Hero Banner */}
      <div className="hero-banner">
        <img 
          src="/images/achieve-top.png" 
          alt="Trophy with golden stars"
          className="hero-image"
        />
      </div>

      {/* Main Content */}
      <div className="achieve-content">
        <h1 className="achieve-title">ACHIEVEMENTS & RECOGNITIONS</h1>
        
        <div className="divider">
          <hr className="divider-line" />
          <span className="diamond">◈</span>
          <hr className="divider-line" />
        </div>
        
        <p className="achieve-intro">
          Since 1995, the F-TEC journey has been an evolving story of a social enterprise model with many achievements & milestones as a training company.
        </p>
        
        {/* Achievement Cards */}
        <div className="achievement-grid">
          {achievements.map((achievement) => (
            <div 
              key={achievement.id} 
              className={`achievement-card ${achievement.color}`}
            >
              <h2 className="card-title">{achievement.title}</h2>
              <p className="card-description">
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
  );
};

export default Achieve;