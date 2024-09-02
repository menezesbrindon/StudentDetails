// src/components/Header.js
import React from 'react';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import HorizontalMenu from '../HorizontalMenu/HorizontalMenu';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <HamburgerMenu />
      <HorizontalMenu />
    </div>
  );
}

export default Header;
