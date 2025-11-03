import React, { useState } from "react";
import './OurMission.css';

const OurMission = () => {
    const [activeCard, setActiveCard] = useState("mission-image-2");
    

    const handleMouseEnter = (card) => {
        setActiveCard(card);
    };

    return (
        <section className="mission-section">
            <div className="mission__wrapper animate-on-scroll page-width">

                <div className="mission-gallery">
                    <div className="mission-cards__wrapper">
                        <div
                            className={`mission-image mission-image-1 ${activeCard === "mission-image-1" ? "flex-4" : ""}`} onMouseEnter={() => handleMouseEnter("mission-image-1")}
                        >
                            <span>Our Vision</span>
                        </div>
                        <div
                            className={`mission-image mission-image-2 ${activeCard === "mission-image-2" ? "flex-4" : ""}`}
                            onMouseEnter={() => handleMouseEnter("mission-image-2")}
                        >
                            <span>Our Mission</span>
                        </div>
                        <div
                            className={`mission-image mission-image-3 ${activeCard === "mission-image-3" ? "flex-4" : ""}`}
                            onMouseEnter={() => handleMouseEnter("mission-image-3")}
                        >
                            <span>Our Promise</span>
                        </div>
                    </div>
                </div>

                <div className="mission-content">
                    <div className={`mission-image-1-content ${activeCard === "mission-image-1" ? "active-content" : ""}`}>
                        <p className="main-heading">Our Vision</p>
                        <p className="sub-heading">
                            Our vision is to become a globally recognized leader in legal and immigration services, empowering individuals and organizations to achieve their ambitions. We aspire to set new standards of integrity, innovation, and excellence, creating a lasting impact in the lives of our clients and the communities we serve. By fostering trust and delivering exceptional results, we envision a future where opportunities are accessible to all.
                        </p>
                    </div>
                    <div className={`mission-image-2-content ${activeCard === "mission-image-2" ? "active-content" : ""}`}>
                        <p className="main-heading">Our Mission</p>
                        <p className="sub-heading">
                            Our mission is to provide insightful, reliable, and timely support to our clients. We strive to make each
                            client's journey smoother, safer, and fully compliant with global standards.
                            Our mission is to provide insightful, reliable, and timely support to our clients. We strive to make each
                            client's journey smoother, safer, and fully compliant with global standards.
                        </p>
                    </div>
                    <div className={`mission-image-3-content ${activeCard === "mission-image-3" ? "active-content" : ""}`}>
                        <p className="main-heading">Our Promise</p>
                        <p className="sub-heading">
                            We are devoted to delivering clarity, unwavering commitment, and tailored guidance at every step of the journey. Our goal is to ensure that every client feels supported, empowered, and confident as they work toward achieving their dreams. By fostering trust, building strong relationships, and consistently exceeding expectations, we aim to be a trusted partner in turning aspirations into lasting success.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default OurMission;
