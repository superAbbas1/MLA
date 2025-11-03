import React, {useState} from 'react';
import { NavLink } from "react-router-dom";

import './Sidebar.css';
import blacklogo from '../pages/header/images/logo-black.png';

const Sidebar = ({ isOpen, onClose }) => {
  const [dropdown, setDropdown] = useState(false);

  const handleSidebarDropdown = () => {
    setDropdown(!dropdown);
  }

  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className={`page-width sidebar-wrapper ${isOpen ? 'open' : ''}`}>

        <div className="sidebar-header">
          <img rel='preload' className='sidebar-logo' src={blacklogo} alt="Mansoor Law Associates" />
          <span className="close-sidebar" onClick={onClose}>&times;</span>
        </div>

        <div className="sidebar-links sub-heading">
          <NavLink className='sidebar-link-item' to="/MLA" onClick={onClose}>Home</NavLink>
          <div onClick={handleSidebarDropdown} className={`sidebar__services-dropdown sidebar-link-item ${dropdown ? 'active' : ''}`}>
            Services
            <svg xmlns="http://www.w3.org/2000/svg" width={'0.6rem'} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>

            <div className="sidebar-dropdown-menu">

              <NavLink className='sidebar-link-item' to="/immigration" onClick={onClose}>Immigration & Visa Consultation</NavLink>
              <NavLink className='sidebar-link-item' to="/study-abroad" onClick={onClose}>Study Abroad Guidance</NavLink>
              <NavLink className='sidebar-link-item' to="/legal-services" onClick={onClose}>Comprehensive Legal Services</NavLink>
            </div>
          </div>
          <NavLink className='sidebar-link-item' to="/about" onClick={onClose}>About</NavLink>
          <NavLink className='sidebar-link-item' to="/contact" onClick={onClose}>Contact Us</NavLink>
        </div>

        <div className="sidebar-contact sub-heading">
          <p><strong>Location:</strong> H5 DAV College Hostel1 Lower Mall, Lahore</p>
          <p><strong>Email: </strong><a href="mailto:consultants@mansoor-law-associates.com" >
            consultants@mansoor-law-associates.com</a>
          </p>
          <p><strong>Number:</strong><a href='https://wa.me/+923224788568'> +92 322 4788568</a></p>
        </div>


        <div className="sidebar-socials sub-heading">
          <ul className="sidebar-social-list">
            <li className="icon-content">
              <NavLink className='sidebar-footer-link-item'
                data-social="facebook"
                to="https://www.facebook.com/profile.php?id=61562389370965"
              >
                <div className="filled"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="16"
                  height="16" fill="currentColor" version="1.1" id="Layer_1" viewBox="0 0 310 310">
                  <g id="XMLID_834_">
                    <path id="XMLID_835_" d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064   c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996   V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545   C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703   c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z" />
                  </g>
                </svg>
              </NavLink>
              <div className="sidebar-social-tooltip">Facebook</div>
            </li>



            <li className="icon-content">
              <NavLink className='sidebar-footer-link-item'
                data-social="linkedin"
                to='https://www.linkedin.com/company/mansoor-law-associates-4387792'
              >
                <div className="filled"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"

                >
                  <path
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                    fill="currentColor"
                  ></path>
                </svg>
              </NavLink>
              <div className="sidebar-social-tooltip">LinkedIn</div>
            </li>



            <li className="icon-content">
              <NavLink className='sidebar-footer-link-item'
                data-social="instagram"
                to='https://www.instagram.com/mansoorlawassociates/'
              >
                <div className="filled"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-instagram"
                  viewBox="0 0 16 16"

                >
                  <path
                    d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                    fill="currentColor"
                  ></path>
                </svg>
              </NavLink>
              <div className="sidebar-social-tooltip">Instagram</div>
            </li>

          </ul>

        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
