import React from 'react';
import { Link } from 'react-router-dom';

import './CTA.css';

const CTA = () => {
  return (
    <section className='cta-container-whole'>
      <div className="cta-container animate-section">
        <h2 className="cta-heading">Ready to Start Your Journey?</h2>
        <p className="cta-description">
          Contact us today to request a consultation or start your application process.
          We're here to help you every step of the way.
        </p>
        <Link to="/contact"  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}> 
          <button className="cta-button">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
