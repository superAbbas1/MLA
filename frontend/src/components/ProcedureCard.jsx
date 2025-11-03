import React from "react";
import './ProcedureCard.css';

const ProcedureCard = ({ title, desc , pfcImage }) => {
    return (
        <>
            <div className={`procedure-card ${pfcImage} sub-heading`}>
                <div className="procedure-first-content">
                    <span>{title}</span>
                </div>
                <div className="procedure-second-content">
                    <span>{desc}</span>
                </div>
            </div>  
        </>
    );
}

export default ProcedureCard;