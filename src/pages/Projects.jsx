import React, { useState } from 'react';
import '../styles/ProjectsStyles.css';
import { useTranslation } from 'react-i18next';
import projectsDataImport from '../data/projectsData';

const Projects = () => {
  const { t } = useTranslation('common');
  const projectsData = projectsDataImport;

  const [filter, setFilter] = useState("all");

  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <section className="projects-section">
      <div className="container">
        <h1 className="section-title">{t('projects.title')}</h1>
        
        <div className="filter-buttons">
          <button 
            className={filter === "all" ? "active" : ""} 
            onClick={() => setFilter("all")}
          >
            {t('projects.filters.all')}
          </button>
          <button 
            className={filter === "frontend" ? "active" : ""}
            onClick={() => setFilter("frontend")}
          >
            {t('projects.filters.frontend')}
          </button>
          <button 
            className={filter === "backend" ? "active" : ""}
            onClick={() => setFilter("backend")}
          >
            {t('projects.filters.backend')}
          </button>
          <button 
            className={filter === "fullstack" ? "active" : ""}
            onClick={() => setFilter("fullstack")}
          >
            {t('projects.filters.fullstack')}
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
                <p>{t(`projectDescriptions.${project.id}`, { defaultValue: project.description })}</p>
                
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
                      {t('projects.buttons.liveDemo')}
                    </a>
                  )}
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`btn ${project.liveLink ? 'btn-secondary' : 'btn-primary'}`}
                  >
                    {t('projects.buttons.github')}
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