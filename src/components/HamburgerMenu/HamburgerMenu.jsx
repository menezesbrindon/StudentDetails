import React, { useRef,useEffect,useState } from 'react';
import './HamburgerMenu.css';
import { Link } from 'react-router-dom';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menu=useRef()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
};

const  handleClickOutside = (e) => {
    if (menu.current && !menu.current.contains(event.target)) {
    setIsOpen(false)}
};
useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="hamburger-menu" ref={menu}>
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
