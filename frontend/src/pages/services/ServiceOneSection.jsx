import React from 'react';
// import './Services.css';
import './ServiceOneSection.css'
import ThreeDButton from '../../components/ThreeDButton';

const ServiceOneSection = ({ serviceType, serviceTitle, serviceDesc, buttonType }) => {
    return ( 
        <section className={`services-section ${serviceType}`}>
            <div className="services-content">
                <h2 className="services-title">{serviceTitle}</h2>
                <p className="services-description">
                    {serviceDesc}
                </p>
                <div className='goto-button-container'>
                    <div className="goto-button">
                        <ThreeDButton type={buttonType} />
                    </div>
                </div>
            </div>
            <div className="services-image"> 
                <div className="services-img">

                </div>
            </div>
        </section>
    );
};

export default ServiceOneSection;
