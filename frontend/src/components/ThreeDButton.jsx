import React from "react";
import { Link } from 'react-router-dom';

import './ThreeDButton.css';

const ThreeDButton = ({ type }) => {
    return (
        <>
            <Link to="/contact"  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <div class="container-button">
                    <div class="hover bt-1"></div>
                    <div class="hover bt-2"></div>
                    <div class="hover bt-3"></div>
                    <div class="hover bt-4"></div>
                    <div class="hover bt-5"></div>
                    <div class="hover bt-6"></div>
                    <button className={`actual-button ${type}`}></button>
                </div>
            </Link>
        </>
    );

}

export default ThreeDButton;