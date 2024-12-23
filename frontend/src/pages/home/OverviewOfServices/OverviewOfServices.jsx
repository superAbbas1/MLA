import React from 'react';
import './OverviewOfServices.css';
import ServiceCard from '../../../components/ServiceCard';

const OverviewOfServices = () => {
  return (
    <div className="services-overview">
      <h2>Explore Our Premier Services</h2>
      <div className="services-grid animate-section">

        <ServiceCard
          title="Immigration Services"
          subtitle="Your pathway to a new life"
          listItems={[
            'Visa Applications & Processing',
            'Permanent Residency Guidance',
            'Family Reunification Programs',
            'Experienced Legal Consultation'
          ]}
        />

        <ServiceCard
          classname='middle-one'
          title="Study Abroad Consultancy"
          subtitle="Guidance to achieve your academic dreams abroad"
          listItems={[
            'University Selection',
            'Visa Application Assistance',
            'Accommodation & Settling Assistance',
            'Scholarship Guidance'
          ]}
        />

        <ServiceCard
          title="Legal Advice Services"
          subtitle="Trusted legal support tailored to your needs"
          listItems={[
            'Suit for Damages',
            'Corporate Litgation',
            'Civil Litigation',
            'Contract Law',
            'Family Cases'
          ]}
        />



      </div>
    </div>
  );
};

export default OverviewOfServices;
