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
            <img src="/assets/images/alainprofile.jpg" alt="alainprofile" />
          </div>
          
          <div className="about-text">
            <h2>Who I Am</h2>
            <p>
              I'm a passionate Full Stack Developer with a focus on creating responsive, 
              user-friendly web applications. With over 2 years of experience in the industry, 
              I've had the opportunity to work on a diverse range of projects, from simple 
              platforms to complex projects.
            </p>
            
            <h2>My Journey</h2>
            <p>
              My journey in tech started when I young when i first discovered my love for technology as well as software engineering. Since then, I've continuously 
              expanded my skills and knowledge, staying up-to-date with the latest technologies and best practices.
            </p>
            
            <h2>Education & Certifications</h2>
            <ul>
              <li>Bachelor's Degree in software engineering - AUCA</li>
              <li>Certification in virtual assistance - ALX</li>
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
                <li>HTML & CSS</li>
                <li>tailwind</li>
                
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>java</li>
                <li>RESTful APIs</li>
                <li>JavaScript</li>
                
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Databases</h3>
              <ul>
                <li>oracle (pl&SQL)</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
                
              </ul>
            </div>
            
            <div className="skill-category">
              <h3>Tools & Others</h3>
              <ul>
                <li>Git/GitHub</li>
                <li>virtual box</li>
                <li>vs code</li>
                <li>bpmn.io</li>
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