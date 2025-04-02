import React from 'react';
import '../styles/AboutStyles.css';

const About = () => {
  return (
    <section className="about-section">
      <div className="container">
        <h1 className="section-title">About Me</h1>
        
        <div className="about-content">
          <div className="about-image">
            {/* Replace with your image */}
            <div className="profile-img-placeholder"></div>
          </div>
          
          <div className="about-text">
            <h2>Who I Am</h2>
            <p>
              I'm a passionate Full Stack Developer with a focus on creating responsive, 
              user-friendly web applications. With over [X] years of experience in the industry, 
              I've had the opportunity to work on a diverse range of projects, from e-commerce 
              platforms to content management systems.
            </p>
            
            <h2>My Journey</h2>
            <p>
              My journey in tech started when I [your starting story]. Since then, I've continuously 
              expanded my skills and knowledge, staying up-to-date with the latest technologies and best practices.
            </p>
            
            <h2>Education & Certifications</h2>
            <ul>
              <li>Bachelor's Degree in Computer Science - University Name</li>
              <li>Certification in Web Development - Organization Name</li>
              <li>Certification in User Experience Design - Organization Name</li>
            </ul>
          </div>
        </div>
        
        <div className="skills-section">
          <h2>Technical Skills</h2>
          
          <div className="skills-categories">
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul>
                <li>React</li>
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li>HTML5 & CSS3</li>
                <li>SASS/SCSS</li>
                <li>Redux</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>RESTful APIs</li>
                <li>GraphQL</li>
                <li>Python/Django</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Databases</h3>
              <ul>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>Firebase</li>
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Tools & Others</h3>
              <ul>
                <li>Git/GitHub</li>
                <li>Docker</li>
                <li>AWS/Azure</li>
                <li>CI/CD</li>
                <li>Agile/Scrum</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;