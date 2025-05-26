import React from 'react';
import './Frontpage.css';

const Frontpage = () => {
  return (
    <div className="frontpage">
      {/* Projects Section */}
      <section className="section projects">
        <h2 className="section-title">PROJECTS</h2>
        <div className="logo-grid">
          <img src="/images/nasscom.png" alt="Nasscom" />
          
          <img src="/images/niesbud.png" alt="NIESBUD" />
          <img src="/images/skill-india.png" alt="Skill India" />
        </div>
        <button className="primary-btn">More Projects</button>
      </section>

      {/* News & Events Section */}
      <section className="section news-events">
        <h2 className="section-title">NEWS & EVENTS</h2>
        <div className="card-grid">
          <div className="card">
            <img src="/images/skoch-award.jpg" alt="SKOCH Award" />
            <h3>SKOCH Award</h3>
            <p>Recognition for Women Skill Development through Mahila Jyoti Yojana…</p>
            <button className="read-more">Read more</button>
          </div>
          <div className="card">
            <img src="/images/future-jobs.jpg" alt="Future Jobs" />
            <h3>New Age Technologies</h3>
            <p>POWER to SKILLS supporting Skill India through IT empowerment…</p>
            <button className="read-more">Read more</button>
          </div>
          <div className="card">
            <img src="/images/youth-conclave.jpg" alt="Youth Conclave" />
            <h3>SKILLING FOR LIVELIHOODS</h3>
            <p>Youth awareness and engagement under Skill India Mission…</p>
            <button className="read-more">Read more</button>
          </div>
        </div>
        <button className="primary-btn">Read More News</button>
      </section>

      {/* Events Gallery */}
      <section className="section gallery">
        <div className="gallery-row">
          <img src="/images/event1.jpg" alt="Event 1" />
          <img src="/images/event2.jpg" alt="Event 2" />
          <img src="/images/event3.jpg" alt="Event 3" />
        </div>
        <button className="primary-btn">View All Events</button>
      </section>

      {/* Our Brands & Partners */}
      <section className="section brands-partners">
        <h2 className="section-title">OUR BRANDS</h2>
        <div className="logo-grid">
          <img src="/images/fteclogo.jpg" alt="F-TEC" />
          <img src="/images/newjobs.jpg" alt="NewJobs" />
          <img src="/images/social-sage.jpg" alt="Social Sage" />
          <img src="/images/foresight.jpg" alt="Foresight" />
        </div>

        <h2 className="section-title">AUTHORIZED TRAINING PARTNER</h2>
        <div className="logo-grid">
          <img src="/images/goie.jpg" alt="MSDE" />
          <img src="/images/skill-india-photo.jpg" alt="Skill India" />
          <img src="/images/nsdc.jpg" alt="NSDC" />
          <img src="/images/pmkk.jpg" alt="PMKK" />
          <img src="/images/pmkvy.jpg" alt="PMKVY" />
        </div>

        
        
      </section>

      

        

        
    
    </div>
  );
};

export default Frontpage;
