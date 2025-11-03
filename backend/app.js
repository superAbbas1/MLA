require("dotenv").config();
const express = require("express");
const cors = require("cors");
const transporter = require("./config/nodemailer");

const app = express();
const PORT = 5000;

app.use(cors()); 
app.use(express.json()); 

app.post("/send-email", (req, res) => {
  console.log("Request received in /send-email");
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required." });
  }

  transporter.sendMail( 
    {
      from: process.env.EMAIL,
      to: email,
      subject: "Your Appointment with Mansoor Law Associates is Confirmed!",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://mansoor-law-associates.com/logo.png" alt="Mansoor Law Associates Logo" style="max-width: 150px;" />
          </div>
          <h2 style="color: #e6683c;">Appointment Confirmation</h2>
          <p><strong>Dear Client,</strong>
          <br/>
          Thank you for scheduling your appointment with <strong>Mansoor Law Associates</strong>. We are excited to assist you with your legal and immigration needs. Our dedicated team is committed to providing tailored solutions to meet your unique requirements.
          <br/>
          We strive to make the process seamless and efficient, ensuring you receive the best possible guidance every step of the way. If you have any questions or need further assistance regarding your appointment, don’t hesitate to contact us.
          <br/>
          We look forward to working with you and helping you achieve your goals!</p>
          <hr style="border: none; border-top: 1px solid #ccc;" />
          <p style="text-align: center; font-size: 14px; color: #555;">
            <strong>Mansoor Law Associates</strong><br />
            <a href="mailto:consultants@mansoorlawassociates.com" style="color: #e6683c;">consultants@mansoor-law-associates.com</a> | +92 336 4387792<br />
            <a href="https://mansoor-law-associates.com" style="color: #e6683c;">www.mansoor-law-associates.com</a>
          </p>
        </div>
      `
    },
    (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ message: "Failed to send email.", error });
      }
      res.status(200).json({ message: "Email sent successfully!" });
    }
  );
});

app.post("/api/contact", async (req, res) => {
  const { name, email, date, time, meetingPreference, message } = req.body;

  if (!name || !email || !date || !time || !meetingPreference || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const mailOptions = 
  {
    from: process.env.EMAIL,
    to: email,
    subject: `Your Consultation Appointment with Mansoor Law Associates is Confirmed!`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
        <div style="text-align: center; margin-bottom: 20px;">
          <img src="https://yourdomain.com/logo.png" alt="Mansoor Law Associates Logo" style="max-width: 150px;" />
        </div>
        <h2 style="color: #e6683c;">Your Consultation Appointment is Confirmed!</h2>
        
        <p style="font-size: 16px;">
          <strong>Dear ${name},</strong><br><br>
          Thank you for booking your consultation with Mansoor Law Associates! We are pleased to confirm your appointment with us. Below are the details:
        </p>
  
        <table style="width: 100%; border: 1px solid #ddd; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; background-color: #f4f4f4; font-weight: bold; width: 30%;">Name</td>
            <td style="padding: 8px;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; background-color: #f4f4f4; font-weight: bold;">Email</td>
            <td style="padding: 8px;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px; background-color: #f4f4f4; font-weight: bold;">Preferred Date</td>
            <td style="padding: 8px;">${date}</td>
          </tr>
          <tr>
            <td style="padding: 8px; background-color: #f4f4f4; font-weight: bold;">Preferred Time</td>
            <td style="padding: 8px;">${time}</td>
          </tr>
          <tr>
            <td style="padding: 8px; background-color: #f4f4f4; font-weight: bold;">Meeting Preference</td>
            <td style="padding: 8px;">${meetingPreference}</td>
          </tr>
          <tr>
            <td style="padding: 8px; background-color: #f4f4f4; font-weight: bold;">Your Message</td>
            <td style="padding: 8px;">${message}</td>
          </tr>
        </table>
  
        <p style="font-size: 16px; margin-top: 20px;">
          <strong>Meeting Details:</strong><br>
          The consultation will take place via Google Meet. We will send you the meeting link **one hour before** the scheduled time.
        </p>
        <hr style="border: none; border-top: 1px solid #ccc;" />
        <p style="text-align: center; font-size: 14px; color: #555;">
          <strong>Mansoor Law Associates</strong><br />
          <a href="mailto:consultants@mansoor-law-associates.com" style="color: #e6683c;">consultants@mansoor-law-associates.com</a> | +92 336 4387792<br />
          <a href="https://mansoor-law-associates.com" style="color: #e6683c;">www.mansoor-law-associates.com</a>
        </p>
      </div>
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email.", error });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});