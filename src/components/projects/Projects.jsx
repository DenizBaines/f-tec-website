import React from 'react';
import './Projects.css';
import NavigationBar from '../navigation/NavigationBar';
import Footer from '../footer/Footer';

const Projects = () => {
  return (

    

    <div className="projects-container">
      {/* Hero Section */}
      <NavigationBar />
      <div className="projects-hero">
        <div className="image-grid">
          <div className="grid-item">
            <img src="/images/computer-screen.jpg" alt="Computer screen" />
          </div>
          <div className="grid-item">
            <img src="/images/retail-training.jpg" alt="Retail training" />
          </div>
          <div className="grid-item">
            <img src="/images/beauty-training.jpg" alt="Beauty training" />
          </div>
          <div className="grid-item">
            <img src="/images/technical-training.jpg" alt="Technical training" />
          </div>
        </div>
        <div className="hero-overlay-skill">
          <h1>Skilling for Livelihood</h1>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="projects-intro">
        <div className="projects-intro-image">
          <img src="/images/proj/light-bulb.jpg" alt="Innovation lightbulb with educational icons" />
        </div>
        <div className="projects-intro-content">
          <h2>Our projects are living laboratories for sustainability.</h2>
          <p>
          F-TEC presently operates through different vertical covering many projects. Projects are broadly categorised into two categories, one is where Students are paying the fee for the program and others are where fee is reimbursed by Govt. under different projects. Our projects presently serve students from 9th Standards to Under-Graduate level where trainings are provided through dedicated Skilling Centres developed based on the specified standards par with international standards. While delivering the training programs, F-TEC maintained international standards in line with ISO certification.
          </p>
        </div>
      </div>

      {/* Business Verticals Header 0 */}
      <div className="section-header">
        <h2><strong>PRESENT BUSINESS VERTICALS AND PROJECTS</strong></h2>  
      </div>

      {/* Fee Based Programs 1 */}
      <div className="project-section">
        <div className="project-image">
          <img src="/images/proj/1.png" alt="Graduate student" />
        </div>
        <div className="project-content">
          <div className="project-logo">
            <img src="/images/proj/log/1.png" alt="F-TEC logo" />
          </div>
          <h3>Fee Based Programs</h3>
          <p>
          The Fee driven model based on F-TEC Certifications as per ISO 9001-2008 certification process & offer  Certificate, Diploma & Modular programs as per the demands of market and preference of youth. A successful, tested & sustainable model  since 1995.
          </p>
        </div>
      </div>

      {/* Fee Based - Skilling India 2 */}
      <div className="project-section alt-bg">
        <div className="project-image">
          <img src="/images/proj/2.png" alt="Graduate silhouette notebook" />
        </div>
        <div className="project-content">
          <div className="project-logo">
            <img src="/images/proj/log/2.png" alt="NSDC logo" />
          </div>
          <h3>Fee Based - Skilling India</h3>
          <p>
          Launched in mid 2014 in partnership with NSDC to roll-out student Fee driven NSQF aligned Programs in different sectors. The certification award is done by respective Sector Skill Council & NSDC based on National Skill Qualification Frame-work. It offers dual certification one as per F-TEC certification process and other from NSDC.
          </p>
        </div>
      </div>

      {/* Fee Based - Skilling India 3 */}
      <div className="project-section">
        <div className="project-image">
          <img src="/images/proj/3.png" alt="Graduate silhouette notebook" />
        </div>
        <div className="project-content">
          <div className="project-logo">
            <img src="/images/proj/log/3.png" alt="NSDC logo" />
          </div>
          <h3>New EdTech Skills</h3>
          <p>
          New EdTech Skills (newjobs.ai) is an initiative of F-TEC group, a pioneer in professional training and skilling since 1995. New EdTech Skills is a Tech Workforce Development company through employability training based on market demands in the era of Industry 4.0. We bring an expertise of 27 years as Group and our credibility of training more than 6,50,000 candidates and providing placement linkages to about half a million candidates.
          </p>
        </div>
      </div>

      {/* Fee Based - Skilling India 4 */}
      <div className="project-section alt-bg">
        <div className="project-image">
          <img src="/images/proj/4.png" alt="Graduate silhouette notebook" />
        </div>
        <div className="project-content">
          <div className="project-logo">
            <img src="/images/proj/log/4.png" alt="NSDC logo" />
          </div>
          <h3>RS - LDC</h3>
          <p>
          A  project in the state of Rajasthan  for   residential training to rural youth. The project is awarded by Rajasthan Skill Livelihood Mission to offer employment linked skill development programs for the rural youth.
          </p>
        </div>
      </div>

      {/* Fee Based - Skilling India 5 */}
      <div className="project-section">
        <div className="project-image">
          <img src="/images/proj/5.png" alt="Graduate silhouette notebook" />
        </div>
        <div className="project-content">
          <div className="project-logo">
            <img src="/images/proj/log/5.png" alt="NSDC logo" />
          </div>
          <h3>Urban Livelihood</h3>
          <p>
          Different projects are  implemented under the NULM project in different states. More opportunities lies with the mission as some more states are planning to roll-out the program.
          </p>
        </div>
      </div>

      {/* Fee Based - Skilling India 6 */}
      <div className="project-section alt-bg">
        <div className="project-image">
          <img src="/images/proj/6.png" alt="Graduate silhouette notebook" />
        </div>
        <div className="project-content">
          <div className="project-logo">
            <img src="/images/proj/log/6.png" alt="NSDC logo" />
          </div>
          <h3>PMKVY</h3>
          <p>
          F-TEC network is best suited for schemes like  PMKVY because of presence of majority centres in the same locality which brings in community reach and huge data base at each centre.
          </p>
        </div>
      </div>

      {/* Fee Based - Skilling India 7 */}
      <div className="project-section">
        <div className="project-image">
          <img src="/images/proj/7.png" alt="Graduate silhouette notebook" />
        </div>
        <div className="project-content">
          <div className="project-logo">
            <img src="/images/proj/log/7.png" alt="NSDC logo" />
          </div>
          <h3>Pradhan Mantri Kaushal Kendra</h3>
          <p>
          The flagship project of Govt. of India through Ministry of Skill Development & Entrepreneurship (MSDE) to create aspirational Skill Development Institutes at district level to realise the vision of Skill India Mission. The institutes are developed under the name & title as “PMKK” Pradhan Mantri Kaushal Kendras.

          </p>
        </div>
      </div>

      {/* Fee Based - Skilling India 8 */}
      <div className="project-section alt-bg">
        <div className="project-image">
          <img src="/images/proj/8.png" alt="Graduate silhouette notebook" />
        </div>
        <div className="project-content">
          <div className="project-logo">
            <img src="/images/proj/log/8.png" alt="NSDC logo" />
          </div>
          <h3>NSQF Programs in Govt. Schools</h3>
          <p>
          F-TEC is presently operating in 92 Govt. schools in the state of Rajasthan with RCSE. The project is an initiative to promote vocationalisation at Senior secondary level and ensure skilling with Schooling.
          </p>
        </div>
      </div>

      {/* Fee Based - Skilling India 9 */}
      <div className="project-section">
        <div className="project-image">
          <img src="/images/proj/9.png" alt="Graduate silhouette notebook" />
        </div>
        <div className="project-content">
          <div className="project-logo">
            <img src="/images/proj/log/9.png" alt="NSDC logo" />
          </div>
          <h3>NSQF at UG Level</h3>
          <p>
          F-TEC has developed programs at NSQF level 5 & 6 to be delivered at college level for Second Year and Final Year students to ensure employable skills and support them in the placement once they pass-out from the college. The project was successfully executed with school of correspondence for women, Delhi University and presently going on in the state of Uttar-Pradesh.
          </p>
        </div>
      </div>

      {/* New EdTech Skills 10 */}
      <div className="project-section alt-bg">
        <div className="project-image">
          <img src="/images/proj/10.png" alt="Classroom" />
        </div>
        <div className="project-content">
          <div className="project-logo">
            <img src="/images/proj/log/10.png" alt="newJobs.ai logo" />
          </div>
          <h3>Deen Dayal Upadhaya Kaushal Vikas Kendra</h3>
          <p>
          One of its kind Grant-in-Aid project from UGC, Min. of HRD to establish model KVK with colleges/University. Sectioned in July 2015 in partnership with Maharashtra Education Society to offer programs from certificate to B. VOC level in the Garwere College in PUNE, F-TEC as industry and knowledge partner engaged in delivery of B.Voc programs as per international standards.
          </p>
        </div>
      </div>
       <Footer />
    </div>
  );
};

export default Projects;