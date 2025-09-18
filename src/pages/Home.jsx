import React from 'react';
import { Link } from 'react-router-dom';
import { FaReact, FaNodeJs, FaJava, FaDatabase, FaHtml5 } from 'react-icons/fa';
import { SiJavascript, SiC } from 'react-icons/si';
import '../styles/HomeStyles.css';
import WhatsAppCTA from '../components/WhatsAppCTA';

const Home = () => {
  return (
    <section className="home-section">
      <div className="container">
        <div className="hero">
          <div className="hero-content">
            <h1>Hi, I'm <span className="highlight">Ndizeye Alain</span></h1>
            <h2>Full Stack Developer</h2>
            <p className="hero-description">
              I design and develop web applications that deliver exceptional user experiences.
              Passionate about clean code and innovative solutions with broad understanding of 
              database management systems and bigdata analystics as well.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                View Projects
                <span className="btn-icon">→</span>
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Contact Me
                
              </Link>
            </div>
          </div>
          
          <div className="hero-skills">
            <h3 className="skills-title">Tech Stack</h3>
            <div className="skills-container">
              <div className="skill" title="React JS">
                <FaReact className="skill-icon" />
                <span className="skill-name">React JS</span>
              </div>
              <div className="skill" title="Node.js">
                <FaNodeJs className="skill-icon" />
                <span className="skill-name">Node.js</span>
              </div>
              <div className="skill" title="JavaScript">
                <SiJavascript className="skill-icon" />
                <span className="skill-name">JavaScript</span>
              </div>
              <div className="skill" title="Java">
                <FaJava className="skill-icon" />
                <span className="skill-name">Java</span>
              </div>
              <div className="skill" title="PostgreSQL">
                <FaDatabase className="skill-icon" />
                <span className="skill-name">PostgreSQL</span>
              </div>
              <div className="skill" title="Html & Css">
                <FaHtml5 className="skill-icon" />
                <span className="skill-name">Html & Css</span>
              </div>
             
              <div className="skill" title="Next JS">
                <SiC className="skill-icon" />
                <span className="skill-name">Next JS</span>
              </div>
              <div className="skill" title="Express JS">
                <SiC className="skill-icon" />
                <span className="skill-name">Express JS</span>
              </div>
              <div className="skill" title="Typescript">
                <SiC className="skill-icon" />
                <span className="skill-name">Typescript</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="featured-projects">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-preview">
            <div className="project-card">
              <div className="project-image">
                <div className="image-container">
                  <picture>
                    <source 
                      srcSet="/assets/images/Screenshot 2025-06-12 141855.webp" 
                      type="image/webp" 
                    />
                    <img 
                      src="/assets/images/Screenshot 2025-06-12 141855.png" 
                      alt="Student Portal" 
                      className="project-img"
                      loading="lazy"
                      width="600"
                      height="400"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/assets/images/project-placeholder.jpg';
                      }}
                    />
                  </picture>
                </div>
                <div className="project-tech">
                  <span>Java</span>
                  <span>React.js</span>
                  <span>PostgreSQL</span>
                  <span>Springboot</span>
                  <span>Tailwind CSS</span>
                </div>
              </div>
              <div className="project-info">
                <h3>AUCTION MANAGMENT SYSTEM</h3>
                <p>A backend project using springboot framework and java with postgreSQL to manage auctions for both buyers and sellers.</p>
                <Link to="/projects" className="project-link">
                  Learn More
                  <span>→</span>
                </Link>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-image">
                <div className="image-container">
                  <picture>
                    <source 
                      srcSet="/assets/images/ishore-ecommerce-outsourcing.webp" 
                      type="image/webp" 
                    />
                    <img 
                      src="/assets/images/ishore-ecommerce-outsourcing.png" 
                      alt="E-commerce Project" 
                      className="project-img"
                      loading="lazy"
                      width="600"
                      height="400"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = '/assets/images/project-placeholder.jpg';
                      }}
                    />
                  </picture>
                </div>
                <div className="project-tech">
                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                </div>
              </div>
              <div className="project-info">
                <h3>E-COMMERCE</h3>
                <p>Full-featured online shopping platform with user authentication and payment processing</p>
                <Link to="/projects" className="project-link">
                  Learn More
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* WhatsApp CTA Card */}
        <div style={{ marginTop: '2.5rem' }}>
          <WhatsAppCTA
            variant="card"
            message="Hi Alain! I saw your portfolio home page and would love to chat."
          />
        </div>
      </div>
    </section>
  );
};

export default Home;