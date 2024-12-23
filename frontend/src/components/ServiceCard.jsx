import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css'; // Assuming the CSS is in this file

const ServiceCard = ({ title, subtitle, listItems, classname }) => {
  return (
    <div className={`card ${classname ? classname : ''}`}>
      <div className="card-inner">
        <div className="card-front">
          <div className="service-front-content">
            <h3>{title}</h3>
            <p>{subtitle}</p>
            <p className="p1">TURN around this block by hovering it</p>
          </div>
        </div>
        <div className="card-back">
          <div className="service-back-content">
            <ul className="list"> 
              {listItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <Link to="/contact"  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <button className="get-button"> 
                GET
                <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;