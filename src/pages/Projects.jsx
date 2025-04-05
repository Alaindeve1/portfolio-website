import React, { useState } from 'react';
import '../styles/ProjectsStyles.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "STUDENT-STAFF PORTAL",
      description: "Java Swing project to manage students and staff with database connection using XAMPP (MySQL)",
      technologies: ["Java", "Swing", "MySQL", "XAMPP"],
      image: "/assets/images/student-portal-screenshot.png",
      liveLink: "https://example.com",
      githubLink: "https://github.com/Alaindeve1/java-swing-application",
      category: "fullstack"
    }, 
    {
      id: 2,
      title: "AUCTION MANAGMENT SYSTEM",
      description: "A backend project using springboot framework and java with postgreSQL to manage auctions for both buyers and sellers.",
      technologies: ["React", "Firebase", "Styled Components"],
      image: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/320039537/original/172abd5a0080bde1137b926049ff45b4351d57d4/develop-java-spring-boot-maven-software-application-with-oracle-mysql-database.jpeg",
      liveLink: "https://example.com",
      githubLink: "https://github.com/Alaindeve1/AUCTION-MANAGMENT-SYSTEM",
      category: "frontend"
    },
    {
      id: 3,
      title: "Content Management System",
      description: "A custom CMS built for a media company to manage articles and digital assets.",
      technologies: ["Node.js", "Express", "PostgreSQL", "AWS S3"],
      image: "/assets/images/student-portal-screenshot.png",
      liveLink: "https://example.com",
      githubLink: "https://github.com/yourusername/project",
      category: "backend"
    }
  ];

  const [filter, setFilter] = useState("all");

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
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-img"
                  onError={(e) => {
                    e.target.src = '/assets/images/project-placeholder.jpg';
                  }}
                />
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