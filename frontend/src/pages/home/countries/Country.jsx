import React, { useState } from 'react';
import './Country.css';
import CountryCard from '../../../components/CountryCard';

const Country = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <section className='countries-section'>
        <div className='main-heading'>Why these Countries?</div>

        <div className='countries-section__wrapper page-width'>
          <p className='countries-description sub-heading'>
            These countries are top choices for international students, known for their high-quality education systems and commitment to research and innovation. With globally ranked universities and diverse programs, they offer strong academic and career-building opportunities.<span className={`read-more-container ${isExpanded ? 'text-hidden' : 'text-visible'}`}> - <span className='read-more-button' onClick={toggleReadMore}>Read More</span> </span>

            <span className={`further-country-text ${isExpanded ? 'text-visible' : 'text-hidden'}`}> Beyond academics, they provide a high standard of living, including excellent healthcare, modern infrastructure, and welcoming multicultural communities. Each country has a stable economy, with plenty of options for work during and after studies, creating a smooth path for students to transition into their careers. With safe environments and support for post-graduation employment, these destinations offer students a place to learn, grow, and build a successful future.</span>
            <span className={`read-less-button ${isExpanded ? 'text-inline' : 'text-hidden'}`} onClick={toggleReadMore}> - Read Less</span>
          </p>

          <div className='countries-images animate-on-scroll'>
            <CountryCard
              title="Canada"
              description="Canada offers a world-class education system with affordable tuition fees, a high quality of life, and opportunities for international students to thrive academically and professionally in a multicultural and welcoming environment."
              backgroundClass="background-canada"
            />
            <CountryCard
              title="England"
              description="The UK is home to some of the world's oldest and most prestigious universities, offering rich academic traditions, innovative research, and a globally recognized education system that prepares students for successful careers."
              backgroundClass="background-uk"
            />
            <CountryCard
              title="Australia"
              description="Australia provides a perfect blend of high-quality education, diverse academic programs, and a stunning lifestyle with beautiful landscapes, vibrant cities, and excellent post-graduation work opportunities."
              backgroundClass="background-australia"
            />
          </div>
        </div>

      </section >

    </>
  )
}

export default Country;