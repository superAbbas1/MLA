import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

import whitelogo from './images/logo-white.png';
import blackLogo from './images/logo-black.png';

const Header = ({ toggleSidebar }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className={`header-container ${isHomePage ? 'header--home' : ''}`}>
      <nav className="navbar-container">
        <div className="logo-container">
          <Link to="/">
            <img className="logo" src={isHomePage ? whitelogo : blackLogo} alt="Logo" />
          </Link>
        </div>
    
        <div className="navbar-brand">
          <Link to="/">
            <p>Mansoor Law Associates</p>
          </Link>
        </div>

        <div className="navbar-elements">
          <ul className="navbar-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Hamburger menu for sidebar toggle */}
        <div
          className={`hamburger-menu ${isHomePage ? 'hamburger--home' : ''}`}
          onClick={toggleSidebar}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
