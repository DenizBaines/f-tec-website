import React, { useState } from "react";
import "./NavigationBar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const NavigationBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredPages = pageNames.filter(page =>
    page.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchNavigate = (page) => {
    window.location.href = page.link;
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="navbar-logo">
          <img src="/images/logo.png" alt="Logo" />
        </a>
      </div>

      <div className="navbar-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`navbar-menu ${mobileMenuOpen ? "active" : ""}`}>
        {menuItems.map((item, index) => (
          <li key={index} className="navbar-item">
            {item.link ? (
              <a href={item.link}>{item.name}</a>
            ) : (
              <span>{item.name}</span>
            )}
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

      <div className="navbar-search-area">
        <button className="search-it-button" onClick={() => setSearchOpen(!searchOpen)}>
          Search It
        </button>

        {searchOpen && (
          <div className="search-dropdown">
            <input
              type="text"
              placeholder="Search a page..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <ul className="autocomplete-list">
                {filteredPages.map((page, idx) => (
                  <li key={idx} onClick={() => handleSearchNavigate(page)}>
                    {page.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
