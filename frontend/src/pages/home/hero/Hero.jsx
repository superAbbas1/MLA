import React, { useState } from 'react';

import Loader from '../../../components/Loader';
import './Hero.css';
import plane from '../images/plane.png';

const Home = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // State to hold message
  const [isMessageVisible, setIsMessageVisible] = useState(false); // For message visibility
  const [isLoading , setIsLoading] = useState(false);
  

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleBookAppointment = async () => {
    if (!isValidEmail(email)) {
      setMessage("Enter a valid input");
      setIsMessageVisible(true);
      setTimeout(() => {
        setIsMessageVisible(false);
      }, 2500);
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://mla-six.vercel.app/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Appointment email sent successfully! If not found, check spam folder");
      } else {
        setMessage("Failed to send the email. Please try again.");
      }

      // Show message 
      setIsMessageVisible(true);
      setIsLoading(false);

      // Hide message after 5 seconds
      setTimeout(() => {
        setIsMessageVisible(false);
      }, 3000);
      
    } catch (error) {
      console.error("Error sending email:", error);
      setMessage("An error occurred while sending the email.");
      
      setIsLoading(false);
      setIsMessageVisible(true);
      setTimeout(() => {
        setIsMessageVisible(false);
      }, 3000);
    }
  };

  return (
    <>
      <section id="home" className="home">
        <div className='home-row'>
          <div className="content">
            <h1 className="">Welcome to <br /> Mansoor Law Associates</h1>
            <p className="">Your trusted partner in immigration, law firm, and study abroad services.</p>

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
                className="book-button"
                onClick={handleBookAppointment}
              >
               <span className={`book-button-text ${isLoading ? 'button-text-gone' : ''}`}> Book Appointment </span>
               <span className={`loader-container ${isLoading ? 'loading-start' : ''}`}><Loader/></span>
              </button>
            </div>
          </div>

          <div className='plane-image'>
            <img src={plane} alt="" />
          </div>
        </div>
      </section>

      {/* Message Box */}
      <div 
        className={`message-box ${isMessageVisible ? 'show' : 'hide'}`} 
      >
        <span>{message}</span>
      </div>
    </>
  );
};

export default Home;