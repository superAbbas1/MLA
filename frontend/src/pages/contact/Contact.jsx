import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import "./Contact.css";
import Loader from "../../components/Loader";
import SocialToolTips from "../../components/SocialToolTips";

import useScrollAnimation from "../../components/useScrollAnimation";

const Contact = () => {
  useScrollAnimation();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    meetingPreference: "online",
    message: "",
  });

  const [validInputs, setValidInputs] = useState({
    email: true,
    date: true
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [statusMessageVisible, setStatusMessageVisible] = useState(false);

  const validateInput = (id, value) => {
    switch (id) {
      case "email":
        return /\S+@\S+\.\S+/.test(value);
      case "date":
        const selectedDate = new Date(value.trim());
        const currentDate = new Date();

        currentDate.setHours(0, 0, 0, 0);
        selectedDate.setHours(0, 0, 0, 0);

        return selectedDate > currentDate;
      default:
        return false;
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    const fieldsToValidate = ["email", "date"];
    if (fieldsToValidate.includes(id)) {
      setValidInputs({ ...validInputs, [id]: validateInput(id, value) });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const invalidFields = Object.entries(validInputs)
      .filter(([_, value]) => !value)
      .map(([key]) => key);

    const entries = Object.entries(formData);
    const entriesToCheck = entries.slice(0, -1);

    const emptyFields = entriesToCheck
      .filter(([_, value]) => !value?.trim())
      .map(([key]) => key);

    if ((emptyFields.length > 0) || (invalidFields.length > 0)) {
      setStatusMessage(
        [
          emptyFields.length > 0 && `Empty Fields: ${emptyFields.join(', ')}`,
          invalidFields.length > 0 && `Invalid Fields: ${invalidFields.join(', ')}`
        ]
          .filter(Boolean)
          .join(' | ')
      );
      setStatusMessageVisible(true);
      setTimeout(() => setStatusMessageVisible(false), 4000);
      return;
    }
    else {

      setIsLoading(true);

      try {
        const meetingDetails =
          formData.meetingPreference === "online"
            ? "The consultation will take place via Google Meet. We will send you the meeting link one hour before the scheduled time."
            : "The consultation will take place at our office. We will reply shortly with a confirmation.";

        const templateParams = {
          name: formData.name,
          email: formData.email,
          date: formData.date,
          time: formData.time,
          meetingPreference: formData.meetingPreference,
          message: formData.message || "",
          meeting_details: meetingDetails
        };

        await emailjs.send(
          'mla_mail_service',
          'appointment_book_temp',
          templateParams,
          'a1HWWI16Tgkj7rstu'
        );

        setStatusMessage("Mail sent successfully!");
        setFormData({
          name: "",
          email: "",
          date: "",
          time: "",
          meetingPreference: "online",
          message: "",
        });
        setValidInputs({
          name: true,
          email: true,
          date: true,
          time: true,
          message: true,
        });
      } catch (error) {
        console.error("EmailJS error:", error);
        setStatusMessage("Could not send email - try again.");
      } finally {
        setIsLoading(false);
        setStatusMessageVisible(true);
        setTimeout(() => setStatusMessageVisible(false), 3000);
      }
    }
  };


  return (
    <section className="contact-page">
      <h1 className="main-heading">Try First FREE Consultancy with us</h1>
      <div className="contact-section__wrapper animate-on-scroll page-width">
        {/* Contact Information Section */}
        <div className="appointment-schedule__container">
          <div className="appointment-schedule__wrapper">
            <div className="appointment-content">
              <h2 className="main-heading">Schedule Your Free Consultation</h2>
              <p className="sub-heading">
                Follow these steps to book your consultation:
              </p>
              <ul className="appointment-guidance sub-heading">
                <li>Fill out the form with your details and any questions.</li>
                <li>Click submit to complete your booking.</li>
                <li>Receive a confirmation email with your appointment details.</li>
                <li>Our team will reach out to confirm the session time.</li>
              </ul>
            </div>

            <div className="appointment-social-details">
              <SocialToolTips />
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form__container">
          <h3 className="main-heading">Book Your Appointment Now</h3>
          <form className="contact-form sub-heading" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                style={{
                  borderColor: validInputs.email ? "" : "red",
                }}
              />
            </div>

            <div className="dateAndTime">
              <div>
                <label htmlFor="date">Preferred Date <span style={{ fontSize: '0.55em', fontFamily: 'revert', color: 'grey' }}>(only future selected dates will be considered as valid)</span></label>
                <input
                  type="date"
                  id="date"
                  value={formData.date}
                  onChange={handleChange}
                  style={{
                    borderColor: validInputs.date ? "" : "red",
                  }}
                />
              </div>

              <div>
                <label htmlFor="time">Preferred Time</label>
                <input
                  type="time"
                  id="time"
                  value={formData.time}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label htmlFor="meetingPreference">Which meeting do you prefer?</label>
              <select
                id="meetingPreference"
                value={formData.meetingPreference}
                onChange={handleChange}
              >
                <option value="online">Online</option>
                <option value="on-site">On-site</option>
              </select>
            </div>

            <div>
              <label htmlFor="message">Message <span>(Optional)</span></label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
              ></textarea>
            </div>

            <div className="submit-btn">
              <button type="submit">
                <span className={`book-button-text ${isLoading ? 'button-text-gone' : ''}`}>Submit</span>
                <span className={`loader-container ${isLoading ? 'loading-start-submit' : ''}`}><Loader /></span>
              </button>
            </div>
          </form>
        </div>
      </div>
      {statusMessage && <div className={`status-message sub-heading ${statusMessageVisible ? 'messageShow' : ''}`}><span>{statusMessage}</span></div>}
    </section>
  );
};

export default Contact;
