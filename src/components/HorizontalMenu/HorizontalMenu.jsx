// src/components/HorizontalMenu.js
import React from 'react';
import './HorizontalMenu.css';
import { Link } from 'react-router-dom';

function HorizontalMenu() {
  return (
    <div className="horizontal-menu">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
    </div>
  );
}

export default HorizontalMenu;
