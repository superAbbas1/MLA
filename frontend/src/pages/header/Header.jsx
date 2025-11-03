import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

import whitelogo from './images/logo-white.png';
import blackLogo from './images/logo-black.png';

const Header = ({ toggleSidebar }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <header className={`header-container ${isHomePage ? 'header__home' : ''}`}>
      <nav className="navbar-container">
        <div className='navbar__wrapper page-width'>
          <Link className='header-logo-container' to="/">
            <img rel='preload' className="logo" src={isHomePage ? whitelogo : blackLogo} alt="Logo" />
          </Link>

          <Link className='navbar-brand' to="/">
            Mansoor Law Associates
          </Link>

            <ul className="navbar-list sub-heading">
              <li><Link to="/" className="nav-item">Home</Link></li>
              <li className="services-dropdown">
                <span className="dropdown-trigger nav-item">
                  Services
                  <span
                    className="arrow"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width={'0.6rem'} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                  </span>
                </span>
                <ul className="header-dropdown-menu">
                  <li><Link className='nav-item' to="/immigration">Immigration & Visa Consultation</Link></li>
                  <li><Link className='nav-item' to="/study-abroad">Study Abroad Guidance</Link></li>
                  <li><Link className='nav-item' to="/legal-services">Comprehensive Legal Services</Link></li>
                </ul>
              </li>
              <li><Link className='nav-item' to="/about">About</Link></li>
              <li><Link className='nav-item' to="/contact">Contact</Link></li>
            </ul>

          <div
            className={`hamburger-menu ${isHomePage ? 'hamburger--home' : ''}`}
            onClick={toggleSidebar}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
