import React from 'react';
import '../styles/ExperienceStyles.css';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t } = useTranslation('common');

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
      technologies: ["css", "html", "javascript", "canva", "wordpress", "oracle", "pl/sql", "python", "excel", "postgresql", "java", "springboot", "docker", "git", "typescript", "react js", "word", "virtualbox"]
    },
    {
      id: 2,
      role: "Full Stack developer ,data entry & virtual assistant freelancer",
      location: "kigali ,gasabo gishushu",
      duration: "2022-now",
      description: [
        "Implemented user authentication system with JWT and OAuth integration",
        "Created responsive frontend interfaces using React ,next javascript and styled-components"
      ],
      technologies: ["Node.js", "springboot", "Oracle", "javascript", "react js", "html", "css", "typescript", "docker", "git", "google workspace", "anydesk", "zoom"]
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
      technologies: ["JavaScript", "HTML/CSS", "MySQL", "oracle", "pl/sql", "python", "google workspace",]
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
      technologies: ["JavaScript", "HTML/CSS", "MySQL", "oracle", "pl/sql", "python", "google workspace",]
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
      technologies: ["next js", "springboot", "html", "javascript", "react js", "css", "tailwind css", "git", "postgresql", "tailwind css"]
    },
    {
      id: 6,
      company: "codveda technologies",
      role: "Fullstack developer",
      location: "remote",
      duration: "'may-2025'-'september-2025'",
      description: [
        "Completed a comprehensive fullstack development internship focusing on java , responsive web design, JavaScript frameworks, and modern web technologies.",
        "Built interactive applications using HTML5, CSS3, JavaScript, React/Vue.js, and integrated REST APIs.",
        " Developed skills in responsive design, performance optimization, and user experience enhancement through hands-on projects including SPAs, component libraries, and advanced animations."
      ],
      technologies: ["Responsive Web Design", "React.js", "Performance Optimization", "JavaScript (ES6+)", "REST API Integration", "html&css", "tailwind css", "git", "java"]
    },

  ];

  const education = [
    {
      id: 1,
      degree: "bachelor of software engineering",
      institution: "ADVENTIST UNIVERSITY OF CENTRAL AFRICA",
      location: "GASABO, GISHUSHU",
      duration: "2023 - present",
      description: "Specialized in Web Technologies and Software Engineering",

    },
    {
      id: 2,
      degree: "PRINCE2 (Project Management) Certification",
      institution: "Peoplecert - Article26",
      location: "REMOTE",
      duration: "'june-2025'-'august-2025'",
      description: "An international framework used in project management certification",
      certificateUrl: "/assets/certificates/e-cert prince2 certificate.pdf"
    },
    {
      id: 3,
      degree: "Duolingo English Test",
      institution: "Duolingo",
      location: "Remote",
      duration: "2025",
      description: "Performed an online duolingo english test and passed with a score of 130.",

    },
    {
      id: 4,
      degree: "certification in virtual assistance",
      institution: "ALX",
      location: "Remote",
      duration: "2024",
      description: "8 week intensive training in virtual assistance using various technologies.",
      certificateUrl: "/assets/certificates/alx certificate .pdf"
    },
    {
      id: 5,
      degree: "certification in network operations 1",
      institution: "Internet society",
      location: "Remote",
      duration: "2024",
      description: "4 weeks training in introduction to network operations.",
      certificateUrl: "/assets/certificates/netops certificate.pdf"
    },
    {
      id: 6,
      degree: "Artificial intelligence tools use optimisation & prompt engineering",
      institution: "One million prompters",
      location: "Remote",
      duration: "2026",
      description: " Prompt Engineering – Crafting precise instructions to unlock AI's full potential, AI-Powered Productivity – Automating workflows and optimizing development processes ,Generative AI Applications – Leveraging tools like ChatGPT, Claude, Copilot, and more, Creative Problem-Solving – Using AI for everything from code generation to complex debugging",
      certificateUrl: "assets/certificates/AI fundamentals certificate.pdf"
    },
  ];

  const handleDownloadCertificate = (url, institution) => {
    if (url && url !== '#') {
      // Create a temporary anchor element
      const link = document.createElement('a');
      link.href = url;
      link.download = `${institution}_certificate`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert('Certificate URL not available yet');
    }
  };

  return (
    <section className="experience-section">
      <div className="container">
        <h1 className="section-title">{t('experience.title')}</h1>

        <div className="experience-container">
          <div className="timeline">
            <h2 className="timeline-title">{t('experience.work')}</h2>

            {workExperience.map(job => (
              <div className="timeline-item" key={job.id}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{t(`experience.jobs.${job.id}.role`, { defaultValue: job.role })}</h3>
                    <span className="timeline-period">{job.duration}</span>
                  </div>
                  <div className="timeline-company">
                    {job.company} | {job.location}
                  </div>
                  <div className="timeline-description">
                    <ul>
                      {job.description.map((item, index) => (
                        <li key={index}>{t(`experience.jobs.${job.id}.desc.${index}`, { defaultValue: item })}</li>
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
            <h2 className="timeline-title">{t('experience.education')}</h2>

            {education.map(edu => (
              <div className="timeline-item" key={edu.id}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{t(`experience.educationItems.${edu.id}.degree`, { defaultValue: edu.degree })}</h3>
                    <span className="timeline-period">{edu.duration}</span>
                  </div>
                  <div className="timeline-company">
                    {edu.institution} | {edu.location}
                  </div>
                  <div className="timeline-description">
                    <p>{t(`experience.educationItems.${edu.id}.description`, { defaultValue: edu.description })}</p>
                    {edu.certificateUrl && (
                      <button
                        className="certificate-download"
                        onClick={() => handleDownloadCertificate(edu.certificateUrl, edu.institution)}
                        aria-label={`Download ${edu.degree} certificate`}
                      >
                        <span className="download-icon">↓</span> Download Certificate
                      </button>
                    )}
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