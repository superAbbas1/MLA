import React from 'react';
import { Link } from 'react-router-dom';

import './CTA.css';

const CTA = () => {
  return (
    <section className='cta-container'>
      <div className="cta-container__wrapper animate-on-scroll">
        <div>
          <h2 className="main-heading">Ready to Start Your Journey?</h2>
          <p className="cta-description sub-heading">
            Contact us today to request a consultation or start your application process.
            We're here to help you every step of the way.
          </p>
          <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <button className="sub-heading cta-button">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
