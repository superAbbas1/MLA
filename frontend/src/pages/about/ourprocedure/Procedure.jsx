import React from "react";
import './Procedure.css';

import ProcedureCard from "../../../components/ProcedureCard";

const Procedure = () => {
    return (
        <>
            <section className="procedure-section">
                <p className="procedure-heading">our procedure</p>
                <p className="procedure-desc">
                    Our step-by-step process is designed to make your journey smooth, efficient, and successful. From initial consultation to final submission, we ensure each stage is handled with expertise and care. Our dedicated team works with you every step of the way, giving you the confidence and clarity to move forward. Let us help you take the next step toward achieving your dreams with a trusted and proven approach.
                </p>



                <div className="procedure-section-row">
                    <ProcedureCard
                        title="Initial Consultation & Assessment"
                        desc="We start by carefully understanding your goals and reviewing your background. This enables us to assess the best approach for your case, ensuring we're prepared to guide you effectively."
                        pfcImage={'consult-image'}
                    />
                     <ProcedureCard
                        title="Tailored Strategy & Planning"
                        desc="With our expertise, we design a strategy specifically tailored to maximize your chances of success. Every step is clear and actionable, so you have a roadmap forward with confidence."
                        pfcImage={'strategy-image'}
                    />
                    <ProcedureCard
                        title="Thorough Documentation & Submission"
                        desc="Precision is critical to our process. We meticulously prepare and review all required documents, handling the submission process to ensure accuracy and compliance with legal requirements."
                        pfcImage={'docs-image'}
                    />
                    <ProcedureCard
                        title="Completion & Success"
                        desc="At this stage, everything is set for success. With your application thoroughly prepared and submitted, our team continues to support you, celebrating with you as you reach your goal."
                        pfcImage={'done-image'}
                    />
                </div>


            </section>



        </>
    );
}

export default Procedure;