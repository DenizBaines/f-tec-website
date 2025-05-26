import React from 'react';
import './Leadership.css';
import Footer from '../footer/Footer';
import NavigationBar from '../navigation/NavigationBar';

const Leadership = () => {
  return (
    <div>
    <NavigationBar />
    <div className="leadership-container">
          
          {/* Team Banner Image */}
      <div className="team-banner">
        <div className="banner-overlay"></div>
        <img src="/images/leadership-top.png" alt="Leadership team" className="banner-image" />
      </div>
         
         {/* Hero Banner Section */}
         
            {/* END Section */} 

      <div className="leadership-header">
        <h1>LEADERSHIP</h1>
        <div className="leadership-divider">
          <span className="diamond">◈</span>
        </div>
      </div>

      <div className="leadership-content">
        {/* Leadership Team */}
        <div className="leadership-team">
          {/* Praveen Arya */}
          <div className="leader-card">
            <div className="leader-image-container">
              <img src="/images/parveen.jpg" alt="Leadership team member" className="leader-image" />
            </div>
            <h2 className="leader-name">Praveen Arya</h2>
            <div className="leader-titles">
              <p>Founder : F-TEC Skill Development</p>
              <p>Chairman : Foresight Edutech Pvt. Ltd</p>
            </div>
            <div className="leader-bio">
              <p>
                Praveen Arya is the Chairman of Foresight Edutech Pvt. Ltd, a NSDC partner company which owns F-TEC Skill Development. 
                As founder of F-TEC, he has built the institution based on the principles of Social Enterprise model in the area of training & skill development.
              </p>
              <p>
                He has led the movement of bridging the digital divide in urban India when IT was emerging as major sector for employment by offering 
                IT training programs at an affordable cost & building a sustainable model.
              </p>
              <p>
                Praveen Arya as founder of Foresight Society of HRD, a non-profit foundation has extensively worked to create a sustainable 
                model in the area of rural development and chaired many national symposiums on different issues of national importance under 
                advocacy campaign carried out by foundation. He has been on-board of Central Government Ministry and some reputed national/ 
                international level social & developmental organisation. Presently serving as Vice-President of Ekal Sansthan under Ekal Abhiyan 
                which is operating Ekal Vidyalayas (Informal Schools) in more than 68000 villages.
              </p>
            </div>
          </div>

          {/* Pulkit Jain */}
          <div className="leader-card">
            <div className="leader-image-container">
              <img src="/images/pulkit.jpg" alt="Leadership team member" className="leader-image" />
            </div>
            <h2 className="leader-name">Pulkit Jain</h2>
            <div className="leader-titles">
              <p>Managing Director: F-TEC Skill Development</p>
            </div>
            <div className="leader-bio">
              <p>
                Pulkit Jain, a young professional comes from a business back-ground and has been part of setting up of some successful 
                start-ups in his early age. Presently, the Managing Director of F-TEC Skill Development and leading Technology and Finance 
                enabling transformational shift in the overall working of the company.
              </p>
              <p>
                He has been instrumental in leading the strategic team on technology and has led a complete shift in the working of the company 
                by making it technology driven and thereby ensuring the transparency and efficiency in the overall delivery.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>

    </div>
  );
};

export default Leadership;