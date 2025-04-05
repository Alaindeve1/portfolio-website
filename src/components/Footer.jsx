import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/FooterStyles.css';
import { navLinks } from './Navbar'; // Import navigation links from Navbar

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-info">
            <h3>Ndizeye Alain</h3>
            <p>Showcasing my journey and projects in software engineering</p>
          </div>
          
          <div className="footer-nav">
            <h4>Quick Links</h4>
            <ul className="footer-nav-links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-social">
            <h4>Connect With Me</h4>
            <div className="social-icons">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/ndizeye-alain/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Ndizeye Alain. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;