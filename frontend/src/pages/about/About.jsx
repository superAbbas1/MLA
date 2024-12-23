import React from 'react';

import './About.css';

import OurMission from './ourmission/OurMission';
import Procedure from './ourprocedure/Procedure';
import CTA from '../home/CTA/CTA';
import ceoPic from './images/Zaid-AboutUs.png';


const About = () => {
  return (
    <>
      <section className='about-us-page'>
          <section class="about-us-section">
            <div class="about-us-container">
              <div className='about-us-content'>
                <h2>- About Us -</h2>
                <p>
                  At Mansoor Law Associates, we are dedicated to delivering exceptional legal and immigration services.
                  With a commitment to integrity, expertise, and personalized support, we guide individuals and organizations
                  toward achieving their aspirations. Whether it's navigating complex legal challenges or pursuing global opportunities,
                  we are here to make the journey smooth, informed, and successful.
                </p>
              </div>
              <div className='about-us-picture'>
                <div className='about-us-pic-wrapper'>
                  <span className='about-us-pic-round'></span>
                  <img className='picture-ceo' src={ceoPic} alt="" />
                </div>
              </div>
            </div>
          </section>
        <OurMission />
        <Procedure />
        <CTA />
      </section>
    </>
  );
}
// our mission ----
// our procedure 
// our expertise
// ceo 
export default About;
