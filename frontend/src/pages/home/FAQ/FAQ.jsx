import React, { useState } from "react";
import './FAQ.css';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <>
      <section className="faq-section">
      <h2 className="main-heading">Frequently Asked Questions</h2>
        <div className="faq-section__wrapper animate-on-scroll page-width sub-heading">
          

          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(1)}>
              What are the basic requirements to study abroad?
              <span className="faq-arrow">{activeIndex === 1 ? "-" : "+"}</span>
            </div>
            <div className={`faq-answer ${activeIndex === 1 ? "active" : ""}`}>
              <p>The basic requirements to study abroad generally include:</p>
              <ul>
                <li>A valid passport.</li>
                <li>Proof of academic qualifications (e.g., transcripts, diplomas).</li>
                <li>Language proficiency test scores (such as IELTS or TOEFL).</li>
                <li>Letters of recommendation.</li>
                <li>A statement of purpose or personal essay.</li>
                <li>Financial proof showing your ability to cover tuition and living expenses.</li>
              </ul>
              <p>Requirements may vary by country and institution.</p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(2)}>
              What is the minimum CGPA required for admission to universities abroad?
              <span className="faq-arrow">{activeIndex === 2 ? "-" : "+"}</span>
            </div>
            <div className={`faq-answer ${activeIndex === 2 ? "active" : ""}`}>
              <p>The minimum CGPA varies by university and country. Generally, a CGPA of 2.5 to 3.0 is the minimum for undergraduate programs, while competitive programs like master’s or MBA might require a CGPA of 3.5 and above. Always check with specific universities for their requirements.</p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(3)}>
              Do I need to take an English proficiency test like IELTS or TOEFL?
              <span className="faq-arrow">{activeIndex === 3 ? "-" : "+"}</span>
            </div>
            <div className={`faq-answer ${activeIndex === 3 ? "active" : ""}`}>
              <p>Yes, most universities require proof of English proficiency for non-native English speakers. IELTS or TOEFL are common tests, and some institutions also accept PTE Academic. Exemptions may apply if you've studied in English previously.</p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(4)}>
              How long does the visa process take for studying abroad?
              <span className="faq-arrow">{activeIndex === 4 ? "-" : "+"}</span>
            </div>
            <div className={`faq-answer ${activeIndex === 4 ? "active" : ""}`}>
              <p>Visa processing times vary by country. Typically, it takes between 4 to 12 weeks. It's advised to apply as soon as you receive your offer letter and have all necessary documents ready.</p>
            </div>
          </div>

          <div className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(5)}>
              Can I work while studying abroad?
              <span className="faq-arrow">{activeIndex === 5 ? "-" : "+"}</span>
            </div>
            <div className={`faq-answer ${activeIndex === 5 ? "active" : ""}`}>
              <p>Yes, many countries allow international students to work part-time (usually up to 20 hours per week during term time). However, regulations vary, so check the rules for your country of study. Some countries, like the USA, restrict work to on-campus, while others, like Canada and Australia, offer more flexibility.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQ;
