import React from 'react';
import './Frontpage.css';

const Frontpage = () => {
  //const [selectedCentre, setSelectedCentre] = useState('');

  //const handleReadMore = (cardTitle) => {
   // alert(`Reading more about: ${cardTitle}`);
    // Replace with actual navigation logic
  //};

  //const handleButtonClick = (buttonName) => {
   // alert(`${buttonName} button clicked!`);
    // Replace with actual navigation logic
  //};

  return (
    <div className="frontpage">
      {/* Hero Section with Background Pattern */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Empowering Skills for Tomorrow</h1>
            <p>Join the future of education and skill development</p>
          </div>
        </div>
        <div className="hero-pattern"></div>
      </section>

      {/* Projects Section */}
      <section className="section projects">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">OUR PROJECTS</h2>
            <p className="section-subtitle">Transforming lives through strategic partnerships</p>
            <div className="title-underline"></div>
          </div>
          
          <div className="logo-grid modern-grid">
            <div className="logo-card">
              <div className="logo-wrapper">
                <img src="/images/nasscom.png" alt="Nasscom" />
              </div>
              <h4>NASSCOM</h4>
              <p>Technology Partnership</p>
            </div>
            
            <div className="logo-card">
              <div className="logo-wrapper">
                <img src="/images/niesbud.png" alt="NIESBUD" />
              </div>
              <h4>NIESBUD</h4>
              <p>Entrepreneurship Development</p>
            </div>
            
            <div className="logo-card">
              <div className="logo-wrapper">
                <img src="/images/skill-india.png" alt="Skill India" />
              </div>
              <h4>SKILL INDIA</h4>
              <p>National Skill Development</p>
            </div>
          </div>
          
         <button 
  className="modern-btn primary"
  onClick={() => window.location.href = '/projects'}
>
  <span>Explore All Projects</span>
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2"/>
  </svg>
</button>

        </div>
      </section>

      {/* News & Events Section */}
      <section className="section news-events">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">NEWS & EVENTS</h2>
            <p className="section-subtitle">Stay updated with our latest achievements and activities</p>
            <div className="title-underline"></div>
          </div>
          
          <div className="card-grid modern-cards">
            <div className="modern-card">
              <div className="card-image">
                <img src="/images/skoch-award.jpg" alt="SKOCH Award" />
                <div className="card-overlay">
                <button 
                 className="overlay-btn"
                 onClick={() => window.location.href = '/news'}
                >
                 Read Full Story
                </button>

                </div>
              </div>
              <div className="card-content">
                <div className="card-badge">Award</div>
                <h3>SKOCH Award Recognition</h3>
                <p>Recognition for Women Skill Development through Mahila Jyoti Yojana. Celebrating excellence in social impact and innovation.</p>
                <div className="card-meta">
                  <span className="date">March 2024</span>
                  <button 
                    className="read-more modern"
                    onClick={() => window.location.href = '/news'}
                  >
                    Read more →
                  </button>
                </div>
              </div>
            </div>
            
            <div className="modern-card">
              <div className="card-image">
                <img src="/images/future-jobs.jpg" alt="Future Jobs" />
                <div className="card-overlay">
                  <button 
                 className="overlay-btn"
                 onClick={() => window.location.href = '/news'}
                >
                 Read Full Story
                </button>
                </div>
              </div>
              <div className="card-content">
                <div className="card-badge">Technology</div>
                <h3>New Age Technologies</h3>
                <p>POWER to SKILLS supporting Skill India through IT empowerment. Preparing workforce for digital transformation.</p>
                <div className="card-meta">
                  <span className="date">February 2024</span>
                  <button 
                    className="read-more modern"
                    onClick={() => window.location.href = '/news'}
                  >
                    Read more →
                  </button>
                </div>
              </div>
            </div>
            
            <div className="modern-card">
              <div className="card-image">
                <img src="/images/youth-conclave.jpg" alt="Youth Conclave" />
                <div className="card-overlay">
                  <button 
                 className="overlay-btn"
                 onClick={() => window.location.href = '/news'}
                >
                 Read Full Story
                </button>
                </div>
              </div>
              <div className="card-content">
                <div className="card-badge">Event</div>
                <h3>SKILLING FOR LIVELIHOODS</h3>
                <p>Youth awareness and engagement under Skill India Mission. Building sustainable careers through skill development.</p>
                <div className="card-meta">
                  <span className="date">January 2024</span>
                  <button 
                    className="read-more modern"
                    onClick={() => window.location.href = '/news'}
                  >
                    Read more →
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <button 
            className="modern-btn primary"
            onClick={() => window.location.href = '/news'}
          >
            <span>View All News</span>
          </button>
        </div>
      </section>

      {/* Events Gallery */}
      <section className="section gallery">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">EVENT GALLERY</h2>
            <p className="section-subtitle">Capturing moments of learning and achievement</p>
            <div className="title-underline"></div>
          </div>
          
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/images/event1.jpg" alt="Event 1" />
              <div className="gallery-overlay">
                <h4>Training Workshop</h4>
                <p>Digital Skills Development</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/images/event2.jpg" alt="Event 2" />
              <div className="gallery-overlay">
                <h4>Certification Ceremony</h4>
                <p>Celebrating Success</p>
              </div>
            </div>
            <div className="gallery-item">
              <img src="/images/event3.jpg" alt="Event 3" />
              <div className="gallery-overlay">
                <h4>Industry Connect</h4>
                <p>Bridging Skills Gap</p>
              </div>
            </div>
          </div>
          
          <button 
            className="modern-btn primary"
            onClick={() => window.location.href = '/gallery'}
          >
            <span>The Event Gallery</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </button>
        </div>
      </section>

      {/* Our Brands & Partners */}
      <section className="section brands-partners">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">OUR BRANDS</h2>
            <p className="section-subtitle">Leading the way in skill development and education</p>
            <div className="title-underline"></div>
          </div>
          
          <div className="brands-grid">
            <div className="brand-card">
              <img src="/images/fteclogo.jpg" alt="F-TEC" />
              <h4>F-TEC</h4>
              <p>Future Technology Education Center</p>
            </div>
            <div className="brand-card">
              <img src="/images/newjobs.jpg" alt="NewJobs" />
              <h4>NewJobs</h4>
              <p>Career Placement Solutions</p>
            </div>
            <div className="brand-card">
              <img src="/images/social-sage.jpg" alt="Social Sage" />
              <h4>Social Sage</h4>
              <p>Social Impact Initiatives</p>
            </div>
            <div className="brand-card">
              <img src="/images/foresight.jpg" alt="Foresight" />
              <h4>Foresight</h4>
              <p>Strategic Planning & Analytics</p>
            </div>
          </div>

          <div className="section-header partners-header">
            <h2 className="section-title">AUTHORIZED TRAINING PARTNER</h2>
            <p className="section-subtitle">Certified by leading government institutions</p>
            <div className="title-underline"></div>
          </div>
          
          <div className="partners-grid">
            <div className="partner-card">
              <img src="/images/goie.jpg" alt="MSDE" />
              <span>MSDE</span>
            </div>
           {/* 
             <div className="partner-card">
              <img src="/images/skill-india-photo.jpg" alt="Skill India" />
              <span>Skill India</span>
            </div> 
            */}
            <div className="partner-card">
              <img src="/images/nsdc.jpg" alt="NSDC" />
              <span>NSDC</span>
            </div>
            <div className="partner-card">
              <img src="/images/pmkk.jpg" alt="PMKK" />
              <span>PMKK</span>
            </div>
            <div className="partner-card">
              <img src="/images/pmkvy.jpg" alt="PMKVY" />
              <span>PMKVY</span>
            </div>
          </div>
          
          {/* Training Centre Selection */}
          <div className="centre-selection">
            <h3>Find Your Nearest Training Centre</h3>
            <div className="selection-wrapper">
              {/*
              <select 
                className="modern-select"
                value={selectedCentre}
                onChange={(e) => setSelectedCentre(e.target.value)}
              >
                <option value="">Select Training Centre</option>
                <option value="delhi">Delhi Centre</option>
                <option value="mumbai">Mumbai Centre</option>
                <option value="bangalore">Bangalore Centre</option>
                <option value="hyderabad">Hyderabad Centre</option>
                <option value="pune">Pune Centre</option>
              </select>
              */}
             <button 
                className="modern-btn primary small"
                onClick={() => window.location.href = '/centers'}
             >
                   <span>Get Details</span>
                </button>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Frontpage;