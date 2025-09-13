import React, { useState } from 'react';
import '../styles/ProjectsStyles.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "STUDENT-STAFF PORTAL",
      description: "Java Swing project to manage students and staff with database connection using XAMPP (MySQL)",
      technologies: ["Java", "Swing", "MySQL", "XAMPP"],
      image: "/assets/images/student-portal-screenshot.webp",
      fallbackImage: "/assets/images/student-portal-screenshot.png",
      githubLink: "https://github.com/Alaindeve1/java-swing-application",
      category: "backend"
    }, 
    {
      id: 2,
      title: "AUCTION MANAGMENT SYSTEM",
      description: "A backend project using springboot framework and java with postgreSQL to manage auctions for both buyers and sellers.",
      technologies: ["React", "Firebase", "Styled Components"],
      image: "/assets/images/Screenshot 2025-06-12 141855.webp",
      fallbackImage: "/assets/images/Screenshot 2025-06-12 141855.png",
      liveLink: "https://www.loom.com/share/fd0dff316dad4e50ab781445c71947cb?sid=b9a65abb-c884-43bb-be41-cc487b7325a2",
      githubLink: "https://github.com/Alaindeve1/AUCTION-MANAGMENT-SYSTEM",
      category: "fullstack"
    },
    {
      id: 3,
      title: "Auction Static Web",
      description: "A responsive static website for an auction platform, showcasing items and services.",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      image: "/assets/images/netlify.webp",
      fallbackImage: "/assets/images/netlify.png",
      liveLink: "https://lucky-puffpuff-669d75.netlify.app/",
      githubLink: "https://github.com/",
      category: "frontend"
    },
    {
      id: 4,
      title: "THE FOX WEB ",
      description: "A static website using HTML, CSS, and JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: "/assets/images/the fox.webp",
      fallbackImage: "/assets/images/the fox.png",
      liveLink: "https://www.loom.com/share/746caed9489647509e4b167a87293ad2?sid=9e60118d-dc52-4d47-b64b-a6dc508afb94",
      githubLink: "https://github.com/Alaindeve1/the-fox-website", 
      category: "frontend"
    },
    {
      id: 5,
      title: "PORTFOLIO 2",
      description: "A portfolio website using Next JS, Tailwind CSS, and TypeScript.",
      technologies: ["Next JS", "Tailwind CSS", "TypeScript"],
      image: "/assets/images/nextjs.webp",
      fallbackImage: "/assets/images/nextjs.png",
      liveLink: "https://ndizeye-portfolio2.netlify.app/",
      githubLink: "https://github.com/Alaindeve1/typescript-nextjs", 
      category: "frontend"
    },
    {
      id: 6,
      title: "WeatherDash App",
      description: "A weather dashboard app that uses OpenWeatherMap API to display current weather conditions and forecasts.",
      technologies: ["React JS", "Tailwind CSS", "openweathermap API"],
      image: "/assets/images/nextjs.webp",
      fallbackImage: "/assets/images/nextjs.png",
      liveLink: "https://ndizeye-portfolio2.netlify.app/",
      githubLink: "https://github.com/Alaindeve1/typescript-nextjs", 
      category: "frontend"
    },
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
                <picture>
                  {project.image && project.image.endsWith('.webp') && (
                    <source 
                      srcSet={project.image} 
                      type="image/webp" 
                    />
                  )}
                  <img 
                    src={project.fallbackImage || project.image || '/assets/images/project-placeholder.jpg'} 
                    alt={project.title} 
                    className="project-img"
                    loading="lazy"
                    width="600"
                    height="400"
                    onError={(e) => {
                      if (e.target.src !== '/assets/images/project-placeholder.jpg') {
                        e.target.src = '/assets/images/project-placeholder.jpg';
                      }
                    }}
                  />
                </picture>
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
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Live Demo
                    </a>
                  )}
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`btn ${project.liveLink ? 'btn-secondary' : 'btn-primary'}`}
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