import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className='footer-upper-row page-width'>
        <div className="footer-upper-row__wrapper animate-on-scroll">
          <div className="about-us">
            <h3 className='main-heading'>About us</h3>
            <p className='sub-heading'>
              Mansoor Law Associates, a startup launched in 2024, holds a British Council certification for IELTS and is a proud member of the International Lawyer Association, demonstrating our commitment to excellence and global standards.            </p>

          </div>
          <div className="useful-links">
            <h3 className='main-heading'>Useful Links</h3>
            <ul className='sub-heading'>
              <li><Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link></li>
              <li><Link to="/immigration" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Immigration & Visa Consultation</Link></li>
              <li><Link to="/study-abroad" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Study Abroad Guidance</Link></li>
              <li><Link to="/legal-services" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Comprehensive Legal Services</Link></li>
              <li><Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About</Link></li>
              <li><Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Contact Us</Link></li>
            </ul>
          </div>
          <div className="get-in-touch">
            <h3 className='main-heading'>Get in Touch</h3>
            <ul className='sub-heading footer-contact-list'>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                H5 DAV College Hostel1 Lower Mall Lahore, Pakistan
              </li>

              <li>
                <a href="mailto:consultants@mansoor-law-associates.com">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                  consultants@mansoor-law-associates.com
                </a>
              </li>

              <li>
                <a href="https://wa.me/+923224788568">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                  +92 322 4788568
                  <div className='footer-whatsapp-message'>convey your message directly to our whatsapp</div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom sub-heading">
        <p>&copy; 2024 Mansoor Law Associates. All rights reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;