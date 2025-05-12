// components/Institutions/institutions.jsx
import React from 'react';
import './institutions.css';

const Institutions = () => {
  return (
    <section className="institutions-container">
      <h2 className="institutions-title">Institutions – Universities</h2>
      <div className="institutions-cards">
        <div className="institution-card">
          <img src="/images/centre-excellence.jpg" alt="Centre of Excellence" className="institution-image" />
          <h3>Centre of Excellence</h3>
          <p>
            F-TEC is keen to associate with esteemed universities to set up Centre of Excellence in Artificial Intelligence & Data Analytics as well as in Cyber Security. This is to prepare the nation’s youth for future jobs & ensure a skilled manpower for a New India. These centres can also play a critical role in supporting the government in dealing with Data Analytics & ensuring Cyber Security at multiple levels.
          </p>
          <button className="know-more-btn">Know More</button>
        </div>
        <div className="institution-card">
          <img src="/images/skill-academy.jpg" alt="Skill Academy" className="institution-image" />
          <h3>Skill Academy</h3>
          <p>
            This model is best suited to Engineering Colleges, Management & Professional Institutions as well as any other Premier Higher Education Institution offering <strong>UG</strong> (Under Graduate) or <strong>PG</strong> (Post Graduate) programs with Mathematics & Economics. Skill Academy offers programs in Data Analytics, Cyber Security & Digital Marketing which are directly linked to job placement opportunities.
          </p>
          <button className="know-more-btn">Know More</button>
        </div>
      </div>
    </section>
  );
};

export default Institutions;
