import React, { useState } from 'react';
import './HomePageCarousel.css';

const HomePageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: '/images/digital-learning.jpg',
      title: 'F-TEC DIPLOMA IN DIGITAL LEARNING & MIS ANALYSIS',
      subtitle: 'Advance Your Career in Educational Technology',
      description: 'Learn the latest skills in digital learning platforms and management information systems analysis.',
    },
    {
      id: 2,
      image: '/images/mis-analysis.jpg',
      title: 'Data-Driven Decision Making',
      subtitle: 'Master MIS Analysis Techniques',
      description: 'Transform raw data into actionable insights for educational institutions.',
    },
    {
      id: 3,
      image: '/images/career-growth.jpg',
      title: 'Boost Your Career Prospects',
      subtitle: 'Industry-Recognized Certification',
      description: 'Join thousands of successful graduates in the field of educational technology.',
    }
  ];

  const nextSlide = () => {
    setActiveIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${index === activeIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <h3>{slide.subtitle}</h3>
              <p>{slide.description}</p>
              <button className="learn-more">Learn More</button>
            </div>
          </div>
        ))}
        
        <button className="carousel-control prev" onClick={prevSlide}>&#10094;</button>
        <button className="carousel-control next" onClick={nextSlide}>&#10095;</button>
        
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePageCarousel;