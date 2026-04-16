import React, { useState, useEffect, useCallback } from 'react';
import './HomePageCarousel.css';

const HomePageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const slides = [
    {
      id: 1,
      image: '/images/digital-learning.jpg',
      title: 'F-TEC DIPLOMA IN DIGITAL LEARNING & MIS ANALYSIS',
      subtitle: 'Advance Your Career in Educational Technology',
      description: 'Learn the latest skills in digital learning platforms and management information systems analysis with hands-on experience.',
    },
    {
      id: 2,
      image: '/images/mis-analysis.jpg',
      title: 'Data-Driven Decision Making',
      subtitle: 'Master MIS Analysis Techniques',
      description: 'Transform raw data into actionable insights for educational institutions and drive strategic decisions.',
    },
    {
      id: 3,
      image: '/images/career-growth.jpg',
      title: 'Boost Your Career Prospects',
      subtitle: 'Industry-Recognized Certification',
      description: 'Join thousands of successful graduates in the field of educational technology and secure your future.',
    }
  ];

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
    setTimeout(() => setIsTransitioning(false), 500);
  }, [slides.length, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
    setTimeout(() => setIsTransitioning(false), 500);
  }, [slides.length, isTransitioning]);

  //const goToSlide = useCallback((index) => {
   // if (isTransitioning || index === activeIndex) return;
   // setIsTransitioning(true);
   // setActiveIndex(index);
  //  setTimeout(() => setIsTransitioning(false), 500);
  // }, [activeIndex, isTransitioning]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 7000); // Change slide every 5 seconds
    }
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      } else if (event.key === ' ') {
        event.preventDefault();
        togglePlayPause();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="carousel-container">
      <div className="carousel">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`carousel-slide ${index === activeIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
            role="img"
            aria-label={slide.title}
          >
            <div className="slide-overlay"></div>
            <div className="slide-content">
              <div className="content-box">
                <h2>{slide.title}</h2>
                <h3>{slide.subtitle}</h3>
                <p>{slide.description}</p>
                <div className="button-group">
                 {/* <button className="learn-more primary">Learn More</button> */}
                 {/* <button className="learn-more secondary">Apply Now</button> */}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <button 
          className="carousel-control prev" 
          onClick={prevSlide}
          disabled={isTransitioning}
          aria-label="Previous slide"
        >
          <span>&#10094;</span>
        </button>
        
        
        <button 
          className="carousel-control next" 
          onClick={nextSlide}
          disabled={isTransitioning}
          aria-label="Next slide"
        >
          <span>&#10095;</span>
        </button>
        
        
        <div className="carousel-controls-bottom">
          {/*<div className="carousel-indicators">
            {slides.map((_, index) => (
             
             
              <button
                key={index}
                className={`indicator ${index === activeIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                aria-label={`Go to slide ${index + 1}`}
              >

              </button>
              

            ))}
          </div> */}
          
          {/*
          <button 
            className="play-pause-btn"
            onClick={togglePlayPause}
            aria-label={isPlaying ? 'Pause carousel' : 'Play carousel'}
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>
          */}
        
        </div>
        
        {/*
         <div className="slide-counter">
          {activeIndex + 1} / {slides.length}
        </div>
        */}
      </div>
    </div>
  );
};

export default HomePageCarousel;