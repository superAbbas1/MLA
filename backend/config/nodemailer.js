const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // Example: 'smtp.hostinger.com'
  port: process.env.SMTP_PORT, // Example: 587 for TLS or 465 for SSL
  secure: false,
  auth: {
    user: process.env.EMAIL, // Sender email from .env
    pass: process.env.EMAIL_PASSWORD, // App password from .env
  },
});

// Verifying transporter
transporter.verify((error, success) => {
  if (error) {
    console.error("Error configuring Nodemailer:", error);
  } else {
    console.log("Nodemailer is configured and ready to send emails");
  }
});

module.exports = transporter;