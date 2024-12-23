import React, { useState } from "react";
import "./Contact.css";
import Loader from "../../components/Loader";
import SocialToolTips from "../../components/SocialToolTips";

const Contact = () => {
  const [isLoading , setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    meetingPreference: "online",
    message: "",
  });

  const [validInputs, setValidInputs] = useState({
    name: true,
    email: true,
    date: true,
    time: true,
    message: true
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [statusMessageVisible, setStatusMessageVisible] = useState(false);

  const validateInput = (id, value) => {
    switch (id) {
      case "name":
        return value.trim() !== "";
      case "email":
        return /\S+@\S+\.\S+/.test(value);
      case "date":
        const selectedDate = new Date(value.trim());
        const currentDate = new Date();

        // Set the time to 00:00:00 for both current and selected dates
        currentDate.setHours(0, 0, 0, 0);
        selectedDate.setHours(0, 0, 0, 0);

        // Ensure the selected date is strictly greater than today (not today or in the past)
        return selectedDate > currentDate;
      case "time":
        return value.trim() !== "";
      case "message":
        return value.trim() !== "";
      default:
        return false;
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    // Validate the input live
    setValidInputs({ ...validInputs, [id]: validateInput(id, value) });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check all inputs
    const isFormValid = Object.keys(validInputs).every(
      (key) => validInputs[key]
    );

    if (!isFormValid) {
      setStatusMessage(" input field");
      setStatusMessageVisible(true);
      setTimeout(() => {
        setStatusMessageVisible(false);
      }, 3000);
      return;
    }

    setIsLoading(true);


    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage("Mail sent successfully!");
        setStatusMessageVisible(true);
        setIsLoading(false);
        setTimeout(() => {
          setStatusMessageVisible(false);
        }, 3000);
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
      } else {
        setStatusMessage("Could not send email - try again.");
        setStatusMessageVisible(true);
        setIsLoading(false);
        setTimeout(() => {
          setStatusMessageVisible(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error:", error);
      setStatusMessage("Could not send email - try again.");
      setStatusMessageVisible(true);
      setIsLoading(false);
      setTimeout(() => {
        setStatusMessageVisible(false);
      }, 3000);
    }
  };


  return (
    <section className="contact-page">
      <h1 className="heading">Try First FREE Consultancy with us</h1>
      <section className="contact-section">
        {/* Contact Information Section */}
        <div className="appointment-info">
          <div className="appointment-content">
            <h2 className="appointment-title">Schedule Your Free Consultation</h2>
            <p className="appointment-description">
              Follow these steps to book your consultation:
            </p>
            <ul className="appointment-guidance">
              <li>Fill out the form with your details and any questions.</li>
              <li>Click submit to complete your booking.</li>
              <li>Receive a confirmation email with your appointment details.</li>
              <li>Our team will reach out to confirm the session time.</li>
            </ul>
          </div>
          <div className="appointment-details">
            <SocialToolTips />
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form-container">
          <h3>Book Your Appointment Now</h3>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                style={{
                  borderColor: validInputs.name ? "" : "red",
                }}
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
              <div style={{ width: "100%" }}>
                <label htmlFor="date">Preferred Date <span style={{fontSize:'0.55em', fontFamily:'revert', color:'grey'}}>(only future selected dates will be considered as valid)</span></label>
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

              <div style={{ width: "100%" }}>
                <label htmlFor="time">Preferred Time</label>
                <input
                  type="time"
                  id="time"
                  value={formData.time}
                  onChange={handleChange}
                  style={{
                    borderColor: validInputs.time ? "" : "red",
                  }}
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
                style={{
                  borderColor: validInputs.message ? "" : "red",
                }}
              ></textarea>
            </div>

            <div className="submit-btn">
              <button type="submit">
                <span className={`book-button-text ${isLoading ? 'button-text-gone' : ''}`}>Submit</span>
                <span className={`loader-container ${isLoading ? 'loading-start-submit' : ''}`}><Loader/></span>
                </button>
            </div>
          </form>
          {statusMessage && <div className={`status-message ${statusMessageVisible ? 'messageShow' : ''}`}><span>{statusMessage}</span></div>}
        </div>
      </section>
    </section>
  );
};

export default Contact;
