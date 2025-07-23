import React from 'react';
import '../styles/ExperienceStyles.css';

const Experience = () => {
  
  const workExperience = [
    {
      id: 1,
      role: "junior software developer & it personnel",
      company: "fabritech.",
      location: "kigali ,gasabo gishushu",
      duration: "2023",
      description: [
        "development of a website using html,css and javascript",
        "helped with graphical design ,flyers ,etc",
        "Optimized application performance resulting in a 30% decrease in load time"
      ],
      technologies: ["css", "html", "javascript", "canva" , "wordpress" , "oracle", "pl/sql", "python", "excel","postgresql","java","springboot","docker","git","typescript","react js","word","virtualbox"]
    },
    {
      id: 2,
      role: "Full Stack developer & data entry freelancer",
      location: "kigali ,gasabo gishushu",
      duration: "2022-now",
      description: [
        "Implemented user authentication system with JWT and OAuth integration",
        "Created responsive frontend interfaces using React ,next javascript and styled-components"
      ],
      technologies: ["Node.js", "springboot", "Oracle", "javascript", "react js", "html", "css","typescript","docker","git"]
    },
    
    {
      id: 3,
      role: "IT Personnel",
      company: "the fox company",
      location: "kigali ,gasabo gishushu",
      duration: "2022-2023",
      description: [
        
       "data analyst and virtual assistant as well as data entry clerk",
        "Performed website maintenance & development and troubleshooting for clients"
      ],
      technologies: ["JavaScript",  "HTML/CSS", "MySQL" , "oracle", "pl/sql", "python", "google workspace",]
    },
    {
      id: 4,
      role: "Web developer & Data entry clerk",
      company: "Stinda media ltd",
      location: "kigali ,gasabo gishushu",
      duration: "2022-2023",
      description: [
        
       "data analyst and virtual assistant as well as data entry clerk",
        "Performed website development and IT support for clients"
      ],
      technologies: ["JavaScript",  "HTML/CSS", "MySQL" , "oracle", "pl/sql", "python", "google workspace",]
    },
    {
      id: 5,
      company: "desc softlab ltd",
      role: "Full Stack Developer",
      location: "kigali ,gasabo gishushu",
      duration: "2025-now",
      description: [
        "Developed and maintained RESTful APIs using Node.js and springboot ",
        "Implemented user authentication system with JWT and OAuth integration",
        "Created responsive frontend interfaces using React and styled-components"
      ],
      technologies: ["next js", "springboot", "html", "javascript", "react js", "css","tailwind css","git","postgresql","tailwind css"]
    }
  ];

  const education = [
    {
      id: 1,
      degree: "bachelor of software engineering",
      institution: "ADVENTIST UNIVERSITY OF CENTRAL AFRICA",
      location: "GASABO, GISHUSHU",
      duration: "2023 - present",
      description: "Specialized in Web Technologies and Software Engineering"
    },
    {
      id: 2,
      degree: "certification in virtual assistance",
      institution: "ALX",
      location: "Remote",
      duration: "2024",
      description: "8 week intensive training in virtual assistance using various technologies."
    },
    {
      id: 3,
      degree: "certification in network operations 1",
      institution: "Internet society",
      location: "Remote",
      duration: "2024",
      description: "4 weeks training in introduction to network operations."
    },
  ];

  return (
    <section className="experience-section">
      <div className="container">
        <h1 className="section-title">Experience & Education</h1>
        
        <div className="experience-container">
          <div className="timeline">
            <h2 className="timeline-title">Work Experience</h2>
            
            {workExperience.map(job => (
              <div className="timeline-item" key={job.id}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{job.role}</h3>
                    <span className="timeline-period">{job.duration}</span>
                  </div>
                  <div className="timeline-company">
                    {job.company} | {job.location}
                  </div>
                  <div className="timeline-description">
                    <ul>
                      {job.description.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="timeline-tech">
                    {job.technologies.map((tech, index) => (
                      <span className="tech-tag" key={index}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="timeline">
            <h2 className="timeline-title">Education</h2>
            
            {education.map(edu => (
              <div className="timeline-item" key={edu.id}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{edu.degree}</h3>
                    <span className="timeline-period">{edu.duration}</span>
                  </div>
                  <div className="timeline-company">
                    {edu.institution} | {edu.location}
                  </div>
                  <div className="timeline-description">
                    <p>{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;