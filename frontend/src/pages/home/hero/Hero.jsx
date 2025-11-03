import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

import Loader from '../../../components/Loader';
import './Hero.css';
import plane from '../images/plane.png';

const Home = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  var emailTest = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleBookAppointment = async () => {
    if (email === "") {
      setMessage("Please enter Email");
      setIsMessageVisible(true);
      setTimeout(() => setIsMessageVisible(false), 2500);
      return;
    }

    else if (!emailTest) {
      setMessage("Enter a valid email address");
      setIsMessageVisible(true);
      setTimeout(() => setIsMessageVisible(false), 2500);
      return;
    }

    else if (emailTest) {
      setIsLoading(true);

      try {
        const templateParams = {
          email: email,
        };
        const result = await emailjs.send(
          "mla_mail_service",
          "appointment_req_temp",
          templateParams,
          "a1HWWI16Tgkj7rstu"
        );

        console.log("EmailJS result:", result.text);
        setMessage("Appointment email sent successfully! Please check your inbox or spam folder.");
      } catch (error) {
        console.error("EmailJS error:", error);
        setMessage("Failed to send email. Please try again later.");
      }

      setIsLoading(false);
      setIsMessageVisible(true);
      setTimeout(() => setIsMessageVisible(false), 3000);
    };
  }

  return (
    <>
      <section className="hero-section">
        <div className='hero-section__wrapper page-width'>
          <div className="content">
            <h1 className="main-heading">Welcome to <br /> Mansoor Law Associates</h1>
            <p className="sub-heading">Your trusted partner in immigration, law firm, and study abroad services.</p>

            <div className="appointment-container">
              <input
                type="email"
                className="email-input"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required
              />
              <button
                className="book-button sub-heading"
                onClick={handleBookAppointment}
              >
                <span className={`book-button-text ${isLoading ? 'button-text-gone' : ''}`}> Book Appointment </span>
                <span className={`loader-container ${isLoading ? 'loading-start' : ''}`}><Loader /></span>
              </button>
            </div>
          </div>

          <div className='plane-image'>
            <img rel='preload' src={plane} alt="" />
          </div>
        </div>

         <div
        className={`sub-heading message-box ${isMessageVisible ? 'show' : 'hide'}`}
      >
        <span>{message}</span>
      </div>
      </section>

     
    </>
  );
};

export default Home;