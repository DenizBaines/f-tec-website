import React, { useState, useEffect, useRef } from "react";
import "./NavigationBar.css";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons for hamburger menu

const NavigationBar = () => {
  // State for controlling the mobile menu's open/close status
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // State for controlling the search bar's open/close status
  const [searchOpen, setSearchOpen] = useState(false);
  // State for storing the current search term
  const [searchTerm, setSearchTerm] = useState("");
  // Ref to hold the timeout ID for auto-hiding the search bar
  const searchTimeoutRef = useRef(null);

  // Define all possible page names and their links for search functionality
  const pageNames = [
    { name: "Home", link: "/" },
    { name: "Careers", link: "/career" },
    { name: "About", link: "/about" },
    { name: "Achievements & Recognitions", link: "/achieve" },
    { name: "Centers", link: "/centers" },
    { name: "Foundation", link: "/founder" },
    { name: "Journey", link: "/journey" },
    { name: "Leadership", link: "/leadership" },
    { name: "Partners", link: "/partners" },
    { name: "Privacy & Policy", link: "/privacy" },
    { name: "Projects", link: "/projects" },
    { name: "Services", link: "/ser" },
  ];

  // Define the main menu items and their dropdowns
  const menuItems = [
    { name: "Home", link: "/" },
    {
      name: "About Us",
      dropdown: [
        { name: "About Us", link: "/about" },
        { name: "Foundation", link: "/founder" },
        { name: "Leadership", link: "/leadership" },
        { name: "Achievements & Recognitions", link: "/achieve" },
      ],
    },
    { name: "Journey", link: "/journey" },
    { name: "Centers", link: "/centers" },
    { name: "Careers", link: "/career" },
  ];

  // Filter page names based on the search term
  const filteredPages = pageNames.filter(page =>
    page.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle navigation when a search result is clicked
  const handleSearchNavigate = (page) => {
    window.location.href = page.link;
    setSearchOpen(false); // Close search bar after navigation
    setSearchTerm(""); // Clear search term
    clearTimeout(searchTimeoutRef.current); // Clear any pending timeout
  };

  // Function to handle the search button click
  const handleSearchClick = () => {
    setSearchOpen(prev => !prev); // Toggle search bar visibility
    setSearchTerm(""); // Clear search term when opening

    // Clear any existing timeout to prevent conflicts
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    // Set a new timeout to close the search bar after 7 seconds if no input
    // This timeout is only set if the search bar is being opened
    if (!searchOpen) { // Only set timeout if it's about to open
      searchTimeoutRef.current = setTimeout(() => {
        setSearchOpen(false);
      }, 7000);
    }
  };

  // Effect to manage the search bar's auto-hide timeout
  // Clears the timeout if the search term changes (user is typing)
  // or if the search bar is manually closed.
  useEffect(() => {
    if (searchOpen && searchTerm) {
      // If user types, clear the auto-hide timeout
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    } else if (!searchOpen) { // If search bar is closed (either manually or by timeout)
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current); // Ensure timeout is cleared
      }
    }
    // Cleanup function to clear timeout on component unmount
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [searchOpen, searchTerm]);

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-left">
        <a href="/" className="navbar-logo">
          <img src="https://placehold.co/150x40/003366/FFFFFF?text=LOGO" alt="Logo" /> {/* Placeholder logo */}
        </a>
      </div>

      {/* Hamburger Toggle Icon for Mobile */}
      <div className="navbar-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <FaTimes /> : <FaBars />} {/* Show X or Bars icon */}
      </div>

      {/* Main Navigation Menu */}
      <ul className={`navbar-menu ${mobileMenuOpen ? "active" : ""}`}>
        {menuItems.map((item, index) => (
          <li key={index} className="navbar-item">
            {item.link ? (
              <a href={item.link}>{item.name}</a>
            ) : (
              // If no direct link, render a span (e.g., for dropdown parents)
              <span>{item.name}</span>
            )}
            {/* Dropdown Menu for items that have one */}
            {item.dropdown && (
              <div className="dropdown-menu">
                {item.dropdown.map((subItem, idx) => (
                  <a key={idx} className="dropdown-item" href={subItem.link}>
                    {subItem.name}
                  </a>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Search Area */}
      <div className="navbar-search-area">
        {/* Search Button */}
        <button className="search-it-button" onClick={handleSearchClick}>
          Search It
        </button>

        {/* Search Dropdown Bar (conditionally rendered) */}
        {searchOpen && (
          <div className="search-dropdown">
            <input
              type="text"
              placeholder="Search a page..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* Autocomplete List (conditionally rendered if search term exists) */}
            {searchTerm && (
              <ul className="autocomplete-list">
                {filteredPages.length > 0 ? (
                  filteredPages.map((page, idx) => (
                    <li key={idx} onClick={() => handleSearchNavigate(page)}>
                      {page.name}
                    </li>
                  ))
                ) : (
                  <li style={{ padding: '8px', color: '#888' }}>No results found</li>
                )}
              </ul>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
