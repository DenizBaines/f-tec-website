// components/Partners/Partners.jsx
import React from 'react';
import './Partners.css';
import Footer from '../footer/Footer';
import NavigationBar from '../navigation/NavigationBar';

const partners = [
  {
    title: "Ministry of Skill Development & Entrepreneurship (MSDE)",
    description:
      "India has come a long way in developing Skill Eco System towards which objective a dedicated ministry was created in 2014. In order to lead the whole system as well as realise the vision of Skill India mission, F-TEC has partnered with MSDE through National Skill Development Corporation (NSDC) to implement some premier projects like Pradhan Mantri Kaushal Kendras (PMKK)."
  },
  {
    title: "National Skill Development Corporation (NSDC)",
    description:
      "F-TEC Skill Development (Foresight Edutech Pvt. Ltd.) is a NSDC Partner Company with a mandate to train candidates based on student fee model in sectors like IT, ITES, Automobile, Beauty & Wellness and Retail Management. Apart from these programs F-TEC is closely working as a partner with NSDC to establish training centres for Pradhan Mantri Kaushal Vikas Yojna (PMKVY)."
  },
  {
    title: "Sector Skill Councils (SSC)",
    description:
      "SSC’s are the most important parts of present Skill Eco System to synchronise industry manpower & skill requirements to evolve a placement led skill system. SSC’s play a vital role in assessment & certification under National Skill Qualification Framework (NSQF). Presently, F-TEC is partnered with more than 15 sector Skill Councils."
  },
  {
    title: "National Institute for Entrepreneurship & Small Business Development (NIESBUD)",
    description:
      "F-TEC has partnered with NIESBUD, an apex organization of the Ministry of Skill Development and Entrepreneurship, to promote entrepreneurship and skill development programs across India."
  },
  {
    title: "Electronics Sector Skill Council of India (ESSCI)",
    description:
      "Through this partnership, F-TEC offers programs in electronics, embedded systems, and repair technologies, aligning training with industry standards and needs."
  },
  {
    title: "Retailers Association’s Skill Council of India (RASCI)",
    description:
      "RASCI partnership allows F-TEC to conduct industry-aligned retail training programs under government initiatives for youth and working professionals."
  },
  {
    title: "Beauty & Wellness Sector Skill Council (B&WSSC)",
    description:
      "F-TEC provides training in the Beauty & Wellness sector under this council, focusing on cosmetology, personal grooming, and wellness therapy skills."
  },
  {
    title: "Automotive Skills Development Council (ASDC)",
    description:
      "With ASDC, F-TEC runs automotive technician and workshop management training programs aimed at meeting the growing demand in this sector."
  }
];

const Partners = () => {
  return (
    <div>
       <NavigationBar />
    <div className="partners">
      <h1>Our Partners</h1>
      <p className="partners-intro">
        F-TEC Skill Development has entered into partnerships for the purpose of accreditations, affiliation,
        funding know-how, assessment certification, internships & candidate placements.
        Many partnerships are evolved for these stated purposes and some of key partners are:
      </p>
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div
            className={`partner-card ${index % 2 === 0 ? 'green' : 'dark'}`}
            key={index}
          >
            <h3>{partner.title}</h3>
            <p>{partner.description}</p>
          </div>
        ))}
      </div>
      
    </div>

    <Footer />
    </div>
  );
};

export default Partners;
