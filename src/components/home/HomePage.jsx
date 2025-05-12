import React from 'react';
import UpperNavigation from '../navigation/UpperNavigation';
import NavigationBar from '../navigation/NavigationBar';
import HomePageCarousel from './HomePageCarousel';
// import OurProjects from '../../projects/OurProjects';
import Footer from '../footer/Footer';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <UpperNavigation />
      <NavigationBar />
      <HomePageCarousel />
      <div className="home-content">
        <div className="container">
          <h1>F-TEC DIPLOMA IN DIGITAL LEARNING & MIS ANALYSIS</h1>
          <div className="course-description">
            <p>
              Enhance your skills in digital learning and management information systems analysis
              with our comprehensive diploma program. Designed for professionals looking to advance
              their career in educational technology and data analysis.
            </p>
            <button className="enroll-button">Enroll Now</button>
          </div>
        </div>
      </div>
      
      
      
     
     
    <Footer />
    </div>
  );
};

export default HomePage;