import React from 'react';
import './Founds.css';
import { FaBalanceScale, FaHandshake, FaTrophy, FaUsers } from 'react-icons/fa';

const Founds = () => {
  // Core values data
  const coreValues = [
    {
      id: 1,
      icon: <FaBalanceScale className="value-icon" />,
      title: "Integrity",
      description: "Organization believes in being fair, honest, transparent & ethical at every level."
    },
    {
      id: 2,
      icon: <FaHandshake className="value-icon" />,
      title: "Accountability",
      description: "Understanding the importance of youth being trained & skilled to earn their livelihood and contribute to the overall national growth."
    },
    {
      id: 3,
      icon: <FaTrophy className="value-icon" />,
      title: "Quality",
      description: "Total commitment to ensure quality training to youth and services to all our clients."
    },
    {
      id: 4,
      icon: <FaUsers className="value-icon" />,
      title: "Moral & Ethics",
      description: "Organization strongly aligns itself with morality and ethics in overall working and dealings with team members, trainees, clients as well as associates."
    }
  ];

  return (
    <div className="foundation-container">
      {/* Hero Banner */}
      <div className="foundation-hero">
        <div className="hero-content">
          <h1>Building Skills, Transforming Lives</h1>
          <p>Empowering the future through quality education and training since 1995</p>
        </div>
      </div>

      {/* Foundation Section */}
      <div className="section foundation-section">
        <div className="section-header">
          <h2>FOUNDATION</h2>
          <div className="divider">
            <span className="line"></span>
            <span className="diamond"></span>
            <span className="line"></span>
          </div>
        </div>

        <div className="foundation-content">
          <p>
            F-TEC foundation was laid down by establishing the First Training Centre launched on 16th February, 1995 with an idea that quality IT training can be imparted at an affordable cost, so that there should not be a digital divide in the 21st Century. The First Centre in Delhi was inaugurated by then Education Minister of Delhi, Dr. Sahib Singh Verma.
          </p>
        </div>

        {/* Founder Quote */}
        <div className="founder-quote">
          <div className="quote-container">
            <div className="founder-image">
              <h1>HELLO</h1>
            </div>
            <div className="quote-marks opening-quote">"</div>
            <p className="quote-text">
              We do not claim to be a Non-Profit Organisation but strongly believe that quality training & affordable cost can truly co-exist with fair profit margins. With our journey of more than two decades, we have been able to create and sustain a social enterprise model in the area of training.
            </p>
            <div className="quote-marks closing-quote">"</div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="section core-values-section">
        <div className="section-header">
          <h2>CORE VALUES</h2>
          <div className="divider">
            <span className="line"></span>
            <span className="diamond"></span>
            <span className="line"></span>
          </div>
        </div>

        <div className="core-values-intro">
          <p>F-TEC has been driven by a strong value system ever since its inception in 1995 based on the following</p>
        </div>

        <div className="values-container">
          {coreValues.map(value => (
            <div className="value-card" key={value.id}>
              <div className="value-icon-container">
                {value.icon}
              </div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Founds;