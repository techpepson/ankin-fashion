// src/components/Footer.tsx
import React from 'react';
import './footer.css';
import log2 from '../../assets/log2.png'
import Facebook_icon from '../../assets/Facebook_icon.png';
import twitter from '../../assets/twitter.png';
import instagram_icon from '../../assets/instagram_icon.png';
import whatsapp_icon from '../../assets/whatsapp_icon.png';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src={log2} alt="Company Logo" />
        </div>
        <div className="footer-links">
          <div className="footer-links-section">
            <h4>For Business</h4>
            <a href="/employer"><p>Employer</p></a>
            <a href="/employer"><p>Careers</p></a>
            <a href="/employer"><p>Partners</p></a>
          </div>
          <div className="footer-links-section">
            <h4>Resources</h4>
            <a href="/resources"><p>Blog</p></a>
            <a href="/resources"><p>Guides</p></a>
            <a href="/resources"><p>Help Center</p></a>
          </div>
          <div className="footer-links-section">
            <h4>Company</h4>
            <a href="/about"><p>About Us</p></a>
            <a href="/about"><p>Contact</p></a>
            <a href="/about"><p>Press</p></a>
          </div>
          <div className="footer-links-section">
            <h4>Legal</h4>
            <a href="/legal"><p>Terms & Conditions</p></a>
            <a href="/legal"><p>Privacy Policy</p></a>
            <a href="/legal"><p>Security</p></a>
          </div>
          <div className="footer-links-section">
            <h4>Follow Us</h4>
            <div className="social-media">
              <a href="https://facebook.com"><img src={Facebook_icon} alt="Facebook" /></a>
              <a href="https://twitter.com"><img src={twitter} alt="Twitter" /></a>
              <a href="https://instagram.com"><img src={instagram_icon} alt="Instagram" /></a>
              <a href="https://whatsapp.com"><img src={whatsapp_icon} alt="WhatsApp" /></a>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <div className="footer-bottom-links">
            <a href="/terms"><p>Terms and Conditions</p></a>
            <a href="/privacy"><p>Privacy</p></a>
            <a href="/security"><p>Security</p></a>
            <a href="/cookie"><p>Cookie Declaration</p></a>
          </div>
          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} Noble. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
