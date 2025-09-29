import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/FooterStyles.css';
import { navLinks } from './Navbar'; // Import navigation links from Navbar
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation('common');

  const getLabel = (path, fallback) => {
    switch (path) {
      case '/':
        return t('nav.home');
      case '/about':
        return t('nav.about');
      case '/projects':
        return t('nav.projects');
      case '/experience':
        return t('nav.experience');
      case '/contact':
        return t('nav.contact');
      default:
        return fallback;
    }
  };
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-info">
            <h3>{t('footer.title')}</h3>
            <p>{t('footer.tagline')}</p>
          </div>
          
          <div className="footer-nav">
            <h4>{t('footer.quickLinks')}</h4>
            <ul className="footer-nav-links">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>
                    {getLabel(link.path, link.label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="footer-social">
            <h4>{t('footer.connect')}</h4>
            <div className="social-icons">
              <a href="https://github.com/Alaindeve1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/ndizeye-alain/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://x.com/ndizeyealain1" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Ndizeye Alain. {t('footer.copyright')}</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;