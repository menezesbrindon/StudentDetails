// src/components/HamburgerMenu.js
import React, { useState } from 'react';
import './HamburgerMenu.css';
import { Link } from 'react-router-dom';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="hamburger-menu">
      <button onClick={toggleMenu} className="hamburger-button">
        ☰
      </button>
      {isOpen && (
        <div className="menu-content">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <div className="submenu">
            <Link to="#">More</Link>
            <div className="submenu-content">
              <Link to="/contact">Contact</Link>
              <Link to="/faq">FAQ</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HamburgerMenu;
