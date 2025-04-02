import React, { useState } from 'react';
import '../styles/ProjectsStyles.css';

const Projects = () => {
  // Sample project data - replace with your own projects
  const projectsData = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-featured online store with product management, cart functionality, and payment integration.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/assets/images/project1.jpg",
      liveLink: "https://example.com",
      githubLink: "https://github.com/yourusername/project",
      category: "fullstack"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A responsive task management application with drag-and-drop functionality and user authentication.",
      technologies: ["React", "Firebase", "Styled Components"],
      image: "/assets/images/project2.jpg",
      liveLink: "https://example.com",
      githubLink: "https://github.com/yourusername/project",
      category: "frontend"
    },
    {
      id: 3,
      title: "Content Management System",
      description: "A custom CMS built for a media company to manage articles and digital assets.",
      technologies: ["Node.js", "Express", "postgresql", "AWS S3"],
      image: "/assets/images/project3.jpg",
      liveLink: "https://example.com",
      githubLink: "https://github.com/yourusername/project",
      category: "backend"
    }
  ];

  // Filter state
  const [filter, setFilter] = useState("all");

  // Filter projects based on category
  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section className="projects-section">
      <div className="container">
        <h1 className="section-title">My Projects</h1>
        
        <div className="filter-buttons">
          <button 
            className={filter === "all" ? "active" : ""} 
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button 
            className={filter === "frontend" ? "active" : ""}
            onClick={() => setFilter("frontend")}
          >
            Frontend
          </button>
          <button 
            className={filter === "backend" ? "active" : ""}
            onClick={() => setFilter("backend")}
          >
            Backend
          </button>
          <button 
            className={filter === "fullstack" ? "active" : ""}
            onClick={() => setFilter("fullstack")}
          >
            Full Stack
          </button>
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-image">
                {/* You can use a placeholder for now */}
                <div className="img-placeholder"></div>
              </div>
              
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;