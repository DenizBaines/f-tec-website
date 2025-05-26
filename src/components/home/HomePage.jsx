import React from 'react';

import NavigationBar from '../navigation/NavigationBar';
import HomePageCarousel from './HomePageCarousel';
// import OurProjects from '../../projects/OurProjects';
import Footer from '../footer/Footer';
import './HomePage.css';
import Frontpage from '../frontpage/Frontpage';

const HomePage = () => {
  return (
    <div className="home-page">
      
      <NavigationBar />
      <HomePageCarousel />
      <div className="home-content">
        <div className="container">
          <h1>F-TEC AT A GLANCE - In Service to the Nation Since 1995</h1>
          <div className="course-description">
            <p>
            F-TEC Skill Development is an initiative of Foresight Edutech Private Limited, a NSDC partner Company. F-TEC as training organisation was set-up in 1995 to cater the demands of IT skilled workforce which over the time evolved as a training and Multi-Skilling company working extensively to support Skill India Mission.
            </p>
            <button className="enroll-button">Enroll Now</button>

           
          </div>
        </div>
        <div className="frontpage">
          <Frontpage /> 
          </div>
      </div>
      
      
      
     
     
    <Footer />
    </div>
  );
};

export default HomePage;