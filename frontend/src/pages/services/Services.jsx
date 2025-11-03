import React from 'react';
// import './Services.css';

import ServiceOneSection from './ServiceOneSection';
import CTA from '../home/CTA/CTA';

const Services = () => {
  return (
    <section className="services-page">
      <section className="services-page-section">
        <div className="services-container">
          <h2>- Services -</h2>
          <p>
            Empowering You with Comprehensive Solutions

            At Mansoor Law Associates, we offer a wide range of professional services designed to meet your legal and immigration needs. Our experienced team of dedicated experts works tirelessly to ensure clarity, precision, and personalized guidance for every client. Whether you’re navigating complex legal systems, planning your future abroad, or seeking expert advice, we are here to provide reliable solutions tailored to your goals.
          </p>
        </div>
      </section>
      <div className='services-page-row'>
        <ServiceOneSection
          serviceType="first-service"
          serviceTitle="Immigration & Visa Consultation"
          serviceDesc=" Our team provides expert guidance on immigration, student visas, and study abroad options. We are dedicated to assisting clients in achieving their goals of studying or working abroad with seamless application processes, compliance with immigration laws, and personalized advice tailored to their unique circumstances."
          buttonType=""
        />
 
        <ServiceOneSection
          serviceType="TheMiddleService"
          serviceTitle="Study Abroad Guidance"
          serviceDesc="Our team specializes in helping students achieve their dreams of studying abroad. We offer personalized support throughout the application process, from selecting the right program to preparing documents and meeting international standards. With guidance on financial planning and visa documentation, we ensure your journey is smooth and stress-free. Your education is our priority as we help you take this important step toward a global future."
          buttonType="second"
        />

        <ServiceOneSection
          serviceType="last-service"
          serviceTitle="Comprehensive Legal Services"
          serviceDesc="We offer a variety of legal services to meet your needs, including corporate litigation, contract law, civil litigation, family cases, and suits for damages. Our team provides strategic representation in disputes, ensures fair outcomes in family matters, and protects your rights in contractual and civil issues. Trust us for dedicated and professional legal support."
          buttonType=""
        />

        <CTA />

      </div>
    </section>
  );
};

export default Services;