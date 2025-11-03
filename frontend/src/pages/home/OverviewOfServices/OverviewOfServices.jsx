import React from 'react';
import './OverviewOfServices.css';
import ServiceCard from '../../../components/ServiceCard';
const OverviewOfServices = () => {
  return (
    <>
      <section className="services-overview__container">
        <div className="services-overview__wrapper page-width">

          <h2 className='main-heading'>Explore Our Premier Services</h2>
          <div className="services-grid animate-on-scroll">

            <ServiceCard
              title="Immigration Services"
              subtitle="Your pathway to a new life"
              listItems={[
                'Visa Applications & Processing',
                'Permanent Residency Guidance',
                'Family Reunification Programs',
                'Experienced Legal Consultation'
              ]}
              link="/immigration"
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
              link="/study-abroad"
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
              link="/legal-services"
            />

          </div>
        </div>

      </section>
    </>
  );
};

export default OverviewOfServices;
