import React from 'react';

import './About.css';

import OurMission from './ourmission/OurMission';
import Procedure from './ourprocedure/Procedure';
import CTA from '../home/CTA/CTA';
// import ceoPic from './images/Zaid-AboutUs.png';

import useScrollAnimation from '../../components/useScrollAnimation';

const About = () => {
  useScrollAnimation();
  return (
    <>
      <div className='about-us-page'>
          <section className="about-us__section border-circle">
            <div className="about-us__wrapper page-width">
              <div className='about-us-content'>
                <h2 className='main-heading'>- About Us -</h2>
                <p className='sub-heading'>
                  At Mansoor Law Associates, we are dedicated to delivering exceptional legal and immigration services.
                  With a commitment to integrity, expertise, and personalized support, we guide individuals and organizations
                  toward achieving their aspirations. Whether it's navigating complex legal challenges or pursuing global opportunities,
                  we are here to make the journey smooth, informed, and successful.
                </p>
              </div>
              {/* <div className='about-us-picture'>
                <div className='about-us-pic-wrapper'>
                  <span className='about-us-pic-round'></span>
                  <img className='picture-ceo' src={ceoPic} alt="" />
                </div>
              </div> */}
            </div>
          </section>
        <OurMission />
        <Procedure />
        <CTA />
      </div>
    </>
  );
}

export default About;