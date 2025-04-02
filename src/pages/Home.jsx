import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomeStyles.css';

const Home = () => {
  return (
    <section className="home-section">
      <div className="container">
        <div className="hero">
          <div className="hero-content">
            <h1>Hi, I'm <span className="highlight">Ndizeye Alain</span></h1>
            <h2>Full Stack Developer</h2>
            <p>
              I design and develop web applications that deliver exceptional user experiences.
              Passionate about clean code and innovative solutions.
            </p>
            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">View Projects</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
            </div>
          </div>
          
          <div className="hero-skills">
            <h3>Tech Stack</h3>
            <div className="skills-container">
              <div className="skill">React</div>
              <div className="skill">Node.js</div>
              <div className="skill">JavaScript</div>
              <div className="skill">TypeScript</div>
              <div className="skill">MongoDB</div>
              <div className="skill">CSS/SASS</div>
            </div>
          </div>
        </div>
        
        <div className="featured-projects">
          <h2>Featured Projects</h2>
          <div className="projects-preview">
            {/* Display 2-3 featured projects here */}
            <div className="project-card">
              <div className="project-image"></div>
              <h3>Project Name</h3>
              <p>Brief description of the project and technologies used.</p>
              <Link to="/projects" className="project-link">Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;