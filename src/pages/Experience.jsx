import React from 'react';
import '../styles/ExperienceStyles.css';

const Experience = () => {
  // Sample experience data - replace with your own
  const workExperience = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "Tech Company Inc.",
      location: "San Francisco, CA",
      duration: "Jan 2023 - Present",
      description: [
        "Led the development of a React-based dashboard that improved user engagement by 40%",
        "Collaborated with UX designers to implement responsive designs across web and mobile platforms",
        "Optimized application performance resulting in a 30% decrease in load time"
      ],
      technologies: ["React", "TypeScript", "Redux", "Material UI"]
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "Digital Solutions",
      location: "Chicago, IL",
      duration: "Mar 2020 - Dec 2022",
      description: [
        "Developed and maintained RESTful APIs using Node.js and Express",
        "Implemented user authentication system with JWT and OAuth integration",
        "Created responsive frontend interfaces using React and styled-components"
      ],
      technologies: ["Node.js", "Express", "MongoDB", "React", "AWS"]
    },
    {
      id: 3,
      role: "Junior Web Developer",
      company: "Creative Agency",
      location: "New York, NY",
      duration: "Jun 2018 - Feb 2020",
      description: [
        "Built custom WordPress themes and plugins for client websites",
        "Assisted in implementing e-commerce features and payment processing",
        "Performed website maintenance and troubleshooting for clients"
      ],
      technologies: ["JavaScript", "PHP", "WordPress", "HTML/CSS", "MySQL"]
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      institution: "University Name",
      location: "City, State",
      duration: "2016 - 2018",
      description: "Specialized in Web Technologies and Software Engineering"
    },
    {
      id: 2,
      degree: "Bachelor of Science in Information Technology",
      institution: "College Name",
      location: "City, State",
      duration: "2012 - 2016",
      description: "Graduated with honors. Focused on programming and database management."
    }
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