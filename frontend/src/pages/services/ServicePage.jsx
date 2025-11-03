import React from 'react';
import './ServicePage.css';
import CTA from '../home/CTA/CTA';
import FeatureCard from '../../components/FeatureCard';

import useScrollAnimation from '../../components/useScrollAnimation';
import { useLocation } from "react-router-dom";

const ServicePage = ({
    title,
    content,
    image,
    subtitle = "",
    features = [],
    assist
}) => {
    const location = useLocation();
     useScrollAnimation(location.pathname);
    return (
        <>
            <div className="service-page">
                <section className={`service-hero__container animate-on-scroll ${image}`}>
                    <div className="service-hero__wrapper page-width">
                        <h1 className="large-main-heading">{title}</h1>
                        <p className='main-heading'>{subtitle}</p>
                    </div>
                </section>

                <section className="service-content animate-on-scroll">
                    <div className="service-content__wrapper page-width sub-heading">
                            {typeof content === 'string' ? (
                                <div dangerouslySetInnerHTML={{ __html: content }} />
                            ) : (
                                content
                            )}
                    </div>
                </section>

                <section className="service-features__container">
                    <div className="service-features__wrapper">
                        <h2 className='main-heading'>How We Assist</h2>
                        <div className="features-grid animate-on-scroll page-width grid-3-col__laptop grid-2-col__tablet grid-1-col__mobile">
                            {Object.entries(assist).map(([key, assistItem]) => (
                                <FeatureCard
                                    key={key}
                                    title={assistItem.title}
                                    description={assistItem.description}
                                    svg={assistItem.svg}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <CTA />
        </>
    );
};

export default ServicePage;