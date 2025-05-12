// NavigationBar.jsx
import React, { useState, useEffect } from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  // Close mobile menu when window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  // Toggle mobile menu and close search if open
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isSearchVisible) setIsSearchVisible(false);
  };

  // Toggle search and close mobile menu if open
  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-left">
          <a href="/" className="logo">
            <img src="/images/logo.png" alt="F-TEC Logo" />
          </a>
        </div>

        <div className="navbar-center">
          <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
            <li className="nav-item">
              <div className="nav-item-wrapper">
                <a href="/about">ABOUT</a>
                <ul className="dropdown">
                  <li><a href="/about-us">About Us</a></li>
                  <li><a href="/foundation">Foundation</a></li>
                  <li><a href="/leadership">Leadership</a></li>
                  <li><a href="/achieve">Achievements</a></li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-item-wrapper">
                <a href="/journey">JOURNEY</a>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-item-wrapper">
                <a href="/projects">PROJECTS</a>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-item-wrapper">
                <a href="/services">SERVICES</a>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-item-wrapper">
                <a href="/operations">OPERATIONS</a>
              </div>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <button className="search-toggle-button" onClick={toggleSearch}>
            SEARCH IT
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>

          <button className="mobile-menu-icon" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>

      {isSearchVisible && (
        <div className="search-bar">
          <input type="text" placeholder="Search F-TEC..." aria-label="Search" />
          <button aria-label="Submit search">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default NavigationBar;