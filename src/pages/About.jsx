import React from 'react';
import '../styles/AboutStyles.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const About = () => {

  return (
    <section className="about-section">
      <div className="container">
        <h1 className="section-title">About Me</h1>
        
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
            <h2>Transforming Ideas Into Digital Excellence</h2>
            <p>
            I'm a results-driven Full Stack Developer who specializes in crafting scalable, high-performance web applications
             that deliver exceptional user experiences. With over 2 years of hands-on experience, I've successfully delivered
              solutions for clients ranging from innovative startups to established enterprises, consistently exceeding
               expectations and driving measurable business impact.
            </p>
            
            <h3>My Journey</h3>
            <p>
            My passion for technology ignited at a young age when I first discovered the power of software engineering to solve
             real-world problems. What started as curiosity evolved into a dedicated career focused on pushing the boundaries 
             of what's possible in web development. I thrive on staying ahead of industry trends, continuously mastering 
             emerging technologies, and applying cutting-edge best practices to create solutions that make a difference.
            </p>
            
            <h3>What Drives Me</h3>
            <p>
              I'm passionate about creating clean, efficient code and solving complex problems. I believe in the power of 
              technology to transform businesses and improve lives, and I'm committed to building solutions that make a 
              real impact.
            </p>
          </div>
        </div>
        
        <div className="skills-section">
          <h2>Technical Skills</h2>
          
          <div className="skills-categories">
            <div className="skill-category">
              <h3><FaCode className="skill-icon" /> Frontend</h3>
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
              <h3><FaServer className="skill-icon" /> Backend</h3>
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
              <h3><FaDatabase className="skill-icon" /> Databases</h3>
              <ul>
                <li>Oracle (PL/SQL)</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>Database Design</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3><FaTools className="skill-icon" /> Tools & More</h3>
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
          <h2>Let's Build Something Amazing Together</h2>
          <p>
            I'm always excited to take on new challenges and collaborate on interesting projects. 
            Whether you need a complete web application, API development, or technical consultation, 
            I'm here to help bring your ideas to life with clean, efficient code and innovative solutions.
          </p>
          
          <h3>Get In Touch</h3>
          <div className="contact-links">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FaGithub className="contact-icon" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/ndizeye-alain/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <FaLinkedin className="contact-icon" /> LinkedIn
            </a>
            <a href="/contact" className="contact-link">
              <FaEnvelope className="contact-icon" /> Email Me
            </a>
          </div>
          
          <p className="availability">
            Currently available for freelance projects and full-time opportunities. Let's discuss how I can help with your next project!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;