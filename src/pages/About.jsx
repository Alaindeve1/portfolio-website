import React from 'react';
import '../styles/AboutStyles.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation('common');

  return (
    <section className="about-section">
      <div className="container">
        <h1 className="section-title">{t('about.title')}</h1>
        
        <div className="about-content">
          <div className="about-image">
            <div className="about-image-container">
              <div className="about-image-border"></div>
              <div className="about-image-inner">
                <picture>
                  <source srcSet="/assets/images/alainprofile.webp" type="image/webp" />
                  <img 
                    src="/assets/images/alainprofile.jpg" 
                    alt="Alain Ndizeye - Full Stack Developer" 
                    loading="lazy"
                    width="400"
                    height="400"
                  />
                </picture>
              </div>
            </div>
          </div>
          
          <div className="about-text">
            <h2>{t('about.headline')}</h2>
            <p>
            {t('about.description')}
            </p>
            
            <h3>{t('about.journeyTitle')}</h3>
            <p>
            {t('about.journeyDesc')}
            </p>
            
            <h3>{t('about.drivesTitle')}</h3>
            <p>
              {t('about.drivesDesc')}
            </p>
          </div>
        </div>
        
        <div className="skills-section">
          <h2>{t('about.skillsTitle')}</h2>
          
          <div className="skills-categories">
            <div className="skill-category">
              <h3><FaCode className="skill-icon" /> {t('about.frontend')}</h3>
              <ul>
                <li>React JS</li>
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li>HTML5 & CSS3</li>
                <li>Tailwind CSS</li>
                <li>Responsive Design</li>
                <li>Next JS</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3><FaServer className="skill-icon" /> {t('about.backend')}</h3>
              <ul>
                <li>Node.js</li>
                <li>Express JS</li>
                <li>Python</li>
                <li>Java/Spring Boot</li>
                <li>RESTful APIs</li>
                <li>Authentication & Authorization</li>
                <li>API Integration</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3><FaDatabase className="skill-icon" /> {t('about.databases')}</h3>
              <ul>
                <li>Oracle (PL/SQL)</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>Database Design</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3><FaTools className="skill-icon" /> {t('about.tools')}</h3>
              <ul>
                <li>Git & GitHub</li>
                <li>Docker</li>
                <li>VS Code</li>
                <li>Netlify</li>
                <li>Agile/Scrum</li>
                <li>CI/CD</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="contact-section">
          <h2>{t('about.ctaTitle')}</h2>
          <p>
            {t('about.ctaDesc')}
          </p>
          
          <h3>{t('about.getInTouch')}</h3>
          <div className="contact-links">
            <a href="https://github.com/Alaindeve1" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FaGithub className="contact-icon" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/ndizeye-alain/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FaLinkedin className="contact-icon" /> LinkedIn
            </a>
            <a href="/contact" className="contact-link">
              <FaEnvelope className="contact-icon" /> {t('about.emailMe')}
            </a>
          </div>
          
          <p className="availability">{t('about.availability')}</p>
        </div>
      </div>
    </section>
  );
};

export default About;