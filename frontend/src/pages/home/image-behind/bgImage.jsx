import React from "react";
import "./bgImage.css";

import useScrollAnimation from "../../../components/useScrollAnimation";

const BgImage = () => {
    useScrollAnimation();
    return (
        <section className="background-section">
            <div className="background-section-content page-width">
                <p className="animate-on-scroll"><strong>Dream</strong> it<strong>.</strong></p>
                <p className="animate-on-scroll"><strong>Wish</strong> it<strong>.</strong></p>
                <p className="animate-on-scroll"><strong>Do</strong> it<strong>.</strong></p>
            </div>
        </section>
    );
};

export default BgImage;