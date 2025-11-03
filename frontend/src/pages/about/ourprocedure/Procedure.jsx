import React from "react";
import './Procedure.css';

import ProcedureCard from "../../../components/ProcedureCard";

const Procedure = () => {
    return (
        <>
            <section className="procedure-section">
                <div className="procedure__wrapper page-width">
                    <p className="main-heading">Our Procedure</p>
                    <p className="sub-heading procedure-subheading">
                        Our step-by-step process is designed to make your journey smooth, efficient, and successful. From initial consultation to final submission, we ensure each stage is handled with expertise and care. Our dedicated team works with you every step of the way, giving you the confidence and clarity to move forward. Let us help you take the next step toward achieving your dreams with a trusted and proven approach.
                    </p>



                    <div className="procedure-steps__wrapper animate-on-scroll">
                        <ProcedureCard
                            title="Initial Consultation & Assessment"
                            desc="We begin by learning about your goals, background, and unique circumstances.
This helps us identify your strengths and tailor our guidance accordingly.
With a clear understanding, we lay the groundwork for a successful approach."
                            pfcImage={'consult-image'}
                        />
                        <ProcedureCard
                            title="Tailored Strategy & Planning"
                            desc="Based on your needs, we design a personalized strategy focused on results.
Each step is clear and actionable, giving you confidence throughout the process.
Our goal is to simplify the path and keep you informed at every stage."
                            pfcImage={'strategy-image'}
                        />
                        <ProcedureCard
                            title="Thorough Documentation & Submission"
                            desc="We carefully prepare and review all required documents for accuracy and compliance.
Our team ensures everything is complete, organized, and ready for submission.
This precision helps prevent delays and keeps your application on track."
                            pfcImage={'docs-image'}
                        />
                        <ProcedureCard
                            title="Completion & Success"
                            desc="Even after submission, we continue to guide and support you as needed.
We keep you updated, answer your questions, and monitor progress closely.
And when your goal is achieved, we’re proud to celebrate that success with you."
                            pfcImage={'done-image'}
                        />
                    </div>

                </div>
            </section>



        </>
    );
}

export default Procedure;