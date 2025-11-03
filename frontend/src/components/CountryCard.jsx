import React from 'react';
import './CountryCard.css';

function CountryCard({ title, description, backgroundClass }) {
  return (
    <div className={`country-card ${backgroundClass}`}>
      <div className="country-content">
        <div className="overlay-text">
          <div className='main-heading'>{title}</div>
          <p className='sub-heading'>{description}</p>
        </div>
        <div className="go-corner">
          <svg className="go-arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 4.5-15 15m0 0h11.25m-11.25 0V8.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;
